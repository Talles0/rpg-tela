var ahp1, ahp2, ahp3
var thp1, thp2, thp3


        ahp1 = "100";
        ahp2 = "100";
        ahp3 = "100";

        thp1 = "100";
        thp2 = "100";
        thp3 = "100";

        life1 = ahp1 + "/" + thp1;
        life2 = ahp2 + "/" + thp2;
        life3 = ahp3 + "/" + thp3;

        document.getElementById("hp1").textContent = "HP: " + life1;
        document.getElementById("hp2").textContent = "HP: " + life2;
        document.getElementById("hp3").textContent = "HP: " + life3;

        //Mudar cor dependendo do HP
        //50% de vida
        if(ahp1 <= (thp1/100 * 50)){
            document.getElementById("hp1").style.backgroundColor = "orange";
        }
        if(ahp2 <= (thp2/100 * 50)){
            document.getElementById("hp2").style.backgroundColor = "orange";
        }
        if(ahp3 <= (thp3/100 * 50)){
            document.getElementById("hp3").style.backgroundColor = "orange";
        }
        //20% de vida
        if(ahp1 <= (thp1/100 * 20)){
            document.getElementById("hp1").style.backgroundColor = "red";
        }
        if(ahp2 <= (thp2/100 * 20)){
            document.getElementById("hp2").style.backgroundColor = "red";
        }
        if(ahp3 <= (thp3/100 * 20)){
            document.getElementById("hp3").style.backgroundColor = "red";
        }
        //0% de vida(morto)
        if(ahp1 <= 0){
            document.getElementById("hp1").style.backgroundColor = "black";
        }
        if(ahp2 <= 0){
            document.getElementById("hp2").style.backgroundColor = "black";
        }
        if(ahp3 <= 0){
            document.getElementById("hp3").style.backgroundColor = "black";
        }

        //Recerber dano tomado
        function danoTomado1(){
        var inputDano = document.getElementById("inputdano1");
        
        var inputDanoDigitado = inputDano.value;
        ahp1 = ahp1 - inputDanoDigitado;
        life1 = ahp1 + "/" + thp1;
        document.getElementById("hp1").textContent = "HP: " + life1;

        if(ahp1 <= (thp1/100 * 50)){
            document.getElementById("hp1").style.backgroundColor = "orange";
        }
        if(ahp1 <= (thp1/100 * 20)){
            document.getElementById("hp1").style.backgroundColor = "red";
        }
        if(ahp1 <= 0){
            document.getElementById("hp1").style.backgroundColor = "black";
            ahp1 = 0;
        }
    }
        function danoTomado2(){
        var inputDano = document.getElementById("inputdano2");
        
        var inputDanoDigitado = inputDano.value;
        ahp2 = ahp2 - inputDanoDigitado;
        life2 = ahp2 + "/" + thp2;
        document.getElementById("hp2").textContent = "HP: " + life2;

        if(ahp2 <= (thp2/100 * 50)){
            document.getElementById("hp2").style.backgroundColor = "orange";
        }
        if(ahp2 <= (thp2/100 * 20)){
            document.getElementById("hp2").style.backgroundColor = "red";
        }
        if(ahp2 <= 0){
            document.getElementById("hp2").style.backgroundColor = "black";
            ahp2 = 0;
        }
    }
        function danoTomado3(){
        var inputDano = document.getElementById("inputdano3");
        
        var inputDanoDigitado = inputDano.value;
        ahp3 = ahp3 - inputDanoDigitado;
        life3 = ahp3 + "/" + thp3;
        document.getElementById("hp3").textContent = "HP: " + life3;

        if(ahp3 <= (thp3/100 * 50)){
            document.getElementById("hp3").style.backgroundColor = "orange";
        }
        if(ahp3 <= (thp3/100 * 20)){
            document.getElementById("hp3").style.backgroundColor = "red";
        }
        if(ahp3 <= 0){
            document.getElementById("hp3").style.backgroundColor = "black";
            ahp3 = 0;
        }
    }