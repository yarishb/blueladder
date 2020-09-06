import React, {useState} from 'react';
import './buy.scss'

import Axios from 'axios';

function Buy() {

    const   [name, setName] = useState(""),
            [lastName, setLastName] = useState(""),
            [email, setEmail] = useState(""),
            [wish, setWish] = useState("interior"),
            [error, setError] = useState(false),
            [success, setSuccess] = useState(false);

    const submitHandler = async(e) => {
        e.preventDefault()
        try {
            const newUser = {name, lastName, email, wish}
            console.log(newUser);

            await Axios.post("https://blueladder-backend.herokuapp.com/users/customer", newUser)
                .then(res => {
                    if(res.status === 200){
                        setError(false)
                        setSuccess(true)
                        setTimeout(() => {
                            setSuccess(false)
                        }, 3000);
                        setName("")
                        setLastName("")
                        setEmail("")
                    } 
                })
            
        } catch (error) {
            setError(error.response.data.msg)
            setTimeout(() => {
                setError(false)
            }, 3000);
            console.log(error.response.data.msg);
        }
    }

    return (
        <>
            <div className="full-page">
                {
                    error &&
                        <div className="error-handler">{error}</div>
                }
                {    
                    success &&
                        <div className="error-handler success">Successfully sended request.</div>
                }
                <div className="buy">
                    <div className="buy-bg"></div>
                   <div className="buy-form">
                       <div className="buy-form-inside">
                        <div className="buy-header"><div className="blue">BLUE</div>LADDER</div>
                        <form style={{marginTop: "1rem"}} onSubmit={(e) => submitHandler(e)}>
                            <div className="form__group field">
                                <input type="input" className="form__field"
                                     value={name}
                                     placeholder="Name" 
                                     name="name" id='name' required 
                                     onChange={(e) => setName(e.target.value)}
                                     />
                                <label for="name" className="form__label">First name</label>
                            </div>
                            <div className="form__group field">
                                <input type="input" className="form__field"
                                     value={lastName}
                                     placeholder="Name" 
                                     name="lastName" 
                                     id='lastName' required 
                                     onChange={(e) => {setLastName(e.target.value)}}
                                     />
                                <label for="lastName" className="form__label">Last name</label>
                            </div>
                            <div className="form__group field">
                                <input type="input" className="form__field"
                                     value={email}
                                     placeholder="Email"
                                     name="email"
                                     id='lastName' required
                                     onChange={(e) => {setEmail(e.target.value)}}
                                     />
                                <label for="email" className="form__label">Email</label>
                            </div>
                            <select value={wish} onChange={(e) => setWish(e.target.value)} className="select">
                                <option disabled>Choose your wish</option>
                                <option value="interior">
                                    interior
                                </option>
                                <option value="exterior">
                                    exterior
                                </option>
                            </select><br />
                            <input type="submit" className="form-submit"/>
                        </form>
                       </div>
                   </div>
                </div>
            </div>
        </>
    );
}


export default Buy;