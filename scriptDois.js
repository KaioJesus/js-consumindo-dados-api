//Script dois criado para deixar melhor organizado o código e não perder os comentários do primeiro, mesmo que tenham commits feitos

//Outra maneira de fazer código assíncrono
async function buscaEndereco(cep){
    try{
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`)
        let consultaCEPConvertida = await consultaCEP.json();
        //await usado para esperar por uma promise
        //transformando em json os dados da API

        if(consultaCEPConvertida.erro){
            throw Error('CEP Inexistente!');
            //vai entrar aqui caso o cep não seja existente, vai imprimir a frase com o console.log e dps vai para o catch
        }
        
        console.log(consultaCEPConvertida);

        return consultaCEPConvertida;
    } catch (erro){
        console.log(erro);
    }
}

let ceps = ['01001000', '01001001'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
console.log(conjuntoCeps);
Promise.all(conjuntoCeps).then(respostas => console.log(respostas));
//promise.all -> serve para receber varias requisições ao mesmo tempos