console.log('123')

// Burger

const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
const header = document?.querySelector('.header');
const headerHeight = header.offsetHeight;
console.log(headerHeight)
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

burger?.addEventListener('click', () => {
	body.classList.toggle('stop-scroll');
	burger?.classList.toggle('burger--active');
	nav?.classList.toggle('nav--visible');
});

navItems.forEach(el => {
	el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
	burger?.classList.remove('burger--active');
	nav?.classList.remove('nav--visible');
	});
});


//Price

function onToggle(event) {
	if (event.target.open) {
		document.querySelectorAll(".prices__items > details[open]").forEach((el) => {
		// Исключаем из перебора елемент который мы только что открыли
		if (el === event.target) {
			return;
		}
		// Закрываем все остальные елементы <details>
		el.open = false;
		});
	}
}

  // Вешаем наблюдатель на все елементы <details> внутри акордиона
document
	.querySelectorAll(".prices__items > details")
	.forEach((el) => el.addEventListener("toggle", onToggle));

// Services
const buttons = document?.querySelectorAll('.service__buttons');
const gardensBtn = document?.querySelector('[data-gardens]');
const lawnBtn = document?.querySelector('[data-lawn]');
const plantingBtn = document?.querySelector('[data-planting]');
const service = document?.querySelector('[data-services]');
const serviseItems = service?.querySelectorAll('.service__item');

const itemG = document?.querySelectorAll('[data-g]');
const itemL = document?.querySelectorAll('[data-l]');
const itemP = document?.querySelectorAll('[data-p]');

gardensBtn?.addEventListener('click', () => {
	if (lawnBtn.classList.contains('btn--active') & plantingBtn.classList.contains('btn--active')) {
		return false;
	} else {
		gardensBtn?.classList.toggle('btn--active');
		for (let elem of itemG) {
			elem.classList.toggle('ser--visible');;
		}
	}
});

lawnBtn?.addEventListener('click', () => {
	if (gardensBtn.classList.contains('btn--active') & plantingBtn.classList.contains('btn--active')) {
		return false;
	} else {
		lawnBtn?.classList.toggle('btn--active');
		for (let elem of itemL) {
			elem.classList.toggle('ser--visible');;
		}
	}
});

plantingBtn?.addEventListener('click', () => {
	if (lawnBtn.classList.contains('btn--active') & gardensBtn.classList.contains('btn--active')) {
		return false;
	} else {
		plantingBtn?.classList.toggle('btn--active');
	for (let elem of itemP) {
		elem.classList.toggle('ser--visible');;
	}
	}
});


//Select

    const el = document.querySelector('.contacts-accordion');
    const head = el.firstElementChild;
    const title = el.firstElementChild.firstElementChild;
    const content = el.lastElementChild;
    const expand = el.firstElementChild.lastElementChild;
    el.addEventListener('click', () => {
        title.innerHTML = 'City';
        document.querySelectorAll('.contacts-inform__wrap').forEach( (el) => {
            el.style.maxHeight = null;
        })
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            expand.classList.remove('accord--active');
            head.classList.remove('accord--active');
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            expand.classList.add('accord--active');
            head.classList.add('accord--active');
        }
    });

    const cities = document.querySelector('.city-list');
    cities.addEventListener('click', (e) => {
        e.stopPropagation();
        const city = e.target;
        const cityName = city.innerHTML;
        const cityId = city.getAttribute('id');
        const cityAdressId = cityId + '-adress';
        const cityAdress = document.getElementById(cityAdressId);
        document.querySelectorAll('.city__block').forEach( (el) => {
            el.style.maxHeight = null;
        })
        cityAdress.style.maxHeight = cityAdress.scrollHeight + 'px';
        title.innerHTML = cityName;
        content.style.maxHeight = null;
        expand.classList.remove('accord--active');
        head.classList.remove('accord--active');
    });