import { validatePatternName } from '@/app/utilities/globalFunctions';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal)

const requestEvenCardsNumber = (maxNumberOfCards: number, minNumberOfCards: number): Promise<any> => {
    return MySwal.fire({
        title: 'Please enter the number of even cards you want to play with.',
        input: 'number',
        inputPlaceholder: 'Enter the number here...',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'SAVE',
        cancelButtonText: "CANCEL",
        showLoaderOnConfirm: true,
        preConfirm: (number) => {
            if (number) {
                if (number > maxNumberOfCards || number < minNumberOfCards) {
                    MySwal.showValidationMessage(`You can only enter maximum ${maxNumberOfCards} and minimun ${minNumberOfCards} even cards!`);
                }
            } else {
                MySwal.showValidationMessage('Please enter a number!');
            }
        },
        allowOutsideClick: () => !MySwal.isLoading()
    });
}

const requestUserName = () => {

    return  MySwal.fire({
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
                if (!validatePatternName(name)) {
                    MySwal.showValidationMessage('Please enter a valid name!');
                } else
                    if (name.length > 50) {
                        MySwal.showValidationMessage('You can only enter a maximum of 50 characters!');
                    }
                    return name;
            } else {
                MySwal.showValidationMessage('Please enter your name!');
            }
        },
        allowOutsideClick: () => !MySwal.isLoading()
    });
}

export {
    requestEvenCardsNumber,
    requestUserName
}