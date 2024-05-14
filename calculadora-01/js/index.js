function soma() {
    var operacao = "+";
    document.getElementById('operacao').innerHTML = operacao;
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 + num2;
    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
  }
  
  function subtracao() {
    var operacao = "-";
    document.getElementById('operacao').innerHTML = operacao;
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 - num2;
    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
  }
  
  function multiplicacao() {
    var operacao = "*";
    document.getElementById('operacao').innerHTML = operacao;
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 * num2;
    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
  }
  
  function divisao() {
    var operacao = "/";
    document.getElementById('operacao').innerHTML = operacao;
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
      document.getElementById('resultado').innerHTML = 'Não é possível dividir por zero';
    } else {
      var resultado = num1 / num2;
      document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
    }
  }