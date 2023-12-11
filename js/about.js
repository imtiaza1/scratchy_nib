let img = document.querySelector("#img");
let menu = document.querySelector("#menu");
let nav = document.querySelector("#nav");
menu.style.transform = "translateX(500px)";
nav.addEventListener("click", function () {
	if (menu.style.transform === "translateX(500px)") {
		menu.style.transform = "translateX(0px)";
		img.src = "/images/close.png";
	} else {
		menu.style.transform = "translateX(500px)";
		img.src = "/images/menu.png";
	}
});
