export class vistaGastos {

    constructor(
        public iD_ANTICIPO: number,
        public iD_LINEA_ANTICIPO:number,
        public fecha:Date,
        public tipO_GASTO:string,
        public tarjeta:boolean,
        public referencia: string,
        public usuario: string,
        public proveedor: string,
        public estatus: string,
        public monto: number,
        public id: number
    ){}
}