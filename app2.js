function validaciones(texto) {
    const caracteresPermitidos = /^[a-z ]+$/;
    if (caracteresPermitidos.test(texto)){       
        return true;
    }
    else{
        alert("No se permiten caracteres especiales, mayusculas y numeros");
        return false;
    }        
}
const llaves = 
    {
        "e" : "enter",
        "i" : "imes",
        "a" : "ai",
        "o" : "ober",
        "u" : "ufat",    
    }

function encriptar(){
    
    const msjTexto = document.querySelector('.msjTexto').value;
    
    if(validaciones(msjTexto) == true){
        let textoEncriptado = msjTexto;
        for(let[original, reemplazo] of Object.entries(llaves)){
            let regex = new RegExp(original, "g");
            textoEncriptado = textoEncriptado.replace(regex,reemplazo);
        }       
        
        if(document.querySelector('.msjResultado').value.length > 0){
            document.getElementById('imgMuneco').style.display = 'none';
            document.getElementById('imgTexto').style.display = 'none';
            document.querySelector('.msjResultado').value = textoEncriptado;
        }else{
            document.getElementById('imgMuneco').style.display = 'block';
            document.getElementById('imgTexto').style.display = 'block';
        }
    }
   
}

function desencriptar(){

    const msjTexto = document.querySelector('.msjTexto').value;

    if(validaciones(msjTexto == true)){
        let textoEncriptado = msjTexto
        for(let[original,reemplazo] of Object.entries(llaves)){
            let regex = new RegExp(reemplazo,"g");
            textoEncriptado = textoEncriptado.replace(regex,original);
        }
        if(document.querySelector('.msjResultado').value.length > 0){
            document.getElementById('imgMuneco').style.display = 'none';
            document.getElementById('imgTexto').style.display = 'none';
            document.querySelector('.msjResultado').value = textoEncriptado;
        }else{
            document.getElementById('imgMuneco').style.display = 'block';
            document.getElementById('imgTexto').style.display = 'block';
        }
    }
}

document.addEventListener('DOMContentLoaded',()=> {
    const $botonCopiar = document.querySelector('.btnCopiar');
    $botonCopiar.addEventListener('click',async()=> {
        try{
            const $textoACopiar = document.querySelector('.msjResultado');
            const textoParaCopiar =  $textoACopiar.value;
            await navigator.clipboard.writeText(textoParaCopiar);
            $botonCopiar.textContent = 'Copiado';
            setTimeout(() => {
                $botonCopiar.textContent = 'Copiar';
            }, 1000);
        }catch (error) {
            
            console.error('Error al copiar el texto:', error);
            alert("Ocurrió un error al copiar el texto.");
        }
    });
});

