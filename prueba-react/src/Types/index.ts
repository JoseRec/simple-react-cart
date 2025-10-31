export type dispo = {
    id: number,
    categoria: string
    nombre: string
    descripcion: string
    calificacion: number
    precio: number
    imagen: string
}

export type cartItem = dispo & {
    quantity: number
}

export type Categoria =
  | "Todos"
  | "Laptops"
  | "Smartphones"
  | "Audio"
  | "Tablets"
  | "Wearables"
  | "Cámaras";
