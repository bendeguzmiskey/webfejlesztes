function eredmenyek() {

//helyes válaszok száma
    var HelyesValaszok = 0;
  
//egy cikus a válaszok begyűjtésere egy listába
for(var i = 1; i <= 7; i++) {
    var ValaszNeve = document.getElementsByName('válasz'+i);
    //egy ciklus a válaszok vizsgálatára, helyes válaszok számára, válaszok színezésére
    for (var j = 0; j < ValaszNeve.length; j++) {
        var ValaszErtek = ValaszNeve[j];
        if (ValaszErtek.checked) {
            if (ValaszErtek.value == "helyes") {
                HelyesValaszok++;
            }
            if (ValaszErtek.value == "hibas") {
                ValaszErtek.nextSibling.style.color = "red";
            } 
        }
        if (ValaszErtek.value == "helyes") {
            ValaszErtek.nextSibling.style.color = "green";
        }
        
    }
}
  document.getElementById('eredmenyek').innerHTML = "Helyes válaszok száma: " + HelyesValaszok;
}