type Product = {
    id    : number;
    name  : string;
    price : number;
}

const product1 : Product = {
    id    : 1,
    name  : "Keyboard",
    price : 999
}

const product2 : Product = {
    id    : 2,
    name  : "Mouse",
    price : 499
}

const product3 : Product = {
    id    : 3,
    name  : "Headphone",
    price : 1499
}

const products : Product[] = [product1 , product2 , product3];

const productNames : string[] = products.map((curr)=>{
    return curr.name;
});

console.log(productNames);

const affordableProducts : Product[] = products.filter((curr)=>{
    return curr.price < 1000;
});

console.log(affordableProducts);

const foundProduct : Product | undefined = products.find((curr)=>{
    return curr.name === "Mouse";
});

console.log(foundProduct);

const expensiveProduct : Product | undefined = products.find((curr)=>{
    return curr.price>1000;
});

console.log(expensiveProduct);

const cheapProductNames : string[] = products.filter((curr)=>{
    return curr.price<1000;
}).map((curr)=>{
    return curr.name;
});

console.log(`Cheap Products: ${cheapProductNames}`);