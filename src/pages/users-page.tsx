import { useEffect, useState } from "react";
import {getUsers} from "../services/users.api.services.ts";
import UserComponent from "../components/user-component.tsx";
import type {IUser} from "../models/user-model.ts";


const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers().then(data => {
            setUsers(data);
        });
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {users.map(user => (
                <UserComponent key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UsersPage;