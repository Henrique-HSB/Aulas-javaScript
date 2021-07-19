/*
Vetores
Vetor é uma sequência ordenada de valores.
Também é chamado pelo nome em inglês, array.
É denotado pelo uso de colchetes, 
com os valores separados por vírgula. 
Exemplo:
*/

let vetor1 = [1,2,3,4,5,6,7,8,9,10];

/*
Também é possível declarar o vetor vazio e ir 
adicionando pela posição os elementos:
*/

let vetor2 = [];
vetor2[0] = 'teste';
vetor2[1] = 'teste2';

/*
Além de índice numérico é possível fazer índice 
associativo usando strings.
*/
vetor2['indice1'] = 'teste';
vetor2['indice2'] = 'teste2';

/*
Vetores são heterogêneos, isto é, podem guardar 
valores de tipos diferentes:
*/

let vetore = [1,2,3,'a','b','c',true,false];
let primeiro_elemento = vetore[0];
let quinto_elemento = vetore[4];

/*
Porém, uma boa prática é construir vetores 
de um único tipo de dado. Para conseguir 
acessar um elemento específico, basta 
passar em colchetes o índice (posição) 
do elemento no vetor. Sendo a contagem 
da esquerda para a direita, iniciando em 0.

Percorrendo o Vetor
Usando a estrutura de repetição for é 
possível percorrer todos os elementos de 
um vetor:
*/

let vetor3 = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < vetor3.length; i++){
    console.log(vetor3[i]);
}

/*

O i do for vai do valor 0 até o comprimento 
do vetor menos um. Note que vetor.
length retorna o comprimento do mesmo.

Há ainda dois laços for especiais que 
permitem percorrer um vetor com maior 
facilidade. O for-of:
*/

const vetor4 = [10,20,30,40,50];
for(let valor of vetor4){
    console.log(valor);
}


/*
O for-of recebe um vetor e a variável 
declarada vai possuir os valores dos 
elementos do vetor. Assim percorrendo 
diretamente o array inteiro.

A alternativa é o for-in, onde a variável 
declarada assume o valor dos índices do 
vetor passado:
*/

const vetor5 = [10,20,30,40,50];

for(let indice in vetor5){
    console.log(indice, vetor5[indice]);
}

/*
Matrizes
Matrizes são vetores muiltidimencionais, 
isto é, é um vetor de vetores. Portanto 
tudo que se aplica a vetor também vale 
para matrizes. A declaração de uma matriz 
segue o padrão
*/

const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let linha of matriz){
    for (let dado of linha){
        console.log(dado);
    }
}

/*
Para percorrer os elementos de uma matriz 
é necessário aninhar laços for. O primeiro 
para percorrer as linhas e o segundo os 
elementos dessa linha.

Vetores Dinâmicos
Em JavaScript vetores são estruturas de 
dados dinâmicas, isto é, de tamanho variável. 
Para adicionar um elemento ao final do vetor,
faça:
*/

let vetor6 = [10,20,30,40,50];
let novo_elemento = 60;

vetor6.push(novo_elemento);

//Para remover do final:

let vetor7 = [10,20,30,40,50];
vetor7.pop();

//Para adicionar ao começo:

let vetor8 = [10,20,30,40,50];
let novo_elemento1 = 0;

vetor8.unshift(novo_elemento1);

//Para remover do começo:

let vetor9 = [10,20,30,40,50];
vetor9.shift();

