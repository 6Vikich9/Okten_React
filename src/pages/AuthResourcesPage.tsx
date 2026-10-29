import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

export const AuthResourcesPage = () =>
{

    useEffect(() =>
    {
        loadAuthProducts().then(products =>
        {
            console.log(products)
        }).catch(reason =>
        {
            console.log(reason);
            refresh() // Catch request error (expired token) and trigger token refresh flow[cite: 10]
                .then(() => loadAuthProducts()) // Retry loading products after successful token refresh[cite: 10]
                .then(value => console.log(value))
        })

    }, []);

    return (
        <>
            AuthResourcesPage
        </>
    );
};