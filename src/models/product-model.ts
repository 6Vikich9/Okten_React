import type {DimensionsModel} from "./dimensions-model.ts";
import type {ReviewsModel} from "./reviews-model.ts";
import type {MetaModel} from "./meta-model.ts";

export interface ProductModel
{
    id:number;
    title:string;
    description:string;
    category:string;
    price:number;
    discountPercentage:number;
    rating:number;
    stock:number;
    tags:string[];
    brand:string;
    sku:string;
    weight:number;
    dimensions:DimensionsModel;
    warrantyInformation:string;
    shippingInformation:string;
    availabilityStatus:string;
    reviews:ReviewsModel[];
    returnPolicy:string;
    minimumOrderQuantity:number;
    meta:MetaModel;
    images:string[];
    thumbnail:string;

}