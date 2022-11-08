export interface RespuestaBD {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Personajes[];
}
export interface Personajes {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}