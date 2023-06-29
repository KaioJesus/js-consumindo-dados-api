//Script dois criado para deixar melhor organizado o código e não perder os comentários do primeiro, mesmo que tenham commits feitos

//Outra maneira de fazer código assíncrono
async function buscaEndereco(cep){
    let mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";

    try{
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`)
        let consultaCEPConvertida = await consultaCEP.json();
        //await usado para esperar por uma promise
        //transformando em json os dados da API

        if(consultaCEPConvertida.erro){
            throw Error('CEP Inexistente!');
            //vai entrar aqui caso o cep não seja existente, vai imprimir a frase com o console.log e dps vai para o catch
        }

        //manipulando o dom para preencher automaticamente o cep
        let cidade = document.getElementById('cidade');
        let logradouro = document.getElementById('endereco');
        let bairro = document.getElementById('bairro');
        let estado = document.getElementById('estado');

        cidade.value = consultaCEPConvertida.localidade; //localidade valor da api que pega no json
        logradouro.value = consultaCEPConvertida.logradouro; //logradouro valor da api que pega no json
        bairro.value = consultaCEPConvertida.bairro; //bairro valor da api que pega no json
        estado.value = consultaCEPConvertida.uf; //uf valor da api que pega no json

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
        
    } catch (erro){
        mensagemErro.innerHTML= `<p>Cep inválido</p>`
        console.log(erro);
    }
}
let cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
//focusout -> evento de quando tira o foco do elemento, ou seja, clica e desclica

/* let ceps = ['01001000', '01001001'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
console.log(conjuntoCeps);
Promise.all(conjuntoCeps).then(respostas => console.log(respostas)); */

//promise.all -> serve para receber varias requisições ao mesmo tempos