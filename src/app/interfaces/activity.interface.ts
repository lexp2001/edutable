export interface Activity {
    _id?: string
    nombre: string
    rut: string
    empresa: string
    tiempo: string
    actividades: [
        {
            nombre: string,
            puntaje: string,
            estrellas: string,
            productos: [{
                nombre: string,
                puntos: string,
                cantidadBien: string,
                cantidadMal: string,
                estrellas: number
            }]
        }
    ]
}