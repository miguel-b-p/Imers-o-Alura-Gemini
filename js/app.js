
// Função para pesquisar ferramentas com base na entrada do usuário
function pesquisar() {
  const section = document.querySelector('.resultados-pesquisa');
  const campoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase().trim();
  section.innerHTML = '';

  if (campoPesquisa.length < 3) {
    section.innerHTML = '<p id="nao-encontrado">Nenhum resultado encontrado</p>';
    return;
  }

  let encontrouResultado = false;

  dados.forEach(dado => {
    const dadoLowerCase = {
      titulo: dado.titulo.toLowerCase(),
      descricao: dado.descricao.toLowerCase(),
      tags: dado.tags.toLowerCase()
    };

    if (dadoLowerCase.titulo.includes(campoPesquisa) || 
        dadoLowerCase.descricao.includes(campoPesquisa) || 
        dadoLowerCase.tags.includes(campoPesquisa)) {
      encontrouResultado = true;
      const item = document.createElement('div');
      item.classList.add('item-resultado');
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
      section.appendChild(item);
    }
  });

  if (!encontrouResultado) {
    section.innerHTML = '<p id="nao-encontrado">Nenhum resultado encontrado</p>';
  }
}

// Função para pesquisar ferramentas por categoria
function pesquisarCategoria(categoria) {
  const section = document.querySelector('.resultados-pesquisa');
  section.innerHTML = '';

  dados.forEach(dado => {
    if (dado.tags.toLowerCase().includes(categoria.toLowerCase())) {
      const item = document.createElement('div');
      item.classList.add('item-resultado');
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
      section.appendChild(item);
    }
  });
}