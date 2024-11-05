let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas: [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
  ];
  
  function calcularMedia(atletas) {
    // Para cada atleta da lista
    atletas.forEach(atleta => {
      // Ordena as notas para poder desconsiderar a maior e a menor
      let notasOrdenadas = atleta.notas.sort((a, b) => a - b);
  
      // Elimina a menor e a maior nota
      let notasValidas = notasOrdenadas.slice(1, 4);
  
      // Calcula a média das três notas restantes
      let soma = notasValidas.reduce((acc, nota) => acc + nota, 0);
      let media = soma / notasValidas.length;
  
      // Exibe os resultados
      console.log(`Atleta: ${atleta.nome}`);
      console.log(`Notas Obtidas: ${atleta.notas.join(",")}`);
      console.log(`Média Válida: ${media.toFixed(6)}`);
      console.log(); // linha em branco para separar os resultados dos atletas
    });
  }
  
  // Chama a função passando o array de atletas
  calcularMedia(atletas);
  