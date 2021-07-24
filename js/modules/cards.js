function cards() {
	//------------------------------------------------------------
	// Cards
	//------------------------------------------------------------

	class Card {
		constructor(photo, alt, subtitle, description, price, parentSelector, ...classes) {
			this.photo = photo;
			this.alt = alt;
			this.subtitle = subtitle;
			this.description = description;
			this.price = price;
			this.parent = document.querySelector(parentSelector);
			this.classes = classes;
		}
		render() {
			const element = document.createElement("div");
			if (this.classes.length === 0) {
				this.classes = "menu__item";
				element.classList.add(this.classes);
			} else {
				this.classes.forEach((className) => element.classList.add(className));
			}
			element.innerHTML = `
                    <img src=${this.photo} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.subtitle}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span>тг/день</div>
                    </div>`;
			this.parent.append(element);
		}
	}

	axios.get("https://my-json-server.typicode.com/Sens3ii/js-food/menu").then((data) => {
		data.data.forEach(({ img, altimg, title, descr, price }) => {
			new Card(img, altimg, title, descr, price, ".menu .container", "menu__item").render();
		});
	});
}

export default cards;
