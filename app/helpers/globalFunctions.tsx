import { ApiImagesInterface } from "../interfaces/images/apiImageInterface";
import { ShowedImageInterface } from "../interfaces/images/imagesShowedInterface";
import { globalVariables } from "./globalVariables";

const getCurrentUserName = () => {
    return localStorage.getItem(globalVariables.LOCAL_USERNAME) ?? null;
}

const setCurrentUserName = (username: string) => {
    localStorage.setItem(globalVariables.LOCAL_USERNAME, username);
}

const clearCurrentUserName = () => {
    localStorage.removeItem(globalVariables.LOCAL_USERNAME);
}

const getCards = async (imageData: ApiImagesInterface, numberCards: any = 9) => {
    if (numberCards > imageData.entries.length) {
        return [];
    }
    const imgArray = imageData.entries.slice(0, numberCards);
    const resultado = await Promise.all(imgArray.map(async (item) => {
        const objectResult: ShowedImageInterface = {
            url: item?.fields?.image?.url,
            uuid: item?.fields?.image?.uuid,
            title: item?.fields?.image?.title,
            matched: false,
            flipped: false,
            numberOnBoard: 0,
            id: ""
        };
        return objectResult;
    }));
    return resultado;
}

export {
    getCurrentUserName,
    setCurrentUserName,
    clearCurrentUserName,
    getCards
}
