export interface ICart {
    discountedTotal: number;
    total:           number;
    totalQuantity:   number;
    totalProducts:   number;
    id:              number;
    userId:          number;
    products:        Product[];
}

export interface Product {
    discountPercentage: number;
    discountedTotal:    number;
    total:              number;
    thumbnail:          string;
    quantity:           number;
    price:              number;
    id:                 number;
    title:              string;
}
