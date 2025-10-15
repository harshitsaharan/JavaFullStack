const divElement =document.createElement("div");
divElement.innerHTML="<p>hello world</p>";
const anchorElement=document.createElement("a");
anchorElement.textContent="click here";
anchorElement.href="https://www.google"
const rootElement=document.querySelector("#root");
const bodyElement=document.body;

rootElement.appendChild(divElement);
useeleme