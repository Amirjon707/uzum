import axios from "axios";

const BASE_URL = "http://localhost:5050";

const swiper = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/goods`);

        createSwiper(res.data);
    } catch (error) {
        console.error(error);
    }
};

function createSwiper(data) {
    const swiperContainer = document.querySelector("swiper-container");
    for (let i = 0; swiperContainer.children.length <= 20; i++) {
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
let price1 = `2000000`;
for (let i = 0; i < price1.length; i++) {
    if (i % 3 == 0) {
        let price2 = price1.split("").join(',');
        console.log(price2[i]);
    }
}
