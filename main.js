let btn1=document.getElementById('calcular');
let btn2=document.getElementById('reiniciar');
function calcular() {
    let pesoPersona=document.getElementById('peso').value;
    let alturaPersona=document.getElementById('altura').value;
    if(alturaPersona%1==0){
        alturaPersona=alturaPersona/100;
        let imc=pesoPersona/(alturaPersona*alturaPersona);
        document.getElementById('output').innerHTML=imc.toFixed(1);
        if(imc<=18.4){
            document.getElementById("output").style.backgroundColor="rgb(101, 250, 242)";
        }else if(imc>18.5 && imc<25){
            document.getElementById("output").style.backgroundColor="green";
        }else if(imc>=25 && imc<29.9){
            document.getElementById("output").style.backgroundColor="yellow";
        }else if(imc>=30 && imc<34.9){
            document.getElementById("output").style.backgroundColor="orange";
        }else if(imc>=35 && imc<39.9){
            document.getElementById("output").style.backgroundColor="rgb(255, 94, 0)";
        }
        else if(imc>=40){
            document.getElementById("output").style.backgroundColor="red";
        }

    }else{
        let imc=pesoPersona/(alturaPersona*alturaPersona);
        document.getElementById('output').innerHTML=imc.toFixed(1);
        if(imc<=18.4){
            document.getElementById("output").style.backgroundColor="cyan";
        }else if(imc>=18.5 && imc<25){
            document.getElementById("output").style.backgroundColor="green";
        }else if(imc>=25 && imc<29.9){
            document.getElementById("output").style.backgroundColor="yellow";
        }else if(imc>=30 && imc<34.9){
            document.getElementById("output").style.backgroundColor="orange";
        }else if(imc>=35 && imc<39.9){
            document.getElementById("output").style.backgroundColor="rgb(255, 94, 0)";
        }else if(imc>=40){
            document.getElementById("output").style.backgroundColor="red";
        }
    }
   
    

    
}
function reiniciar() {
    document.getElementById('peso').value="";
    document.getElementById('altura').value="";
    document.getElementById('output').innerHTML="";


    
}
btn1.addEventListener('click', calcular);
btn2.addEventListener('click', reiniciar);