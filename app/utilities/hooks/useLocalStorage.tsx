import { useState, useEffect } from 'react';

const useLocalStorage = (key: any, initialValue: any, notExistValueAction: any) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        try {
            const storedValue = localStorage.getItem(key);
            if (storedValue) {
                setValue(JSON.parse(storedValue));
            } else {
                initNotExistValueAction();
            }
        } catch (error) {
            initNotExistValueAction();
        }
    }, []);

    useEffect(() => {
        if (value) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    const initNotExistValueAction = ()=>{
        if (notExistValueAction) {
            notExistValueAction()
                .then((res: any) => {
                    setValue(res.value);
                })
        }
    }
    return [value, setValue];
};

export default useLocalStorage;
