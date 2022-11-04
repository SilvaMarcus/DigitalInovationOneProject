let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 
let valor = -90
let posicao = elementos.indexOf(valor)


const checkposition = (valor) => {
  
     if(posicao >= 0) {
          
          console.log(`Achei ${valor} na posicao ${posicao} `);
     } else {
          
           console.log(`Numero ${valor} nao encontrado!`);
     }

}
checkposition(valor)