// Получаем все элементы меню
const menuItems = document.querySelectorAll('.menu li a')

// Добавляем обработчик события для каждого элемента меню
menuItems.forEach(item => {
	item.addEventListener('mouseover', () => {
		// Изменяем цвет текста на красный
		item.style.color = '#E52D2D'
	})

	item.addEventListener('mouseout', () => {
		// Возвращаем исходный цвет текста
		item.style.color = ''
	})
})
// Получаем кнопку
const translateButton = document.getElementById('translate-button')

// Добавляем обработчик события для клика на кнопку
translateButton.addEventListener('click', () => {
	// Получаем все элементы на странице
	const elements = document.querySelectorAll('*')

	// Проходимся по каждому элементу и изменяем его текст на английский
	elements.forEach(element => {
		element.innerText = element.innerText.replace(/[а-яА-Я]/g, '')
	})
})
// Получаем все элементы списка
const listItems = document.querySelectorAll('nav ul li a')

// Добавляем обработчики событий для каждого элемента списка
listItems.forEach(item => {
	item.addEventListener('mouseover', function () {
		this.style.color = '#E52D2D'
	})

	item.addEventListener('mouseout', function () {
		this.style.color = ''
	})
})
// Получаем элемент кнопки
const button = document.querySelector('.gl_str_1 a[href="#"]')

// Добавляем обработчик события для события наведения мыши
button.addEventListener('mouseover', function () {
	// Изменяем цвет фона кнопки
	button.style.backgroundColor = '#FF3C3C'
	// Добавляем обводку с указанным цветом, радиусом и шириной
	button.style.border = '5px solid #8FC9FF'
	// Изменяем цвет текста кнопки на белый
	button.style.color = 'white'
})

// Добавляем обработчик события для события увода мыши
button.addEventListener('mouseout', function () {
	// Сбрасываем цвет фона кнопки
	button.style.backgroundColor = ''
	// Удаляем обводку
	button.style.border = ''
	// Сбрасываем цвет текста кнопки
	button.style.color = ''
})

// Добавляем обработчик события для события клика
button.addEventListener('click', function () {
	// Изменяем цвет фона кнопки
	button.style.backgroundColor = '#BF221E'
	// Изменяем размер кнопки
	button.style.width = '304px'
	button.style.height = '60px'
	// Удаляем обводку
	button.style.border = ''
})
const buttons = document.querySelectorAll('.order-button')

buttons.forEach(button => {
	button.addEventListener('mouseenter', () => {
		button.style.backgroundColor = '#FF3C3C'
		button.style.border = '3px solid #8FC9FF'
	})

	button.addEventListener('mouseleave', () => {
		button.style.backgroundColor = ''
		button.style.border = ''
	})

	button.addEventListener('click', event => {
		event.preventDefault()
		button.style.backgroundColor = '#BF221E'
		button.blur()
	})
})
const configuratorItems = document.querySelectorAll('.configurator .pizza-size')

configuratorItems.forEach(item => {
	item.addEventListener('mouseenter', () => {
		item.style.backgroundColor = 'white'
		item.style.color = 'black'
	})

	item.addEventListener('mouseleave', () => {
		if (!item.classList.contains('selected')) {
			item.style.backgroundColor = ''
			item.style.color = ''
		}
	})

	item.addEventListener('click', () => {
		configuratorItems.forEach(otherItem => {
			if (otherItem !== item) {
				otherItem.classList.remove('selected')
				otherItem.style.backgroundColor = ''
				otherItem.style.color = ''
				otherItem.style.fontWeight = 'normal'
			}
		})

		item.classList.toggle('selected')
		item.style.backgroundColor = 'white'
		item.style.color = 'black'
		item.style.fontWeight = ''
	})
})
// Получаем все карточки пицц
var cards = document.querySelectorAll('.card-pizza')

// Проходимся по каждой карточке
cards.forEach(function (card) {
	// Получаем название пиццы и карточку
	var pizzaTitle = card.querySelector('.pizza-title-1')

	// Обработчик события наведения на карточку
	card.addEventListener('mouseover', function () {
		pizzaTitle.style.color = '#E52D2D' // Изменяем цвет названия пиццы
		card.style.boxShadow = '0px 2px 10px 0px #A5A9B080' // Добавляем подсветку карточки
	})

	// Обработчик события ухода курсора с карточки
	card.addEventListener('mouseout', function () {
		pizzaTitle.style.color = '' // Удаляем измененный цвет названия пиццы
		card.style.boxShadow = '' // Удаляем подсветку карточки
	})
})
// Получаем все карточки пиццы
const cardPizzas = document.querySelectorAll('.card-pizza')

// Проходимся по каждой карточке пиццы
cardPizzas.forEach(card => {
	// Получаем элементы конфигурации размера пиццы и второго изображения в текущей карточке
	const sizeConfigurator = card.querySelector('.configurator')
	const sizeOptions = sizeConfigurator.querySelectorAll('.pizza-size')
	const pizzaImage = card.querySelector('.pizza-images')

	// Добавляем обработчик события на выбор размера пиццы
	sizeOptions.forEach(option => {
		option.addEventListener('click', function () {
			const size = this.textContent // Получаем выбранный размер пиццы

			// Устанавливаем размер второго изображения в зависимости от выбранного размера пиццы
			switch (size) {
				case '20 см':
					pizzaImage.style.width = '183.7px'
					pizzaImage.style.height = '183.7px'
					break
				case '30 см':
					pizzaImage.style.width = '218px'
					pizzaImage.style.height = '218px'
					break
				case '40 см':
					pizzaImage.style.width = '253px'
					pizzaImage.style.height = '253px'
					break
				default:
					break
			}
		})
	})
})
function goToSection(sectionId) {
	// Scroll to the specified section
	document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
}
document
	.getElementById('menus-link')
	.addEventListener('click', function (event) {
		event.preventDefault() // Prevent the default link behavior

		// Scroll to the specified section
		document.getElementById('pizza-menu').scrollIntoView({ behavior: 'smooth' })
	})
// Get all the list items
const listItemss = document.querySelectorAll('nav ul li a')

// Add click event listener to each list item
listItemss.forEach(item => {
	item.addEventListener('click', event => {
		event.preventDefault()

		// Get the selected category from the clicked list item
		const category = event.target.id

		// Get all the pizza cards
		const pizzaCards = document.querySelectorAll('.card-pizza')

		// Hide all the pizza cards
		pizzaCards.forEach(card => {
			card.style.visibility = 'hidden'
		})

		// Show the pizza cards that match the selected category
		if (category === 'все') {
			// Show all the pizza cards
			pizzaCards.forEach(card => {
				card.style.visibility = 'visible'
			})
		} else if (category === 'острые') {
			// Show the pizza cards with the острые pizza icon
			const pizzaIcons = document.querySelectorAll(
				'img[src="images/004-hot-pepper-and-flame.png"]'
			)
			pizzaIcons.forEach(icon => {
				const pizzaCard = icon.closest('.card-pizza')
				if (pizzaCard) {
					pizzaCard.style.visibility = 'visible'
				}
			})
		} else if (category === 'мясные') {
			// Show the pizza cards with the мясные pizza icon
			const pizzaIcons = document.querySelectorAll(
				'img[src="images/010-ham.png"]'
			)
			pizzaIcons.forEach(icon => {
				const pizzaCard = icon.closest('.card-pizza')
				if (pizzaCard) {
					pizzaCard.style.visibility = 'visible'
				}
			})
		} else if (category === 'сырные') {
			// Show the pizza cards with the сырные pizza icon
			const pizzaIcons = document.querySelectorAll(
				'img[src="images/005-cheese.png"]'
			)
			pizzaIcons.forEach(icon => {
				const pizzaCard = icon.closest('.card-pizza')
				if (pizzaCard) {
					pizzaCard.style.visibility = 'visible'
				}
			})
		} else if (category === 'веганские') {
			// Show the pizza cards with the веганские pizza icon
			const pizzaIcons = document.querySelectorAll(
				'img[src="images/001-carrot.png"]'
			)
			pizzaIcons.forEach(icon => {
				const pizzaCard = icon.closest('.card-pizza')
				if (pizzaCard) {
					pizzaCard.style.visibility = 'visible'
				}
			})
		}
	})
})
// Открытие модального окна при нажатии на изображение корзины
var cartImage = document.getElementById("cartImage");
var cartModal = document.getElementById("cartModal");
var closeBtn = document.getElementsByClassName("close")[0];

cartImage.addEventListener("click", function() {
  cartModal.style.display = "block";
});
// Закрытие модального окна при нажатии на крестик
closeBtn.addEventListener("click", function() {
  cartModal.style.display = "none";
});
cartImage.addEventListener('click', function () {
	cartModal.style.display = 'block'
	document.body.classList.add('modal-open')
})

orderLink.addEventListener('click', function (event) {
	event.preventDefault()
	cartModal.style.display = 'block'
	document.body.classList.add('modal-open')
})

closeBtn.addEventListener('click', function () {
	cartModal.style.display = 'none'
	document.body.classList.remove('modal-open')
})
    function updatePrice(element, price) {
			const priceElement =
				element.parentNode.parentNode.querySelector('.pizza-price')
			priceElement.innerHTML = `<b>${price} руб.</b>`
			if (priceElement.innerHTML.includes('от')) {
				priceElement.innerHTML = priceElement.innerHTML.replace('от', '')
			}
		}

let selectedItems = [];

function addToCart(params) {
  const pizzaName = document.querySelector('.pizza-title-1').innerText;
  const selectedSizeElement = document.querySelector('.configurator .selected');
  if (!selectedSizeElement) {
    alert('Пожалуйста, выберите размер пиццы.');
    return;
  }
  const size = selectedSizeElement.innerText;
  const price = params.prices[size];
  const item = { 
    image: params.image,
    name: pizzaName,
    size,
    price,
    quantity: 1
  };
  
  const existingItemIndex = selectedItems.findIndex(selectedItem => 
    selectedItem.name === item.name && selectedItem.size === item.size);
  
  if (existingItemIndex !== -1) {
    selectedItems[existingItemIndex].quantity++;
  } else {
    selectedItems.push(item);
  }

  updateCart();
}

function updatePrice(element, prices) {
  let priceElement = document.getElementById('pizza-price-1');
  let size = element.innerText;
  let price = prices[size];
  priceElement.innerHTML = `<b>от ${price} руб.</b>`;
  const sizeElements = element.parentNode.children;
  for (const sizeElement of sizeElements) {
    sizeElement.classList.remove('selected');
  }
  element.classList.add('selected');
}

function updateCart() {
	let selectedItemsElement = document.getElementById('selected-items')
	selectedItemsElement.innerHTML = ''
	let totalAmountElement = document.getElementById('total-amount')
	let totalAmount = 0

	selectedItems.forEach((item, index) => {
		let itemElement = document.createElement('div')
		itemElement.className = 'selected-item'
		let itemName = document.createElement('span')
		itemName.innerText = `${item.name} (${item.size}): `
		itemElement.appendChild(itemName)
		let itemQuantity = document.createElement('input')
		itemQuantity.type = 'number'
		itemQuantity.value = item.quantity
		itemQuantity.min = 1
		itemQuantity.addEventListener('change', e => {
			const newQuantity = parseInt(e.target.value) || 1
			selectedItems[index].quantity = newQuantity
			updateCart()
		})
		let itemImage = document.createElement('img')
		itemImage.src = item.image
		itemImage.width = 100
				itemImage.height = 100
				itemElement.appendChild(itemImage)
		itemElement.appendChild(itemQuantity)
		let itemPrice = document.createElement('span')
		itemPrice.innerHTML = `${item.price * item.quantity} руб.`
		itemElement.appendChild(itemPrice)
		let removeButton = document.createElement('button')
		removeButton.innerText = 'Удалить'
		removeButton.onclick = function () {
			removeFromCart(index)
		}
		itemElement.appendChild(removeButton)
		selectedItemsElement.appendChild(itemElement)
		totalAmount += item.price * item.quantity
	})

	totalAmountElement.innerHTML = `<b>Итоговая сумма заказа: ${totalAmount} руб.</b>`
}

function removeFromCart(index) {
	if (selectedItems[index].quantity > 1) {
		selectedItems[index].quantity--
	} else {
		selectedItems.splice(index, 1)
	}
	updateCart()
}
function updatePrice(element, prices) {
	// Remove the "active" class from all elements with the class "pizza-size"
	const sizeElements = document.querySelectorAll('.pizza-size')
	sizeElements.forEach(sizeElement => {
		sizeElement.classList.remove('active')
	})

	// Add the "active" class to the clicked element
	element.classList.add('active')

	// Your existing code to update the price goes here
	// ...
}

// Получаем все кнопки внутри элементов с классом "card-pizza"
const buttonss = document.querySelectorAll('.card-pizza button');

// Добавляем обработчики событий для каждой кнопки
buttonss.forEach(button => {
  button.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#FF3C3C';
    this.style.border = '3px solid #8FC9FF';
  });

  button.addEventListener('mousedown', function() {
    this.style.backgroundColor = '#BF221E';
    this.style.width = '240px';
    this.style.height = '52px';
  });

  button.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
    this.style.border = '';
    this.style.width = '';
    this.style.height = '';
  });
});



