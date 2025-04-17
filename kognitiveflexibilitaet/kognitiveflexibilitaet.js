let textElement = document.getElementById('text');
let backgroundElement = document.getElementById('background');

const params = new URLSearchParams(window.location.search);
const rawValue = params.get('level'); // z. B. "3"

// In Zahl umwandeln
const level = parseInt(rawValue, 10); // 10 = Dezimalsystemconst baseInterval = 2500;
const interval = (-250 *level) + 1750 ;
const bild = document.getElementById('meinBild');
 // Array mit Bild-URLs
 const sources = [
    'img/basketball.png',
    'img/boxen.png',
    'img/fahrrad.webp',
    'img/reiten.png',
    'img/rugby.png',
    'img/tennis.png',
    'img/fussball.png'
];   

function preloadImages(sources) {
  const imagePromises = sources.map(src => {
      return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
      });
  });
  
  return Promise.all(imagePromises);
}
// Bilder vorladen
preloadImages(sources)
  .then(images => {
      console.log('Alle Bilder wurden erfolgreich vorgeladen');
      // Hier kannst du Code ausführen, der erst starten soll,
      // wenn alle Bilder geladen sind
  })
  .catch(error => {
      console.error('Fehler beim Vorladen der Bilder:', error);
  });

textElement.textContent="Zum Beenden ESC drücken"

setTimeout(() => {
    textElement.style.fontSize = "30vh"; // Schrittgröße setzen
    textElement.textContent = "3";
  }, 1500); // nach 1 Sekunde


setTimeout(() => {
    textElement.textContent = "2";
}, 2500); // nach 1 Sekunde

setTimeout(() => {
    textElement.textContent = "1";
}, 3500); // nach 2 Sekunden

let modes = ["Sportart", "Farbe"]
let currentMode = [Math.floor(Math.random() * 2)]
let picturesSinceLastModeChange = 0
setTimeout(() => {
    showText(modes[currentMode])
    setInterval(changePicture, interval); 
  }, 4500); // nach 2 Sekunden
// Funktion, die den Text einblendet
   
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * sources.length); // Zufälligen Index berechnen
    return sources[randomIndex]; // Bild mit diesem Index zurückgeben
}

// Funktion, die das Bild ändert, mit einer kurzen Verzögerung
function changePicture() {
    textElement.style.opacity = 0
    bild.style.opacity = 0;
    changeBackground("white")
    setTimeout(function() {
      if (picturesSinceLastModeChange > 2 && Math.random() < 0.33)
        {
          currentMode = (currentMode+1) % 2;
          showText(modes[currentMode])
          picturesSinceLastModeChange = 0;
        }
        else {
          showPciture()
          if (Math.random()>0.5)
          {
            changeBackground("blue")
          }
          picturesSinceLastModeChange++;
        }
        textElement.style.opacity = 1

      bild.style.opacity = 1;
  }, interval/5);  // 500ms (0,5 Sekunden) Verzögerung   
}




// Abbruch mit ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        window.location.href = './../index.html';  // Navigiert zur zweiten Seite
    }
  });

  function showText(text){
    bild.style.width="0%"
    bild.style.height="0%"
    textElement.textContent = text;
  }
  

  function showPciture(){
    textElement.textContent = "";
    bild.style.width="50%"
    bild.style.height="50%"
    bild.src = getRandomImage();

  }

  function changeBackground(background)
  {
    bild.style.backgroundColor=background
    backgroundElement.style.backgroundColor=background
  }