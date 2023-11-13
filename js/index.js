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

// queries

let icon1 = document.getElementById("icon-1");
let icon2 = document.getElementById("icon-2");
let icon3 = document.getElementById("icon-3");
let icon4 = document.getElementById("icon-4");
let icon5 = document.getElementById("icon-5");
let icon6 = document.getElementById("icon-6");

let pera1 = document.getElementById("pera-1");
let pera2 = document.getElementById("pera-2");
let pera3 = document.getElementById("pera-3");
let pera4 = document.getElementById("pera-4");
let pera5 = document.getElementById("pera-5");
let pera6 = document.getElementById("pera-6");

let list1 = document.getElementById("list-1");
let list2 = document.getElementById("list-2");
let list3 = document.getElementById("list-3");
let list4 = document.getElementById("list-4");
let list5 = document.getElementById("list-5");
let list6 = document.getElementById("list-6");

icon1.addEventListener("click", function () {
	if (pera1.style.display === "none") {
		pera1.style.display = "block";
		icon1.style.transform = "rotate(179deg)";
		list1.style.color = "#9e9090";
	} else {
		pera1.style.display = "none";
		icon1.style.transform = "rotate(0deg)";
		list1.style.color = "black";
	}
});

icon2.addEventListener("click", function () {
	if (pera2.style.display === "none") {
		pera2.style.display = "block";
		icon2.style.transform = "rotate(179deg)";
		list2.style.color = "#9e9090";
	} else {
		pera2.style.display = "none";
		icon2.style.transform = "rotate(0deg)";
		list2.style.color = "black";
	}
});

icon3.addEventListener("click", function () {
	if (pera3.style.display === "none") {
		pera3.style.display = "block";
		icon3.style.transform = "rotate(179deg)";
		list3.style.color = "#9e9090";
	} else {
		pera3.style.display = "none";
		icon3.style.transform = "rotate(0deg)";
		list3.style.color = "black";
	}
});

icon4.addEventListener("click", function () {
	if (pera4.style.display === "none") {
		pera4.style.display = "block";
		icon4.style.transform = "rotate(179deg)";
		list4.style.color = "#9e9090";
	} else {
		pera4.style.display = "none";
		icon4.style.transform = "rotate(0deg)";
		list4.style.color = "black";
	}
});

icon5.addEventListener("click", function () {
	if (pera5.style.display === "none") {
		pera5.style.display = "block";
		icon5.style.transform = "rotate(179deg)";
		list5.style.color = "#9e9090";
	} else {
		pera5.style.display = "none";
		icon5.style.transform = "rotate(0deg)";
		list5.style.color = "black";
	}
});

icon6.addEventListener("click", function () {
	if (pera6.style.display === "none") {
		pera6.style.display = "block";
		icon6.style.transform = "rotate(179deg)";
		list6.style.color = "#9e9090";
	} else {
		pera6.style.display = "none";
		icon6.style.transform = "rotate(0deg)";
		list6.style.color = "black";
	}
});

// Continuous scrolling ticker

function ticker() {
	const tickerContent = document.getElementById("ticker-content");
	const date = new Date();
	const formattedDate = date.toDateString();
	const time = date.toLocaleTimeString();
	const location = "karachi";

	tickerContent.innerText = `${formattedDate} ${time} - Location: ${location}`;

	// Recursive call every second
	setTimeout(ticker, 1000);
}
ticker();
