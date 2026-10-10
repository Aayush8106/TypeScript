interface User {
    readonly id : number;
    name        : string;
    age        ?: number;
}

const user1 : User = {
    id   : 1,
    name : "Rahul",
    age  : 22
}

const user2 : User = {
    id   : 2,
    name : "Aayush"
}

const users : User[] = [user1 , user2];

function displayUsers (users : User[]) : void {
    for(const user of users){
        console.log(user);
    }
    
}

displayUsers(users);