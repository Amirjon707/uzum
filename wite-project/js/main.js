import axios from "axios";

const BASE_URL = "http://localhost:5050";

const furniture = document.querySelector("#furniture");
const audio = document.querySelector("#audio");
const pc = document.querySelector("#pc");
const tv = document.querySelector("#tv");
const kitchen = document.querySelector("#kitchen");

let conArr = [furniture, audio, tv, pc, kitchen];

const swiper = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/goods`);

        createSwiper(res.data);

        for (let i = 0; i < conArr.length; i++) {
            createCard(res.data, conArr[i]);
            // createCard(res.data, pc);
        }
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
        price.innerHTML = `${format(data[i].price + "")} <sup>сум</sup>`;

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
    const findChildren = con.querySelector(".row");
    let nasiya = 0;


    for (let i = 0; findChildren.children.length < 6; i++) {
        let row = con.querySelector(".row");
        nasiya = Math.floor((data[i].price + (data[i].price / 100) * 5) / 12)
        


        if (con.id.toLowerCase() == data[i].type.toLowerCase()) {
            const cart = document.createElement("div");
            cart.classList.add(
                "cart",
                "col-lg-3",
                "col-xl-3",
                "col-md-1",
                "col-5"
            );
            cart.id = data[i].id;
            cart.innerHTML = `
            <div class="cart-img">
            <img src="${data[i].media[0]}" alt="${data[i].name}">
            </div>
            <div class="cart-info">
            <h3 class="title">${data[i].title}</h3>
            <p class="rating">
                <ion-icon name="star" class="ratingIcon"></ion-icon>
                &nbsp;&nbsp;
                <span style="letter-spacing: 1.5px;">${data[i].rating}</span>
            </p>
            <p class="nasiya1"><span class="nasiya">${format(nasiya + '')} сум/мес</span></p>
            <p class="price">${format(data[i].price + "")} <sup>сум</sup></p>
            </div>
            `;
            row.append(cart);
        }
    }
};

function format(str) {
    const s = str.length;
    const chars = str.split("");
    const strWithSpaces = chars.reduceRight((acc, char, i) => {
        const spaceOrNothing = (s - i) % 3 === 0 ? " " : "";
        return spaceOrNothing + char + acc;
    }, "");

    return strWithSpaces[0] === " " ? strWithSpaces.slice(1) : strWithSpaces;
}
