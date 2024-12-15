// iniciar campos desabilitados
window.onload = function () {
  document.getElementById("enviar").disabled = true;
  document.getElementById("resultado").hidden = true;
  Swal.fire(
    "Para realizar o teste, você precisa Selecionar o tipo desejado!",
    "",
    "success"
  );
  var inputAll = document.querySelectorAll(".form-control");
  for (var i = 0; i < inputAll.length; i++) {
    inputAll[i].disabled = true;
    inputAll[i].style.background = "rgb(202, 212, 209)";
  }
};

// iniciar mascara dos campos
$(document).ready(function () {
  $("#idade").mask("000", { reverse: true });
  $("#peso").mask("000.00", { reverse: true });
  $("#agua").mask("00", { reverse: true });
  $("#altura").mask("0.00", { reverse: true });
  $("#cintura").mask("0.00", { reverse: true });
  $("#quadril").mask("0.00", { reverse: true });
  $("#joelho").mask("00", { reverse: true });
  $("#pulso").mask("00", { reverse: true });
  
});

//verificar se o usário é visitante
$(document).ready(function () {
  var visitante = document.querySelectorAll(".visitante");
  var anonimo = document.getElementById("anonimo").value;
  for (var i = 0; i < visitante.length; i++) {
    if (anonimo === "Visitante") {
      visitante[i].hidden = true;
      document.getElementById("resultado").hidden = true;
    } else if (anonimo != "Visitante") {
      visitante[i].hidden = false;
      document.getElementById("resultado").hidden = false;
    }
  }
});

//funcao teste bioimpedancia
function select_testeBio() {
  document.getElementById("enviar").hidden = false; //desabilitar form
  var inputBio = document.querySelectorAll(".form-control");
  document.getElementById("sexo").disabled = false;
  document.getElementById("idade").disabled = false;
  document.getElementById("idade").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("peso").value = "";
  document.getElementById("pulso").value = "";
  document.getElementById("joelho").value = "";
  // document.getElementById("enviar").disabled = false; //desabilitar form

  document.getElementById("complementoImc").value = innerHTML = ""; // informação complemento imc
  document.getElementById("seuImc").value = innerHTML = ""; // informação imc
  document.getElementById("complementoRCQ").value = innerHTML = ""; // informação relaçao cintura e quadril
  document.getElementById("seuRCQ").value = innerHTML = ""; // informação relecao cintura quadril
  document.getElementById("datateste").value = innerHTML = ""; // informação data do deste
  document.getElementById("complementomassaossea").value = innerHTML = ""; // informação massa ossea
  document.getElementById("complementoACT").value = innerHTML = ""; // informação agua corporea total

  for (var i = 0; i < inputBio.length; i++) {
    inputBio[i].required = true;
    inputBio[i].disabled = false;
    inputBio[i].style.background = "white";
    console.log(inputBio[i].value);
    document.getElementById("sexo").value === "sexo";
    Swal.fire(
      "Por ser um exame mais completo, Talves você precisa de uma balança especifica, fita Metrica e paquimetro!",
      "",
      "success"
    );
  }
}
//funcao select teste imc
function select_testeImc() {
  var inputBio = document.querySelectorAll(".Bio");
  var inputImc = document.querySelectorAll(".Imc");
  document.getElementById("enviar").hidden = true; //desabilitar form
  document.getElementById("idade").value = "";
  document.getElementById("idade").style.background = "white";
  document.getElementById("cintura").value = "";
  document.getElementById("quadril").value = "";
  document.getElementById("sexo").disabled = true;
  document.getElementById("sexo").value === "sexo";

  document.getElementById("complementoImc").value = innerHTML = ""; // informação complemento imc
  document.getElementById("seuImc").value = innerHTML = ""; // informação imc
  document.getElementById("complementoRCQ").value = innerHTML = ""; // informação relaçao cintura e quadril
  document.getElementById("seuRCQ").value = innerHTML = ""; // informação relecao cintura quadril
  document.getElementById("datateste").value = innerHTML = ""; // informação data do deste
  document.getElementById("complementomassaossea").value = innerHTML = ""; // informação massa ossea
  document.getElementById("complementoACT").value = innerHTML = ""; // informação agua corporea total

  for (var i = 0; i < inputImc.length; i++) {
    inputImc[i].disabled = false;
    inputImc[i].style.background = "white";
    Swal.fire(
      "Para este teste você só precisa preecher seu peso e altura!",
      "",
      "success"
    );
  }
  for (j = 0; j < inputBio.length; j++) {
    inputBio[j].disabled = true;
    inputBio[j].style.background = "rgb(202, 212, 209)";
  }
}
// função apagar campos
function apagar() {
  document.getElementById("resultado").hidden = true;
  let inputAll = document.querySelectorAll(".form-control");
  for (var i = 1; i < inputAll.length; i++) {
    inputAll[i].value = "";
  }
}
// funcão obter resultados
function resultImc() {
  const testeBio = document.getElementById("Bio").checked; // verificar se teste bioimpedancia foi selecionado
  const testeiMC = document.getElementById("Imc").checked; // verificar se teste IMC foi selecionado

  const sexo = document.getElementById("sexo");
  const sexoM = document.getElementById("sexo");
  const sexoF = document.getElementById("sexo");
  const Sexo = sexo.value === "não informado";
  const feminino = sexoF.value === "Feminino";
  const masculino = sexoM.value === "Masculino";
  const idade = document.getElementById("idade").value;
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const cintura = document.getElementById("cintura").value;
  const quadril = document.getElementById("quadril").value;
  const pulso = document.getElementById("pulso").value;
  const joelho = document.getElementById("joelho").value;
  const agua = document.getElementById("agua").value;
  const nome = document.getElementById("Nome").value;

  //funcao calcular imc
  function calcular_Imc() {
    let soma = peso / altura ** 2;
    let imc = soma.toFixed(2);
    return imc;
  }
  const imc = calcular_Imc();

  //funcao calcular se abaixo do peso
  function abaixo_do_Peso() {
    let pesoAb = altura ** 2 * 18.6;
    let Abaixo_do_Peso = peso - pesoAb;
    return Abaixo_do_Peso.toFixed(2);
  }
  const Abaixo_do_Peso = abaixo_do_Peso();

  //funcao calcular se acima do peso
  function acima_do_Peso() {
    let pesoEx = altura ** 2 * 24.9;
    let Acima_do_Peso = peso - pesoEx; // variavel auxiliar para calcular peso acima do ideal
    return Acima_do_Peso.toFixed(2);
  }
  const Acima_do_Peso = acima_do_Peso();

  //funcao para classificar status do peso
  function classificarPeso_Imc() {
    if (imc <= 18.5) {
      var resultado =
        "Abaixo do Peso! seu peso está  " +
        Abaixo_do_Peso +
        " quilos abaixo do ideal";
      return resultado;
    } else if (imc > 18.5 && imc <= 24.99) {
      var resultado = "Seu peso está ideal! " + peso + " Kg";
      return resultado;
    } else if (imc >= 25 && imc <= 29.99) {
      var resultado =
        "Sobre peso, você está acima do peso ideal " + Acima_do_Peso + " Kg";
      return resultado;
    } else if (imc >= 30 && imc <= 34.99) {
      var resultado =
        "Obesidade Grau 1 , você está acima do peso ideal " +
        Acima_do_Peso +
        " Kg";
      return resultado;
    } else if (imc >= 35 && imc <= 39.99) {
      var resultado =
        "Obesidade Grau 2 , você está acima do peso ideal " +
        Acima_do_Peso +
        " Kg ";
      return resultado;
    } else if (imc >= 40) {
      var resultado =
        "Obesidade Grau 3, você está acima do peso ideal " +
        Acima_do_Peso +
        " Kg";
      return resultado;
    }
  }
  const status_peso_corporal = classificarPeso_Imc();
  //funcao para calcular relação quadril e cintura
  function calcular_RCQ() {
    let calculo = cintura / quadril;
    let RCQ = calculo.toFixed(2);
    return RCQ;
  }
  const RCQ = calcular_RCQ();

  //funcao para classificar status Relação quadril e cintura
  function classificar_RCQ() {
    if (
      (testeBio && masculino && RCQ <= 0.83 && idade >= 15 && idade <= 29) ||
      (testeBio && masculino && RCQ <= 0.84 && idade >= 30 && idade <= 39) ||
      (testeBio && masculino && RCQ <= 0.88 && idade >= 40 && idade <= 49) ||
      (testeBio && masculino && RCQ <= 0.9 && idade >= 50 && idade <= 59) ||
      (testeBio && masculino && RCQ <= 0.91 && idade >= 60 && idade <= 100)
    ) {
      var resultado_RCQ = "BAIXO risco para doenças Cardio vasculares";
      return resultado_RCQ;
    } else if (
      (testeBio &&
        masculino &&
        RCQ >= 0.83 &&
        RCQ <= 0.88 &&
        idade >= 15 &&
        idade <= 29) ||
      (testeBio &&
        masculino &&
        RCQ >= 0.84 &&
        RCQ <= 0.91 &&
        idade >= 30 &&
        idade <= 39) ||
      (testeBio &&
        masculino &&
        RCQ >= 0.88 &&
        RCQ <= 0.95 &&
        idade >= 40 &&
        idade <= 49) ||
      (testeBio &&
        masculino &&
        RCQ >= 0.9 &&
        RCQ <= 0.96 &&
        idade >= 50 &&
        idade <= 59) ||
      (testeBio &&
        masculino &&
        RCQ >= 0.91 &&
        RCQ <= 0.98 &&
        idade >= 60 &&
        idade <= 100)
    ) {
      var resultado_RCQ = "Risco MODERADO para doenças Cardio vasculares";
      return resultado_RCQ;
    } else if (
      (testeBio &&
        masculino &&
        RCQ >= 0.89 &&
        RCQ <= 0.94 &&
        idade >= 15 &&
        idade <= 29) ||
      (testeBio &&
        masculino &&
        RCQ >= 0.92 &&
        RCQ <= 0.96 &&
        idade >= 30 &&
        idade <= 39) ||
      (testeBio &&
        masculino &&
        RCQ >= 0.96 &&
        RCQ <= 1.0 &&
        idade >= 40 &&
        idade <= 49) ||
      (testeBio &&
        masculino &&
        RCQ >= 0.97 &&
        RCQ <= 1.02 &&
        idade >= 50 &&
        idade <= 59) ||
      (testeBio &&
        masculino &&
        RCQ >= 0.99 &&
        RCQ <= 1.03 &&
        idade >= 60 &&
        idade <= 100)
    ) {
      var resultado_RCQ = "Risco ALTO para doenças Cardio varsculares";
      return resultado_RCQ;
    } else if (
      (testeBio && masculino && RCQ > 0.94 && idade >= 15 && idade <= 29) ||
      (testeBio && masculino && RCQ > 0.96 && idade >= 30 && idade <= 39) ||
      (testeBio && masculino && RCQ > 1.0 && idade >= 40 && idade <= 49) ||
      (testeBio && masculino && RCQ > 1.02 && idade >= 50 && idade <= 59) ||
      (testeBio && masculino && RCQ > 1.03 && idade >= 60 && idade <= 100)
    ) {
      var resultado_RCQ = "Risco MUITO ALTO para doenças Cardio vasculares";
      return resultado_RCQ;
    }
    // RCQ Para o sexo feminino
    else if (
      (feminino && RCQ <= 0.71 && idade >= 15 && idade <= 29) ||
      (feminino && RCQ <= 0.72 && idade >= 30 && idade <= 39) ||
      (feminino && RCQ <= 0.73 && idade >= 40 && idade <= 49) ||
      (feminino && RCQ <= 0.74 && idade >= 50 && idade <= 59) ||
      (feminino && RCQ <= 0.76 && idade >= 60 && idade <= 100)
    ) {
      var resultado_RCQ = "BAIXO risco para doenças Cardio varsculares";
      return resultado_RCQ;
    } else if (
      (feminino && RCQ >= 0.71 && RCQ <= 0.77 && idade >= 15 && idade <= 29) ||
      (feminino && RCQ >= 0.72 && RCQ <= 0.78 && idade >= 30 && idade <= 39) ||
      (feminino && RCQ >= 0.73 && RCQ <= 0.79 && idade >= 40 && idade <= 49) ||
      (feminino && RCQ >= 0.74 && RCQ <= 0.81 && idade >= 50 && idade <= 59) ||
      (feminino && RCQ >= 0.76 && RCQ <= 0.83 && idade >= 60 && idade <= 100)
    ) {
      var resultado_RCQ = "Risco MODERADO para doenças Cardio vasculares";
      return resultado_RCQ;
    } else if (
      (feminino && RCQ >= 0.78 && RCQ <= 0.82 && idade >= 15 && idade <= 29) ||
      (feminino && RCQ >= 0.79 && RCQ <= 0.84 && idade >= 30 && idade <= 39) ||
      (feminino && RCQ >= 0.8 && RCQ <= 0.87 && idade >= 40 && idade <= 49) ||
      (feminino && RCQ >= 0.82 && RCQ <= 0.88 && idade >= 50 && idade <= 59) ||
      (feminino && RCQ >= 0.84 && RCQ <= 0.9 && idade >= 60 && idade <= 100)
    ) {
      var resultado_RCQ = "Risco ALTO para doenças Cardio vasculares";
      return resultado_RCQ;
    } else if (
      (feminino && RCQ > 0.82 && idade >= 15 && idade <= 29) ||
      (feminino && RCQ > 0.84 && idade >= 30 && idade <= 39) ||
      (feminino && RCQ > 0.87 && idade >= 40 && idade <= 49) ||
      (feminino && RCQ > 0.88 && idade >= 50 && idade <= 59) ||
      (feminino && RCQ > 0.9 && idade >= 60 && idade <= 100)
    ) {
      var resultado_RCQ = "Risco MUITO ALTO para doenças Cardio vasculares";
      return resultado_RCQ;
    }
  }
  const status_RCQ = classificar_RCQ();

  //funcao obter massa ossea
  function calcular_Massa_Ossea() {
    let conversão_pulso = pulso / 100;
    let consversão_joelho = joelho / 100;
    let calculo =
      3.02 * (altura ** 2 * conversão_pulso * consversão_joelho * 400) ** 0.712;
    let resultado_Massa_Ossea = calculo.toFixed(2);
    return resultado_Massa_Ossea;
  }
  const massa_Ossea = calcular_Massa_Ossea();
  //funcao obter data do exame
  function Obter_dia_do_exame() {
    const data = new Date();
    const meses = data.getMonth() + 1;
    const day = data.getDate();
    const ano = data.getFullYear();
    if (meses <= 9) {
      let = Formatmeses = "0" + meses;
    } else if (meses > 9) {
      let = Formatmeses = +meses;
    }
    if (day >= 10) {
      let = Formatadia = +day;
    } else if (day <= 9) {
      let = Formatadia = "0" + day;
    }
    let Data_atual = Formatadia + "/" + Formatmeses + "/" + ano;
    return Data_atual;
  }
  const Data_exame = Obter_dia_do_exame();
  //funcao para calcular agua corporal total

  function calcular_Agua_corporal() {
    let calculo_Agua_corporal = (peso * 35) / 1000; //caulculo para quantidade de agua minima diaria
    let Agua_corporal_total = calculo_Agua_corporal.toFixed(2); // cauculoAgua_corporal_total
    return Agua_corporal_total;
  }
  const Agua_corporal_total = calcular_Agua_corporal();

  //funcao para obterstatus da agua corporal total
  function Status_agua_corporal() {
    if (testeBio && feminino && agua >= 45 && agua <= 65) {
      let status_agua_corporal =
        "Nivel de água Corpórea está em " +
        agua +
        "%, " +
        "Seu indice de água corporal está no nivel ideal, de acordo com seu peso você precisa tomar " +
        Agua_corporal_total +
        " litros de água diariamente.";
      return status_agua_corporal;
    } else if (testeBio && feminino && agua < 45) {
      let status_agua_corporal =
        "Nivel de água Corpórea está em " +
        agua +
        "%, " +
        "Seu indice de água corporal etsá abaixo do nivel ideal, de acordo com seu peso você precisa tomar " +
        Agua_corporal_total +
        " litros de água diariamente.";
      return status_agua_corporal;
    } else if (testeBio && feminino && agua > 65) {
      let status_agua_corporal =
        "Nivel de água Corpórea está em " +
        agua +
        "%, " +
        "Seu indice de água corporal está acima do nivel ideal, de acordo com seu peso você precisa tomar " +
        Agua_corporal_total +
        " litros de água diariamente.";
      return status_agua_corporal;
    } else if (testeBio && masculino && agua >= 50 && agua <= 65) {
      let status_agua_corporal =
        "Nivel de água Corpórea está em " +
        agua +
        "%, " +
        "Seu indice de água corporal está no nivel ideal, de acordo com seu peso você precisa tomar " +
        Agua_corporal_total +
        " litros de água diariamente.";
      return status_agua_corporal;
    } else if (testeBio && masculino && agua < 50) {
      let status_agua_corporal =
        "Nivel de água Corpórea está em " +
        agua +
        "%, " +
        "Seu indice de água corporal etsá abaixo do nivel, ideal de acordo com seu peso você precisa tomar " +
        Agua_corporal_total +
        " litros de água diariamente.";
      return status_agua_corporal;
    } else if (testeBio && masculino && agua > 65) {
      let status_agua_corporal =
        "Nivel de água Corpórea está em " +
        agua +
        "%, " +
        "Seu indice de água corporal está acima do nivel, ideal de acordo com seu peso você precisa tomar " +
        Agua_corporal_total +
        " litros de água diariamente.";
      return status_agua_corporal;
    }
  }
  const status_agua_corporal = Status_agua_corporal();

  function Main() {
    if (testeiMC === false && testeBio === false) {
      Swal.fire(
        "Por Favor Selecione o tipo de Teste IMC ou Bioimpedância",
        "",
        "error"
      );
    } else if (testeBio && Sexo) {
      Swal.fire("Porfavor Defina seu Sexo Para o exame", "", "error");
    } else if (testeBio && idade === "") {
      Swal.fire("você precisa preencher Sua idade", "", "error");
    } else if (testeBio && nome === "") {
      Swal.fire("você precisa preencher Seu Nome", "", "error");
    } else if (testeBio && joelho == "" && pulso == "") {
      Swal.fire(
        "Você precisa preencher os Campos joelho e pulso corretamente",
        "",
        "error"
      );
    } else if (
      (testeBio && pulso === "0") ||
      (testeBio && pulso === "00") ||
      (testeBio && pulso === "0.00") ||
      (testeBio && pulso === "")
    ) {
      Swal.fire(
        "Você precisa preencher o campo Pulso corretamente",
        "",
        "error"
      );
    } else if (
      (testeBio && joelho === "0") ||
      (testeBio && joelho === "00") ||
      (testeBio && joelho === "0.00") ||
      (testeBio && joelho === "")
    ) {
      Swal.fire(
        "Você precisa preencher o o campo joelho corretamente",
        "",
        "error"
      );
    } else if (
      (testeBio && agua === "") ||
      (testeBio && agua === "0") ||
      (testeBio && agua === "00")
    ) {
      Swal.fire(
        "Você precisa preeche a porcentagem da sua água corporal ",
        "",
        "error"
      );
    } else if (testeBio && cintura === "" && quadril === "") {
      Swal.fire(
        "Você precisa preencher os campos CINTURA e QUADRIL corretamente",
        "",
        "error"
      );
    } else if (
      (testeBio && cintura === "") ||
      (testeBio && cintura === "0") ||
      (testeBio && cintura === "0.00") ||
      (testeBio && cintura === "00")
    ) {
      Swal.fire(
        "Você precisa preencher o campo CINTURA corretamente",
        "",
        "error"
      );
    } else if (
      (testeBio && quadril === "") ||
      (testeBio && quadril === "0") ||
      (testeBio && quadril === "0.00") ||
      (testeBio && quadril === "00")
    ) {
      Swal.fire(
        "Você precisa preencher o campo QUADRIL corretamente",
        "",
        "error"
      );
    } else if (peso === "" && altura === "") {
      Swal.fire("Você precisa preencher os Campos PESO e ALTURA", "", "error");
    } else if (
      peso === undefined ||
      peso === "" ||
      peso === "" ||
      peso === "0" ||
      peso === "00.00" ||
      peso === "000.00" ||
      peso === "00" ||
      peso === "0.00"
    ) {
      Swal.fire(
        "Você precisa preencher o campo PESO corretamente",
        "",
        "error"
      );
    } else if (
      altura === undefined ||
      altura === "" ||
      altura === "0" ||
      altura === "0.00" ||
      altura === "00"
    ) {
      
      Swal.fire(
        "Você precisa preencher o campo ALTURA corretamente",
        "",
        "error"
      );

    } else if (
      testeiMC != "" &&
      altura != "" &&
      altura != undefined &&
      altura != "0" &&
      altura != "0.00" &&
      altura != "00" &&
      peso != undefined &&
      peso != "0" &&
      peso != "00.00" &&
      peso != "00" &&
      peso != "0.00" &&
      peso != "000.00"
    ) {
      document.getElementById("datateste").value = innerHTML = Data_exame;
      document.getElementById("complementoImc").value = innerHTML =
        status_peso_corporal;
      document.getElementById("seuImc").value = innerHTML = imc;
      Swal.fire(
        "Seu Imc e = " + imc + " " + status_peso_corporal,
        "",
        "success"
      );
    } else if (
      testeBio &&
      quadril != "" &&
      quadril != "0" &&
      quadril != "0.00" &&
      quadril != "00" &&
      cintura != "" &&
      cintura != "0" &&
      cintura != "0.00" &&
      cintura != "00" &&
      peso != "" &&
      altura != "" &&
      altura != "" &&
      altura != "0" &&
      altura != "0.00" &&
      altura != "00" &&
      peso != "0" &&
      peso != "00.00" &&
      peso != "00" &&
      peso != "0.00" &&
      peso != "000.00" &&
      agua != "" &&
      agua != "0" &&
      agua != "00" &&
      pulso != "0" &&
      pulso != "00" &&
      pulso != "0.00" &&
      pulso != "" &&
      joelho != "0" &&
      joelho != "00" &&
      joelho != "0.00" &&
      joelho != ""
    ) {
      document.getElementById("datateste").value = innerHTML = Data_exame;
      document.getElementById("complementoImc").value = innerHTML =
        status_peso_corporal;
      document.getElementById("seuImc").value = innerHTML = imc;
      Swal.fire(
        "Seu Imc e = " + imc + " " + status_peso_corporal,
        "",
        "success"
      );
      document.getElementById("complementomassaossea").value = innerHTML =
        massa_Ossea;
      document.getElementById("complementoRCQ").value = status_RCQ;
      document.getElementById("seuRCQ").value = innerHTML = RCQ;
      document.getElementById("complementoACT").value = innerHTML =
        status_agua_corporal;
      document.getElementById("enviar").disabled = false;
      document.getElementById("resultado").hidden = false;
    }
  }
  const resultado_do_exame = Main();

  //escutando os campos correspondentes massa ossea
  const PULSO = document.getElementById("pulso");
  PULSO.addEventListener("input", function () {
    document.getElementById("complementomassaossea").value = innerHTML = "";
    document.getElementById("enviar").disabled = true;
    document.getElementById("resultado").hidden = true;
  });

 //escutando os campos nome
 const NOME = document.getElementById("Nome");
 NOME.addEventListener("input", function () {
   document.getElementById("datateste").value = innerHTML = "";
   document.getElementById("complementoACT").value = innerHTML = "";
   document.getElementById("enviar").disabled = true;
   document.getElementById("resultado").hidden = true;
 });

  //escutando os campos correspondentes massa ossea
  const JOELHO = document.getElementById("joelho");
  JOELHO.addEventListener("input", function () {
    document.getElementById("complementomassaossea").value = innerHTML = "";
    document.getElementById("enviar").disabled = true;
    document.getElementById("resultado").hidden = true;
  });

  //escutando os campos correspondentesAgua_corporal_total
  const AGUA = document.getElementById("agua");
  AGUA.addEventListener("input", function () {
    document.getElementById("datateste").value = innerHTML = "";
    document.getElementById("complementoACT").value = innerHTML = "";
    document.getElementById("enviar").disabled = true;
    document.getElementById("resultado").hidden = true;
  });
  //escutando os campos correspondentes RCQ
  const QUADRIL = document.getElementById("quadril");
  QUADRIL.addEventListener("input", function () {
    document.getElementById("complementoRCQ").value = innerHTML = "";
    document.getElementById("seuRCQ").value = innerHTML = "";
    document.getElementById("enviar").disabled = true;
    document.getElementById("resultado").hidden = true;
  });

  const CINTURA = document.getElementById("cintura");
  CINTURA.addEventListener("input", function () {
    document.getElementById("complementoRCQ").value = innerHTML = "";
    document.getElementById("seuRCQ").value = innerHTML = "";
    document.getElementById("enviar").disabled = true;
    document.getElementById("resultado").hidden = true;
  });

  //escutando os campos correspondentes RCQ
  const IDADE = document.getElementById("idade");
  IDADE.addEventListener("input", function () {
    document.getElementById("complementoRCQ").value = innerHTML = "";
    document.getElementById("seuRCQ").value = innerHTML = "";
    document.getElementById("enviar").disabled = true;
    document.getElementById("resultado").hidden = true;
  });

  //escutando os campos correspondentes IMC
  const PESO = document.getElementById("peso");
  PESO.addEventListener("input", function () {
    document.getElementById("complementoImc").value = innerHTML = "";
    document.getElementById("seuImc").value = innerHTML = "";
    document.getElementById("complementoACT").value = innerHTML = "";
    document.getElementById("enviar").disabled = true;
    document.getElementById("resultado").hidden = true;
  });

  const ALTURA = document.getElementById("altura");
  ALTURA.addEventListener("input", function () {
    document.getElementById("complementomassaossea").value = innerHTML = "";
    document.getElementById("complementoImc").value = innerHTML = "";
    document.getElementById("seuImc").value = innerHTML = "";
    document.getElementById("enviar").disabled = true;
    document.getElementById("resultado").hidden = true;
  });

  const SEXO = document.getElementById("sexo");
  SEXO.addEventListener("input", function () {
    document.getElementById("complementoRCQ").value = innerHTML = "";
    document.getElementById("seuRCQ").value = innerHTML = "";
    document.getElementById("complementoACT").value = innerHTML = "";
    document.getElementById("enviar").disabled = true;
    document.getElementById("resultado").hidden = true;
  });

  return resultado_do_exame;
}
