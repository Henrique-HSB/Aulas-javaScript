/*
Map
A função Map é o primeiro caso de aplicação 
de função de alta ordem que vamos ver. 
Essa função é usada para transformar vetores. 
Passamos uma função para o Map, e essa função 
é aplicada a cada item do vetor.

Vamos supor que temos um vetor numérico e 
queremos criar um vetor que é o dobro do 
anterior.
*/

const vetor = [1,2,3,4,5,6];
console.log(vetor)

const dobro = (item)=>2*item;

const vetorDobrado = vetor.map(dobro);
console.log(vetorDobrado)
/*
Criamos a variável dobro para salvar a 
função que recebe um item e retorna o 
mesmo multiplicado por dois. Ao passar 
como parâmetro para o map, que é utilizado 
com um ponto na variável que armazena o 
nosso vetor, a função dobro é chamado onde 
cada item do vetor é passado de parâmetro. 
Então, o resultado é salvo numa nova variável 
vetorDobrado, isso é necessário pois o map 
não altera o vetor original.

É possível passar mais dois parâmetros para 
as funções no map. O primeiro parâmetro é 
sempre o próprio elemento, o segundo é a 
sua posição no vetor e o terceiro é o 
próprio vetor.
*/

// Função que eleva ao quadrado
const aoQuadrado = (item, indice, vetor) => vetor[indice]*item;
const vetore = vetor.map(aoQuadrado);
console.log(vetore)

//É possível escrever a função diretamente dentro do map.

const vetor2 = [1,2,3,4,5,6];
console.log(vetor2);

const vetorTransformado = vetor2.map((x)=>x+1);
console.log(vetorTransformado);
/*
O map exige que seja passado pelo menos 
um parâmetro para a função. Então para 
usar métodos de um tipo específico de dado 
também é necessário fazer a declaração de 
uma função. Exemplo:
*/

const vetor3 = ["a","b","c"];
const toUpper = (str) => str.toUpperCase();
const maiusculas = vetor3.map(toUpper);
console.log(maiusculas);
/*
No código acima tínhamos um vetor de 
caractéres que para passar para maiúsculo 
definimos a função toUpper, que recebe uma 
string e aplica o método toUpperCase.
*/

// Transforma string em inteiro
const vetor4 = ["10", "20", "30"];
console.log(vetor4);
const stringToInt = (x) => parseInt(x);
const vetor5 = vetor4.map(stringToInt);
console.log(vetor5);

const vetor10 = vetor5.map(x =>x*x);
console.log(vetor10);