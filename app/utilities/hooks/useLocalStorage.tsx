import { useState, useEffect } from 'react';

const useLocalStorage = (key: any, initialValue: any, notExistValueAction: any) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            setValue(JSON.parse(storedValue));
        } else {
            if (notExistValueAction) {
                notExistValueAction()
                    .then((res: any) => {
                        setValue(res.value);
                    })
            }
        }
    }, []);

    useEffect(() => {
        if (value) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;
