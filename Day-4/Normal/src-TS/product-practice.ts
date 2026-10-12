type Product ={
    name  : string;
    price : number;
}

const product1 : Product ={
    name  : "Keyboard",
    price : 999
}

const product2 : Product ={
    name  : "Mouse",
    price : 499
}

const product3 : Product ={
    name  : "headphones",
    price : 1499
}

const products : Product[] =[product1 , product2, product3];

// Extracting the productNames using MAP func
    const productNames : string[] = products.map((product)=>{
        return product.name;
    });

    console.log(productNames);

// Extracting Conditional products based on price using the map func
    const affordableProducts : Product[] = products.filter((product)=>{
        return product.price<1000;
    });

    console.log(affordableProducts);

// Chaining the map along with the Filter
    const discountedProductNames : string[] = affordableProducts.map((product)=>{
        return product.name;
    });

    console.log(discountedProductNames);