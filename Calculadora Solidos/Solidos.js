export default class Solido{
     AreaPrisma(Longitud, Ancho, Altura) {
        let AreaBase, PerimetroBase,AreaTotal;

        AreaBase = Longitud*Ancho;

        PerimetroBase = 2*(Longitud+Ancho);

        AreaTotal = 2*AreaBase+PerimetroBase*Altura;

        alert('El area del Prisma es: '+AreaTotal);
    }
}