const pantalla = document.querySelector(".pantalla")
const botones = document.querySelectorAll(".boton")
botones.forEach(boton =>{
    boton.addEventListener("click",()=>{
        if (boton.id==="barrauno") {
            if(pantalla.textContent.length === 1 || pantalla.textContent === "¡ERROR!"){
                pantalla.textContent = "0"; 
            }
            else{
                pantalla.textContent =pantalla.textContent.slice(0, -1);
            }
            return ;
        }

        if (boton.id === "borrartotal" ){
            pantalla.textContent = "0";
            return;
        }
        //console.log(boton.textContent)
        if (boton.id === "igual"){
            try{
           
            if(pantalla.textContent.includes("//") || pantalla.textContent === "¡ERROR!"){
                pantalla.textContent = "¡ERROR!"
            }  else{ pantalla.textContent = eval (pantalla.textContent); 

            }         
        } catch {
            pantalla.textContent = "¡ERROR!"
        }
        return;
        } 
        
        const botonEn = boton.textContent;
        if (pantalla.textContent === "0" || pantalla.textContent === "¡ERROR!" ){
            pantalla.textContent = botonEn;
        } 
        else{
        pantalla.textContent += botonEn;
    }
    
    })
})
