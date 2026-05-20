import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {useSearchParams} from "react-router-dom";
import {getAllUsers} from "../../services/api.service.ts";
import UserComponent from "./UserComponent.tsx";
import PaginationComponent from "../pagination/PaginationComponents.tsx";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [query] = useSearchParams();

    useEffect(() => {
        getAllUsers(query.get('pg') || '1')
            .then(value => {
                // 2. Правильні фігурні дужки для виконання кількох дій
                setUsers(value.users);
                setTotal(value.total);
            });
    }, [query]);

    return (
        <div>
            <div>
                {
                    users.map(value =>
                        (<UserComponent key={value.id} item={value}/>)
                    )
                }
            </div>
            <PaginationComponent total={total} />
        </div>

    );
};

export default UsersComponent;