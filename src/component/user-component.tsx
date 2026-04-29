import type {IUser} from "../models/user-model.ts";
import {useNavigate} from "react-router-dom";

interface Props
{
    user: IUser;
}

const UserComponent = ({ user }: Props) =>
{
    const navigate = useNavigate();
    const buttonOnClick = () => {
        navigate(`/users/${user.id}/cart`, { state: user });
    }

    return (
        <div>
            <h3>{user.firstName} {user.lastName}</h3>
            <button onClick={buttonOnClick}>Carts</button>
        </div>
    );
};

export default UserComponent;