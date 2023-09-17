document.querySelector("input[type=\"search\"]").addEventListener("input", (e) => {
	[...document.querySelectorAll(".catalog-item")].forEach(item => {
		if (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	});
	[...document.querySelectorAll("catalog-item__subtitle, .catalog-item__descr")].forEach(item => {
		if (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
			item.style.display = "flex";
		} else {
			
		}
	});
});