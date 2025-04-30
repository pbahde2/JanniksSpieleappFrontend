document.getElementById('login').addEventListener('click', async() => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://janniksspieleappbackend.onrender.com/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'  // Stellt sicher, dass der Server JSON erwartet
          },
          body: JSON.stringify({
            username: username,
            password: password
          }),
        });

        const result = await response.json();
        console.log(result)
        if (response.ok) {
            localStorage.setItem("token", result.access_token);
            const urlParams = new URLSearchParams(window.location.search);
            const game = urlParams.get('game') 
            const level = urlParams.get('level') 
            let target = './../index.html'
            if (game == "arbeit")
            {
                target = './../arbeitsgedaechnis/arbeitsgedaechnis.html'
                target=urlWithParams = `${target}?level=${encodeURIComponent(level)}`;
            }
            else if (game == "kognitiv")
            {
                target = './../kognitiveflexibilitaet/kognitiveflexibilitaet.html'
                target=urlWithParams = `${target}?level=${encodeURIComponent(level)}`;
            }
            else if (game == "inhibition")
            {
                target = './../inhibitioncontroll/inhibitioncontroll.html'
                target=urlWithParams = `${target}?level=${encodeURIComponent(level)}`;
            }
            window.location.href = target;  // Navigiert zur zweiten Seite

        } else {
          alert(result.msg || 'Unbekannter Fehler beim Login.')
        }

      } catch (error) {
        alert('Netzwerkfehler: ' + error.message);
      }
});
