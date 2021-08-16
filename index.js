let countEl = document.getElementById("count-el");
console.log(countEl);


let count = 0;
function increment(){
        count += 1;
       countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    console.log(count);
    countEl.textContent = 0;
    count = 0;
}


let saveEl = document.getElementById("save-el");
console.log(saveEl);