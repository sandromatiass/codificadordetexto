const areaDeTexto = document.querySelector(".cdigi");
const areaResultado = document.querySelector(".result");
const imgResult = document.querySelector(".msgaviso")

function btCopiar() {
    navigator.clipboard.writeText(areaResultado.value).then(() =>  { (' ') });
    areaDeTexto.value = areaResultado.value
    alert("Texto Copiado!")
    areaResultado.value = ""
}


function validacao(letras){
    let validado
}


function btCript() {
    const txtEncriptado = encriptar(areaDeTexto.value);
    areaResultado.value = txtEncriptado;
    areaDeTexto.value = "";
    imgResult.innerHTML = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
    }
}
    return stringEncriptada;
}

function btDescript(){
    const txtDecriptado = decriptar(areaDeTexto.value);
    areaResultado.value = txtDecriptado;
    areaDeTexto.value = "";
    imgResult.innerHTML = "";
}

function decriptar(stringDescriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]]
    stringDescriptada = stringDescriptada.toLowerCase();

for(let i = 0; i < matrizCodigo.length; i++){
    if(stringDescriptada.includes(matrizCodigo[i][1])){
        stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
}
    return stringDescriptada;
}