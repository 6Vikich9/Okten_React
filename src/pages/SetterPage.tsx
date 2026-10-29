import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import carValidator from "../validators/car.validator.ts";
import {addCar} from "../services/car.service.ts";
import type {Car} from "../types/Car.ts";

const SetterPage = () => {
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<Car>({mode: 'all', resolver: joiResolver(carValidator)});

    return (
        <form
            className='flex flex-col gap-4 mx-auto my-10 max-w-md p-6 bg-white rounded-xl shadow-lg border border-gray-200'
            onSubmit={handleSubmit((formData) => {
                addCar(formData);
            })}
        >
            <h2 className='text-2xl font-bold text-center text-gray-800'>Add new car</h2>

            <label className='flex flex-col gap-1'>
                <span className='text-sm font-medium text-gray-600'>Brand</span>
                <input
                    type='text'
                    placeholder='Toyota'
                    className={`border-2 rounded-lg px-3 py-2 outline-none focus:border-blue-500 ${errors.brand ? 'border-red-500' : 'border-gray-300'}`}
                    {...register('brand')}
                />
                {errors.brand && <span className='text-sm text-red-600'>{errors.brand.message}</span>}
            </label>

            <label className='flex flex-col gap-1'>
                <span className='text-sm font-medium text-gray-600'>Year</span>
                <input
                    type='text'
                    placeholder='2020'
                    className={`border-2 rounded-lg px-3 py-2 outline-none focus:border-blue-500 ${errors.year ? 'border-red-500' : 'border-gray-300'}`}
                    {...register('year')}
                />
                {errors.year && <span className='text-sm text-red-600'>{errors.year.message}</span>}
            </label>

            <label className='flex flex-col gap-1'>
                <span className='text-sm font-medium text-gray-600'>Price, $</span>
                <input
                    type='text'
                    placeholder='15000'
                    className={`border-2 rounded-lg px-3 py-2 outline-none focus:border-blue-500 ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
                    {...register('price')}
                />
                {errors.price && <span className='text-sm text-red-600'>{errors.price.message}</span>}
            </label>

            <button
                disabled={!isValid}
                className='mt-2 rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-blue-600'
            >
                Send
            </button>
        </form>
    );
};

export default SetterPage;