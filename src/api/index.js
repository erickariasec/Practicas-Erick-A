// import fetch from "node-fetch";
const API_products = "https://fakestoreapi.com/products";

const fetchProducts = async (urlAPI) => {
    const response = await fetch(urlAPI);
    return response.json();
}

// ! GET ALL PRODUCTS
async function asyncGetAllProducts() {
    try {
        const products = await fetchProducts(`${API_products}`);
        const contentAPP = document.getElementById('contentAPP');
        let view = `
            ${products.map((i) =>
                `
                <article class="card-1">
                    <section class="product-image">
                        <img src="${i.image}" alt="product-1">
                    </section>
                        <section class="product-content">
                        <div class="title">
                            <p>${i.title}</p>
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


// ! GET PRODUCTS BY CATEGORY: ELECTRONICS
async function asyncGetCategoryElectronics() {
    try {
        const electronics = await fetchProducts(`${API_products}/category/electronics`);
        const contentAPP = document.getElementById('contentAPP');
        let view = `
            ${electronics.map((i) =>
                `
                <article class="card-1">
                    <section class="product-image">
                        <img src="${i.image}" alt="product-1">
                    </section>
                        <section class="product-content">
                        <div class="title">
                            <p>${i.title}</p>
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

// ! GET PRODUCTS BY CATEGORY: JEWELERY
async function asyncGetCategoryElectronics() {
    try {
        const jewelery = await fetchProducts(`${API_products}/category/jewelery`);
        const contentAPP = document.getElementById('contentAPP');
        let view = `
            ${jewelery.map((i) =>
                `
                <article class="card-1">
                    <section class="product-image">
                        <img src="${i.image}" alt="product-1">
                    </section>
                        <section class="product-content">
                        <div class="title">
                            <p>${i.title}</p>
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

// ! GET PRODUCTS BY CATEGORY: MEN'S CLOTHING
async function asyncGetCategoryElectronics() {
    try {
        const menClothes = await fetchProducts(`${API_products}/category/men's clothing`);
        const contentAPP = document.getElementById('contentAPP');
        let view = `
            ${menClothes.map((i) =>
                `
                <article class="card-1">
                    <section class="product-image">
                        <img src="${i.image}" alt="product-1">
                    </section>
                        <section class="product-content">
                        <div class="title">
                            <p>${i.title}</p>
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

// ! GET PRODUCTS BY CATEGORY: MEN'S CLOTHING
async function asyncGetCategoryElectronics() {
    try {
        const womenClothes = await fetchProducts(`${API_products}/category/women's clothing`);
        const contentAPP = document.getElementById('contentAPP');
        let view = `
            ${womenClothes.map((i) =>
                `
                <article class="card-1">
                    <section class="product-image">
                        <img src="${i.image}" alt="product-1">
                    </section>
                        <section class="product-content">
                        <div class="title">
                            <p>${i.title}</p>
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