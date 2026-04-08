import type {IUser} from "../models/user-model.ts";


interface Props {
    user: IUser;
}

const UserComponent = ({ user }: Props) => {
    return (
        <div>
            <h3>{user.firstName} {user.lastName}</h3>
            <p>{user.email}</p>
        </div>
    );
};

export default UserComponent;