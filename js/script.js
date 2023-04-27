const Envió = document.querySelector("#Enviar")

let saludar=()=>{
    let nombre = document.getElementById("name").value;
    alert(`hola ${nombre}, Bienvenido`)
}


Envió.addEventListener("click",saludar)