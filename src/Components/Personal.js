import React from "react"
import InputMask from 'react-input-mask';
import firebase from "firebase";
import { file } from "@babel/types";
import FileUploader from "react-firebase-file-uploader";

const initialState = {
    name: "",
    surname: "",
    father_name: "",
    passportSerial: "",
    dateOfBirth: "",
    country: "",
    city: "",
    streetHomeAdd: "",
    //Errors
    nameError: "",
    surnameError: "",
    passportSerialError: "",
    emailError: "",
    //Image Upload
    img: null,
    imgUrl: ''
}

class Personal extends React.Component{
    constructor(props){
        super(props);
        this.state = initialState;
    }
    abortController = new AbortController();
    componentWillMount(){
        this.abortController.abort();
    }

    handleUploadStart = () => {

    }
    handleUploadSuccess = (filename) => {
        this.setState({
            image: filename
        });
    }
 

    validate = () => {
        let nameError = "";
        let surnameError=  "";
        let passportSerialError= "";

        //let emailError = "";

        if(!this.state.name ){
            nameError = "Name is required!";
         }
         if(!this.state.surname ){
            surnameError = "Surname is required!";
         }
         if(!this.state.passportSerial ){
            passportSerialError = "Passport Serial number is required!";
         }

      
/*         if(!this.state.email.includes('@')){
            emailError = "Invalid Email!";
        } */
        if(nameError || surnameError || passportSerialError){
            this.setState({ nameError, surnameError, passportSerialError});
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
            firebase.database().ref('Personal').update({
                name: this.state.name,
                surname: this.state.surname,
                fatherName: this.state.father_name,
                passportSerial: this.state.passportSerial,
                dateOfBirth: this.state.dateOfBirth,
                country: this.state.country,
                city: this.state.city,
                streetHomeAdd: this.state.streetHomeAdd
            });

    
            this.setState(initialState);
            alert("Personal Info Successfully Submitted!");
        }
        else{
            alert("Fill the required fields!");
            
        }

    }

    render(){
        return(
            <div className="FormTitle">
                <form className="FormFields">
                <h3 style={{clear:"both"}}>Passport Info<br/><br/></h3>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Name <small>(*Required)</small></label>
                        <input className="FormField__Input"  value={this.state.name} onChange={this.handleChange}  type="text" id="name" placeholder="Enter your name here" name="name"/>
                        <div style={{color: "red"}}>{this.state.nameError}</div>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="surname">Surname <small>(*Required)</small></label>
                        <input className="FormField__Input" value={this.state.surname} onChange={this.handleChange}   type="text" id="surname" placeholder="Enter your surname here" name="surname"/>
                        <div style={{color: "red"}}>{this.state.surnameError}</div>
                    </div>


                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="father_name">Father's Name</label>
                        <input className="FormField__Input" value={this.state.father_name} onChange={this.handleChange}type="text" id="father_name" placeholder="Enter your father's name here" name="father_name"/>
                        <div><br/></div>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="passportSerial">Passport serial number <small>(*Required)</small></label>
                        <input className="FormField__Input" value={this.state.passportSerial} onChange={this.handleChange}type="text" id="passportSerial" placeholder="Enter your passport serial number here" name="passportSerial"/>
                        <div style={{color: "red"}}>{this.state.passportSerialError}</div>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="dateOfBirth">date of birth</label>
                        <InputMask className="FormField__Input" value={this.state.dateOfBirth} onChange={this.handleChange} mask="99-99-9999" type="tel" id="dateOfBirth" placeholder="DD/MM/YYYY" name="dateOfBirth"/>
                        <div><br/></div>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="imgUpload">Image Upload</label>
                        <FileUploader 
                            accept="/*"
                            name='image'
                            storageRef={firebase.storage().ref('images')}
                            onUploadStart={this.handleUploadStart}
                            uploadSuccess={this.handleUploadSuccess}
                        />
                        <div><br/></div>
                    </div>
                    
                    <h3 style={{clear:"both"}}>Address<br/><br/></h3>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="country">Country</label>
                        <input className="FormField__Input" value={this.state.country} onChange={this.handleChange}type="text" id="country" placeholder="Enter your country here" name="country"/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="city">city</label>
                        <input className="FormField__Input" value={this.state.city} onChange={this.handleChange}type="text" id="city" placeholder="Enter your city here" name="city"/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="streetHomeAdd">Street and home address</label>
                        <input className="FormField__Input" value={this.state.streetHomeAdd} onChange={this.handleChange}type="text" id="streetHomeAdd" placeholder="Enter your street and home address" name="streetHomeAdd"/>
                    </div>


                    <div className="FormField" style={{clear: "both"}}>
                        <button onClick={(e) => this.handleSubmit(e)} type="reset"value="Submit" className="FormField__Button mr-20">Submit</button>
                    </div>
                </form>
          </div>
  
        )
    }

    
}
export default Personal;