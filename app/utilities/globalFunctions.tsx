import { ApiImagesInterface } from "../interfaces/images/apiImageInterface";
import { ShowedImageInterface } from "../interfaces/images/imagesShowedInterface";

const getCards = async (imageData: ApiImagesInterface, numberCards: any = 9) => {
    if (numberCards > (imageData.entries.length / 2)) {
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
const validatePatternName = (value: string) => {
    return /^[a-zA-Z0-9-_:&.ñÑáéíóúÁÉÍÓÚüÜ/+ ]*$/.test(value);
}


const getApiData = (apiUrl: string) => {
    return fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(err => {
            console.log(`Some error occured: ${err}`)
            return null;
        });
}
export {
    getCards,
    validatePatternName,
    getApiData
}
