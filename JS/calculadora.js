//Traigo los elemetos del HTML
var textAltura=document.getElementById("Altura");
var textPeso=document.getElementById("Peso");
var textIMC=document.getElementById("IMC");
var boton = document.getElementById("botoncito");
var clasifacion = document.getElementById("clasificacion");
var resultado;

//Me encuentro a la escpera del click sobre "Calcular"
boton.addEventListener("click",validarIndiceMasaMuscular);


//Funcion tras hacer Click
function validarIndiceMasaMuscular() 
{
    //Me aseguro que ningun campo sea imcompleto
    if (textAltura.value == "" || textPeso.value == "")
    {
        resultado = "Ingrese Ambos valores"
        textIMC.style.backgroundColor = '#f58382';
    }else { 
        resultado = textPeso.value/(textAltura.value*textAltura.value);        
        textIMC.style.backgroundColor = '#43e3e8';
    }     
    //Entrego el mensaje de resultado
    textIMC.value=resultado;

    //Comparacion para poder dar el valor de refencia segun resultado
    if (resultado > 0 && resultado <18.5) {
        clasifacion.innerHTML = "Desnutricion";
        clasifacion.style.backgroundColor = '#444542';
    }else if(resultado >= 18.5 && resultado < 24.9) {
        clasifacion.innerHTML = "Normal";
        clasifacion.style.backgroundColor = '#32c92a';
    }else if(resultado >= 24.9 && resultado < 29.9){
        clasifacion.innerHTML = "Sobrepeso";
        clasifacion.style.backgroundColor = '#dce30e';
    }else if(resultado >= 29.9 && resultado <= 34.9){
        clasifacion.innerHTML = "Obesidad";
        clasifacion.style.backgroundColor = '#de7010';      
    }else if(resultado > 34.9){
        clasifacion.innerHTML = "Obsesidad morbida";
        clasifacion.style.backgroundColor = '#e30e0e';
    }
    //Mensaje vacio en caso de no haber resultado
    else{
        clasifacion.innerHTML = ""
    }

}