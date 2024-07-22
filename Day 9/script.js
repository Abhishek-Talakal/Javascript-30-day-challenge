//Task-1 : Select and HTML element by its ID and change its text content.

let textElement = document.querySelector("#title");
textElement.textContent = "Day 9 of js challenge";



//Task-2 : Select an HTML element by its class and change its background color.

let bgcolorChange = document.querySelector(".container")
bgcolorChange.style.backgroundColor = "#00a000";


//Task-3 : Create a new `div` element with some text content and append it to the body.

let newContent = document.createElement("div");
newContent.textContent = "creating and appending elements";
let div = document.querySelector("div").before(newContent);


//Task-4 : Create a new `li` element and add it to an existing `ul` list.

let li = document.createElement("li")
li.textContent ="orange";
document.querySelector("ul").appendChild(li)

//Task-5 : Select an HTML element and remove it form the DOM.

let h2 = document.createElement("h2");
h2.textContent ="hello js"
document.querySelector("body").appendChild(h2);
document.querySelector("body").removeChild(h2);


//Task-6 : Remove the last child of a specific HTML element.

document.querySelector("ul").removeChild(li);


//Task-7 : Select an HTML element and change one of its attributes (e.g., `src` of an `img` tag).

let img = document.querySelector("img")
img.src ="https://img.freepik.com/free-photo/fresh-yellow-daisy-single-flower-close-up-beauty-generated-by-ai_188544-15543.jpg";



//Task-8 : Add and remove a CSS class to/from an HTML element.

img.classList.add("space");
img.classList.remove("photo");


//Task-9 : Add a click event listenter to a button that changes the text content of a paragraph.

let par = document.querySelector("p");
let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    par.textContent = "nothing just changed the paragraph";
});


//Task-10 : Add a mouseover event listener to an element that changes its border color.

// using bgcolorChange created in task2
bgcolorChange.addEventListener("mouseover",()=>{
    bgcolorChange.style.border = "5px solid red";
})