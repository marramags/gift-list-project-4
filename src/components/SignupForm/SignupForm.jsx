import { Component } from "react";
import { signUp } from '../../utilities/users-service';
import './SignupForm.css'


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
            this.proper.setUser(user);
            // reload()
            } catch {
                this.setState({error: 'Sign Up Failed - Try Again'});
            }
        }
     

    render() {
        const disable = this.state.password !== this.state.confirm;

        return (
            <div>
                
            {/* <h1>Sign Up</h1> */}
            <section >
            <div>
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

                    {/* <label>Username</label>
                    <input type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    required
                    /> */}
                    
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

                    <button type="submit" disabled={disable}>Sign Up</button>
                </form>
            </div>
            </section>
            </div>
        )
    }
}
// className="signup-grid"