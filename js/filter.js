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

// for gallery
let buttonall = document.getElementById("all");
let buttonArabic = document.getElementById("Arabic");
let buttonIndic = document.getElementById("Indic");
let buttonGreek = document.getElementById("Greek");

let AllDesign = document.getElementById("mixed");
let GreekDesign = document.getElementById("Greek-design");
let ArabicDesign = document.getElementById("Arabic-design");
let IndicDesign = document.getElementById("Indic-design");

buttonall.addEventListener("click", () => {
	if (AllDesign.style.display === "none") {
		AllDesign.style.display = "grid";
		GreekDesign.style.display = "none";
		ArabicDesign.style.display = "none";
		IndicDesign.style.display = "none";

		buttonall.classList.add("active");
		buttonIndic.classList.remove("active");
		buttonGreek.classList.remove("active");
		buttonArabic.classList.remove("active");
	} else {
		AllDesign.style.display = "grid";
		GreekDesign.style.display = "none";
		ArabicDesign.style.display = "none";
		IndicDesign.style.display = "none";

		buttonall.classList.add("active");
		buttonIndic.classList.remove("active");
		buttonGreek.classList.remove("active");
		buttonArabic.classList.remove("active");
	}
});

buttonArabic.addEventListener("click", () => {
	if (ArabicDesign.style.display === "none") {
		ArabicDesign.style.display = "grid";
		GreekDesign.style.display = "none";
		AllDesign.style.display = "none";
		IndicDesign.style.display = "none";

		buttonall.classList.remove("active");
		buttonIndic.classList.remove("active");
		buttonGreek.classList.remove("active");
		buttonArabic.classList.add("active");
	} else {
		ArabicDesign.style.display = "grid";
		GreekDesign.style.display = "none";
		AllDesign.style.display = "none";
		IndicDesign.style.display = "none";

		buttonall.classList.remove("active");
		buttonIndic.classList.remove("active");
		buttonGreek.classList.remove("active");
		buttonArabic.classList.add("active");
	}
});

buttonIndic.addEventListener("click", () => {
	if (IndicDesign.style.display === "none") {
		IndicDesign.style.display = "grid";
		GreekDesign.style.display = "none";
		AllDesign.style.display = "none";
		ArabicDesign.style.display = "none";

		buttonall.classList.remove("active");
		buttonIndic.classList.add("active");
		buttonGreek.classList.remove("active");
		buttonArabic.classList.remove("active");
	} else {
		IndicDesign.style.display = "grid";
		GreekDesign.style.display = "none";
		AllDesign.style.display = "none";
		ArabicDesign.style.display = "none";

		buttonall.classList.remove("active");
		buttonIndic.classList.add("active");
		buttonGreek.classList.remove("active");
		buttonArabic.classList.remove("active");
	}
});

buttonGreek.addEventListener("click", () => {
	if (IndicDesign.style.display === "none") {
		GreekDesign.style.display = "grid";
		IndicDesign.style.display = "none";
		AllDesign.style.display = "none";
		ArabicDesign.style.display = "none";

		buttonGreek.classList.add("active");
		buttonIndic.classList.remove("active");
		buttonall.classList.remove("active");
		buttonArabic.classList.remove("active");
	} else {
		GreekDesign.style.display = "grid";
		IndicDesign.style.display = "none";
		AllDesign.style.display = "none";
		ArabicDesign.style.display = "none";

		buttonGreek.classList.add("active");
		buttonIndic.classList.remove("active");
		buttonall.classList.remove("active");
		buttonArabic.classList.remove("active");
	}
});
