const box = document.getElementById("colorBox");


box.addEventListener("click",()=>{
    box.style.float ="right";
})
// box.addEventListener("mouseover", ()=> {
//   box.style.backgroundColor = "blue";
//   box.style.height= "400px";
//   box.style.color = "white";
// });

// box.addEventListener("mouseout", () => {
//   box.style.backgroundColor = "red";
//   box.style.height="200px"
//   box.style.color = "black";
// });

// const box = document.getElementById("colorBox");

// const colors = ["red", "blue", "green", "orange", "purple", "pink", "yellow"];

// let colorInterval;

// box.addEventListener("mouseover", () => {
//   colorInterval = setInterval(() => {
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];

//     box.style.backgroundColor = randomColor;
//     box.style.color = "white";
//   }, 200); 
// });

// box.addEventListener("mouseout", () => {
//   clearInterval(colorInterval);

//   box.style.backgroundColor = "red";
//   box.style.color = "black";
// });