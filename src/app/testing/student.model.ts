export enum Gender {
     male = 'male',
     female = 'female'
}

export interface Student {
     id:number,
     name: string,
     birhdate: string,
     gender: Gender
}