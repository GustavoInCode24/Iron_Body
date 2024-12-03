   // Variáveis para armazenar o estado do usuário
   let usuarioLogado = false;

   // Função para realizar o login
   function login(event) {
       event.preventDefault(); // Previne o envio do formulário

       const email = document.getElementById("email").value;
       const senha = document.getElementById("senha").value;

       // Verificar se o email e a senha correspondem às credenciais predefinidas
       const emailValido = "lucas1@fatec.com";
       const senhaValida = "gustavo2";

       if (email === emailValido && senha === senhaValida) {
           // Salvar estado de login (aqui, no exemplo, é apenas uma simulação)
           usuarioLogado = true;
           localStorage.setItem("usuarioLogado", true); // Salva no localStorage para persistir o estado de login

           // Mostrar mensagem de sucesso
           document.getElementById("mensagemConexao").style.display = "block";
           document.getElementById("mensagemConexao").innerText = "Você foi conectado com sucesso!";

           // Fechar o modal
           $('#loginModal').modal('hide');

           // Mostrar o botão de logout e esconder o de login
           document.getElementById("logoutContainer").style.display = "block";
           document.getElementById("loginLogoutContainer").style.display = "none";
       } else {
           // Se as credenciais estiverem incorretas
           alert("Email ou senha inválidos! Tente novamente.");
       }
   }

   // Função de logout
   function logout() {
       // Resetar estado de login
       usuarioLogado = false;
       localStorage.removeItem("usuarioLogado"); // Remove o estado de login do localStorage

       // Esconder o botão de logout e mostrar o de login
       document.getElementById("logoutContainer").style.display = "none";
       document.getElementById("loginLogoutContainer").style.display = "block";

       // Esconder a mensagem de sucesso
       document.getElementById("mensagemConexao").style.display = "none";
   }

   // Verificar se o usuário está logado ao carregar a página
   window.onload = function() {
       if (localStorage.getItem("usuarioLogado") === "true") {
           // Se o usuário estiver logado
           usuarioLogado = true;
           document.getElementById("logoutContainer").style.display = "block";
           document.getElementById("mensagemConexao").style.display = "block";
           document.getElementById("mensagemConexao").innerText = "Você está conectado!";
           document.getElementById("loginLogoutContainer").style.display = "none"; // Esconde o botão de login
       } else {
           // Se não estiver logado
           document.getElementById("logoutContainer").style.display = "none";
           document.getElementById("mensagemConexao").style.display = "none";
           document.getElementById("loginLogoutContainer").style.display = "block"; // Mostra o botão de login
       }
   };

   // Lidar com o envio do formulário de login
   const loginForm = document.getElementById("loginForm");
   loginForm.addEventListener("submit", login);



   function adicionarCarrinho(nomeProduto, precoProduto) {
    // Cria um objeto com as informações do produto
    const produto = { nome: nomeProduto, preco: precoProduto };
    
    // Armazena no localStorage, se já existir, adiciona ao carrinho, caso contrário, cria um novo carrinho
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(produto);
    
    // Salva o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    
    // Redireciona para a página do carrinho
    window.location.href = 'carrinho.html'; // Altere para o nome do arquivo da página de carrinho
}



  
 

  
 







  
