
// API - Interface de programação de aplicações - Application programming interface
// Faz a conexão entre o cliente e o servidor. Uma analogia, se você vai ao restaurante, você pede uma comida ao garçom que o traz posteriormente, nesse caso o garçom seria a API e a cozinha o servidor, por o garçom que faz o contato com a cozinha que no caso seria o servidor.

//o método fetch é um método assíncrono que ele tem como parâmetro obrigatório a URL da API;
//Ele retornou uma promise

let consultaCEP = fetch('https://viacep.com.br/ws/01001000/json')
    .then(resposta => resposta.json() //a promise convertida em json (javascript object notation), formato que possui basicamente a mesma sintaxe que a de um objeto js
    .then(r => {
        if (r.erro){
            throw Error('Esse cep não existe'); // joga o erro e o catch pega o erro
        } else {
            console.log(r)
        }
    })) // para acessar o objeto usa o método then, ou seja, quando a promise é aceitada;

    .catch(erro => console.log(erro))  // pega um erro e mostra na tela, ou seja, quando a promise é rejeitada.

    .finally(mensagem => console.log('Processamento concluído')); //independente da resposta, ele vai retornar uma mensagem;

//Uma promise sempre vai retornar um objeto do tipo response, mesmo que seja rejeitada ou resolvida.

//Promise na tradução literal, uma promessa de que algo pode acontecer, no caso pode ser aceito ou rejeitado, exemplo, quando você faz uma compra, ao sair para entrega, isso já é uma promise, porque você pode receber o produto ou o produto não conseguir ser entregue.

//promise tem tres tipos de repostas -> fullfilled - ta completa, pending - quando ainda não concluir, rejected -> rejeitado

console.log(consultaCEP);

//callback -> são funções que são enviadas como parâmetros para outras funções, são usadas muito para fazer requisições.













// async function buscaEndereco(cep) {
//     var mensagemErro = document.getElementById('erro');
//     mensagemErro.innerHTML = "";
//     try {
//         var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
//         var consultaCEPConvertida = await consultaCEP.json();
//         if (consultaCEPConvertida.erro) {
//             throw Error('CEP não existente!');
//         }
//         var cidade = document.getElementById('cidade');
//         var logradouro = document.getElementById('endereco');
//         var estado = document.getElementById('estado');

//         cidade.value = consultaCEPConvertida.localidade;
//         logradouro.value = consultaCEPConvertida.logradouro;
//         estado.value = consultaCEPConvertida.uf;

//         console.log(consultaCEPConvertida);
//         return consultaCEPConvertida;
//     } catch (erro) {
//         mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
//         console.log(erro);
//     }
// }

// var cep = document.getElementById('cep');
// cep.addEventListener("focusout", () => buscaEndereco(cep.value));