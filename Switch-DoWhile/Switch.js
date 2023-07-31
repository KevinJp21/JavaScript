let op;

let numeroTexto = 'Valor desconocido'

do{

            console.log("|=====================================|");
            console.log("|          MENU DE OPCIONES           |");
            console.log("|                                     |");
            console.log("|    1. Numero 1.                     |");
            console.log("|    2. Numero 2.                     |");
            console.log("|    3. Numero 3.                     |");
            console.log("|    4. Numero 4.                     |");
            console.log("|    0. SALIR.                        |");
            console.log("|                                     |");
            console.log("|=====================================|");
            console.log('Digite la opcion ===> ');
            op = parseInt(prompt('Ingrese la opcion'))
    switch(op){

        case 1:
            numeroTexto = console.log('Número Uno');
            break;
    
        case 2:
            numeroTexto = console.log('Número Dos'); 
            break;
    
        case 3:
            numeroTexto = console.log('Número Tres'); 
            break;
    
        case 4:
            numeroTexto = console.log('Número Cuatro'); 
            break;
    
        default:
            numeroTexto = console.log('EL numero indicado no esta en la lista') 
    
    }
}while(op !== 0);
