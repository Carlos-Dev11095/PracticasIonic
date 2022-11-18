
export interface  RespuestaBD{
  results: Personajes[];
}

export interface Personajes {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
}
export interface Personaje {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
}

export interface RespuestaDB {
  Cubos: Cubos[];
}

export interface Cubos {
  armadura?: number;
  color?: string;
  generacion?: string;
  modelo?:string;
  id?: number;
  img?: string;
  nombre?:string;
}


export interface Cubo {
  armadura?: number;
  color?: string;
  generacion?: string;
  modelo?:string;
  id?: number;
  img?: string;
  nombre?:string;
}

