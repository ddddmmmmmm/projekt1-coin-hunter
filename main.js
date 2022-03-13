// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	
}
*/


// nadefinujeme globální proměnné
// ty jsou pak použitelné kdekoliv v programu
let panacek = document.querySelector('#panacek');
let panacekX = 350;
let panacekY = 250;
let panacekSirka = 64;
let panacekVyska = 70;

let mince = document.querySelector('#mince');
let minceX = 100;
let minceY = 100;
let minceSirka = 36;
let minceVyska = 36;

let score = document.querySelector('#score');
let hodnotaMince = 1

// tato funkce se spustí při načtení stránky
// tj. ve chvíli, kdy je načtené komplet HTML, CSS a všechny obrázky a zvuky
// umisteni panacka a mince pri spusteni hry
function init() {
	panacek.style.left = '350px';
	panacek.style.top = '250px';
	mince.style.left = '100px';
	mince.style.top = '100px';
}

//náhodná pozice mince po najeti panackem na minci

function novaMince() {

	minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka));
	minceY = Math.floor(Math.random() * (window.innerHeight - minceVyska));
	mince.style.left = minceX + 'px';
	mince.style.top = minceY + 'px';


}

// po najeti na minci pricte bod
function prictiBod() {
	score = score + hodnotaMince;
}

function vemMinci() {

	if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
		// score
		prictiBod();
		// nová mince
		novaMince();
	}
}
// pohyb panacka

document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowLeft") {
		panacekX = panacekX - 10
		panacek.style.left = panacekX + "px"


	} else if (event.key === "ArrowRight") {
		panacekX = panacekX + 10
		panacek.style.left = panacekX + "px"

	} else if (event.key === "ArrowUp") {
		panacekY = panacekY - 10
		panacek.style.top = panacekY + "px"

	} else if (event.key === "ArrowDown") {
		panacekY = panacekY + 10
		panacek.style.top = panacekY + "px"
	}
})


// panacek a mince se prekryvaji

//function bod() {
//	if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {


//1. zahraj zvuk sebrání mince
//prehraj('#zvukmince');
//2. přičti bod
//	score = score + hodnotaMince;
//	document.querySelector('#score').innerHTML = score;
//3. zkontoroluj vítezství
//	if (score >= 10) {
//zahraj fanfáru
//		prehraj('#zvukfanfara');

//vypiš vítěznou hlášku
//		viteznaHlaska.style.display = "";
//		viteznaHlaska.innerHTML = "Vyhrál jsi! Hra ti trvala " + timeScore + " sekund.";
//		time.style.display = "none";
//4. nová náhodná mince
//		novaMince();
//	}

//}









	// function priNacteniStranky() {

	// do globálních proměnných si uložíme odkaz na objekty panáčka a mince,
	// abychom je nemuseli při každém použití znovu na stránce hledat pomocí document.querySelector


	// zjistíme šířku a výšku panáčka


	// a umístíme panáčka do středu okna



	// umístíme panáčka na startovní pozici


	// zjistíme šířku a výšku mince


	// a vygenerujeme první minci na náhodné pozici




	// funkce, která umístí panáčka na jeho souřadnice
	// tj. nastaví jeho style.left a style.top na hodnoty panacekX, panacekY
	//	function umistiPanacka() {
	// musíme to napsat :)
	//	}

	// funkce pro nahodné vygenerování nové pozice mince
	// a umístění mince na tyto souřadnice
	//	function novaMince() {
	// musíme to napsat :)
	//	}

	// tato funkce se zavolá při stisku klávesy
	// do proměnné "udalost" se vloží objekt s parametry události¨
	// kde lze najít např. i vlastnost "key",
	// která obsahuje znak stisknuté klávesy
	//	function priStiskuKlavesy(udalost) {

	// šipka vlevo


	// šipka vpravo


	// šipka nahoru


	// šipka dolů


	// panáčka umistíme na nově vypočítanou pozici


	// otestujeme kolizi panáčka s mincí


	//}

	// fuknce pro otestování kolize panáčka s mincí
	//	function otestujKolizi() {
	// musíme to napsat :)
	//	}



