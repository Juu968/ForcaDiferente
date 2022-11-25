
function addUser() {
    player1Name = document.getElementById("player1NameInput").value;
    player2Name = document.getElementById("player2NameInput").value; //Adicione o ID do segundo player
  
      localStorage.setItem("player1Name", player1Name);
      localStorage.setItem("player2Name", player2Name); // Adicione o código localStorage
  
      window.location = "game_page.html"; //Adicione o nome da segunda página que abrirá quando a função for chamada
  }
  
  