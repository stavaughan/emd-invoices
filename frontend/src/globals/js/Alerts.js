const Alerts = {
    email: 'Please enter a valid email address.',
    phone: 'Please enter a valid phone number.',
    pin: 'Please enter numbers only.',
    ssn: 'Please enter valid social security number.',
    curPW: 'Please enter valid current password.',
    nonZero: `Please enter an amount that's greater than zero ('0').`,
    valPW: 'Please enter valid password.',
    url: 'Please enter a valid url.',
    noMatchPW: `Confirmed password doesn't match your new password.`
};

export const messageText = {
	rules: {
		password: 'Password must be between eight (8) and twenty (20) characters long and must contain at least 1 lowercase letter, 1 uppercase letter and 1 number.'
	}
}

export default Alerts;
