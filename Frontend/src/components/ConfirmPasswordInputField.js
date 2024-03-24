// Source: https://codingstatus.com/password-and-confirm-password-validation-in-react-js/

function ConfirmPasswordInputField({handleValidation, handlePasswordChange, confirmPasswordValue, confirmPasswordError}){
    return (
        <>
     <div className="mb-2">
        <label htmlFor="password">Confirm Password</label>
        <input type="password" value={confirmPasswordValue}  onChange={handlePasswordChange} onKeyUp={handleValidation} name="confirmPassword" placeholder="Re-Enter Password" className="form-control" />
        <p className="text-danger">{confirmPasswordError}</p>
    </div>
        </>
    )
}

export default ConfirmPasswordInputField;