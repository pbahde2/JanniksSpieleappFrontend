let innerCircle = document.getElementById('inner-circle');
let outerCircle = document.getElementById('outer-circle');
let background = document.getElementById('background');
let CurrentColorInner = "#1F77B4"
let CurrentColorOuter="#D62728"
const params = new URLSearchParams(window.location.search);
const rawValue = params.get('level'); // z. B. "3"

// In Zahl umwandeln
const level = parseInt(rawValue, 10); // 10 = Dezimalsystemconst baseInterval = 2500;
const interval = (-250 *level) + 1750 ;
 // Array mit Bild-URLs
 const colors = [
    '#1F77B4', // Blau – klar & ruhig
    '#D62728', // Rot – stark & energisch
    '#9467BD', // Lila – kreativ & edel
    '#FFC107', // Gelb – hell & aufmerksamkeitsstark
  ];
  

function getRandomColorCombo() {
    const firstColorIndex = Math.floor(Math.random() * colors.length);
    
    // Zweiten Index berechnen, der garantiert anders als der erste ist
    let secondColorIndex;
    do {
        secondColorIndex = Math.floor(Math.random() * colors.length);
    } while (secondColorIndex === firstColorIndex);
    
    // Beide Farben als Objekt zurückgeben
    return {
        color1: colors[firstColorIndex],
        color2: colors[secondColorIndex]
    };
}

innerCircle.textContent="Zum Beenden ESC drücken"

setTimeout(() => {
    innerCircle.style.fontSize = "30vh"; // Schrittgröße setzen
    innerCircle.style.width = "30vh"; // Schrittgröße setzen
    innerCircle.style.maxWidth  = "30vw"; // Schrittgröße setzen
    innerCircle.textContent = "3";
  }, 1500); // nach 1 Sekunde
setTimeout(() => {
  innerCircle.textContent = "2";
}, 2500); // nach 1 Sekunde

setTimeout(() => {
  innerCircle.textContent = "1";
}, 3500); // nach 2 Sekunden

setTimeout(() => {
    innerCircle.textContent = "";
    startGame()
  }, 4500); // nach 2 Sekunden
// Funktion, die den Text einblendet


function startGame(){
    innerCircle.style.backgroundColor=CurrentColorInner
    outerCircle.style.backgroundColor=CurrentColorOuter
    
    setInterval(changeColor, interval); 
}
let changeColorDecider = true

function changeColor() {
    background.style.backgroundColor = "white"
    //wenn die Farbe im letzen durchlauf geändert wurde -> auf jeden Fall die Farbe wechseln
    if(!changeColorDecider)
    {
        changeColorDecider = true
    }
    else                          
    {
        changeColorDecider = Math.random() > 0.2;
    }

    // Bild ausblenden (opacity auf 0 setzen)
    innerCircle.style.opacity = 0;
    outerCircle.style.opacity = 0;
    // Nach einer kurzen Verzögerung das Bild wechseln
    setTimeout(function() {
        if(changeColorDecider)
        {
            let newColors;
            do {
                newColors = getRandomColorCombo()
            } while (CurrentColorInner==newColors.color1
                && CurrentColorOuter==newColors.color2);  

            innerCircle.style.backgroundColor=newColors.color1
            outerCircle.style.backgroundColor=newColors.color2
            CurrentColorInner=newColors.color1
            CurrentColorOuter=newColors.color2
        }
        
        // Bild wieder einblenden (opacity auf 1 setzen)
        innerCircle.style.opacity = 1;
        outerCircle.style.opacity = 1;

    }, interval/5);  // 500ms (0,5 Sekunden) Verzögerung

    setTimeout(function() {
        if(!changeColorDecider)
        {
            background.style.backgroundColor = "#2ECC71"
        }
    }, 3*interval/4);  // 500ms (0,5 Sekunden) Verzögerung
    
}


// Abbruch mit ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        window.location.href = './../index.html';  // Navigiert zur zweiten Seite
    }
  });
  