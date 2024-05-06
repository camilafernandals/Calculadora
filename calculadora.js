function Soma()
            {
                var e1 = parseInt(document.getElementById("a1").value);
                var e2 = parseInt(document.getElementById("a2").value);
                var resultado = e1 + e2;
                document.getElementById("res").innerHTML= "Resposta: " + resultado;
            }
function Subtração()
            {
                var e1 = parseInt(document.getElementById("a1").value);
                var e2 = parseInt(document.getElementById("a2").value);
                var resultado = e1 - e2;
                document.getElementById("res").innerHTML= "Resposta: " + resultado;
            }
function Multiplicação()
            {
                var e1 = parseInt(document.getElementById("a1").value);
                var e2 = parseInt(document.getElementById("a2").value);
                var resultado = e1 * e2;
                document.getElementById("res").innerHTML= "Resposta: " + resultado;
            }
function Divisão()
            {
                var e1 = parseInt(document.getElementById("a1").value);
                var e2 = parseInt(document.getElementById("a2").value);
                var resultado = e1 / e2;
                document.getElementById("res").innerHTML= "Resposta: " + resultado;
            }