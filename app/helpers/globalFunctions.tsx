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

const checkIsVerticalImage = (urlImage: string) => {
    return new Promise((resolve) => {
        const imagen = new Image();
        imagen.src = urlImage;
        imagen.onload = () => {
            resolve(imagen.naturalHeight > imagen.naturalWidth)
        };
    });
};

const getHorizontalImages2 = (imageData: ApiImagesInterface, format = 'vertical') => {
    return new Promise<ShowedImageInterface[]>((resolve) => {
        let resultCardImages: ShowedImageInterface[] = [];
        imageData.entries.forEach((item, index) => {
            checkIsVerticalImage(item?.fields?.image?.url)
                .then(res => {
                    const objectResult: ShowedImageInterface = {
                        url: item?.fields?.image?.url,
                        uuid: item?.fields?.image?.uuid,
                        title: item?.fields?.image?.title,
                        matched: false,
                        flipped: false,
                        numberOnBoard: 0,
                        id: ""
                    };

                    if (!res && format == 'horizontal') {
                        resultCardImages.push(objectResult);
                    }
                    if (res && format === 'vertical') {
                        resultCardImages.push(objectResult);
                    }
                    // finish a return de value of primise when is the last iteration
                    if (index === imageData.entries.length - 1) {
                        resolve(resultCardImages);
                    }
                })
        });
    })
}


const getHorizontalImages = async (imageData: ApiImagesInterface, format = 'vertical') => {
    let resultCardImages: ShowedImageInterface[] = [];
    const resultado = await Promise.all(imageData.entries.map(async (item, index) => {
        const res = await checkIsVerticalImage(item?.fields?.image?.url);
        const objectResult: ShowedImageInterface = {
            url: item?.fields?.image?.url,
            uuid: item?.fields?.image?.uuid,
            title: item?.fields?.image?.title,
            matched: false,
            flipped: false,
            numberOnBoard: 0,
            id: ""
        };

        if (!res && format == 'horizontal') {
            resultCardImages.push(objectResult);
        }
        if (res && format === 'vertical') {
            resultCardImages.push(objectResult);
        }
        // finish a return de value of primise when is the last iteration
        if (index === imageData.entries.length - 1) {
            return resultCardImages;
        } else {
            return [];
        }
    }));
    return resultado.flat();
}

export {
    getCurrentUserName,
    setCurrentUserName,
    clearCurrentUserName,
    checkIsVerticalImage,
    getHorizontalImages,
    getHorizontalImages2
}