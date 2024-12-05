let calcular = document.getElementById("calcular");

calcular.addEventListener('click', function(e){
    e.preventDefault(); // Prevenir o envio do formulario

    //Pegar os valores dos inputs
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    //Verificar se os valores são validos
    if(isNaN(numero1) || isNaN(numero2)){
        document.getElementById("resposta").innerHTML = "Valores inválidos";
    }else{
        let soma = numero1 + numero2;
        document.getElementById("resposta").innerHTML = `${numero1} + ${numero2} = ${soma}`
    }
}); 