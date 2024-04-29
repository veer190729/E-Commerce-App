export const handleInputChange = (event, setUserDetails) => {
    const { name, value } = event.target;
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };
  
  export const handleSubmit = (event, userDetails) => {
    event.preventDefault();
    console.log('User Details:', userDetails);
  };
  