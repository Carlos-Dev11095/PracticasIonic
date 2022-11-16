// export interface RespuestaBD {
//     page: number;
//     per_page: number;
//     total: number;
//     total_pages: number;
//     data: Personajes[];
    
// }
// export interface Personajes {
//     id?: number;
//     email?: string;
//     first_name?: string;
//     last_name?: string;
//     avatar?: string;
//     support?: Personaje[];
// }

// export interface Personaje {
//   support?: Personaje;
//   url?: string;
//   text?: string;
// }

export interface  RespuestaBD{
  info: Info;
  results: Personajes[];
}

export interface Personajes {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: Origin;
  location?: Origin;
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
  origin?: Origin;
  location?: Origin;
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
}
export interface Origin {
  name: string;
  url: string;
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}

export interface RespuestaDB {
  Cubos: Cubo[];
}

export interface Cubo {
  Caras: number;
  Categoria: string;
  Forma: string;
  Id: number;
  altura: number;
  img: string;
}

export interface Cubos {
  Caras: number;
  Categoria: string;
  Forma: string;
  Id: number;
  altura: number;
  img: string;
}