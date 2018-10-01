/* var url = '';
var data = {nome: '',email:'',endereco:'',telefone:'',cidade:'',estado:'',nascimento:'',identidade:'',cpf:'',rendaFamiliar:'',escolaridade:'',tipoEducacao:'',cursoDesejado:'',senha:''};

 */
let cadastro = document.querySelectorAll('#cadastro');

cadastro.onClick = Cadastrar;

function Cadastrar() {

   return fetch('http://localhost:5000/usuario/${cadastro.value.trim()}',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: new FormData(JSON.stringify(document.querySelector('#signup')))
    })
        .then(response=>response.json())
}


function preencher(){
    let lista = document.querySelector('#listadeusuarios');
    fetch('http://localhost:5000/usuarios').then(resposta => {
        return resposta.json();
    }).then(dados => {
        lista.innerHTML = JSON.stringify(dados); 
    }).catch(erro => {
        alert("Erro ao cadastrar");
        alert(erro);
    });
}


Cadastrar()
    .then(data => console.log(data))
    .catch(error => console.log(error));

preencher();