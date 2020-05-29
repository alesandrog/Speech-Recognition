var xpos = 0;
var ypos = 0;
var maxX = 750;
var maxY = 450;
var minX = 50;
var minY = 50;

function setup() {
    noCanvas();
    //Inicializacion del Reconocedor
    var voice = new p5.SpeechRec();
    
    //Funcion callback para el resultado
    voice.onResult = showResult; 

    //Mantener escuchando
    voice.continuous = true;
    voice.interimResults = true;
    voice.start(); 

    
    function showResult() {
        if(voice.resultValue){
            console.log(voice.resultString);
            if(voice.resultString == 'derecha'){
                if(xpos <= maxX){
                    xpos = xpos + 50;
                    desplazarD();
                }
            }else if(voice.resultString == 'izquierda'){
                if(xpos >= minX){
                    xpos = xpos - 50;
                    desplazarI();
                }
            }
            else if(voice.resultString == 'arriba'){
                if(ypos >= minY){
                    ypos = ypos - 50;
                    desplazarA();
    
                }
            }
            else if(voice.resultString == 'abajo'){
                if(ypos <= maxY){
                    ypos = ypos + 50;
                    desplazarAb();
                }
            }
        }
    }
}



function desplazarD() {
    anime({
        targets: '#elemento',
        translateX: xpos
    });
}

function desplazarA() {
    anime({
        targets: '#elemento',
        translateY: ypos
    });
}


function desplazarI() {
    anime({
        targets: '#elemento',
        translateX: xpos
    });
}
function desplazarAb() {
    anime({
        targets: '#elemento',
        translateY: ypos
    });
}
