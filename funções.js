/*
//SOMA

 function soma (a, b) {
    return a + b}

 console.log(soma(10, 20)) 
*/
//FUNÇÃO
/*
function imc(peso, altura){
    return peso / (altura * altura)
}
console.log(imc(100, 1.80));
console.log(imc(189, 1.80));
console.log(imc(100, 1.20));
*/
//ARROW FUNCTION
/*
const imc = (peso, altura) => peso / (altura * altura)
console.log(imc(100, 1.80));
console.log(imc(189, 1.80));
console.log(imc(100, 1.20));
*/
//ARROW IMC
const idade = (age) => {
    switch (true) {
        case age > 0 && age <= 10:
            return "Criança"
        case age >= 11 && age <= 17:
            return "Adolescente"
        case age >= 18 && age <= 59:
            return "Adulto"
        case age >= 60:
            return "Idoso"
        default:
            return "Idade inválida"
    }
}

console.log(idade(22));