//contador
var contador = 0;

//Sign In ..
var signIn = document.getElementById("submit-btn")
//Usepasscode
var passCode = document.getElementById("btn-pascode")

//Ventana emergente
var alertp = document.getElementById("popup")
var alertp2 = document.getElementById("popup2")
var alertp3 = document.getElementById("popup3")

//boton OK
var btnOk = document.getElementById("btn-ok")
//boton Cancel
var btnCancel = document.getElementById("btn-cancel")

//listeners
signIn.addEventListener('click',open);
btnOk.addEventListener('click',close);
btnCancel.addEventListener('click',close);
passCode.addEventListener('click',pass)

//funcion passcode
function pass(){
    alertp3.classList.add("active")
}

//funcion abrir
function open(){
    contador = contador + 1
    if(contador >= 2){
        alertp2.classList.add("active")
    }else{
        alertp.classList.add("active")
    }
}

//funcion cerrar
function close(){
    alertp.classList.remove("active")
    alertp2.classList.remove("active")
}