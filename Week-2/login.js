const login = () => {
    // Retrieve the email and password elements
    const emailElement = document.getElementById('email')
    const passwordElement = document.getElementById('password')
    // console.log('Email element',emailElement)
    // console.log('Password element',passwordElement)

    // Retreieve the values from the elements above
    const email = emailElement.value;
    const password = passwordElement.value;
    // console.log('Email value',email)
    // console.log('Password value',password)

    // Do some checks -> ensure email and password are not empty
    if (email == '') {
        alert('Please provide an email')
    }
    if (password == '') {
        alert('Please provide an password')
    }
    else {
        // Compare the email and password to exisiting users in our system
        const db = { 'email': 'email@gmail.com', 'password': 'password' };
        if (email != db.email) {
            alert('Please provide an legit email')
        } 
        else if (password != db.password) {
            alert('Please provide an legit password')
        } else {
            // If succesful, give an alert 
            alert('You are logged in')
        }
    }
}