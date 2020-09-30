const hamburguer = document.querySelector(".hamburguer"); 
const menu = document.querySelector('.menu-nav');

//a la const hamburguer se le agrege un evento que al hacer click

hamburguer.addEventListener("click", ()=>{
	//a la clase menu se seleccionan todas las clases y con toggle se agrega
	//o se quita dependiendo de su estado
	menu.classList.toggle("menu-aparece")
})

//cuando alguien toque la ventana dispare otra funcion de flecha
//e.targuet se va a ejecutar cada vez que de un click en pantalla
//y ademas dice que elemento se le dio clic
window.addEventListener("click", e=>{
	if(menu.classList.contains("menu-aparece") && e.target != menu && e.target != hamburguer){
		menu.classList.toggle("menu-aparece")
	}
})