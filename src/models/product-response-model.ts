import type {ProductModel} from "./product-model.ts";

export interface ProductResponseModel
{
    products:ProductModel[];
    total:number;
    skip:number;
    limit:number;
}