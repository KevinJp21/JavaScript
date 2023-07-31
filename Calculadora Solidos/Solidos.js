export default class Solido{
     AreaPrisma(Longitud, Ancho, Altura) {
        let AreaBase, PerimetroBase,AreaTotal;

        AreaBase = Longitud*Ancho;

        PerimetroBase = 2*(Longitud+Ancho);

        AreaTotal = 2*AreaBase+PerimetroBase*Altura;

        alert('El area del Prisma es: '+AreaTotal);
        console.log('El area del Prisma es: '+AreaTotal);
    }

    VolumenPrisma(Longitud, Ancho, Altura) {
        let AreaBase, Volumen;
        AreaBase = Longitud*Ancho;
        Volumen = AreaBase * Altura;
        alert('El volumen del Prisma es: '+Volumen);
        console.log('El volumen del Prisma es: '+Volumen);
    }

    AreaPiramide(LadoBase, Altura) {
        let AreaBase, AreaTriangulo,AreaCarasLaterales, AreaTotal;

        AreaBase = Math.pow(LadoBase,2);
        AreaTriangulo = (LadoBase*Altura)/2;
        AreaCarasLaterales = 4*AreaTriangulo;
        AreaTotal = AreaBase+AreaCarasLaterales;

        alert('El area de la piramide es: '+AreaTotal+'Unidad^2');
        console.log('El area de la piramide es: '+AreaTotal+'Unidad^2');
        
    }

    VolumenPiramide(LadoBase, Altura) {
        let AreaBase, Volumen;
        AreaBase = Math.pow(LadoBase,2);
        Volumen = (AreaBase * Altura)/3;

        alert('El Volumen de la piramide es: '+Volumen+'Unidad^3');
        console.log('El Volumen de la piramide es: '+Volumen+'Unidad^3');
    }

}