// Getting the Counter value
    let count : number = 0;

// Getting the actual DOM elements
    let countElement = document.getElementById('count')!;
    const incButton  = document.getElementById("inc")!;
    const decButton  = document.getElementById("dec")!;
    const resButton  = document.getElementById("reset")!;

// adding functionalities to BTNS
    incButton.addEventListener("click",()=>{
        count++;
        countElement.textContent=count.toString();
    });

    decButton.addEventListener("click",()=>{
        count--;
        countElement.textContent=count.toString();
    });

    resButton.addEventListener("click",()=>{
        count=0;
        countElement.textContent=count.toString();
    });