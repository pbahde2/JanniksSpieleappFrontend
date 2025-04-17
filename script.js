document.getElementById('button').addEventListener('click', function() {
    const selectedGame = document.getElementById("selectGame").value;
    let target = 'inhibitioncontroll/inhibitioncontroll.html'
    if (selectedGame == "arbeit")
    {
        target = 'arbeitsgedaechnis/arbeitsgedaechnis.html'
    }
    else if (selectedGame == "kognitiv")
    {
        target = 'kognitiveflexibilitaet/kognitiveflexibilitaet.html'
    }
    const selectedLevel = document.getElementById("selectLevel").value;
    const urlWithParams = `${target}?level=${encodeURIComponent(selectedLevel)}`;

    window.location.href = urlWithParams;  // Navigiert zur zweiten Seite
});
