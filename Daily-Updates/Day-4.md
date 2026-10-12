# Day 4 - TypeScript Learning

## Topics: Array Methods and Iteration

### 1. What I Learned Today

Today, I learned about JavaScript array methods and iteration techniques in TypeScript. I practised `forEach()`, `map()`, and `filter()` and understood how they differ from `for...of` and `for...in`. I also practised using array methods with custom types and arrays of objects.

### 2. Array Methods

#### A. forEach()

- Used to perform an action on every element in an array.
- Executes a callback function once for each element.
- Does not collect the callback's returned values.
- The `forEach()` method itself returns `undefined`.
- Cannot be stopped early using `break` or `continue`.

#### B. map()

- Used to transform every element in an array.
- Executes a callback function for each element.
- Returns a new array containing the callback's returned values.
- Does not automatically modify the original array.
- Useful for extracting properties or creating modified values.

#### C. filter()

- Used to select elements based on a condition.
- Executes a callback function for each element.
- Keeps elements when the callback returns a truthy value.
- Returns a new array containing the original elements that satisfy the condition.
- Does not automatically modify the original array.

### 3. Difference Between forEach(), map(), and filter()

| Method | Purpose | Return Value |
|---|---|---|
| `forEach()` | Perform an action on every element | `undefined` |
| `map()` | Transform every element | New array |
| `filter()` | Select elements using a condition | New array |

### 4. for...of and for...in

#### A. for...of

- Used to iterate over values in an iterable, such as an array.
- Provides each element's value directly.
- Supports `break` and `continue`.
- Useful when more control over iteration is required.

#### B. for...in

- Used to iterate over an object's enumerable property keys.
- When used with an array, it typically provides the array's indexes.
- Generally, `for...of` is preferred when iterating over array values.

### 5. Difference Between forEach() and for...of

| Feature | forEach() | for...of |
|---|---|---|
| Type | Array method | Loop statement |
| Iterates over | Array values | Iterable values |
| Uses callback | Yes | No |
| Supports break | No | Yes |
| Supports continue | No | Yes |
| Best use | Performing an action on each array element | Iteration with more control |

### 6. Working with Typed Objects

I created a custom `Product` type with two properties:

- `name`: string
- `price`: number

I created individual product objects and stored them in a typed array using `Product[]`.

Products practised:

- Keyboard — ₹999
- Mouse — ₹499
- Headphones — ₹1499

### 7. Using map() with Objects

I used `map()` to extract product names from the array of product objects.

This helped me understand how to access object properties inside a callback and store the extracted values in a new array.

I also learned that the variable receiving the result must have the correct type. For example, extracting product names produces a `string[]`, not a single `string`.

### 8. Using filter() with Objects

I used `filter()` to select products whose prices were below ₹1000.

This helped me understand that `filter()` evaluates a condition for each product and returns the original product objects that satisfy the condition.

I also learned that using a condition inside `map()` returns an array of Boolean values when the callback returns the condition's result, whereas `filter()` uses that result to select elements.

### 9. Important Concepts to Remember

- `forEach()` performs an action for each element but returns `undefined`.
- `map()` transforms elements and creates a new array.
- `filter()` selects elements based on a condition.
- `for...of` iterates over values and provides more loop control.
- `for...in` iterates over enumerable keys or property names.
- `Product[]` represents an array of Product objects.
- `string[]` represents an array of strings.
- The callback's return value determines what `map()` puts into its new array.
- `filter()` keeps elements when the callback's result is truthy.
- Array methods can be combined through method chaining.

### 10. Day 4 Checklist

- [x] Understood `forEach()`
- [x] Understood how `forEach()` iterates through array elements
- [x] Understood `map()` and how it creates a new array
- [x] Understood `filter()` and conditional selection
- [x] Compared `forEach()`, `map()`, and `filter()`
- [x] Reviewed `for...of` and `for...in`
- [x] Compared `forEach()` and `for...of`
- [x] Created a custom `Product` type
- [x] Created an array of typed product objects
- [x] Extracted product names using `map()`
- [x] Filtered products based on their prices
- [ ] Practise chaining `filter()` and `map()` directly
- [ ] Complete the Product Inventory mini-project

### 11. Next Steps

In Day 5, I will continue practising array methods, begin with method chaining, and build a small Product Inventory program using TypeScript.

The goal is to strengthen my understanding of typed objects, arrays, filtering, transformation, and practical TypeScript programming.