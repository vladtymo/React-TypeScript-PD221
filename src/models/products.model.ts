export interface ProductModel {
    id: number;
    name: string;
    categoryName: string;
    discount: number;
    price: number;
    imageUrl: string;
}

export interface CreateProductModel {
    name: string;
    cateogryId: number;
    discount: number;
    price: number;
    image: File;
}