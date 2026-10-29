import {useEffect} from "react";
import {login} from "../services/api.service.ts";

export const LoginPage = () =>
{
    useEffect(() =>
    {
        login({ // Automatically trigger login request with default credentials on component mount[cite: 12]
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        });
    }, []);

    return (
        <>
            login Page
        </>
    );
};