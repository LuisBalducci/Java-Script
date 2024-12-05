let calcular = document.getElementById("calcular");

calcular.addEventListener('click', function(e){
    e.preventDefault(); // 

    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if(isNaN(peso) || isNaN(altura)){
        document.getElementById("resposta").innerHTML = "Valores inválidos";
    }else{
        let imc = peso / (altura * altura);
        document.getElementById("resposta").innerHTML = `Seu IMC é ${imc.toFixed(2)}`
    }
}); 