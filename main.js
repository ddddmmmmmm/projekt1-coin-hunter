// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program





let myId = document.querySelector('#panacek');

let novaLeva = null;
let novaNahoru = null;

document.querySelector("body").addEventListener("keydown", function (event) {
	if (event.key === "ArrowLeft") {
		novaLeva = novaLeva - 10
		myId.style.left = novaLeva + "px"

	} else if (event.key === "ArrowRight") {
		novaLeva = novaLeva + 10
		myId.style.left = novaLeva + "px"

	} else if (event.key === "ArrowUp") {
		novaNahoru = novaNahoru - 10
		myId.style.top = novaNahoru + "px"

	} else if (event.key === "ArrowDown") {
		novaNahoru = novaNahoru + 10
		myId.style.top = novaNahoru + "px"
	}

})



