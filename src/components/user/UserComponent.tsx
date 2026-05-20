import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

type PropsType = { item: IUser }

const UserComponent: FC<PropsType> = ({item}) => {
    return (
        <div className='block'>
            <div>{item.firstName} {item.lastName}</div>
            <div>{item.email}</div>
        </div>


    );
};

export default UserComponent;