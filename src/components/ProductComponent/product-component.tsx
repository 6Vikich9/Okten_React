import type {ProductModel} from "../../models/product-model.ts";
import {type FC, useState} from "react";

export const ProductComponent:FC<ProductModel>=({title,brand,images,price,rating,stock,description,category,discountPercentage,
tags,sku,weight,dimensions,warrantyInformation,shippingInformation,availabilityStatus,reviews,returnPolicy,minimumOrderQuantity,meta})=>
{
    const[showMoreInfo,setMoreInfo]=useState(false);

    return(
        <div className='font-serif flex justify-center items-center flex-col w-full bg-[#ffffff] rounded-xl shadow-xl/20 m-[20px] p-[20px]'>
            <h2 className='text-2xl'>{title}</h2>
            <p className='text-gray-950/50 dark:text-black-400/25"'>{brand}</p>
            <img className='w-xs' src={images[0]} alt="title"/>
            <p className='font-semibold'>Price: {price}</p>
            <p>Rating: {rating}</p>
            <p>{availabilityStatus}</p>
            <button className='underline hover:text-gray-600 dark:hover:text-gray-400' onClick={()=> setMoreInfo(!showMoreInfo)}>More info</button>
            {showMoreInfo && (
                <div className='text-left '>
                    <p className='font-medium'>Description: {description}</p>
                    <p>Category: {category}</p>
                    <p>Discount Percentage: {discountPercentage}</p>

                    <p className='font-medium'>Tags: </p>
                    <ul className='list-disc pl-5'>
                        {tags.map((tag,index)=>
                            <li key={index}>{tag}</li>
                        )}
                    </ul>

                    <p>{sku}</p>
                    <p>Weight: {weight}</p>

                    <p className='font-medium'>Dimensions: </p>
                    <ul className='list-disc pl-5'>
                        <li>Width: {dimensions.width}</li>
                        <li>Height: {dimensions.height}</li>
                        <li>Depth: {dimensions.depth}</li>
                    </ul>

                    <p>{warrantyInformation}</p>
                    <p>{shippingInformation}</p>
                    <p className='font-medium'>Stock:{stock}</p>

                    <p className='font-medium'>Reviews: </p>
                    <div>
                        {reviews.map((review,index)=>
                            <p key= {index}>{review.reviewerEmail},  {review.reviewerName}, Comment: {review.comment},
                                Rating: {review.rating},  {review.date}</p>


                        )}
                    </div>

                    <p className='font-medium'>{returnPolicy}</p>
                    <p>Minimum Order Quantity: {minimumOrderQuantity}</p>

                    <p>Meta: </p>
                    <ul className='list-disc pl-5'>
                        <li>Created At: {meta.createdAt}</li>
                        <li>Updated At: {meta.updatedAt}</li>
                        <li>Barcode: {meta.barcode}</li>
                        <img className='qrcode' src={meta.qrCode} alt="title"/>
                    </ul>
                </div>
            )}
        </div>
    )
}