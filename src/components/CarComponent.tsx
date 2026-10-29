import type {Car} from "../types/Car.ts";
import type {FC} from "react";

type PropsType = { value: Car };

const CarComponent: FC<PropsType> = ({value}) => {
    return (
        <li className='border-2 rounded px-4 py-2 list-none'>
            {value.id}. {value.brand} {value.year} — {value.price}$
        </li>
    );
};

export default CarComponent;