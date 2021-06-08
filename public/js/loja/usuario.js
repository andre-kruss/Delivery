
const usuario = urlParams.get("/pessoas/listar/1"); //raiz da requisição

const URLUsuario = "http://localhost:2222";

getUsuario();

function getUsuario() {
    axios({
        method: "get",
        url: `${URLUsuario}/pessoas/listar/1`
    })

        .then((response) => {
            let usuarios = response.data;
            console.log(usuarios);
            
            usuarios.forEach( usuario => {
                let idUsuario = usuario._id;
                console.log(idUsuario);              
                let telefonesUsuario = usuario.telefones;
                console.log(telefonesUsuario);
                telefonesUsuario.forEach( telefone => {
                    let telefoneUsuario = telefone.numero;
                    let tel = document.createElement("p");
                    tel.innerHTML = telefoneUsuario;

                    document.getElementById("telefoneLoja").appendChild(tel);
                    console.log(telefoneUsuario);
                })            
                let nomeUsuario = usuario.nome;
                console.log(nomeUsuario);              
                           
            });
                       
        }).catch(error => {
            console.log(error);
        })
}