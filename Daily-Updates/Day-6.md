# Day 6 - TypeScript Learning

## Topics: Product Inventory, Array Methods, and Method Chaining

## 1. What I Learned Today

Today, I practised working with arrays of typed objects in TypeScript. I created a small Product Inventory program and used array methods to extract product names, filter products by price, find specific products, and combine multiple array methods using method chaining.

### Topics Covered

- Creating custom types with `type`
- Working with arrays of typed objects
- Using `map()`
- Using `filter()`
- Using `find()`
- Understanding `undefined` in TypeScript
- Chaining `filter()` and `map()`

---

## 2. Creating a Custom Product Type

I created a custom type named `Product` with three properties:

- `id`: number
- `name`: string
- `price`: number

### Example

```ts
type Product = {
    id: number;
    name: string;
    price: number;
};
```

This ensures that every object assigned to the `Product` type has the required properties with the correct types.

---

## 3. Creating Product Objects

I created three product objects and stored them in an array of type `Product[]`.

### Example

```ts
const product1: Product = {
    id: 1,
    name: "Keyboard",
    price: 999
};

const product2: Product = {
    id: 2,
    name: "Mouse",
    price: 499
};

const product3: Product = {
    id: 3,
    name: "Headphone",
    price: 1499
};

const products: Product[] = [
    product1,
    product2,
    product3
];
```

### Important Concept

`Product[]` means an array containing Product objects.

TypeScript checks that each product follows the structure defined by the `Product` type.

---

## 4. Using map() to Extract Product Names

The `map()` method transforms every array element and returns a new array containing the values returned by its callback function.

I used `map()` to extract the names of all products.

### Example

```ts
const productNames: string[] = products.map((curr) => {
    return curr.name;
});

console.log(productNames);
```

### Output

```text
[ 'Keyboard', 'Mouse', 'Headphone' ]
```

### Explanation

1. `map()` visits each product object.
2. `curr` represents the current product.
3. `curr.name` accesses the product's name.
4. `map()` collects the returned names into a new array.

The result has the type `string[]` because it contains strings.

---

## 5. Using filter() to Select Affordable Products

The `filter()` method selects elements that satisfy a condition and returns a new array containing the original elements that match.

I used `filter()` to select products priced below ₹1000.

### Example

```ts
const affordableProducts: Product[] = products.filter((curr) => {
    return curr.price < 1000;
});

console.log(affordableProducts);
```

### Output

```text
[
  { id: 1, name: 'Keyboard', price: 999 },
  { id: 2, name: 'Mouse', price: 499 }
]
```

### Explanation

1. `filter()` checks each product.
2. `curr.price < 1000` evaluates to `true` or `false`.
3. If the condition is `true`, the entire product object is kept.
4. If the condition is `false`, the product is excluded.

### Important Concept

Even though the condition accesses `curr.price`, `filter()` returns the entire matching product object, not just its price.

Therefore, the correct type is `Product[]`, not `number[]`.

---

## 6. Using find() to Search for a Product

The `find()` method returns the first element that satisfies a condition.

Unlike `filter()`, it does not return an array of all matching elements.

### Example

```ts
const foundProduct: Product | undefined = products.find((curr) => {
    return curr.name === "Mouse";
});

console.log(foundProduct);
```

### Output

```text
{ id: 2, name: 'Mouse', price: 499 }
```

### Explanation

1. `find()` checks the products in order.
2. It compares each product's name with `"Mouse"`.
3. When it finds the first match, it returns that product object.
4. It stops searching after finding the first match.

### Why Product | undefined?

The `find()` method might not find a matching product.

- `Product`: A matching product object was found.
- `undefined`: No product matched the condition.

Therefore, TypeScript infers the result type as `Product | undefined` when the array contains Product objects.

TypeScript can infer this automatically, so explicitly writing the type is optional.

---

## 7. Finding an Expensive Product

I used `find()` to search for the first product costing more than ₹1000.

### Example

```ts
const expensiveProduct: Product | undefined = products.find((curr) => {
    return curr.price > 1000;
});

console.log(expensiveProduct);
```

### Output

```text
{ id: 3, name: 'Headphone', price: 1499 }
```

### Explanation

The condition `curr.price > 1000` checks each product's price.

The first product satisfying the condition is returned.

If no product satisfies the condition, the result is `undefined`.

---

## 8. Method Chaining: filter() + map()

Method chaining means calling one method directly after another.

I combined `filter()` and `map()` to select affordable products and then extract their names.

### Example

```ts
const cheapProductNames: string[] = products
    .filter((curr) => {
        return curr.price < 1000;
    })
    .map((curr) => {
        return curr.name;
    });

console.log("Cheap Products:", cheapProductNames);
```

### Output

```text
Cheap Products: [ 'Keyboard', 'Mouse' ]
```

### How It Works

**Step 1: `filter()`**

It selects products priced below ₹1000.

The intermediate result contains:

```text
[
  { id: 1, name: 'Keyboard', price: 999 },
  { id: 2, name: 'Mouse', price: 499 }
]
```

**Step 2: `map()`**

It runs on the filtered array and extracts the name of each remaining product.

The final result is:

```text
[ 'Keyboard', 'Mouse' ]
```

### Why Use Method Chaining?

Without method chaining, I could store the filtered products in one variable and then use `map()` on that variable.

With method chaining, I can perform both operations in one expression without creating an intermediate variable.

---

## 9. Difference Between map(), filter(), and find()

| Feature | map() | filter() | find() |
|---|---|---|---|
| Main purpose | Transform elements | Select matching elements | Find the first matching element |
| Returns | New array | New array | Element or undefined |
| Callback result | Stored in the new array | Used to decide which elements to keep | Used to decide which element matches |
| Processes elements | Every element | Every element to identify matches | Stops at the first match |
| Example use | Extract product names | Select affordable products | Find a product by name |

### Easy Rule to Remember

- `map()` → Transform
- `filter()` → Select all matching elements
- `find()` → Find the first matching element

---

## 10. Important TypeScript Concepts

### A. Array Types

```ts
const names: string[] = ["Keyboard", "Mouse"];
const prices: number[] = [999, 499];
const products: Product[] = [];
```

- `string[]` represents an array of strings.
- `number[]` represents an array of numbers.
- `Product[]` represents an array of Product objects.

### B. Accessing Object Properties

```ts
curr.name
curr.price
curr.id
```

The variable `curr` represents the entire current product object. Accessing a property retrieves only that property's value.

### C. Callback Return Values

In `map()`, the callback's returned value determines what goes into the new array.

In `filter()` and `find()`, the callback's result is used as a condition to decide which element or elements match.

### D. Handling undefined

When using `find()`, check whether a matching object was found before accessing its properties.

```ts
if (foundProduct !== undefined) {
    console.log(foundProduct.name);
}
```

This prevents errors when the search returns `undefined`.

---

## 11. Complete Program

The following is the complete Product Inventory program implemented today.

```ts
type Product = {
    id: number;
    name: string;
    price: number;
};

const product1: Product = {
    id: 1,
    name: "Keyboard",
    price: 999
};

const product2: Product = {
    id: 2,
    name: "Mouse",
    price: 499
};

const product3: Product = {
    id: 3,
    name: "Headphone",
    price: 1499
};

const products: Product[] = [
    product1,
    product2,
    product3
];

// Extract product names using map()
const productNames: string[] = products.map((curr) => {
    return curr.name;
});

console.log(productNames);

// Filter products priced below 1000
const affordableProducts: Product[] = products.filter((curr) => {
    return curr.price < 1000;
});

console.log(affordableProducts);

// Find a product by name
const foundProduct: Product | undefined = products.find((curr) => {
    return curr.name === "Mouse";
});

console.log(foundProduct);

// Find the first product priced above 1000
const expensiveProduct: Product | undefined = products.find((curr) => {
    return curr.price > 1000;
});

console.log(expensiveProduct);

// Chain filter() and map()
const cheapProductNames: string[] = products
    .filter((curr) => {
        return curr.price < 1000;
    })
    .map((curr) => {
        return curr.name;
    });

console.log("Cheap Products:", cheapProductNames);
```

---

## 12. Day 6 Checklist

- [x] Created a custom Product type.
- [x] Created an array of typed product objects.
- [x] Extracted product names using map().
- [x] Filtered products using filter().
- [x] Understood why filter() returns entire matching objects.
- [x] Found a product by name using find().
- [x] Found a product using a price condition.
- [x] Understood why find() can return undefined.
- [x] Combined filter() and map() using method chaining.
- [x] Practised TypeScript array types and object properties.

---

## 13. Next Steps

In Day 7, I will continue practising TypeScript array methods and work on additional problems involving typed objects.

My goal is to become more confident in searching, filtering, transforming, and processing structured data using TypeScript.

The focus will remain on understanding the concepts and writing the code independently rather than simply copying examples.