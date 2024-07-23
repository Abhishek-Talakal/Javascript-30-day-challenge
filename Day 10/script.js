let togglePic = document.querySelector("img")
 let toggleBtn = document.querySelector("button")
toggleBtn.addEventListener("dblclick",()=>{
    if(togglePic.style.display === 'none'){
        togglePic.style.display = 'block';

    }
    else{
        togglePic.style.display = 'none';
    }
})


let cont = document.querySelector(".container");
cont.addEventListener("mouseover",()=>{
    cont.style.backgroundColor = "red";
}



)
let cont1 = document.querySelector(".container1");
cont1.addEventListener("mouseover",()=>{
    cont1.style.backgroundColor = "tomato";
})

cont1.addEventListener("mouseout",()=>{
  cont1.style.backgroundColor = "white";

});


document.addEventListener("DOMContentLoaded",()=>{
    let inputField = document.querySelector("#inputField");
    let output = document.querySelector("#output");
    inputField.addEventListener("keydown",(event)=> {
        console.log(`keydown: ${event.key}`)
 
    })

    inputField.addEventListener("keyup",(event)=>{
        let message = `current value: ${inputField.value}`;  
            output.textContent = message;  
            // console.log(message) 
    })
});



document.addEventListener("DOMContentLoaded", ()=>{
    let form = document.querySelector("#myform");
    let nameInput = document.querySelector("#name");
    let emailInput = document.querySelector("#email");
    let outPut = document.querySelector("#op1");
    let outPut1 = document.querySelector("#op2");
    let gensel = document.querySelector("#gender");

    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        outPut.textContent = `Form submitted Name: ${nameInput.value}\nEmail: ${emailInput.value}`;
        console.log(outPut);
    })

    gensel.addEventListener("change", (event)=>{
        let selctedValue = event.target.value;
        outPut1.textContent = `gender is ${selctedValue}`
        console.log(outPut1)
    })

})

let para = document.querySelector("#para")
document.querySelector("#categories").addEventListener("click",(e)=>{
   para.textContent = `clicked list item's id is : ${e.target.id}`;
   console.log(para);
})

let catagories = document.querySelector("#categories")
let btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", ()=>{
    let newItem= document.createElement("li");
    newItem.id = "chargers";
    newItem.textContent = `Charger`;
    catagories.appendChild(newItem);
})

