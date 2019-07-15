import React from "react"
import InputMask from 'react-input-mask';
import * as firebase from 'firebase/app';

const initialState = {
    mobile: '',
    additional: '',
    email: '',
    //Errors
    mobileError: '',
    emailError: ''
}

class Contacts extends React.Component{
    constructor(props){
        super(props);
        this.state = initialState;

    }
 
    abortController = new AbortController();
    componentWillMount(){
        this.abortController.abort();
    }

    validate = () => {
        let mobileError = "";
        let emailError= "";

        if(!this.state.mobile ){
            mobileError = "Mobile number is required!";
         }

        if(!this.state.email.includes('@')){
            emailError = "Invalid Email!";
        }
        if(emailError || mobileError){
            this.setState({ emailError, mobileError});
            return false
        }
        return true;
    }
    handleChange = (event) => {
       const {name, value} = event.target
       this.setState({
           [name]: value
       })
    }
    
    handleSubmit = (e) => {
       e.preventDefault();
       const isValid = this.validate();

       if(isValid){
        firebase.database().ref('Mobile').update({
            mobileNumber: this.state.mobile,
            additionalNumber: this.state.additional,
            email: this.state.email
        })
        this.setState(initialState);
        alert("Contact Info Successfully Submitted!");
        }
        else{
            alert("Fill the required fields!");
            
        }
    }
   
    render(){
        return(
            <div className="FormTitle">
                <form className="FormFields" onSubmit={this.handleSubmit} >
                <h3 style={{clear:"both"}}>Contact Details<br/><br/></h3>
                <div className="FormField">
                        <label className="FormField__Label" htmlFor="mobileNumber">Mobile Number <small>(*Required)</small></label>
                        <InputMask className="FormField__Input" onChange={this.handleChange} value={this.state.mobile} mask="+998-99-999-9999" type="tel" id="mobile" placeholder="Your mobile number" name="mobile"/>
                        <div style={{color: "red"}}>{this.state.mobileError}</div>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="additionalNumber">additional number</label>
                        <InputMask className="FormField__Input" onChange={this.handleChange} value={this.state.additional} mask="+998-99-999-9999" type="tel" id="additional" placeholder="Your additional number" name="additional"/>
                        <div style={{color: "red"}}><br/></div>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">email <small>(*Required)</small></label>
                        <input className="FormField__Input" onChange={this.handleChange} value={this.state.email} type="email" id="email" placeholder="example@mail.com" name="email"/>
                        <div style={{color: "red"}}>{this.state.emailError}</div>
                    </div>
                    <div className="FormField" style={{clear: "both"}}>
                        <button onClick={(e) => this.handleSubmit(e)} type="reset" value="Submit" className="FormField__Button mr-20">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Contacts;