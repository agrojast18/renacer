const imagenes = document.querySelectorAll('.img-producto')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector(".hamburguer"); 

//Evento para cada imagen voy a crear un evento y cada vez que le de
//click que me haga

imagenes.forEach(imagen =>{
	imagen.addEventListener('click', ()=>{
		aparecerImagen(imagen.getAttribute("src")) //obtiene el atibutio src de cada una de las img
	})
})

contenedorLight.addEventListener("click", (e)=>{
	if(e.target != imagenesLight){
		contenedorLight.classList.toggle('show') //Aqui aparece y desaparece clase show
		imagenesLight.classList.toggle('show-image')
		hamburguer1.style.opacity = "1"
	}
})



//crear funcion aparecer imagen
const aparecerImagen = (imagen)=>{
	imagenesLight.src = imagen; //Aqui toma el src de imagen y lo pone en imagenLight
	contenedorLight.classList.toggle('show') //Aqui aparece y desaparece clase show
	imagenesLight.classList.toggle('show-image')
	hamburguer1.style.opacity = "0"
}


