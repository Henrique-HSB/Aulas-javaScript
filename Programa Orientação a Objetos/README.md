# Introdução a Orientação a Objetos</br>
## Tipos Abstratos de Dados </br>
Enquanto estudamos lógica de programação </br>
trabalhamos com os tipos já presentes na </br>
linguagem de programação que escolhemos. </br>
O que a programação orientada a objetos </br>
nos permite fazer é criar novos tipos </br>
na linguagem. Chamamos esses tipos </br>
de TAD (Tipos Abstratos de Dados).</br>

Esses novos tipos podem ser usados </br>
como estruturas de dados, sendo a </br>
composição de um ou mais tipos já </br>
existentes na linguagem, para representar </br>
algo mais complexo, cada tipo usado para </br>
armazenar valores é chamado de atributo.</br>

E também podem conter comportamentos, </br>
chamados métodos, que nada mais são do </br>
que funções que permitem a alteração e </br>
leitura dos dados ou interagir com o </br>
ambiente externo ao TAD.</br>

Usamos os TADs para mapear de forma </br>
computacional as entidades (reais ou </br>
abstratas) que fazem parte de um </br>
problema que desejamos resolver. </br>
Assim, temos uma visão mais realista </br>
do problema, utilizamos o mesmo </br>
vocabulário do processo real e temos </br>
entidades no código que são compatíveis </br>
com o que vemos na realidade do problema.</br>

Imagine que precisamos fazer uma agenda, </br>
que deve guardar nome, telefone e email </br>
de um número arbitrário de pessoas. </br>
Com o que conheçemos até o momento, </br>
teríamos que fazer 3 vetores, um para </br>
o nome, um para o telefone e um para </br>
o email.

Quando inserirmos um contato, precisaremos </br>
adicionar os dados nos três vetores, e </br>
garantir que eles estejam no mesmo índice, </br>
pois a posição dos dados deve ser a mesma </br>
nos três vetores para podermos agrupá-los </br>
como um contato.

Observe que não temos o conceito do contato </br>
em lugar nenhum, tampouco o conceito de </br>
agenda, tudo está solto no programa e a </br>
ligação dos dados é extremamente frágil </br>
(basta errar o índice e o nome de um vai </br>
aparecer como o telefone de outro).

Em POO (programação orientada a objeto) </br>
faríamos diferente, usaríamos entidades </br>
que pertencem ao domínio com a </br>
nomenclatura utilizada no problema real.</br>

Faríamos então uma entidade (usaremos </br>
esse nome por enquanto) chamada Agenda, </br>
que será um TAD. Faremos também um TAD </br>
para o Contato, que conterá nome, email </br>
e telefone.

Agenda se comportará como uma lista de </br>
Contatos, contendo métodos que permitam </br>
adicionar e remover Contatos, assim como </br>
buscar pelo nome.</br>

Assim, centralizamos toda informação do </br>
contato em uma única entidade o que acaba </br>
com as chances de misturar os dados. </br>
E a entidade Agenda tem a responsabilidade </br>
de manipular os contatos centralizando </br>
as operações que o sistema pode fazer.</br>

O que é importante já perceber é que é </br>
muito mais claro falar de uma Agenda que </br>
é uma Lista de Contatos, do que falar de </br>
três vetores de informação onde os índices </br>
seriam os contatos, sem que exista nada </br>
chamado contato ou agenda no código.</br>

Essa é a ideia da POO, aproximar o </br>
código da "vida real", mapeando processos </br>
usando o mesmo vocabulário que é usado </br>
na "vida real" e dividindo responsabilidades </br>
entre entidades diferentes para não </br>
acumular todo o código em um único programa </br>
enorme que faz tudo.

Criar TADs não é difícil, e os conceitos </br>
que você vai precisar são análogos ao de</br>
variáveis e funções, que já vimos na </br>
lógica de programação.

No entanto, faremos uma mudança de </br>
paradigma de programação, então vamos </br>
sair de um mundo linear onde o código </br>
roda linha a linha, para um onde os </br>
códigos estão dentro das entidades e </br>
são elas que executam as funcionalidades </br>
do sistema.

# Criando Objetos</br>
Normalmente em uma linguagem orientada </br>
a objetos, é necessário criar uma </br>
classe antes de poder criar objetos. </br>
No entanto, como JavaScript é uma linguagem </br>
dinâmica e a orientação a objetos é suportada, </br>
mas não é o paradigma principal de </br>
programação nessa linguagem, é possível </br>
criar objetos sem criar classes.</br>

Isso é útil para quando vamos fazer um </br>
único objeto, usado em um determinado </br>
lugar, mas não precisaremos </br>
reaproveitá-lo em outras partes do sistema.

Para criar objetos sem classes, o </br>
JavaScript se vale de uma notação de </br>
criação de objetos, depois veremos que </br>
é quase idêntico ao JSON, que é uma </br>
representação textual do objeto.

Essa notação é extremamente simples e </br>
concisa. Um objeto é denotado pela </br>
abertura de chaves, os atributos são </br>
pares chave-valor separados por dois </br>
pontos (:) e os métodos são funções.
