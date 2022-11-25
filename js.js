// Você deverá pegar o item 'player1Name' que está dentro do localStorage e guardar dentro da variável
player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");

player1Score = 0;// defina a pontuação inicial 
player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").innerHTML = player1Score ;
document.getElementById("player2Score").innerHTML = player2Score ;

document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;


function send() {
getWord = document.getElementById("word").value;
word = getWord.toLowerCase();
// 'charAt'retorna uma parte da string, começando no índice especificado
charAt1 = word.charAt(1);

//Na linha 26 você está divindo o comprimento da palavra por 2 e esse número será o índice(posição) da letra que aparecerá. Utilize o código 'lenght' para obter o comprimento da palavra
lenghtDivide2 = Math.floor(word.lenght/2);
charAt2 = word.charAt(lenghtDivide2);

lenghtMinus1 = word.charAt - 1; 
charAt3 = word.charAt(lenghtMinus1); 

//O código 'replace' substitui a letra, pelo caractere '_', na posição chartAt
removeCharAt1 = word.replace(charAt1, "_");
removeCharAt2 = removeCharAt1.replace(charAt2, "_");
removeCharAt3 = removeCharAt2.replace(charAt3, "_");


question_word = "<h4 id='wordDisplay'> P. "+removeCharAt3+"</h4>";
inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
row =  question_word + inputBox + checkButton ; 
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}


questionTurn = "player1";
answerTurn = "player2";


function check()
{
getAnswer = document.getElementById("inputCheckBox").value;

//utilize o código que retorna o valor da string que foi chamada convertido para minúsculo.
answer = getAnswer.toLowerCase();

//Se resposta for igual a palavra, ou seja se answer for igual word
if(answer == word)	
{
    if(answerTurn == "player1")
    {
        //Adicione a pontuação
        player1Score = player1Score +1;
        //Variável que guarda a pontuação do primeiro jogador
        document.getElementById("player1Score").innerHTML = player1Score;
    }
    else 
    {
        //Else significa 'senão', então se o primeiro jogador não acertar, o segundo jogador, ganhará um ponto
        player2Score = player2Score +1;
        //Variável que guarda a pontuação do segundo jogador
        document.getElementById("player2Score").innerHTML = player2Score;
    }
}
if(questionTurn == "player1")
{
    questionTurn = "player2"
    document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player2Name ;
}
else 
{
    questionTurn = "player1"
    document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
}

if(answerTurn == "player1")
{
    answerTurn = "player2"
    document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;
}
else 
{
    answerTurn = "player1"
    document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player1Name ;
}

document.getElementById("output").innerHTML = "";
}