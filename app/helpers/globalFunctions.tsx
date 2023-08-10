import { globalVariables } from "./globalVariables";

const getCurrentUserName = ()=>{
    return localStorage.getItem(globalVariables.LOCAL_USERNAME) ?? null;
}

const setCurrentUserName = (username:string)=>{
    localStorage.setItem(globalVariables.LOCAL_USERNAME,username);
}


export { getCurrentUserName, setCurrentUserName}