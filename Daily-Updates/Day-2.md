# TypeScript — Day 2

## 🎯 Goal

Day 2 focused on going deeper into **Normal TypeScript** rather than working with the web.

The main goal was to understand functions, optional/default parameters, union types, type narrowing, and arrays of objects.

---

# 📚 What I Learned

## 1. Function Return Types

Learned that a function can explicitly define what type it returns.

Example:

    function add(a: number, b: number): number {
        return a + b;
    }

The `: number` after the parameters specifies the return type.

However, TypeScript can also **infer** the return type:

    function multiply(a: number, b: number) {
        return a * b;
    }

TypeScript understands that the function returns a `number`.

### Important

    Parameter type → defined after parameter
    Return type    → defined after )

Example:

    function add(a: number, b: number): number {
        return a + b;
    }

---

# 2. Executing Functions

Learned the difference between defining and calling a function.

### Defining

    function add(a: number, b: number): number {
        return a + b;
    }

### Calling

    console.log(add(10, 20));

Result:

    30

---

# 3. Optional Parameters

Learned how to make a function parameter optional using `?`.

    function greet(name: string, age?: number) {
        console.log(`My Name is ${name} and Age is ${age}`);
    }

Both are valid:

    greet("Aayush");
    greet("Aayush", 20);

If `age` is not provided, its value becomes:

    undefined

An optional parameter can be thought of as:

    age: number | undefined

---

# 4. Default Parameters

Learned how to provide a default value for a parameter.

    function greet(name: string, age: number = 18) {
        console.log(`My Name is ${name} and Age is ${age}`);
    }

Calling:

    greet("Aayush");

produces:

    My Name is Aayush and Age is 18

While:

    greet("Aayush", 20);

produces:

    My Name is Aayush and Age is 20

### Important

A default parameter is already optional.

We don't write:

    age?: number = 18

Instead:

    age: number = 18

---

# 5. Union Types

Learned that a variable can accept more than one type using `|`.

    let userId: number | string;

This allows:

    userId = 101;
    userId = "101";

But this is not allowed:

    userId = true;

because `boolean` wasn't included.

### Remember

    number | string
          ↓
    number OR string

---

# 6. Union Types in Functions

Union types can also be used for function parameters.

    function printId(id: number | string) {
        console.log(`Your ID is ${id}`);
    }

Both are valid:

    printId(101);
    printId("A101");

---

# 7. Type Narrowing

Learned how to determine which type a union value currently has.

We used `typeof`:

    function printId(id: number | string) {

        if (typeof id === "number") {
            console.log("This is a number:", id);
        }

        if (typeof id === "string") {
            console.log("This is a string:", id);
        }
    }

TypeScript can narrow:

    number | string
          ↓
       typeof
          ↓
    ┌─────────────┐
    │ number      │
    │ string      │
    └─────────────┘

This concept is called **type narrowing**.

---

# 8. Arrays of Objects

Used a custom type to define the structure of objects inside an array.

    type User = {
        name: string;
        age: number;
    };

Then created an array:

    const users: User[] = [
        {
            name: "Aayush",
            age: 20
        },
        {
            name: "Rahul",
            age: 22
        }
    ];

This means:

> `users` is an array where every element must follow the `User` structure.

---

# 9. Using Custom Types When Adding Objects

A new user can be created using the `User` type:

    const newUser: User = {
        name: "Unknown",
        age: NaN
    };

    users.push(newUser);

This works because `newUser` follows the `User` structure.

---

# 10. `object` vs Custom Object Type

One important lesson from today's error:

This:

    const newUser: object = {
        name: "Unknown",
        age: NaN
    };

only tells TypeScript:

> This is some object.

It does not tell TypeScript that the object contains:

    name → string
    age  → number

Therefore it cannot automatically be pushed into:

    User[]

Instead, use:

    const newUser: User = {
        name: "Unknown",
        age: NaN
    };

### Important Difference

    object
      ↓
    Some object

    User
      ↓
    Object with a specific structure

---

# 11. `NaN`

We also discovered that:

    age: NaN

is valid for:

    age: number

because JavaScript considers `NaN` to be a number.

    typeof NaN

returns:

    number

---

# 🧠 Day 2 Concepts

    Functions
       ↓
    Return Types
       ↓
    Type Inference
       ↓
    Optional Parameters
       ↓
    Default Parameters
       ↓
    Union Types
       ↓
    Type Narrowing
       ↓
    Arrays of Objects
       ↓
    Custom Object Types

---

# ✅ Day 2 Progress

- [x] Function parameter types
- [x] Function return types
- [x] Return type inference
- [x] Calling functions
- [x] Optional parameters
- [x] Default parameters
- [x] Union types
- [x] Union types in functions
- [x] Type narrowing with `typeof`
- [x] Arrays of objects
- [x] Custom types with arrays
- [x] Difference between `object` and a custom object type
- [x] Understanding `NaN` as a number

---

# 🎯 Day 2 Result

Today I focused entirely on **Normal TypeScript** and went deeper into how TypeScript handles functions and types.

The main concepts I understood today were:

    Functions
    +
    Optional / Default Parameters
    +
    Union Types
    +
    Type Narrowing
    +
    Arrays of Typed Objects

---

# 🚀 Next

Day 3 can continue with more TypeScript concepts and eventually return to **TypeScript + Web development**.

> Learn a little → Practice it → Build something → Document it → Repeat.