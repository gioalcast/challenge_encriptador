//valirable: espacios para cuardar dato e información
const textArea = document.querySelector(".text-area"); //captura el mensaje del usuario.
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);  // aquí se está tomando el texto ingresado por el usario para se encriptado y mostrado en le mensaje
    mensaje.value = textoEncriptado;
    textArea.value = ""; // para limpiar el texto incresado una vez se incriptado
    mensaje.style.backgroundImage = "none"; //ocultar la imágen cuando se incripta el texto y se está presente en el cuadro.
}

function encriptar(stringEncriptada) {   //funcion de encriptación, se creó la variable y se le asigno la lista de lista donde se cuardó las llaves de encriptación
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase(); // convierte todo el texto a minúsculas
/*se crea un bucle for para recorrer todas las posiciones de la matriz o lista, así mismo se asegura que todas las letras sean minúsculas (tolowercase), se verifica y se remplaza por las llaves suministadas por los parámetros en la condición if */
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        } 
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
    return stringDesencriptada;
}


    document.getElementById('copyButton').addEventListener('click', function copiar () {
        const textToCopy = document.getElementById('textToCopy');
        textToCopy.select();
        document.execCommand('copy');
    });



