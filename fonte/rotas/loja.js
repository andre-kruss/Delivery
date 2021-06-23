const express = require('express');
const lojaRotas = express.Router();
const axios = require('axios');


lojaRotas.get('/error', (req, res) => {
    res.render('error404');
})

lojaRotas.get('/:nomeLoja', async (req, res) => {

    try {
        const nomeLoja = req.params.nomeLoja;

        const [dadosLoja] = await Promise.all([axios.get(`http://ms-delivery-online.herokuapp.com/lojas/carregar/${nomeLoja}`)]);

        const loja = dadosLoja.data;

        if (loja != null) {
            const links = loja.links;

            const idProprietario = loja.idProprietario;

            const dadosCategoria = await axios.get(`http://ms-catalogo-de-produtos.herokuapp.com/categorias/listar/${idProprietario}`);
            const categorias = dadosCategoria.data;

            const dadosProdutos = await axios.get(`http://ms-catalogo-de-produtos.herokuapp.com/produtos/listar/${idProprietario}`);
            const produtos = dadosProdutos.data;
            // console.log(produtos);

            const dadosUsuarios = await axios.get(`http://ms-pessoas.herokuapp.com/pessoas/listar/${idProprietario}`);
            const usuarios = dadosUsuarios.data;
            const enderecos = usuarios[0].enderecos;
            const telefones = usuarios[0].telefones;
            res.render('cardapio', { loja: loja, links: links, categorias: categorias, produtos: produtos, usuarios: usuarios, enderecos: enderecos, telefones: telefones });

        }
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
        }
        else {
            console.error('Error', error.message);
        }
        res.redirect('/error');
    }
})

lojaRotas.get('/', async (req, res) => {
    try {
        const [dadosLoja] = await Promise.all([axios.get(`https://ms-delivery-online.herokuapp.com/lojas/listarLojas`)]);

        // const loja = dadosLoja.data;
        // const idProprietario = loja.idProprietario;
        // console.log(idProprietario);

        res.render("busca1");
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
        }
        else {
            console.error('Error', error.message);
        }
        res.redirect('/error');
    }
});


module.exports = lojaRotas;






// lojaRotas.get('/pedido/:nomeLoja', async (req, res) => {

//     try {
//         const nomeLoja = req.params.nomeLoja;

//         const [dadosLoja] = await Promise.all([axios.get(`https://ms-delivery-online.herokuapp.com/lojas/carregar/${nomeLoja}`)]);

//         const loja = dadosLoja.data;
//         const idProprietario = loja.idProprietario;

//         const dadosCategoria = await axios.get(`https://ms-catalogo-de-produtos.herokuapp.com/categorias/listar/${idProprietario}`);
//         const categorias = dadosCategoria.data;

//         const dadosProdutos = await axios.get(`https://ms-catalogo-de-produtos.herokuapp.com/produtos/listar/${idProprietario}`);
//         const produtos = dadosProdutos.data;

//         const dadosUsuarios = await axios.get(`http://localhost:2222/pessoas/listar/${idProprietario}`);
//         const usuarios = dadosUsuarios.data;

//         res.render('index', { loja: loja, categorias: categorias, produtos: produtos, usuarios: usuarios });
//     } catch (error) {
//         if (error.response) {
//             console.log(error.response.data);
//             console.log(error.response.status);
//         }
//         else {
//             console.error('Error', error.message);
//         }
//     }
// })

// lojaRotas.get('/pedido/:nomeLoja', async(req, res) => {

//     try {
//         const nomeLoja = req.params.nomeLoja;

//        const [dadosLoja] = await Promise.all([axios.get(`https://ms-delivery-online.herokuapp.com/lojas/carregar/${nomeLoja}`)]);

//        const loja = dadosLoja.data;
//        const idProprietario = loja.idProprietario;

//        const dadosCategoria = await axios.get(`https://ms-catalogo-de-produtos.herokuapp.com/categorias/listar/${idProprietario}`);
//        const categorias = dadosCategoria.data;

//        const dadosProdutos = await axios.get(`https://ms-catalogo-de-produtos.herokuapp.com/produtos/listar/${idProprietario}`);
//        const produtos = dadosProdutos.data;

//        const dadosUsuarios = await axios.get(`http://localhost:2222/pessoas/listar/${idProprietario}`);
//        const usuarios = dadosUsuarios.data;

//        res.render('index', { loja: loja, categorias: categorias, produtos: produtos, usuarios: usuarios});
//     } catch (error) {
//         if(error.response){
//             console.log(error.response.data);
//             console.log(error.response.status);
//         }
//         else{
//             console.error('Error', error.message);
//         }
//     }
// })







