import Solido from './Solidos.js';
/*Menú Principal*/
let op="", op2="", solido;
let Longitud,Ancho,Altura, LadoBase;
const Solidos = new Solido();

do{
    console.log("|================================================|");
    console.log("|                MENU DE OPCIONES                |");
    console.log("|                                                |");
    console.log("|    [1] Elegir el sólido.                       |");
    console.log("|    [2]Calcular y mostrar el área del sólido.   |");
    console.log("|    [3]Calcular y mostrar el volumen del sólido.|");
    console.log("|    [4]. Salir.                                 |");
    console.log("|                                                |");
    console.log("|================================================|");
    console.log('Digite la opcion ===> ');
    op = parseInt(prompt('Ingrese la opcion'))
switch(op){
    case 1:
        do{
            console.log("|======================================|");
            console.log("|            SUBMENU DE SOLIDOS        |");
            console.log("|                                      |");
            console.log("|    [1] Prisma.                       |");
            console.log("|    [2] Pirámide.                     |");
            console.log("|    [3] Esfera.                       |");
            console.log("|    [4] Regresar al menu principal.   |");
            console.log("|                                      |");
            console.log("|======================================|");
            console.log('Digite la opcion ===> ');
            op2 = parseInt(prompt('Elija el solido'));

            switch(op2){
                case 1:
                    console.log('Prisma seleccionado, Regrese al menu principal para calcular el volumen y area.');
                        solido = op2;
                    
                    break;
                case 2:
                    console.log('Priramide seleccionada, Regrese al menu principal para calcular el volumen y area.')
                    solido = op2;
                    break;
                case 3:
                    console.log('Esfera seleccionada, Regrese al menu principal para calcular el volumen y area.')
                    solido = op2;
                    break;
                default:
                    console.log('Ingrese una opcion valida');
                    break;
            }
        }while(op2 != 4);
    break;

    case 2:
        if(solido === 1){
            Longitud = parseInt(prompt('Ingrese la longitud: '));
            Ancho = parseInt(prompt('Ingrese el ancho: '));
            Altura = parseInt(prompt('Ingrese la altura: '));
            Solidos.AreaPrisma(Longitud,Ancho,Altura);
        }else if(solido === 2){
            
            LadoBase = parseInt(prompt('Ingrese los lados de la base de la piramide:'));
            Altura = parseInt(prompt('Ingrese la altura de la priramide:'));

            Solidos.AreaPiramide(LadoBase,Altura);
        }else if(solido === 3){

        }else{
            console.log('No ha seleccionado un solido.');
        }
            
        
        break;
    case 3:
        if(solido === 1){
            Solidos.VolumenPrisma(Longitud,Ancho,Altura);
        }else if(solido === 2){
            Solidos.VolumenPiramide(LadoBase,Altura);
        }
        break;
    default:
        console.log('Elija una opcion valida');
}
}while(op != 4);
//6 4 8