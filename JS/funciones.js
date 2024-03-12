addEventListener('DOMContentLoaded', () => {
    //indicador de menu
    const secciones = document.querySelectorAll('.seccion');
    const menuItem = document.querySelectorAll('.nav-item');
    const funcionObserver = entries => {
        entries.forEach(entry => {
            //saber si la entrada esta en el viewport o no
            if (entry.isIntersecting) {
                const item_actual = Array.from(menuItem).find(item => item.dataset.url === entry.target.id);
                item_actual.classList.add('active');
                console.log("clase active añadida");
                for (const item of menuItem) {
                    if (item != item_actual) {
                        item.classList.remove('active')
                        console.log("clase active eliminada");

                    }
                }
            }
        })
    }
    const observer = new IntersectionObserver(funcionObserver, {
        root: null, rootMargin: '5px', threshold: 0.8
    });
    secciones.forEach(seccion => observer.observe(seccion));
});
//efectos
const btn = document.querySelector(".navbar-toggler");
function addClass() {
    const element = document.querySelector(".boton-menu");
    element.classList.add("icono-cerrar");
    if (element) {
        btn.addEventListener("click", () => {
            removeClass();
        });
    }
}
function removeClass() {
    const element = document.querySelector(".boton-menu");
    element.classList.remove("icono-cerrar");
    if (element) {
        btn.addEventListener("click", () => {
            addClass();
        });
    }
}
btn.addEventListener("click", () => {
    addClass();
});
