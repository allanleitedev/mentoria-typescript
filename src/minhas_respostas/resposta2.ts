/*let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}*/

enum Occupation{
    Atriz,
    Padeiro
}

interface People {
    name: string,
    age: number,
    occupation: Occupation
}


const peopleOne: People = {
    name:'Maria',
    age:29,
    occupation:Occupation.Atriz
}

const peopleTwo: People = {
    name:'Roberto',
    age:19,
    occupation:Occupation.Padeiro
}

const peopleThree: People = {
    name:'Laura',
    age:32,
    occupation:Occupation.Atriz
}

const peopleFour: People = {
    name:'Carlos',
    age:19,
    occupation:Occupation.Padeiro
}