


function somar(){
    var n1= parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);
    var resultado=n1+n2;

    document.getElementById("result").innerHTML = resultado;

    console.log(n1);
    console.log(n2);
    console.log(resultado);
}
