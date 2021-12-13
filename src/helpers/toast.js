const initialOptions = {
   position: 'top-center',
   autoClose: 2000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
};

function toastOptions(text, type, isLoading) {
   return {
      render: text,
      autoClose: 1000,
      type: type,
      closeButton: true,
      isLoading: isLoading,
   };
}

export { toastOptions, initialOptions };
