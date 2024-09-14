let BASE_URL = "http://localhost:5050";

fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => console.log(data.products));
