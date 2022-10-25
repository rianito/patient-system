export interface Patient {
    id: number,
    name: string,
    cpf: string,
    birth_date: string,
    height: number,
    weight: number,
    blood_group: string,
    sex: string,
    observation: string,
    tel: string,
    email: string,
}


export interface FormValues {
    id: number,
    user: string,
    lastname: string,
    cpf: string,
    birth_date: string,
    sex: string,
    height: number,
    weight: number,
    blood_group: string,
    observation: string
    tel: string,
    email: string,
}
