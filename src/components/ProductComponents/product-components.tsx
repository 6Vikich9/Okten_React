import type {ProductModel} from "../../models/product-model.ts";
import {useEffect, useState} from "react";
import {loadProducts} from "../../service/api.service.ts";
import {ProductComponent} from "../ProductComponent/product-component.tsx";

export const ProductComponents=()=>
{
    const[product,setProduct]=useState<ProductModel[]>([]);

    useEffect(()=>
    {
        async function fetchProducts()
        {
            const allProduct=await loadProducts();
            setProduct(allProduct);
        }

        fetchProducts();
    },[])

    return(
        <div className=''>
            {product.map((value)=>
                <ProductComponent key={value.id} {...value}/>
            )}
        </div>
    )
}