
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
  Caras?: number;
  Categoria?: string;
  Forma?: string;
  colores?:string;
  id?: number;
  altura_en_cm?: number;
  img?: string;
}


export interface Cubo {
  Caras?: number;
  Categoria?: string;
  Forma?: string;
  colores?:string;
  id?: number;
  altura_en_cm?: number;
  img?: string;
  nombre?:string;
}