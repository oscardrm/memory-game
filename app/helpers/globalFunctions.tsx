import { ApiImagesInterface } from "../interfaces/images/apiImageInterface";
import { ShowedImageInterface } from "../interfaces/images/imagesShowedInterface";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

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
const validatePattern = (value: string) => {
    return /^[a-zA-Z0-9-_:&.ñÑáéíóúÁÉÍÓÚüÜ/+ ]*$/.test(value);
}
const requestUserName = () => {
    return MySwal.fire({
        title: 'To start please enter your name',
        input: 'text',
        inputPlaceholder: 'Enter your name here...',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: false,
        confirmButtonText: 'SAVE',
        showLoaderOnConfirm: true,
        preConfirm: (name) => {
            if (name) {
                if (!validatePattern(name)) {
                    MySwal.showValidationMessage('Please enter a valid name!');
                } else
                    if (name.length > 50) {
                        MySwal.showValidationMessage('You can only enter a maximum of 50 characters!');
                    } else {
                        // saveUserName(name);
                    }
            } else {
                MySwal.showValidationMessage('Please enter your name!');
            }
        },
        allowOutsideClick: () => !MySwal.isLoading()
    });
}
export {
    getCards,
    requestUserName
}
