const num : number[] = [10,20,30,40,50];

const newNum : number[] = num.filter((crElem)=>{
   return crElem>25;
});

console.log(newNum);

const doubledNum : number[] = num.map((crr)=>{
    return crr*2;
});

console.log(doubledNum);

const filteredAndDoubled : number[] = num.filter((curr)=>{
        return curr>25;
}).map((curr)=>{
    return curr*2;
});

console.log(filteredAndDoubled);