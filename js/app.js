
// Função para pesquisar ferramentas com base na entrada do usuário
function pesquisar() {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos
  const section = document.querySelector('.resultados-pesquisa');
  
  // Obtém o valor do campo de pesquisa, convertendo para minúsculas e removendo espaços em branco
  const campoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase().trim();
  
  // Limpa o conteúdo da seção de resultados
  section.innerHTML = '';

  // Verifica se o campo de pesquisa tem menos de 3 caracteres
  if (campoPesquisa.length < 3) {
    // Exibe mensagem de "nenhum resultado encontrado" se a pesquisa for muito curta
    section.innerHTML = '<p id="nao-encontrado">Nenhum resultado encontrado</p>';
    return; // Sai da função
  }

  // Variável para verificar se algum resultado foi encontrado
  let encontrouResultado = false;

  // Itera sobre cada item no array de dados
  dados.forEach(dado => {
    // Converte os campos do dado para minúsculas para facilitar a comparação
    const dadoLowerCase = {
      titulo: dado.titulo.toLowerCase(),
      descricao: dado.descricao.toLowerCase(),
      tags: dado.tags.toLowerCase()
    };

    // Verifica se o título, descrição ou tags do dado incluem a pesquisa do usuário
    if (dadoLowerCase.titulo.includes(campoPesquisa) || 
        dadoLowerCase.descricao.includes(campoPesquisa) || 
        dadoLowerCase.tags.includes(campoPesquisa)) {
      // Se um resultado for encontrado, altera a variável para true
      encontrouResultado = true;
      
      // Cria um novo elemento div para exibir o resultado
      const item = document.createElement('div');
      item.classList.add('item-resultado'); // Adiciona a classe para estilização
      
      // Define o conteúdo HTML do item com link, imagem e descrição
      item.innerHTML = `
        <div>
          <a href="${dado.link}" target="_blank">
            <img src="${dado.imagem}" alt="${dado.titulo}">
            <h2>${dado.titulo}</h2>
          </a>
          <span class="bar"></span>
          <p class="descricao-meta">${dado.descricao}</p>
        </div>
      `;
      
      // Adiciona o item à seção de resultados
      section.appendChild(item);
    }
  });

  // Se nenhum resultado foi encontrado, exibe a mensagem correspondente
  if (!encontrouResultado) {
    section.innerHTML = '<p id="nao-encontrado">Nenhum resultado encontrado</p>';
  }
}

// Função para pesquisar ferramentas por categoria
function pesquisarCategoria(categoria) {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos
  const section = document.querySelector('.resultados-pesquisa');
  
  // Limpa o conteúdo da seção de resultados
  section.innerHTML = '';

  // Itera sobre cada item no array de dados
  dados.forEach(dado => {
    // Verifica se as tags do dado incluem a categoria pesquisada
    if (dado.tags.toLowerCase().includes(categoria.toLowerCase())) {
      // Cria um novo elemento div para exibir o resultado
      const item = document.createElement('div');
      item.classList.add('item-resultado'); // Adiciona a classe para estilização
      
      // Define o conteúdo HTML do item com link, imagem e descrição
      item.innerHTML = `
        <div>
          <a href="${dado.link}" target="_blank">
            <img src="${dado.imagem}" alt="${dado.titulo}">
            <h2>${dado.titulo}</h2>
          </a>
          <span class="bar"></span>
          <p class="descricao-meta">${dado.descricao}</p>
        </div>
      `;
      
      // Adiciona o item à seção de resultados
      section.appendChild(item);
    }
  });
}