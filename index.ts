


// Exemplo 08 Omit
interface Pessoa{
    nome: String;
    idade: number;
    nacionalidade: String;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'>{
}

const brasileiro: Brasileiro = {
    nome: 'Carlos',
    idade: 10, 
}

// Mais exemplos como este em utilitis types 





// Exemplo 07 outra opção para o Exemplo 06 Desenvolvendo Condicionais a partir de parametros 
interface IUsuario1{
    id: String;
    email: String;
    cargo?: 'Gerente' | 'Coordenador' | 'Supervisor';
    // Usando a '?' é defindo que esse campo pode ou não ser preenchido 
}

function redirecione1(usuario1: IUsuario1){
    if(usuario1.cargo){
        //atraves dessa validação e possivel verificar se esse usuario possui IAdmin ou nâo
        // Se Sim vai para Area de Administração 
    }

    // Caso não, vai para area normal de usuario 
}





// Exemplo 06 Desenvolvendo Condicionais a partir de parametros 
interface IUsuario{
    id: String;
    email: String;
}

interface IAdmin extends IUsuario{
    cargo: 'Gerente' | 'Coordenador' | 'Supervisor';
}



function redirecione(usuario: IUsuario | IAdmin){
    if('cargo' in usuario){
        //atraves dessa validação e possivel verificar se esse usuario possui IAdmin ou nâo
        // Se Sim vai para Area de Administração 
    }

    // Caso não, vai para area normal de usuario 
}






// Exemplo Generic types

// function adicionaApendiceALista<NaoSeioTIPO>(array: any[], valor: NaoSeioTIPO){
//     return array.map(item => item + valor );
// }

//No padrão deve se usar Letra "T" maiuscula
function adicionaApendiceALista<T>(array: any[], valor: T){
    return array.map(item => item + valor );
}

adicionaApendiceALista([1,2,3], 4);












// Exemplo Tratando Tags input
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input',(event) => {
    const i =event.currentTarget as HTMLInputElement;
    console.log(`Voce digitou ${i.value}`);
});







// Exemplo 01
function soma(a: number, b: number){
    return console.log(`Soma ${a+b} `); 
    
}

soma(1, 20)


// Exemplo 02
// Types 
// interface Contratos definição de tipos e amarração 

interface IAnimal{
    nome: String;
    tipo: 'terrestre' | 'aquatico';
    executarRugido(alturaEmDecibeis: number): void;

}

//Exemplo com extens = herança 
interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}



const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido:(alturaEmDecibeis) => (`${alturaEmDecibeis} db`)
    
}

// animal.executarRugido('s') Forçando validação de type number
animal.executarRugido(10)

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    executarRugido:(alturaEmDecibeis) => (`${alturaEmDecibeis} db`)
}





// Exemplo 03
// Exemplo de como o Type é mais usado mesclando tipos ou marges
interface IAnimal1{
    nome: String;
    tipo: 'terrestre' | 'aquatico';
}

//Exemplo com extens = herança 
interface IFelino1 extends IAnimal1 {
    visaoNoturna: boolean;
}

//Exemplo com extens = herança 
interface ICanino extends IAnimal1 {
    porte: 'P' | 'M' | 'G';
}

type IDomestico = IFelino | ICanino; 
// "|" esta atuando com a condição OU possibilitando mesclar ou não as propriedade das duas interfaces  
// type IDomestico = IFelino & ICanino; 
// "&" esta atuando com a condição E obrigando a mesclar as propriedade das duas interfaces  

const animal1: IDomestico = {
    nome: 'Cachorro',
    tipo: 'terrestre',
    porte: 'M',
    visaoNoturna: true,
}

const felino1: IFelino1 = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
}