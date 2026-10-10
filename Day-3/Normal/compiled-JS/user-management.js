"use strict";
const user1 = {
    id: 1,
    name: "Rahul",
    age: 22
};
const user2 = {
    id: 2,
    name: "Aayush"
};
const users = [user1, user2];
function displayUsers(users) {
    for (const user of users) {
        console.log(user);
    }
}
displayUsers(users);
