
// Função para pesquisar ferramentas com base na entrada do usuário
function pesquisar() {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos
  let section = document.querySelector('.resultados-pesquisa');
  // Obtém o valor do campo de pesquisa e converte para minúsculas
  let campoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase();
  // Limpa o conteúdo da seção de resultados
  section.innerHTML = '';

  // Verifica se o campo de pesquisa está vazio ou se tem menos de 3 caracteres
  if(!campoPesquisa || campoPesquisa.length < 3){
    // Exibe uma mensagem informando que nenhum resultado foi encontrado
    section.innerHTML = '<p id="nao-encontrado">Nenhum resultado encontrado</p>';
    return; // Sai da função se não houver pesquisa válida
  }
  
  // Variável para verificar se algum resultado foi encontrado
  let encontrouResultado = false;

  // Itera sobre cada objeto no array 'dados'
  dados.forEach(dado => {
    // Converte os campos do objeto para minúsculas para comparação
    let dadoLowerCase = {
      titulo: dado.titulo.toLowerCase(),
      descricao: dado.descricao.toLowerCase(),
      tags: dado.tags.toLowerCase()
    };

    // Verifica se o título, descrição ou tags incluem o texto da pesquisa
    if (dadoLowerCase.titulo.includes(campoPesquisa) || dadoLowerCase.descricao.includes(campoPesquisa) || dadoLowerCase.tags.includes(campoPesquisa)) {
      encontrouResultado = true; // Marca que um resultado foi encontrado
      // Cria um novo elemento div para exibir o resultado
      let item = document.createElement('div');
      item.classList.add('item-resultado'); // Adiciona a classe para estilização
      // Define o conteúdo HTML do item com link, imagem e descrição
      item.innerHTML = `
      <div>
        <a href="${dado.link}" target="_blank"><img src="${dado.imagem}" alt="${dado.titulo}"><h2>${dado.titulo}</h2></a>
        <span class="bar"></span>
        <p class="descricao-meta">${dado.descricao}</p> 
      </div>
    `;
      // Adiciona o item à seção de resultados
      section.appendChild(item);
    }
  });

  // Se nenhum resultado foi encontrado, exibe uma mensagem
  if (!encontrouResultado) {
    section.innerHTML = '<p id="nao-encontrado">Nenhum resultado encontrado</p>';
  }
}

// Função para pesquisar ferramentas por categoria
function pesquisarCategoria(categoria) {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos
  let section = document.querySelector('.resultados-pesquisa');
  // Limpa o conteúdo da seção de resultados
  section.innerHTML = '';

  // Itera sobre cada objeto no array 'dados'
  dados.forEach(dado => {
    // Verifica se as tags do dado incluem a categoria pesquisada
    if (dado.tags.toLowerCase().includes(categoria)) {
      // Cria um novo elemento div para exibir o resultado
      let item = document.createElement('div');
      item.classList.add('item-resultado'); // Adiciona a classe para estilização
      // Define o conteúdo HTML do item com link, imagem e descrição
      item.innerHTML = `
      <div>
        <a href="${dado.link}" target="_blank"><img src="${dado.imagem}" alt="${dado.titulo}"><h2>${dado.titulo}</h2></a>
        <span class="bar"></span>
        <p class="descricao-meta">${dado.descricao}</p> 
      </div>
    `;
      // Adiciona o item à seção de resultados
      section.appendChild(item);
    }
  });
}