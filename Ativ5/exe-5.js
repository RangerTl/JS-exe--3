var altura = window.prompt("digite sua altura : ");  
var sexo  = window.prompt("digite seu sexo :");

altura = altura.split(",");
sexo = sexo.split(",");

var masculino = 0;
var feminino = 0;

var maiorAltura = parseFloat(altura[0]);
var sexoMaiorAltura = sexo[0];

for (i = 0; i < sexo.length; i++ ) {

    if (sexo[1] == "masculino") {

     masculino++;

    }

    else if (sexo[1] == "feminino"){

        feminino++;

    }

    if(parseFloat(altura[1]) > maiorAltura) {

       maiorAltura = parseFloat(altura[1]);
       sexoMaiorAltura = sexo[1];

    }

}

   alert("masculino: "+masculino+"- feminino : "+feminino);
   alert("sua maior altura é "+maiorAltura+"e seu sexo é "+sexoMaiorAltura);