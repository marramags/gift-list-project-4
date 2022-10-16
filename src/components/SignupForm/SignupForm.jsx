import { Component } from "react";
import { signUp } from '../../utilities/users-service';


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
            } catch {
                this.setState({error: 'Sign Up Failed - Try Again'});
            }
        }
     

    render() {
        const disable = this.state.password !== this.state.confirm;

        return (
            <div>
                
            <h1>Sign Up</h1>
            <section className="signup-grid">
            <div>
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                    />
                    {/* <label>Username</label>
                    <input type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    required
                    /> */}
                    <label>Email</label>
                    <input type="email" 
                    name="email" 
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                    />
                    <label>Password</label>
                    <input type="password" 
                    name="password" 
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                    />
                    <label>Confirm</label>
                    <input type="password" 
                    name="confirm" 
                    value={this.state.confirm}
                    onChange={this.handleChange}
                    required
                    />
                    <button type="submit" disabled={disable}>Sign Up</button>
                </form>
            </div>
            </section>
            </div>
        )
    }
}