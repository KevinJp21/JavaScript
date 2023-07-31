export default class APrisma{
     AreaPrisma(Longitud, Ancho, Altura) {
        let AreaBase, PerimetroBase,AreaTotal;

        AreaBase = Longitud*Ancho;

        PerimetroBase = 2*(Longitud+Ancho);

        AreaTotal = 2*AreaBase+PerimetroBase*Altura;

        console.log('El area de la base es: '+AreaTotal);
    }
}