import React from "react"
import * as firebase from "firebase";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            //Personal Info
            name: '',
            surname: '',
            fatherName: '',
            passportSerial: '',
            dateOfBirth: '',
            country: '',
            city: '',
            streetHomeAdd: '',

            //Parent's Info
            fatherName2: '',
            fatherSurname: '',
            fatherJobTitle: '',
            motherName: '',
            motherSurname: '',
            motherJobTitle: '',

            //Contacts
            mobile: '',
            additional: '',
            email: ''
            
            //Get Url
        }
    }
    componentDidMount(){
        //Get Personal Info
        const rootRef = firebase.database().ref().child('Personal');
        const nameRef = rootRef.child('name');
        nameRef.on('value', snap => { this.setState({ name: snap.val() }); });

        const surNameRef = rootRef.child('surname');
        surNameRef.on('value', snap => { this.setState({ surname: snap.val() }); });

        const fatherNameRef = rootRef.child('fatherName');
        fatherNameRef.on('value', snap => { this.setState({ fatherName: snap.val() }); });

        const passportSerialRef = rootRef.child('passportSerial');
        passportSerialRef.on('value', snap => { this.setState({ passportSerial: snap.val() }); });

        const dateOfBirthRef = rootRef.child('dateOfBirth');
        dateOfBirthRef.on('value', snap => { this.setState({ dateOfBirth: snap.val() }); });

        const countryRef = rootRef.child('country');
        countryRef.on('value', snap => { this.setState({ country: snap.val() }); });

        const cityRef = rootRef.child('city');
        cityRef.on('value', snap => { this.setState({ city: snap.val() }); });

        const streetHomeAddRef = rootRef.child('streetHomeAdd');
        streetHomeAddRef.on('value', snap => { this.setState({ streetHomeAdd: snap.val() }); });
        
        //Get Additional Info
        const rootRef2 = firebase.database().ref().child('Additional');

        const father_nameRef2 = rootRef2.child('fatherName');
        father_nameRef2.on('value', snap => { this.setState({ fatherName2: snap.val() }); });
        const fatherSurnameRef = rootRef2.child('fatherSurname');
        fatherSurnameRef.on('value', snap => { this.setState({ fatherSurname: snap.val() }); });
        const father_job_titleRef = rootRef2.child('fatherJobTitle');
        father_job_titleRef.on('value', snap => { this.setState({ fatherJobTitle: snap.val() }); });

        const motherNameRef = rootRef2.child('motherName');
        motherNameRef.on('value', snap => { this.setState({ motherName: snap.val() }); });
        const motherSurnameRef = rootRef2.child('motherSurname');
        motherSurnameRef.on('value', snap => { this.setState({ motherSurname: snap.val() }); });
        const motherJobTitleRef = rootRef2.child('motherJobTitle');
        motherJobTitleRef.on('value', snap => { this.setState({ motherJobTitle: snap.val() }); });

        //Get Contact Info
        const rootRef3 = firebase.database().ref().child('Mobile');

        const mobileNumberRef = rootRef3.child('mobileNumber');
        mobileNumberRef.on('value', snap => { this.setState({ mobileNumber: snap.val() }); });

        const additionalNumberRef = rootRef3.child('additionalNumber');
        additionalNumberRef.on('value', snap => { this.setState({ additionalNumber: snap.val() }); });

        const emailRef = rootRef3.child('email');
        emailRef.on('value', snap => { this.setState({ email: snap.val() }); });
    }
    abortController = new AbortController();
    componentWillMount(){
        this.abortController.abort();
    }
    render(){

        return(
            <div>
                <h3 style={{clear: "both", marginBottom: "15px", color: "#E0FFFF"}}>Personal Info</h3>
                <hr style={{borderColor: "#445366"}}/>
                <div className="FormFieldProfile" style={{clear: "both"}}>
                    <p><b style={{color: "#707C8B", paddingRight: "12px"}}>Name: </b>{this.state.name}</p>              
                </div>
                <div className="FormFieldProfile">
                    <p><b style={{color: "#707C8B", paddingRight: "12px"}}>Surname: </b>{this.state.surname}</p>              
                </div>
                <div className="FormFieldProfile">
                    <p><b style={{color: "#707C8B", paddingRight: "12px"}}>Father's Name: </b>{this.state.fatherName}</p>              
                </div>
                <div className="FormFieldProfile">
                    <p><b style={{color: "#707C8B", paddingRight: "12px"}}>Passport Serial Number: </b>{this.state.passportSerial}</p>              
                </div>
                <div className="FormFieldProfile">
                    <p><b style={{color: "#707C8B", paddingRight: "12px"}}>Date of Birth: </b>{this.state.dateOfBirth}</p>              
                </div>
                <div className="FormFieldProfile">
                    <p><b style={{color: "#707C8B", paddingRight: "12px"}}>Country: </b>{this.state.country}</p>              
                </div>
                <div className="FormFieldProfile">
                    <p><b style={{color: "#707C8B", paddingRight: "12px"}}>City: </b>{this.state.city}</p>              
                </div>
                <div className="FormFieldProfile">
                    <p><b style={{color: "#707C8B", paddingRight: "12px"}}>Home Address: </b>{this.state.streetHomeAdd}</p>              
                </div>


                <h3 style={{clear: "both", marginBottom: "15px", color: "#E0FFFF"}}>Additional Info</h3>
                <hr style={{borderColor: "#445366"}}/>
                <div className="FormFieldProfile">
                    
                    <p><b style={{color: "#707C8B", paddingRight: "12px"}}>Father's Name: </b>{this.state.fatherName}</p>              
                </div>
                <div className="FormFieldProfile">
                    <p><b style={{color: "#707C8B", paddingRight: "12px"}}>Father's Surname: </b>{this.state.fatherSurname}</p>              
                </div>
                <div className="FormFieldProfile">
                    <p><b style={{color: "#707C8B", paddingRight: "12px"}}>Father's Job Title: </b>{this.state.fatherJobTitle}</p>              
                </div>
                <div className="FormFieldProfile">
                    <p><b style={{color: "#707C8B", paddingRight: "12px"}}>Mother's Name: </b>{this.state.motherName}</p>              
                </div>
                <div className="FormFieldProfile">
                    <p><b style={{color: "#707C8B", paddingRight: "12px"}}>Mother's Surname: </b>{this.state.motherSurname}</p>              
                </div>
                <div className="FormFieldProfile">
                    <p><b style={{color: "#707C8B", paddingRight: "12px"}}>Mother's Job Title: </b>{this.state.motherJobTitle}</p>              
                </div>


                <h3 style={{clear: "both", marginBottom: "15px", color: "#E0FFFF"}}>Contacts</h3>
                <hr style={{borderColor: "#445366"}}/>
                <div className="FormFieldProfile">
                    <p><b style={{color: "#707C8B", paddingRight: "12px"}}>Mobile Number: </b>{this.state.mobileNumber}</p>              
                </div>
                <div className="FormFieldProfile">
                    <p><b style={{color: "#707C8B", paddingRight: "12px"}}>Additional Number: </b>{this.state.additionalNumber}</p>              
                </div>
                <div className="FormFieldProfile">
                    <p><b style={{color: "#707C8B", paddingRight: "12px"}}>Email: </b>{this.state.email}</p>              
                </div>

            </div>
        )
        }
}
export default Profile;