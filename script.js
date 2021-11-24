const myNumber = 2000;

value.length

function loadEvent (){
    console.log("The page has loaded")
}





/*const generateArray = function(amount){

    for (let i = 0; i < amount.length; i++) {
        let returnArray = [];
        
        let amountConverted = parseInt(amount);
        amount = amountConverted;
        
        amount = parseInt(amount);

        //Number.isNaN(amount)!== true
        if (!Number.isNaN(amount)){

        }
        else {
            returnArray.push("error");
        }

        returnArray.push(`${i}`);
        //console.log(returnArray);
        
    }
    //console.log(returnArray);
    return returnArray;
}


function loadEvent() {
    console.log("The page has loaded");

    console.log(generateArray("kiskutya"));
    console.log(generateArray("1 kiskutya"));
    console.log(generateArray(100));
    console.log(generateArray("100"));
    console.log(generateArray([100]));
    
   const root = document.getElementById("root");
   const list = generateArray("6");
   console.log(list);

   if (list[0] !== "error") {
       for (const item of list) {
         root.insertAdjacentHTML("beforeend", `<div>${item}</div`)  
       }
   }
}
*/

window.addEventListener("load", loadEvent);

/*
window.addEventListener("load", function());
Ez is egy valid megoldás!
window.addEventListener("load", ()=>); ez egy arrow function
ha nem kell paraméter, akkor 
window.addEventListener("load", _=>);
*/
