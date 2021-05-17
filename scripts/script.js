// API Key: ac6ae4de1b0bdeb3578e1f6456650875
// Usar http://data.fixer.io/api/latest para pedir los datos más recientes
const apikey = 'ac6ae4de1b0bdeb3578e1f6456650875';
const btn = document.querySelector("#btn-convertir");
const resultp = document.querySelector(".resultado");
const errortxt = document.querySelector(".error");
const inputdest = document.querySelector("#target");
function initcheck(x,y){
    if(isNaN(parseFloat(document.querySelector("#source").value))){
        errortxt.textContent = "Introduzca una cantidad válida.";
        errortxt.style.display = "block";
        errortxt.style.color = "#C00000";
    } else{
        if(x == y){
            errortxt.textContent = "La divisa a convertir debe ser diferente de la divisa base";
            errortxt.style.display = "block";
            errortxt.style.color = "#C00000";
        }else{
            errortxt.style.display = "none";
            errortxt.textContent = " ";
            converx(x,y);
        }
    }
}
function converx(b,d){
    $.ajax({
        url: 'https://data.fixer.io/api/latest' + '?access_key=' + apikey + '&base=' + b + '&symbols=' + d,
        dataType: 'jsonp',
        success: function(json) {
        var r = json.rates[d];
        resultp.textContent="1 " + b + " = " + r + " " + d;
        resultp.style.color = "#0f4c81";
        var valorconv = document.querySelector("#source").value;
        resultp.style.display = "block";
        var conversion = parseFloat(valorconv) * parseFloat(r);
        inputdest.setAttribute("value", conversion);
        }
    });
}
btn.addEventListener("click", function(){
    var base = document.querySelector("#select-base");
    var basev = base.options[base.selectedIndex].value;
    var dest = document.querySelector("#select-dest");
    var destv = dest.options[dest.selectedIndex].value;
    initcheck(basev, destv);
})

