/*
Um objeto é denotado pela 
abertura de chaves, os atributos são 
pares chave-valor separados por dois 
pontos (:) e os métodos são funções.

Por exemplo:
*/

const pessoa1 = { nome : "Carlos", idade : 20 };
console.log(pessoa1.nome);

const quadrado = { 
    base : 10, 
    altura : 20, 
    calcularArea : function() { return this.base * this.altura; }
};

console.log(quadrado.calcularArea())


/*
Observe que para nos referirmos a um atributo ou método do 
objeto de dentro dele mesmo precisamos usar o prefixo this 
para saber que é algo que pertence ao objeto e não alguma 
variável declarada previamente.

Podemos inclusive criar objetos dentro de objetos 
ou mesmo vetores sem problemas:
*/

const agenda = {
    contatos : [
        {nome : 'contato1', telefone : 'telefone1', email : 'email1@teste.com'},
        {nome : 'contato2', telefone : 'telefone2', email : 'email2@teste.com'},
        {nome : 'contato3', telefone : 'telefone3', email : 'email3@teste.com'},
        {nome : 'contato4', telefone : 'telefone4', email : 'email4@teste.com'}
    ],
    adicionar : function(contato){ this.contatos.push(contato) }
}
console.log(agenda.contatos);

/*
É simples escrever objetos assim e extremamente 
comum no javascript, no entanto, para escrever 
estruturas reutilizáveis é necessário usar classes.
*/