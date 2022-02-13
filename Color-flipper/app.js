const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");


btn.addEventListener('click', function(){
    //add a random number generator between 0 and 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})
function getRandomNumber(){
    //Math.random is between 0 and 1
    return Math.floor(Math.random()*colors.length); //this gives values only between 0 and .9999999 ~1
}