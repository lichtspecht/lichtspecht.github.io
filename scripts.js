document.addEventListener("DOMContentLoaded", () => {
	
	// Tab-Navigation
	const tabs = document.querySelectorAll(".tab");
	const tabContents = document.querySelectorAll(".tab-content");
	const footerLinks = document.querySelectorAll(".footer-link");

	function showContentById(tabId)
	{
		const activeTab = document.querySelector(".tab.active")
		if(activeTab) activeTab.classList.remove("active");
		tabContents.forEach((content) => content.classList.remove("active"));

		const targetTab = document.querySelector(`.tab[data-tab="${tabId}"]`);
		const targetContent = document.getElementById(tabId);
		if (targetTab) targetTab.classList.add("active");
		if (targetContent) targetContent.classList.add("active");
	}

	tabs.forEach((tab) => {
		tab.addEventListener("click", (event) => {
			const tabId = tab.getAttribute("data-tab");
			showContentById(tabId);
			closeMenu();
		});
	});

	footerLinks.forEach((link) => {
		link.addEventListener("click", (event) => {
			event.preventDefault();
			const linkId = link.getAttribute("data-tab");
			showContentById(linkId);
		});
	});
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
	event.stopPropagation();
	
	const container = event.target.parentElement.parentElement;
	const images = container.querySelectorAll("img");
	const active_image = container.querySelector(".active");
	const current_index = Array.from(images).indexOf(active_image);
	const previous_index = (current_index - 1 + images.length) % images.length;
    
	showImage(images, previous_index);
}

function nextImage(event)
{
	event.preventDefault();
	event.stopPropagation();
	
	const container = event.target.parentElement.parentElement;
	const images = container.querySelectorAll("img");
	const active_image = container.querySelector(".active");
	const current_index = Array.from(images).indexOf(active_image);
	const next_index = (current_index + 1) % images.length;
    
	showImage(images, next_index);
}

function showImage(images, new_index)
{
    images.forEach((img, i) => {
        img.classList.remove('active', 'prev-img', 'next-img');

        if (i === new_index) {
            img.classList.add('active');
        } else if (i === (new_index - 1 + images.length) % images.length) {
            img.classList.add('prev-img');
        } else if (i === (new_index + 1) % images.length) {
            img.classList.add('next-img');
        }
    });
}

// function showImage(images, current_index, new_index)
// {
// 	images[current_index].classList.add(direction === 'next' ? 'next-out' : 'prev-out');

// 	images[new_index].classList.remove('next-in', 'next-out', 'prev-in', 'prev-out');
// 	images[new_index].classList.add(direction === 'next' ? 'next-in' : 'prev-in');

// 	setTimeout(() => {
// 		images[new_index].classList.add('active');
// 		images[current_index].classList.remove('active');
// 		images[current_index].classList.remove('next-out', 'prev-out');
// 		images[new_index].classList.remove('next-in', 'prev-in');
// 	  }, 200);
// }

function toggle_expansion(container)
{
	container.classList.toggle('expanded');
	container.querySelector('.expansion-toggle').classList.toggle('expanded');

	if (container.classList.contains('expanded')) {
		setTimeout(() => {
		  container.scrollIntoView({ behavior: 'smooth', block: 'end' });
		}, 100);
	}
}