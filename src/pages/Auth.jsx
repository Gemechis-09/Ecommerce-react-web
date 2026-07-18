import { useContext, useState } from "react"
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


export default function Auth(){
    const [error, setError] = useState(null);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const { signUp, user, logout, login, mode, sign, log } = useContext(AuthContext);
    const navigate = useNavigate();
    
    function onSubmit(data){
        let result;
        if(mode==="signup"){
            result = signUp(data.email, data.password);
        }
        else{
            result = login(data.email, data.password);
        }
        
        if(result.success){
            navigate("/");
        }

        else{
            setError(result.error);
        }
    }
    return(
        <div className="page">
            <div className="container">
                <div className="auth-container">
                    {mode === "signup" ? (<h1 className="page-title">Sign Up</h1>):(<h1 className="page-title">Login</h1>)}
                    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                        {error && <div className="error-message">{error}</div>}
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input className="form-input" id="email" type="email" {...register('email', {required: "Email is reuired"})}/>
                            {errors.email && <span className="form-error">{errors.email.message}</span>}
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input className="form-input" id="password" type="password" {...register('password', {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be atleast 6 chars"
                                },
                                maxLength: {
                                    value: 12,
                                    message: "password must be atmost 12 chars"
                                }
                            })} />
                            {errors.password && <span className="form-error">{errors.password.message}</span>}
                        </div>
                        {mode === "signup" ? (<button type="submit" className="btn btn-primary btn-large">Signup</button>):
                        (<button type="submit" className="btn btn-primary btn-large">Login</button>)}
                        
                    </form>
                    <div className="auth-switch">
                        {mode === "signup" ? (
                            <p>
                                Already have an account ? <span className="auth-link" onClick={log}>Login</span>
                            </p>
                        ):(
                            <p>
                                 Don't have an account ? <span className="auth-link" onClick={sign}>Signup</span>
                            </p>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}