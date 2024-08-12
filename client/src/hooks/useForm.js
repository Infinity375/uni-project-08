import { useEffect, useState } from "react";

export function useForm(initioalValues, submitCallback) {
    const [values, setValues] = useState(initioalValues);

    useEffect(() => {
        setValues(initioalValues);
    }, [initioalValues]);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        await submitCallback(values);
        setValues(initioalValues);
    };

    return {
        values,
        changeHandler,
        submitHandler,
        setValues,
    };

}