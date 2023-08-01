//Ejercicio: Hagaun codigo que sume la diagonal inferior y superior de una matriz con tamaño impar
let filas, columnas,SumSup=0,SumInf=0;

const matriz = [];

filas=parseInt(prompt('Ingrese el numero de filas'));
columnas=parseInt(prompt('Ingrese el numero de Columnas'));
if(filas%2 ===0 & columnas%2 === 0){
  alert('Ingrese un numero impar');  
}else{
    for(let i=0; i < filas; i++){
        matriz[i] = [];
        
        for(let j = 0; j<columnas; j++){
            matriz[i][j] =  Math.floor(Math.random()*10);
        }
    }

    console.log(matriz);
        
    
    for(let i=0; i < filas;i++){
        for(let j=0;j < columnas;j++){
            if(j>i){//Se indetermina Suma SUp
                SumSup = SumSup + matriz[i][j]; 
            }else if(j<i && j != i){
                SumInf = SumInf + matriz[i][j]; 
            }
        }
    }
    
   console.log('La suma de la diagonal superior es: '+SumSup);
   console.log('La suma de la diagonal inferior es: '+SumInf);
}


