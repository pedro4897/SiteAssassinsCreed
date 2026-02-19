 // Array de jogos com informações
const games = [
    {
        nome: "Assassin's Creed",
        ano: 2007,
        descricao:"Primeiro jogo da saga, introduzindo Altaïr e a luta entre Assassinos e Templários. AltaÏr é um lendário assassino, que serviu ao grande mestre Al Mualim",
       
    },
    {
        nome: "Assassin's Creed II",
        ano: 2009,
        descricao: "Continuação com Ezio Auditore, explorando a Itália renascentista.",
       
    },
    {
        nome: "Assassin's Creed Brotherhood",
        ano: 2010,
        descricao: "Ezio continua sua jornada em Roma, liderando a irmandade dos Assassinos.",
         
    }
    // ... você pode adicionar os outros jogos aqui
];

// Função que atualiza a página com as informações
function loadGame(gameId) {
    const jogo = games[gameId - 1]; // -1 porque array começa em 0
    if (jogo) {
        const contentDiv = document.getElementById("content");
        contentDiv.innerHTML = `
            <h2 class="nome"> ${jogo.nome} (${jogo.ano})</h2>
            <p class="descricao">${jogo.descricao}</p>
        `;
    } else {
        alert("Jogo não encontrado!");
    }
    
}
