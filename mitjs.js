function visDagensCitat(elementId, citatliste){
	var citatIndeks = Math.floor(Math.random()*citatliste.length);
	document.getElementById(elementId).innerText=citatliste[citatIndeks];
}

function visMusikListe(elementId, mp3liste){
	for (var i=0; i<mp3liste.length; i++){
		document.getElementById(elementId).insertAdjacentHTML("afterbegin",'<p>'+mp3liste[i]+'</p><p><audio controls><source src="'+mp3liste[i]+'" type="audio/mpeg"></audio></p>')
	}
}

function videoKontrol(elementId, visKontroller){
	if (visKontroller === 1){
		document.getElementById(elementId).setAttribute("controls", "");
	}else{
		document.getElementById(elementId).addEventListener("click", function(){
			if(document.getElementById(elementId).paused) {
				document.getElementById(elementId).play();
			}else{
				document.getElementById(elementId).pause();
			}
		});
	}
}

// Hovedprogramdel

var musikliste = ["Bouncy_Fun_1.mp3", "Funky_Groove.mp3", "Walker.mp3"];

var citater = [
	"Alt, hvad jeg ved, er, at jeg intet ved. (Buzz Slammer)",
	"Det har jeg aldrig gjort så det klarer jeg helt sikker. (Dave Light)",
	"Find ikke fejl, find en løsning (Kid Neumann)",
	"Der findes ingen fremmede, kun venner vi ikke kender. (Nena Hitsong)",
	"Du misser 100 procent af de skud, du ikke tager. (Vince Gill)"
];

visDagensCitat("citat", citater);
visMusikListe("musikliste", musikliste);
videoKontrol("koncertvideo", 1);