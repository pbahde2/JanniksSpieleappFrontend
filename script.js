document.getElementById('start').addEventListener('click', function() {
    const selectedGame = document.getElementById("selectGame").value;
    const selectedLevel = document.getElementById("selectLevel").value;

    const token = localStorage.getItem("token");
  
    if (token && isTokenValid(token))
    {
    let target = 'inhibitioncontroll/inhibitioncontroll.html'
    if (selectedGame == "arbeit")
    {
        target = 'arbeitsgedaechnis/arbeitsgedaechnis.html'
    }
    else if (selectedGame == "kognitiv")
    {
        target = 'kognitiveflexibilitaet/kognitiveflexibilitaet.html'
    }
    const urlWithParams = `${target}?level=${encodeURIComponent(selectedLevel)}`;

    window.location.href = urlWithParams;  // Navigiert zur zweiten Seite
}
else{
    window.location.href = "login/login.html?game="+selectedGame+"&level="+selectedLevel
}
});

document.getElementById('erklaerung').addEventListener('click', function() {
    const selectedGame = document.getElementById("selectGame").value;
    let target = 'erklaerung/erklaerung.html?game=inhibition'
    if (selectedGame == "arbeit")
    {
        target = 'erklaerung/erklaerung.html?game=arbeit'
    }
    else if (selectedGame == "kognitiv")
    {
        target = 'erklaerung/erklaerung.html?game=arbeit'
    }
    const selectedLevel = document.getElementById("selectLevel").value;
    const urlWithParams = `${target}?level=${encodeURIComponent(selectedLevel)}`;

    window.location.href = urlWithParams;  // Navigiert zur zweiten Seite
});


document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login");
    const token = localStorage.getItem("token");
  
    if (token && isTokenValid(token)) {
      loginButton.textContent = "Logout";
    } else {
      loginButton.textContent = "Login";
    }
    loginButton.addEventListener('click', function() {
    const token = localStorage.getItem("token");
    
    if (!(token && isTokenValid(token)))
    {
        window.location.href = 'login/login.html';
    }
    else{
        localStorage.removeItem("token");
        loginButton.textContent = "Login";
    }});
});
  
  // Hilfsfunktion zum Token-Validieren (z. B. JWT prüfen)
  function isTokenValid(token) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const now = Math.floor(Date.now() / 1000);
      return payload.exp && payload.exp > now;
    } catch (e) {
      return false;
    }
  }
  

