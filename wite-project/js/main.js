import axios from "axios";

const BASE_URL = "http://localhost:5050";

const furniture = document.querySelector('#furniture')
const audio = document.querySelector('#audio')
const pc = document.querySelector('#pc')
const tv = document.querySelector('#tv')

function runFunc(data) {
    createCard(data, furniture);
    // createCard(data, audio);
    // createCard(data, tv);
    // createCard(data, pc);
}


const swiper = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/goods`);

        createSwiper(res.data);
        runFunc(res.data)
    } catch (error) {
        console.error(error);
    }
};




function createSwiper(data) {
    const swiperContainer = document.querySelector("swiper-container");
    for (let i = 0; swiperContainer.children.length <= 30; i++) {
        const swiperElem = document.createElement("swiper-slide");

        const swiper = document.createElement("div");
        swiper.classList.add("swiper-elem");

        const txt = document.createElement("div");
        txt.classList.add("txt");

        const title = document.createElement("h2");
        title.classList.add("title");
        title.innerHTML = data[i].title;

        const description = document.createElement("p");
        description.classList.add("description");
        description.innerHTML = data[i].description;

        const price = document.createElement("p");
        price.classList.add("price");
        price.innerHTML = `${data[i].price} <sup>сум</sup>`;

        const imgBox = document.createElement("div");
        imgBox.classList.add("img");

        const img = document.createElement("img");
        img.src = data[i].media[0];

        txt.append(title, description, price);

        imgBox.append(img);

        swiper.append(txt, imgBox);

        swiperElem.append(swiper);

        swiperContainer.append(swiperElem);
        console.log();
    }
}

swiper();

const catalogBtn = document.querySelector(".catalog-btn");
const catalogIcon = document.querySelectorAll(".icon");

catalogBtn.addEventListener("click", () => {
    if (catalogIcon[0].classList.contains("hide")) {
        catalogIcon[0].classList.remove("hide");
        catalogIcon[1].classList.add("hide");
    } else {
        catalogIcon[1].classList.remove("hide");
        catalogIcon[0].classList.add("hide");
    }
});

const createCard = (data, con) => {
    for (let i = 0; con.children.length < 6; i++) {
        let row = con.querySelector('.row')
        

        
        
        if (con.id.toLowerCase() == data[i].type.toLowerCase()) {
            
            const cart = document.createElement("div");
            cart.classList.add("cart", "col-lg-3", "col-xl-3", "col-md-1", "col-5");
            cart.id = data[i].id;
            cart.innerHTML = `
            <div class="cart-img">
            <img src="${data[i].media[0]}" alt="${data[i].name}">
            </div>
            <div class="cart-info">
            <h3 class="title">${data[i].title}</h3>
            <p class="rating">
                <ion-icon name="star" class="ratingIcon"></ion-icon>
                <span>${data[i].rating}</span>
            </p>
            <p>${format((data[i].price + ''))} <sup>сум</sup></p>
            </div>
            `;
            row.append(cart);
        }
    }
};








// function numberWithCommas(x) {
//     return x.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
// }



function format(str) {
    const s = str.length;
    const chars = str.split('');
    const strWithSpaces = chars.reduceRight((acc, char, i) => {
        const spaceOrNothing = ((((s - i) % 3) === 0) ? ' ' : '');
        return (spaceOrNothing + char + acc);
    }, '');
    console.log(((strWithSpaces[0] === ' ') ? strWithSpaces.slice(1) : strWithSpaces));
    
    return ((strWithSpaces[0] === ' ') ? strWithSpaces.slice(1) : strWithSpaces);
}