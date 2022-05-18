// indice         [0]                [1]             [2]                [3]
var jogar=["jogar basquete","jogar video game","jogar futebol", "jogar no celular"]
console.log(jogar)

console.log(jogar[1])
// push acrescenta novos elementos no final do array
jogar.push("jogar handball");
jogar.push("jogar jogo de tabuleiro");
jogar.push("jogar com os amigos")

console.log(jogar)
//pop remove o ultimo elemento do array
jogar.pop();
console.log(jogar)

// exclui um elemento mais peranece com um espaço vazio no array
delete jogar[4];
console.log(jogar)

// deleta permanentemente do array
jogar.splice(1,1)
console.log(jogar)
// o [ ]permite ttocar por um elemento especifico do array
jogar[3]="jogar volei"
console.log(jogar)

function setup() {
  createCanvas(400, 400);




}

function draw() {
  background(220);






}














