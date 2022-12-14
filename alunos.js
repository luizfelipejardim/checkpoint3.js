class Aluno {
    constructor(nome, faltas, notas) {
      this.nome = nome;
      this.faltas = faltas;
      this.notas = notas;
    };
  
    //////////metodo calcular media
    calcularMedia() {
      let totalNotas = 0;
      for (let i = 0; i < this.notas.length; i++) {
        totalNotas += this.notas[i];
      }
      return totalNotas / this.notas.length
    };
  
    //////////metodo adicionar 1 falta
    metodoFaltas() {
      this.faltas += 1
    };
  };


  module.exports = {Aluno};