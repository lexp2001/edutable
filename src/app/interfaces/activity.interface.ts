// export interface Activity {
//     _id?: string
//     nombre: string
//     rut: string
//     empresa: string
//     tiempo: string
//     actividades: [
//         {
//             nombre: string,
//             puntaje: string,
//             estrellas: string,
//             productos: [{
//                 nombre: string,
//                 puntos: string,
//                 cantidadBien: string,
//                 cantidadMal: string,
//                 estrellas: number
//             }]
//         }
//     ]
// }

export interface Activity {
    _id?: string
    Nombre: string
    Rut: string
    Empresa: string
    Tiempo: string
    Actividades: [
        {
            Nombre: string,
            Puntuaje: string,
            Estrellas: string,
            Productos: [{
                Nombre: string,
                Puntos: string,
                CantidadBuenas: string,
                CantidadMalas: string,
                Estrellas: number
            }]
        }
    ]
}