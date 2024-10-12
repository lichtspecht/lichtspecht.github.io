document.addEventListener("DOMContentLoaded", () => {
	
	// Tab-Navigation
	const tabs = document.querySelectorAll(".tab");
	const tabContents = document.querySelectorAll(".tab-content");

	tabs.forEach((tab) => {
		tab.addEventListener("click", (event) => {
			console.log(event);
			document.querySelector(".tab.active").classList.remove("active");
			tab.classList.add("active");
			const tabId = tab.getAttribute("data-tab");
			tabContents.forEach((content) => {
				content.classList.remove("active");
				if (content.id === tabId) {
					content.classList.add("active");
				}
			});

			closeMenu();
		});
	});

	// // Produkte dynamisch laden
	// const productGrid = document.getElementById("product-grid");
	// const newProductGrid = document.getElementById("new-product-grid");

	// products.forEach((product, index) => {
	// 	product.imgIndex = 0;
	// 	const productTile = document.createElement("a");
	// 	productTile.classList.add("product");
	// 	productTile.href = product.link;
	// 	productTile.target="_blank"
	// 	productTile.innerHTML = `
	// 			<div class="images">
	// 				<img id="Image${index}" src="products/${product.name}/${product.images[product.imgIndex]}" alt="${product.name}">
	// 				<div class="previous" onclick="previousImage(event, ${index})"><i class="fa-solid fa-chevron-left"></i></div>
	// 				<div class="next" onclick="nextImage(event, ${index})"><i class="fa-solid fa-chevron-right"></i></div>
	// 			</div>
	// 			<div class="line">
	// 				<div class="title">${product.title}</div>
	// 				<div class="price">${product.price.toFixed(2)} €</div>
	// 			</div>
	// 			<div class="text">${product.text}</div>
	// 			<div class="icon"><i class="fa-solid fa-arrow-right"></i></div>
	// 		`;
	// 	productGrid.appendChild(productTile);
		
	// 	if(index < 3)
	// 	{
	// 		newProductGrid.appendChild(productTile.cloneNode(true));
	// 	}
	// });
});

function toggleMenu(event)
{
	event.stopPropagation();
	var menu = document.getElementById("menu");
	if (menu.className === "menu")
	{
		menu.className += " responsive";
	}
	else
	{
		menu.className = "menu";
	}
}

function closeMenu(event)
{
	var menu = document.getElementById("menu");
	if (menu.className === "menu responsive")
 	{
		menu.className = "menu";
	}
}

function previousImage(event)
{
	event.preventDefault();
	
	const container = event.target.parentElement.parentElement;
	const images = container.querySelectorAll("img");
	const active_image = container.querySelector(".active");
	const current_index = Array.from(images).indexOf(active_image);

	active_image.classList.remove("active");

	const previous_index = (current_index - 1 + images.length) % images.length;
    
    images[previous_index].classList.add('active');
}

function nextImage(event)
{
	event.preventDefault();
	
	const container = event.target.parentElement.parentElement;
	const images = container.querySelectorAll("img");
	const active_image = container.querySelector(".active");
	const current_index = Array.from(images).indexOf(active_image);

	active_image.classList.remove("active");

	const next_index = (current_index + 1) % images.length;
    
    images[next_index].classList.add('active');
}