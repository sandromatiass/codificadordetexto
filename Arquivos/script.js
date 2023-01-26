const areaDeTexto = document.querySelector(".cdigi");
const areaResultado = document.querySelector(".result");

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btCript() {
    const txtEncriptado = encriptar(cdigi.value);
    result.value = txtEncriptado;
    cdigi.value = "";
}

function encriptar(textoEcriptado) {
    let regraCodigo = [["e", "enter"] , ["i" , "imes"] , ["a", "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();

    for(let i = 0; i < regraCodigo.length; i++) {
        if(textoEncriptado.includes(regraCodigo[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(regraCodigo[i][0], regraCodigo [i][1]);
        }
    }

    return textoEncriptado;
}

