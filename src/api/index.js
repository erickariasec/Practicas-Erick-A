import fetch from "node-fetch";
const API_products = "https://fakestoreapi.com/products";

const fetchProducts = async (urlAPI) => {
    const response = await fetch(urlAPI);
    return response.json();
}

async function asyncGetProducts() {
    try {

        // ! GET ALL PRODUCTS
        const products = await fetchProducts(`${API_products}`);
        console.log(products);

        // ! GET A SINGLE PRODUCT
        const product1 = await fetchProducts(`${API_products}/1`);
        console.log(product1);
    
    } catch (err) {
        console.error(err);
    }
}

asyncGetProducts();