const seccionCartas = document.querySelector('#sct-contenedor-cartas')
const inputFiltro = document.getElementById('txt-filtro')
const confirmar = document.getElementById('btnConfirmar')



let listaLibros = []


const inicializar = async() => {

    listaLibros = await obtenerDatos('listar-libros')
    mostrarDatos()
    console.log(listaLibros)
}

let librosSelect = []

confirmar.addEventListener('click', () => {
    enviar(librosSelect)
    window.location.href = 'carritoDeCompras.html'
})

const mostrarDatos = () => {
    seccionCartas.innerHTML = ''
    listaLibros.forEach(llamarObjetos => {
        if (llamarObjetos.titulo.toLowerCase().includes(inputFiltro.value.toLowerCase()) || llamarObjetos.autor.toLowerCase().includes(inputFiltro.value.toLowerCase())) {

            let carta = document.createElement('div')
            carta.classList.add('carta')

            let contInfo = document.createElement('section')
            contInfo.classList.add('contInfo')


            let divIzquierdo = document.createElement('div')
            divIzquierdo.classList.add('divIzquierdo')

            let divDerecho = document.createElement('div')
            divDerecho.classList.add('divDerecho')

            let titulo = document.createElement('a')
            titulo.setAttribute('href', 'perfilLibro.html?isbn=' + llamarObjetos.isbn)
            titulo.classList.add('titulo')
            titulo.textContent = llamarObjetos.titulo

            let foto = document.createElement('img')
            foto.classList.add('fotoLibro')
            foto.src = llamarObjetos.foto



            let isbn = document.createElement('p')
            isbn.classList.add('isbn')
            isbn.textContent = `ISBN: ${llamarObjetos.isbn}`


            let formato = document.createElement('p')
            formato.classList.add('formato')
            formato.textContent = `Formato: ${llamarObjetos.formato}`

            let autor = document.createElement('p')
            autor.classList.add('autor')
            autor.textContent = llamarObjetos.autor

            let precio = document.createElement('p')
            precio.classList.add('precio')
            precio.textContent = `Precio en colones ${llamarObjetos.precio}`



            let btnComprar = document.createElement('button')
            btnComprar.classList.add('btnComprar')
            btnComprar.innerHTML = 'Agregar al carrito'
            btnComprar.addEventListener('click', () => {
                let push = false
                librosSelect.push(llamarObjetos)
                push = true
                if (push == true) {
                    Swal.fire({
                        "icon": "success",

                        "text": "Libro agregado al carrito"
                    })
                } else {
                    Swal.fire({
                        "icon": "warning",
                        "title": "Algo salió mal",

                    })
                }

            })








            carta.appendChild(titulo)
            carta.appendChild(foto)
            carta.appendChild(contInfo)
            divIzquierdo.appendChild(autor)
            divIzquierdo.appendChild(isbn)
            divIzquierdo.appendChild(formato)
            divDerecho.appendChild(precio)
            divDerecho.appendChild(btnComprar)
            contInfo.appendChild(divIzquierdo)
            contInfo.appendChild(divDerecho)
            seccionCartas.appendChild(carta)


        }

    });
};

/*const registrarCompra = () => {

    let data = {

        titulo: tituloLibro.value,

        isbn: isbnLibro.value,

        idioma: idiomaLibro.value,

        formato: formatoLibro.value,
        autor: autorLibro.value,
        precio: precioLibro.value
    }
    registrarDatos("registrar-compra", data)
};
const agregaCompra = () => {
    for (let i = 0; i < btnComprar.length; i++) {
        btnComprar[i].addEventListener('click', registrarCompra, false);
    }
}*/
inicializar();
inputFiltro.addEventListener("keyup", () => {

    mostrarDatos();
});