import React, { useEffect } from "react";

function verificaSePertence(numero) {
  let a = 0;
  let b = 1;

  if (numero === a || numero === b) {
    return true;
  }

  while (b < numero) {
    let proximoNumero = a + b;
    a = b;
    b = proximoNumero;
  }

  return b === numero;
}

function verificador() {
  const verificarNumero = 20;

  useEffect(() => {
    const resultado = verificaSePertence(verificarNumero);
    if (resultado) {
      console.log(`${verificarNumero} pertence à sequência de Fibonacci.`);
    } else {
      console.log(`${verificarNumero} não pertence à sequência de Fibonacci.`);
    }
  }, [verificarNumero]);

  return null;
}

export default verificador;
