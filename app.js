
function encriptar() {
    const texto=document.getElementById('texto').value;
    if(texto != ''){
    const imagen = document.getElementById('imagen');
    imagen.style.display ='none';
    
    console.log(texto);
    var textoEncriptado = texto.replace(/e/g, 'enter');
    textoEncriptado = textoEncriptado.replace(/i/g, 'imes');
    textoEncriptado = textoEncriptado.replace(/a/g, 'ai');
    textoEncriptado = textoEncriptado.replace(/o/g, 'ober');
    textoEncriptado = textoEncriptado.replace(/u/g, 'ufat');

    console.log(textoEncriptado);
    
    output=document.getElementById('output');
    output.innerText=textoEncriptado;
    output.style.marginTop= '20px';
    }
}

function desencriptar() {
    const texto=document.getElementById('texto').value;
    if(texto != ''){
    const imagen = document.getElementById('imagen');
    imagen.style.display ='none';
    
    console.log(texto);
    var textoDesencriptado = texto.replace(/enter/g, 'e')
    textoDesencriptado = textoDesencriptado.replace(/imes/g, 'i')
    textoDesencriptado = textoDesencriptado.replace(/ai/g, 'a')
    textoDesencriptado = textoDesencriptado.replace(/ober/g, 'o')
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, 'u');

    console.log(textoDesencriptado);
    
    output=document.getElementById('output');
    output.innerText=textoDesencriptado;
    output.style.marginTop= '20px';
    }

}

function copiar(){
    const copia = document.getElementById('output').innerText;
    if (copia!='') {
        document.getElementById('texto').value='';
        navigator.clipboard.writeText(copia)
        console.log('copiado '+ copia);
    }
    
}

