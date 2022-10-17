import { Component } from "react";
import { signUp } from '../../utilities/users-service';
import './SignupForm.css'
import { useState } from "react";
import * as usersService from '../../utilities/users-service';
import {useNavigate} from 'react-router-dom';

// export default function SignupForm({setUser}) {
//     const [state, setState] = useState({
//         name: '',
//         username:'',
//         email: '',
//         password: '',
//         confirm: '',
//         error: ''
//       });

//       const navigate = useNavigate();
//       const [error, setError] = useState('');


//       function handleChange(evt) {
//         setState({...state, [evt.target.name]: evt.target.value })
//         setError('');
//     }

//     async function handleSubmit(evt) {
//         // Prevent form from being submitted to the server
//         evt.preventDefault();
//         // try {
//             //The promise returned by the signUp service method 
//             // will resolve to the user object included in the
//             // payload of the JSON Web Token (JWT)
//             const user = await usersService.signUp(state);
//             setUser(user)
//             navigate('/giftlist');
//         // } catch {
//         //     setError('Log In Failed - Try Again')
//         // }
//     }

//     return (
//         <>
//          <div>
                
            
//                            <section >
//                             <div>
//                             <h3 className="signup-label">Sign Up</h3>
//                               <form className="SignupForm" autoComplete="off" onSubmit={handleSubmit}>
                                    
//                               <div><label>Name</label></div>
                
//                                     <div>
//                                   <input type="text"
//                                     name="name"
//                                     value={this.state.name}
//                                     onChange={handleChange}
//                                     required
//                                     />
//                                     </div>
                                    
//                                     <div><label>Email</label></div>
                
//                                     <div>
//                                     <input type="email" 
//                                     name="email" 
//                                     value={this.state.email}
//                                     onChange={handleChange}
//                                     required
//                                     />
//                                     </div>
                
//                                     <div><label>Password</label></div>
                
//                                     <div>
//                                     <input type="password" 
//                                     name="password" 
//                                     value={this.state.password}
//                                     onChange={handleChange}
//                                     required
//                                     />
//                                     </div>   
                
//                                     <div><label>Confirm</label></div>
                
//                                     <div>
//                                     <input type="password" 
//                                     name="confirm" 
//                                     value={this.state.confirm}
//                                     onChange={handleChange}
//                                     required
//                                     />
//                                     </div>
                
//                                     <button className="signup-btn" type="submit">Create Account</button>
//                                 </form>
//                             </div>
//                             </section>
//                             </div>
//         </>

//     )
// }
export default class SignupForm extends Component{
    state = {
        name: '',
        username:'',
        email: '',
        password: '',
        confirm: '',
        error: ''
      };

      handleChange = (evt) => {
        this.setState({
            [evt.target.name]:evt.target.value,
            error:''
        })
      }

      handleSubmit = async (evt) => {
        evt.preventDefault();
        // alert(JSON.stringify(this.state));
        try{
            const formData = {...this.state};
            delete formData.confirm;
            delete formData.error;
            const user = await signUp(formData);
            this.props.setUser(user);
            } catch {
                this.setState({error: 'Sign Up Failed - Try Again'});
            }
        }
     

    render() {
        const disable = this.state.password !== this.state.confirm;

        return (
            <div>
                
            
            <section >
            <div>
            <h3 className="signup-label">Sign Up</h3>
                <form className="SignupForm" autoComplete="off" onSubmit={this.handleSubmit}>
                    
                    <div><label>Name</label></div>

                    <div>
                    <input type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                    />
                    </div>
                    
                    <div><label>Email</label></div>

                    <div>
                    <input type="email" 
                    name="email" 
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                    />
                    </div>

                    <div><label>Password</label></div>

                    <div>
                    <input type="password" 
                    name="password" 
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                    />
                    </div>   

                    <div><label>Confirm</label></div>

                    <div>
                    <input type="password" 
                    name="confirm" 
                    value={this.state.confirm}
                    onChange={this.handleChange}
                    required
                    />
                    </div>

                    <button className="signup-btn" type="submit" disabled={disable}>Create Account</button>
                </form>
            </div>
            </section>
            </div>
        )
    }
}
// className="signup-grid"