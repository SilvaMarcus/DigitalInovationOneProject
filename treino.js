const requisicao = new XMLHttpRequest();

requisicao.open('GET','http://localhost:3000/profile');

requisicao.send();

requisicao.onload = () => { // ao carregar a pagina o codigo abaixo ira acontecer.

   const data_requisicao = JSON.parse(requisicao.response) // formatado de Json para Objeto. 

    data_requisicao.forEach(element => { // cada element dentro do array vai receber a funcao abaixo 
        tabela.appendChild(criarNovaLinha(element.nome, element.email)) // dentro da div tabela no appendChild, estamos chamando a funcao de criarnovalinha, para usar o element do metodo for each para referenciar com o metodo que a funcao exige. Dado de nome e email estao sendo puxados da variavel data_requisicao que contem o objeto cliente dentro. 

        // o que sera adicionado no appendChild de tabela ? sera adicionado a funcao criarnovalinha(element.nome, element. email) ou seja Felipe e Felipe@hotmail, que tbm estao sendo chamados no conteudo html. 

        // nos usamos o forEach para que a ação seja executada em todos os dados do array. 
        
    });


}
const tabela = document.querySelector('[data-tabela]'); 

const criarNovaLinha = (nome,email) =>{ // funcao para criar linha tr      a funcao estara sendo chamada dentro da funcao onload, e sempre que carregar a pagina a funcao criarnovalinha estara sendo chamada...
    const novaLinhatr = document.createElement('tr')
    
    const conteudo_html = `<td class="td" data-td>${nome}</td> 
                                <td>${email}</td>
                                    <td>
                                        <ul class="tabela__botoes-controle">
                                                <li>
                                                    <a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a>
                                                </li>
                                                <li>
                                                    <button class="botao-simples botao-simples--excluir" type="button">Excluir</button>
                                                </li>
                                        </ul>
                                        </td>`;

novaLinhatr.innerHTML = conteudo_html; 

return novaLinhatr; // vai retornar a estrutura pronta, no momento em que a funcao for chamada e usando os parametros. 

};

