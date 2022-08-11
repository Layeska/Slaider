
// -- Creando desde cero el js para el slaider

// ++ Declarando las variables a usar ++
let arrayImagenes = ["./img/fondo0.jpg","./img/fondo1.jpg","./img/fondo2.jpg","./img/fondo3.jpg"];
let obtenerImg = document.querySelector(".imagen");
let seleccion = document.querySelector(".lista ul");
let btn_next = document.querySelector(".menos");
let btn_atras = document.querySelector(".mas");


// ++ Crea la lista de los numeros de la parte baja ++
function menu(arrayImagenes) {
    let html = "";

    arrayImagenes.forEach((element, index) => {
        html += `<li onclick = verImagen(${index});> ${index + 1} </li>`; 
    });

    seleccion.innerHTML = html; 
}

menu(arrayImagenes);

//+ Función donde se miran las img
function verImagen(index) {
    localStorage.setItem("index", index);
    
    let url = arrayImagenes[index];
    let html = `<img src="${url}"/>`;

    console.log(index);

    let indexActual = localStorage.getItem("index");
    indexActual = Number(indexActual);

    if(indexActual === 0) 
        btn_atras.style.display = "none";
    else 
        btn_atras.style.display = "block";
    
    if(indexActual == arrayImagenes.length - 1) 
        btn_next.style.display = "none"; 
    else 
        btn_next.style.display = "block";

    obtenerImg.innerHTML = html;
}

//++ Acción del botón anterior
btn_atras.addEventListener('click', () => {
    let index = localStorage.getItem("index");

    index = Number(index);
    verImagen(index-1);
});

//++ Acción del botón de siguiente
btn_next.addEventListener('click', () => {
    let index = localStorage.getItem("index");

    index = Number(index);
    verImagen(index+1);
});

verImagen(0);
