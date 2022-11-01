
// ==========REQUISICAO FETCHAPI que nos retorna uma promise
  const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`) 
    .then((data) => {
        if(data.ok) {
          return data.json()
        }
        throw new Error ('Não Foi possivel listar os Clientes')
  })

} //========== REQUISICAO FETCHAPI que nos retorna uma promise

// Requisicao Fetch, para acessar o banco de dados, para assim usar o metodo POST e enviar o cadastro do cliente
// uma vez que o cadastro é enviado, ja sera exibido na tela, pois ja programamos para que os dados sejam enviados para tabela da web. 


 const criarCliente = (nome, email) => {
    return fetch(
       `http://localhost:3000/profile`,{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ 
          nome: nome,
          email:email
        })
      })
      .then(resposta=>{
        if(resposta.ok){
          return resposta.body
        }
        throw new Error ('Não Foi possivel criar um Clientes')    
      })
 };


 const removeCliente = (id) => {
   return fetch(`http://localhost:3000/profile/${id}`, {method: 'DELETE'})
 };
                         
                                                                     

 const detalhaCliente = (id) => {
   return fetch(`http://localhost:3000/profile/${id}`)
.then(resposta => {
  return resposta.json()
})                        
 }


 const atualizaCliente = (id,nome,email) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method:'PUT', 
    headers: {
      'Content-type' : 'Application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
    
  })
  .then(resposta => {
    return resposta.json()
  })
 } 
  



// objeto que esta sendo exportado 
export const clienteService = {
    listaClientes, 
    criarCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
};

