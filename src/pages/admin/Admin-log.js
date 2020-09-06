import React, {useState} from 'react';
import './admin.scss';

import img from '../../images/contacts/pngegg.png'

import Axios from 'axios'

function AdminLog() {

    const   [login, setLogin] = useState(""),
            [password, setPassword] = useState(""),
            [error, setError] = useState(false);

    const submitHandler = async(e) => {
        e.preventDefault()

        try{
            const admin = {login, password}

            await Axios.post('https://blueladder-backend.herokuapp.com/users/admin', admin)
                .then(res => {
                    console.log(res);
                    if(res.status === 200) {
                        localStorage.setItem('admin', login, password)
                        window.location.replace("/#/api");

                        setLogin("")
                        setPassword("")
                    };
                });
        } catch (error) {
            setError(error.response.data.msg);
            setTimeout(() => {
                setError(false)
            }, 3000);
            
                        setLogin("")
                        setPassword("")
            console.log(error.response.data.msg);
        }
    }

    return (
        <>
        {
            error &&
            <div className="error-handler">{error}</div>
        }
            <div className="admin-block">
                <img src={img} alt="admin-svg" className="admin-svg"/>
                <form className="admin-form" onSubmit={(e) => submitHandler(e)}>
                    <div className="inputs">
                    <div className="form__group field">
                                <input type="input" className="form__field"
                                     value={login}
                                     placeholder="Login" 
                                     name="login" id='login' required 
                                     onChange={(e) => setLogin(e.target.value)}
                                     />
                                <label for="login" className="form__label">Login</label>
                    </div>
                    <div className="form__group field">
                                <input type="input" className="form__field"
                                     value={password}
                                     placeholder="Password" 
                                     name="password" id='password' required 
                                     onChange={(e) => setPassword(e.target.value)}
                                     />
                                <label for="password" className="form__label">Password</label>
                    </div>
                    <input type="submit" className="form-submit"/>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AdminLog;