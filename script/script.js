
// const data = getFormDataAsJSON(form);




const formulario = elements => [].reduce.call(elements, (data, element) => {
    const isValidElement = element => {
        return element.name && element.value;
    };

    return data;
}, {});

const handleFormSubmit = event => {

    event.preventDefault();

    const dados = formulario;

    fetch('http://localhost:5000/usuario/novo', {
        method: 'POST',
        body: dados,
    })
    .then(response => console.log(response.json()))
    .then(data => console.log(data))
    .catch(error => console.log(error));

};

const form = document.getElementsByClassName('formulario-cadastro')[0];

form.addEventListener('submit', handleFormSubmit);


