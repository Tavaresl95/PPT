let computerHand = ''
let num = Math.floor(Math.random() * 3) + 1
let input = prompt("Pedra, papel ou tesoura?").toLowerCase()

const computerPlay = () => {
    if (num === 1){
        computerHand = 'pedra'
    }
    else if(num === 2){
        computerHand = 'papel'
    }
    else if(num === 3){
        computerHand = 'tesoura'
    }
    
}

const game = (computerHand, input) => {
    if(input !== 'papel' && input !== 'tesoura' && input !== 'pedra'){
        console.log('Coloque uma mão válida!')
        
    }
    else if (computerHand === input){
        console.log(`Isso foi um empate! ${computerHand} e ${input}!!!`)
    }
    
    else if(computerHand === 'pedra' && input === 'tesoura'){
        console.log(`Você perdeu! ${computerHand} ganha de ${input} !!!`)
    }
    else if (computerHand === 'pedra' && input === 'papel'){
        console.log(`Você ganhou! ${input} ganha de ${computerHand} !!!`)
    }
    else if (computerHand === 'papel' && input === 'pedra' ){
        console.log(`Você perdeu! ${computerHand} ganha de ${input} !!!`)
    }
    else if (computerHand === 'papel' && input === 'tesoura'){
        console.log(`Você ganhou! ${input} ganha de ${computerHand} !!!`)
    }
    else if (computerHand === 'tesoura' && input === 'pedra'){
        console.log(`Você ganhou! ${input} ganha de ${computerHand} !!!`)
    }
    else if(computerHand === 'tesoura' && input === 'papel'){
        console.log(`Você perdeu! ${computerHand} ganha de ${input} !!!`)
    }
}

computerPlay()
game(computerHand, input)