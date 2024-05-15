import axios from "axios"
import { CreateProductModel, EditProductModel, ProductModel } from "../models/products.model";
import { CategoryModel } from "../models/category.model";

const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}products`
});

// ----- put service methods to one object
export const productsService = {
    getAll: function () {
        return api.get<ProductModel[]>("all");
    },

    // TODO: set explicit data type
    get: function (id: number) {
        return api.get<ProductModel>(`${id}`);
    },

    getCategories: function () {
        return api.get<CategoryModel[]>("categories");
    },

    create: function (model: CreateProductModel) {
        const formData = new FormData();

        for (const key in model) {
            if (model[key as keyof CreateProductModel] == null) continue;

            const value = model[key as keyof CreateProductModel] as string | Blob;
            formData.append(key, value);
        }

        return api.post("", formData);
    },

    edit: function (model: EditProductModel) {
        return api.put("", model);
    },

    delete: function (id: number) {
        return api.delete(`${id}`);
    },
}
