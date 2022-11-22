const allButtons = document.querySelectorAll(".btn")

const blue = new Audio('sounds/blue.mp3')
const green = new Audio('sounds/green.mp3')
const yellow = new Audio('sounds/yellow.mp3')
const magenta = new Audio('sounds/magenta.mp3')



allButtons.forEach(element => { 
    element.addEventListener('click',function(event){
        let color = event.target.classList[0];
        if(color==='green') green.play(); 
        if(color==='magenta') magenta.play(); 
        if(color==='blue') blue.play(); 
        if(color==='yellow') yellow.play(); 
        event.target.classList.add("pressed");
        setTimeout(() => event.target.classList.remove("pressed"), 300);
          
    })
});

console.log(colorsAll)
