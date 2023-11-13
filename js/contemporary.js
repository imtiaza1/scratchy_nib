// nav js
let img = document.getElementById("img");
let menu = document.getElementById("menu");

img.addEventListener("click", function () {
	if (menu.style.transform === "translateX(500px)") {
		menu.style.transform = "translateX(0)";
		img.src = "/images/close.png";
	} else {
		menu.style.transform = "translateX(500px)";
		img.src = "/images/menu.png";
	}
});
