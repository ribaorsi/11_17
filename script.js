const generateArray = function (amount){

    for (let i = 0; i < amount.length; i++) {
        let returnArray = [];
        returnArray.push(`${i}`);
        //console.log(returnArray);
        
    }
    console.log(returnArray);
}


function loadEvent() {
    console.log("The page has loaded");

    console.log(generateArray(100));
}

window.addEventListener("load", loadEvent);

/*
window.addEventListener("load", function());
Ez is egy valid megoldás!
window.addEventListener("load", ()=>); ez egy arrow function
ha nem kell paraméter, akkor 
window.addEventListener("load", _=>);
*/
