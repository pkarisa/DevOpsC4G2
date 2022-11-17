// Capture input from Frontend (HTML)
$(document).ready((event) => {
    $('button#loginButton').click(() => {
        const emailValue = $('input#emailBox').val();
        const passwordValue = $('input#passwordBox').val();

        // Perform validation for input fields
        let message;
        if (emailValue == '' || passwordValue == '') message = 'Please provide email and/or password';
        else {
            if (String(emailValue).length < 3 || String(passwordValue).length < 3) message = 'Please provide more than 3 characters for email and/or password';
            else {
                if (!String(emailValue).includes('@')) message = 'Please provide a valid email';
                else message = 'Logged in successfuly as ' + emailValue;
            }
        }
        $('p#loginResult').text(message);
        // alert(message);
    })

    event.preventDefault();
});