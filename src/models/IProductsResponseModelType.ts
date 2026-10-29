import type {IProduct} from "./IProduct";

export type IProductsResponseModelType =
{
    total: number;
    skip: number;
    limit: number;
    products: IProduct[]
}