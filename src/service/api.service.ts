import type {ProductResponseModel} from "../models/product-response-model.ts";
import type {ProductModel} from "../models/product-model.ts";

const endpointProducts=import.meta.env.VITE_API_URL + '/products'

const loadProducts = async (): Promise<ProductModel[]> =>
{
    const response:ProductResponseModel=await fetch(endpointProducts)
        .then(value => value.json());

    return response.products;
}

export {loadProducts}