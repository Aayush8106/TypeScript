# Day 5 - TypeScript Learning

## Topics: Array Method Chaining

### 1. What I Learned Today

Today, I practised array methods in TypeScript and learned how to combine `filter()` and `map()` using method chaining. I also applied these concepts to arrays of typed objects.

### 2. Quick Revision of Array Methods

#### A. forEach()

- Executes a callback function for each array element.
- Useful for performing actions such as logging or displaying values.
- Does not collect the callback's returned values.
- The `forEach()` method itself returns `undefined`.

#### B. map()

- Transforms each element of an array.
- Returns a new array containing the callback's returned values.
- Useful for extracting object properties or calculating new values.
- Does not automatically modify the original array.

#### C. filter()

- Selects elements that satisfy a condition.
- Returns a new array containing the original elements that match the condition.
- Useful for filtering data based on properties such as price, age, or status.
- Does not automatically modify the original array.

### 3. Understanding Method Chaining

Method chaining means calling one method directly after another without necessarily storing every intermediate result in a separate variable.

For example, instead of storing the result of `filter()` in one variable and then applying `map()` separately, both methods can be combined into a single expression.

General structure:

`array.filter(...).map(...)`

The methods execute in order from left to right.

### 4. How filter() and map() Work Together

When using `filter()` followed by `map()`:

1. `filter()` checks each element against a condition.
2. Only matching elements are included in the filtered array.
3. `map()` runs on the filtered array.
4. `map()` transforms each remaining element and returns a new array.

This approach is useful when we need to select specific data and then extract or transform that data.

### 5. Practice with Number Arrays

I practised filtering numbers greater than 25 from the following array:

`[10, 20, 30, 40, 50]`

The filtering condition selects:

`[30, 40, 50]`

I then used `map()` to multiply each selected number by 2.

Final result:

`[60, 80, 100]`

This helped me understand that `map()` operates on the result returned by `filter()` when the methods are chained.

### 6. Working with Typed Product Objects

I created a custom `Product` type containing:

- `name`: string
- `price`: number

I then created an array of typed product objects.

| Product | Price |
|---|---:|
| Keyboard | 999 |
| Mouse | 499 |
| Headphones | 1499 |

Using this data, I practised filtering products based on their prices and extracting product names.

### 7. Product Method Chaining

I used method chaining to select affordable products and extract their names.

The logic was:

1. Start with the `products` array.
2. Use `filter()` to select products priced below ₹1000.
3. Use `map()` to extract the names of the selected products.
4. Store the result in a new array named `affordableProductNames`.

Expected result:

`["Keyboard", "Mouse"]`

This exercise helped me understand how array methods can be combined to process structured data efficiently.

### 8. Important Concepts to Remember

- `map()` returns whatever the callback explicitly returns for each element.
- If a `map()` callback returns a Boolean condition, the result is an array of Boolean values.
- `filter()` uses the callback's result to decide which original elements to keep.
- `filter()` followed by `map()` first selects elements and then transforms them.
- Method chaining avoids unnecessary intermediate variables.
- Type annotations must match the actual result. For example, an array of product names has the type `string[]`.
- Both `map()` and `filter()` return new arrays and do not automatically modify the original array.

### 9. Day 5 Checklist

- [x] Revised `forEach()`, `map()`, and `filter()`.
- [x] Practised filtering numbers using conditions.
- [x] Practised transforming array elements using `map()`.
- [x] Understood method chaining.
- [x] Combined `filter()` and `map()` in a single expression.
- [x] Created a custom `Product` type.
- [x] Worked with arrays of typed product objects.
- [x] Filtered products based on price.
- [x] Extracted product names using `map()`.
- [x] Understood the order of execution in method chaining.

### 10. Next Steps

In Day 6, I will continue strengthening my TypeScript fundamentals by practising more array operations and applying them to practical problems.

My goal is to become more confident in working with typed data, writing clean code, and solving problems independently.