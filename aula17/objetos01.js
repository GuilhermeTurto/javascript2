let amigo = {nome: 'Guilherme',
sexo: 'M',
altura: 1.80,
cresceu(a){
  console.log('Cresceu')
  this.altura += a
}}

amigo.cresceu(1)
console.log(`${amigo.nome} cresceu ${amigo.altura}Centimetros`)
console.log('MEDIDA POR CENTIMETROS!!!')