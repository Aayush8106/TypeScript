interface Product{
    readonly id : number;
    name        : string;
    price       : number;
    inStock     : boolean;
    discount?   : number;
}

const product1 : Product = {
    id:1,
    name : "Phone",
    price : 9999,
    inStock : true,
}

const product2 : Product = {
    id:2,
    name    : "Phone-B",
    price   : 6999,
    inStock : true,
    discount: 10
}

product1.name="Phone-A";

console.log(product1);
console.log(product2);