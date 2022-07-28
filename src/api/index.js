// import fetch from "node-fetch";
const API_products = "https://fakestoreapi.com/products";

const fetchProducts = async (urlAPI) => {
    const response = await fetch(urlAPI);
    return response.json();
}

async function asyncGetAllProducts() {
    try {

        // ! GET ALL PRODUCTS
        const products = await fetchProducts(`${API_products}`);
        console.log(products);
        const contentAPP = document.getElementById('contentAPP');
        let view = `
            ${products.map((i) =>
                `
                <article class="card-1">
                    <section class="product-image">
                        <img src="${i.image}" alt="product-1">
                    </section>
                        <section class="product-content">
                        <div class="description">
                            <p>Camiseta manga corta texto</p>
                        </div>
                        <div class="price">
                            <h3>$${i.price}</h3>
                        </div>
                    </section>
                </article>
                `
            ).join('')}  
        `;

        contentAPP.innerHTML = view;

    } catch (err) {
        console.error(err);
    }
}

asyncGetAllProducts();

// // ! GET A SINGLE PRODUCT
        // const product1 = await fetchProducts(`${API_products}/1`);
        // console.log(product1);
        
        // // ! LIMIT RESULTS
        // const limitProductResultsTo5 = await fetchProducts(`${API_products}?limit=5`);
        // console.log(limitProductResultsTo5);

        // // ! SORT RESULTS (DESCENDING MODE)
        // // * Default value is ascending
        // const sortResults = await fetchProducts(`${API_products}?sort=desc`);
        // console.log(sortResults);

        // // ! GET ALL CATEGORIES
        // const allCategories = await fetchProducts(`${API_products}/categories`);
        // console.log(allCategories);

        // // ! GET PRODUCTS IN A SPECIFIC CATEGORY (electronics, jewelry, men\'s clothing, women's clothing)
        // const productsSpecificCategory = await fetchProducts(`${API_products}/category/jewelery`);
        // console.log(productsSpecificCategory);