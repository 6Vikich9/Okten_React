import { useEffect, useState } from "react";
import type {IUser} from "../models/user-model.ts";
import {getUsers} from "../service/user.api.service.ts";
import UserComponent from "../component/user-component.tsx";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers().then(data => {
            setUsers(data);
        });
    }, []);

    return (
        <div>

            <div>
                <h1>Users</h1>
                {users.map(user => (
                    <UserComponent key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default UsersPage;