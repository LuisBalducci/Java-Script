function calculaTabuada(){
    //Obtendo elemenos da DOM
    let tabuada = documentquerySelector("#tabuada tbody");
    let valorA = documentquerySelector("#valorA").value;

    //Validando inputs
    if(valorA.value.length == 0){
        window.alert("Por favor, digite um número valido");
        return;
    }

    let numero = parseInt(valorA.value);
}