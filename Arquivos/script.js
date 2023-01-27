const areaDeTexto = document.querySelector(".cdigi");
const areaResultado = document.querySelector(".result");
const imgResult = document.querySelector(".msgaviso")

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function btCopiar() {
    navigator.clipboard.writeText(areaResultado.value).then(() =>  { (' ') });
    areaDeTexto.value = areaResultado.value
    areaResultado.value = "Texto copiado!"
}

function btCript() {
    const txtEncriptado = encriptar(areaDeTexto.value);
    areaResultado.value = txtEncriptado;
    areaDeTexto.value = "";
    imgResult.innerHTML = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]]
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
    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]]
    stringDescriptada = stringDescriptada.toLowerCase();

for(let i = 0; i < matrizCodigo.length; i++){
    if(stringDescriptada.includes(matrizCodigo[i][1])){
        stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
}
    return stringDescriptada;
}