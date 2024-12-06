let ponto = 0;
let ponto2 = 0;

document.getElementById("b1").addEventListener("click", function(){
    ponto++;
    document.querySelector(".time1 h3").innerHTML = `Pontuação: ${ponto}`;
});
document.getElementById("b2").addEventListener("click", function(){
    ponto2++;
    document.querySelector(".time2 h3").innerHTML = `Pontuação: ${ponto2}`;
});
document.getElementById("br1").addEventListener("click", function(){
    ponto = 0;
    document.querySelector(".time1 h3").innerHTML = `Pontuação: ${ponto}`;
});
document.getElementById("br2").addEventListener("click", function(){
    ponto2 = 0;
    document.querySelector(".time2 h3").innerHTML = `Pontuação: ${ponto2}`;
});
document.getElementById("bt1").addEventListener("click", function(){
    ponto--;
    document.querySelector(".time1 h3").innerHTML = `Pontuação: ${ponto}`;
});
document.getElementById("bt2").addEventListener("click", function(){
    ponto2--;
    document.querySelector(".time2 h3").innerHTML = `Pontuação: ${ponto2}`;
});