let BASE_URL = "http://localhost:5050";

fetch(`${BASE_URL}/goods`)
    .then((response) => response.json())
    .then((data) => console.log(data.products));
