document.querySelector('.enviar-cadastro').addEventListener('click', Cadastrar);


Cadastrar('http://localhost:5000/usuario/novo')
 .then(response => console.log(response.json()))
 .then(data => console.log(data))
 .catch(error => console.log(error));

 function Cadastrar(url) {
   const formDados = new FormData(document.querySelector('.formulario-cadastro'))

   /* let jsonFormDados = {}

   for (let [key, value] of formDados.entries()){
       console.log(formDados)
       jsonFormDados[key]=value
   } */

   console.log(formDados);

   return fetch(url, {
    method: 'POST',
    body: JSON.stringify(formDados),
        headers: {
            "Content-Type": "application/json"
        }
   })

 };
