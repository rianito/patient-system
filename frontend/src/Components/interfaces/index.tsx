export interface Patient{
    id:number
    name:string
    cpf:string
    birth_date:string
    height:number
    weight:number
    blood_group:string
    sex:string
}


export interface FormValues {
    id: any
    user:string;
    lastname:string;
    cpf:string;
    birth_date: string;
    gender:string;
    height:number;
    weight:number;
    blood_type:string;
}
