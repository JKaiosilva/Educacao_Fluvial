const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');


const url = 'https://portal.inmet.gov.br/' ;



async function getclima() {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);



    const dados_clima = [];
    $('.row mt-3').each((i, elem) => {
       var alerta = $(elem).find('h4').text();
       dados_clima.push(alerta)
    });
 



    //const dados_cidades = dados_cuiaba.concat(dados_caceres, dados_ladario, dados_fcoimbra, dados_pmurtinho)

    const enviar_dados = require("./clima");
    enviar_dados.push(dados_clima);
    fs.writeFile('clima.json', JSON.stringify(dados_clima), erro => {
        if (erro) throw erro; 
        console.log("Dados transmitidos com sucesso!");
    });


}

getclima()