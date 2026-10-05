// Normal variables
    let myName : string = "Aayush";
    let age : number = 20;
    let isLearning : boolean = true;
    

// Arrays
    let fruits : string[] = ["Apple","Mango","Orange"];
    fruits.push("guvava");

    let numbers : number[] = [10,20,30];
    numbers.push(22);

// Objects
    // custom type for object
        type User ={
            name : string;
            age : number;
        }
    
    // using the custom object template for multiple users
        let user1 : User ={
            name:"Aayush",
            age:20
        }

        let user2 : User ={
            name:"Rahul",
            age:22
        }

// Functions
    function greet(name : string){
        // console.log("Hello, "+name);
        return "Hello, "+name;
    }
    
    let message : string = greet("Aayush");
    console.log(message);