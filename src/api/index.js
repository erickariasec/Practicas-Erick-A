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
        
        // ! LIMIT RESULTS
        const limitProductResultsTo5 = await fetchProducts(`${API_products}?limit=5`);
        console.log(limitProductResultsTo5);

        // ! SORT RESULTS (DESCENDING MODE)
        // * Default value is ascending
        const sortResults = await fetchProducts(`${API_products}?sort=desc`);
        console.log(sortResults);

        // ! GET ALL CATEGORIES
        const allCategories = await fetchProducts(`${API_products}/categories`);
        console.log(allCategories);

        // ! GET PRODUCTS IN A SPECIFIC CATEGORY (electronics, jewelry, men\'s clothing, women's clothing)
        const productsSpecificCategory = await fetchProducts(`${API_products}/category/jewelery`);
        console.log(productsSpecificCategory);

    } catch (err) {
        console.error(err);
    }
}

asyncGetProducts();