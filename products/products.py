<<<<<<< HEAD
# Produktdaten in Python-Format
products = [
	{
		"name": "Koboldkugeln",
		"title": "Koboldkugeln (SML)",
		"category": "Weihnachten",
		"price": 8.90,
		"text": "3 Weihnachtsbaumkugeln als Bastelset",
		"description": "",
		"material": "Finnpappe",
		"color": "beige",
		"images": ["1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG", "6.JPG"],
		"alt": [
			"Drei moderen Weihnachtsbaumkugeln hängen an Fäden",
			"Weihnachtsbaumkugel im Aufbau mit Bastelset im Hintergrund",
			"Fertige Weihnachtsbaumkugel mittlerer Größe vor Bastelset",
			"Drei fertige Weihnachtsbaumkugeln (klein, mittel, groß) stehend",
			"Übersicht der Materialen für eine Kugel",
			"Übersicht des Bastelsets aus zwei A5 Pappen"],
		"link": "https://www.etsy.com"
	},
]

# Erzeuge den HTML-Code für jedes Produkt
html_output = ""
for index, product in enumerate(products):
	# Bilder untereinander hinzufügen
	images_html = ""
	for img_index, image in enumerate(product['images']):
		# Klasse "active" nur für das erste Bild
		active_class = "active" if img_index == 0 else ""
		images_html += f"""
			<img class="{active_class}" src="products/{product['name']}/{image}" alt="{product['alt'][img_index]} Bild {img_index + 1}">"""

	# Produkt-Karte HTML
	html_output += f"""
	<a class="product" href="{product['link']}" target="_blank">
		<div class="images">{images_html}
			<div class="previous" onclick="previousImage(event)"><i class="fa-solid fa-chevron-left"></i></div>
			<div class="next" onclick="nextImage(event)"><i class="fa-solid fa-chevron-right"></i></div>
		</div>
		<div class="line">
			<div class="title">{product['title']}</div>
			<div class="price">{product['price']:.2f} €</div>
		</div>
		<div class="text">{product['text']}</div>
		<div class="icon"><i class="fa-solid fa-arrow-right"></i></div>
	</a>
	"""

# Schreibe den HTML-Code in eine Datei
with open("product_elements.html", "w", encoding="utf-8") as file:
	file.write(html_output)

print("HTML wurde in 'product_elements.html' gespeichert.")
=======
# Produktdaten in Python-Format
products = [
	{
		"name": "Koboldkugeln",
		"title": "Koboldkugeln (SML)",
		"category": "Weihnachten",
		"price": 8.90,
		"text": "Drei moderne Weihnachtsbaumkugeln als Bastelset",
		"description": "",
		"material": "Finnpappe",
		"color": "beige",
		"images": ["1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG", "6.JPG"],
		"alt": [
			"Drei moderen Weihnachtsbaumkugeln hängen an Fäden",
			"Weihnachtsbaumkugel im Aufbau mit Bastelset im Hintergrund",
			"Fertige Weihnachtsbaumkugel mittlerer Größe vor Bastelset",
			"Drei fertige Weihnachtsbaumkugeln (klein, mittel, groß) stehend",
			"Übersicht der Materialen für eine Kugel",
			"Übersicht des Bastelsets aus zwei A5 Pappen"],
		"link": "https://www.etsy.com"
	},
]

# Erzeuge den HTML-Code für jedes Produkt
html_output = ""
for index, product in enumerate(products):
	# Bilder untereinander hinzufügen
	images_html = ""
	for img_index, image in enumerate(product['images']):
		# Klasse "active" nur für das erste Bild
		active_class = "active" if img_index == 0 else ""
		images_html += f"""
			<img class="{active_class}" src="products/{product['name']}/{image}" alt="{product['alt'][img_index]} Bild {img_index + 1}">"""

	# Produkt-Karte HTML
	html_output += f"""
	<a class="product" href="{product['link']}" target="_blank">
		<div class="images">{images_html}
			<div class="previous" onclick="previousImage(event)"><i class="fa-solid fa-chevron-left"></i></div>
			<div class="next" onclick="nextImage(event)"><i class="fa-solid fa-chevron-right"></i></div>
		</div>
		<div class="line">
			<div class="title">{product['title']}</div>
			<div class="price">{product['price']:.2f} €</div>
		</div>
		<div class="text">{product['text']}</div>
		<div class="icon"><i class="fa-solid fa-arrow-right"></i></div>
	</a>
	"""

# Schreibe den HTML-Code in eine Datei
with open("product_elements.html", "w", encoding="utf-8") as file:
	file.write(html_output)

print("HTML wurde in 'product_elements.html' gespeichert.")
>>>>>>> 1fc17262afc6f203385c7ce63366801704f24ed0
