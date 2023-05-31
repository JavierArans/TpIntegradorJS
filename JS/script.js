

/*
let btnResumen = document.getElementByT("resumen");
    btnResumen.addEventListener("click", total);
   

let btnReset = document.getElementById("reset");
    btnReset.addEventListener("click", reset);

function total(evento){
    
    let ticket = 200;

    let descuento = parseFloat(document.getElementById("Categoria").value);
    let cantidad = document.getElementById("cantidad").value;
    
    let total = (ticket - ticket * (descuento))*cantidad;

    display_total = document.getElementById("total");
    display_total.innerText = "Total a Pagar: $ " + total;
    evento.preventDefault();
   
}
function reset(){
    display_reset = document.getElementById("total");
    display_reset.innerText = "Total a Pagar: $ ";
}
*/

let btnResumen = document.getElementById("resumen");
btnResumen.addEventListener("click", calculo);

let btnReset = document.getElementById("reset");
    btnReset.addEventListener("click", reset);

function validar(evento){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
}



function calculo(evento){
    let ticket = 200;

    let descuento = parseFloat(document.getElementById("Categoria").value);
    let cantidad = document.getElementById("cantidad").value;
    
    let total = (ticket - (ticket * descuento))*cantidad;
    

    display_total = document.getElementById("total");
    display_total.innerText = "Total a Pagar: $ " + total;
    evento.preventDefault();
}

function reset(){
    display_reset = document.getElementById("total");
    display_reset.innerText = "Total a Pagar: $ ";
}


