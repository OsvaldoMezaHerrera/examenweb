const btnIngresar = document.querySelector(".btnIngresar");
const nombre = document.querySelector(".nombre");
const correo = document.querySelector(".correo");
const edad = document.querySelector(".edad");
const pais = document.querySelector(".pais");
const mensaje = document.querySelector(".mensaje");

const mensajeGuardado = localStorage.getItem("mensaje");
if (mensajeGuardado) {
    mensaje.textContent = mensajeGuardado;
}

btnIngresar.addEventListener("click", () => {
    const textoNombre = nombre.value.trim();
    const textoCorreo = correo.value.trim();
    const textoEdad = edad.value.trim();
    const textoPais = pais.value.trim();

    if (textoNombre === "" || textoCorreo === "" || textoEdad === "" || textoPais === "") {
        mensaje.textContent = "llene todos los campos.";
    } else {
        const texto = `Bienvenido ${textoNombre}`;
        mensaje.textContent = texto;
        localStorage.setItem("mensaje", texto);
        localStorage.setItem("nombre", textoNombre);
        localStorage.setItem("correo", textoCorreo);
        localStorage.setItem("edad", textoEdad);
        localStorage.setItem("pais", textoPais);
    }
});
