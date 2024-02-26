export interface Category {
  categoryName: string;
  description?: string;
  options: Option[];
}

export interface Option {
  name: string;
  image: string;
}
