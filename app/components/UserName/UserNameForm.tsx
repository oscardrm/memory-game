'use client';
import { setCurrentUserName } from "@/app/helpers/globalFunctions";
import { useEffect } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal)

const UserNameForm = () => {
  useEffect(() => {
    MySwal.fire({
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
        console.log(validatePattern(name));
        if (name) {
          if (!validatePattern(name)) {
            MySwal.showValidationMessage('Please enter a valid name!');
          } else
            if (name.length > 50) {
              MySwal.showValidationMessage('You can only enter a maximum of 50 characters!');
            } else {
              saveUserName(name);
            }
        } else {
          MySwal.showValidationMessage('Please enter your name!');
        }
      },
      allowOutsideClick: () => !MySwal.isLoading()
    });
  }, [])

  const saveUserName = (name: string) => {
    setCurrentUserName(name);
    location.reload();
  }

  //function to validate pattern 
  const validatePattern = (value: string) => {
    return /^[a-zA-Z0-9-_:&.ñÑáéíóúÁÉÍÓÚüÜ/+ ]*$/.test(value);
  }

  return (
    <></>
  );
}

export default UserNameForm;