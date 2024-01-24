let buttonNo = document.getElementById('no_button')
let buttonYes = document.getElementById('yes_button')
let imgChange = document.getElementById("panda_img")
let textDate = document.getElementById("text_date");

    
    
    buttonNo.style.position = 'absolute';

    buttonNo.addEventListener("mouseover", function(){

        
        buttonNo.style.top = Math.random()* window.innerHeight + "px"
        buttonNo.style.left = Math.random() * window.innerWidth +"px"

        
        
    });

const yesButton=()=>{

    imgChange.src="./pandadance.gif";

    textDate.innerText="Yayy Finally it's a date 🐼😘"
    buttonYes.style.display = 'none'
    buttonNo.style.display = 'none'


    
}
