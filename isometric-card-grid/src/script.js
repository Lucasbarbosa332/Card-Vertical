window.addEventListener("resize",scrollGrid);
window.addEventListener("scroll",scrollGrid);

function scrollGrid() {
	const bodyHeight = document.body.offsetHeight;
	const mainHeight = document.querySelector("main").offsetHeight;
	const cards = document.querySelector(".cards");
	const transY = (window.pageYOffset / (mainHeight - bodyHeight)) * -100;
	
	cards.style.setProperty("--scroll",transY + "%");
}
scrollGrid();