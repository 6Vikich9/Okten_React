import type {IProduct} from "./IProduct";

// Модель усієї відповіді сервера на запит товарів
// Сервер повертає не просто масив, а об'єкт, де товари лежать у полі products
// Тому в api.service.ts ми беремо їх через {data: {products}}
export type IProductsResponseModelType =
    {
        total: number;   // скільки всього товарів на сервері
        skip: number;    // скільки пропущено з початку
        limit: number;   // скільки товарів прийшло
        products: IProduct[]
    }