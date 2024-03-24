// Source: https://codingstatus.com/password-and-confirm-password-validation-in-react-js/

function PasswordInputField({handleValidation, handlePasswordChange, passwordValue, passwordError}){
    return (
        <>
    <div className="mb-2">
        <label htmlFor="password">Password</label>
        <input type="password" value={passwordValue}  onChange={handlePasswordChange} onKeyUp={handleValidation} name="password" placeholder="Enter Password" className="form-control" />
        <p className="text-danger">{passwordError}</p>
   </div>
          
        </>
    )
}

export default PasswordInputField;