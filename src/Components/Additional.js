import React from "react"
import firebase from "firebase";

const initialState = {
    fatherName: '',
    fatherSurname: '',
    fatherJobTitle: '',
    motherName: '',
    motherSurname: '',
    motherJobTitle: ''
};

class Additional extends React.Component{
    constructor(props){
        super(props);
        this.state = initialState;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    abortController = new AbortController();
    componentWillMount(){
        this.abortController.abort();
    }
       handleChange(event) {
           const {name, value} = event.target
           this.setState({
               [name]: value
           })
       }
       handleSubmit(e){
           e.preventDefault();
           firebase.database().ref('Additional').update({
            fatherName: this.state.fatherName,
            fatherSurname: this.state.fatherSurname,
            fatherJobTitle: this.state.fatherJobTitle,
            motherName: this.state.motherName,
            motherSurname: this.state.motherSurname,
            motherJobTitle: this.state.motherJobTitle
           })

           this.setState(initialState);
           alert("Additional Info Successfully Submitted!");
       }
   
    render(){
        return(
            <div className="FormTitle">
                <form className="FormFields">
                <h3 style={{clear:"both"}}>Parents Info<br/><br/></h3>
                <div className="FormField">
                        <label className="FormField__Label" htmlFor="fatherName">Father's Name</label>
                        <input className="FormField__Input" onChange={this.handleChange} value={this.state.fatherName} type="text" id="fatherName" placeholder="Enter your Father's name here" name="fatherName"/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="fatherSurname">Father's Surname</label>
                        <input className="FormField__Input" onChange={this.handleChange}  value={this.state.fatherSurname} type="text" id="fatherSurname" placeholder="Enter your Father's surname here" name="fatherSurname"/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="fatherJobTitle">Father's job title</label>
                        <input className="FormField__Input" onChange={this.handleChange}  value={this.state.fatherJobTitle} type="text" id="fatherJobTitle" placeholder="Enter your Father's job title here" name="fatherJobTitle"/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="motherName">Mother's Name</label>
                        <input className="FormField__Input" onChange={this.handleChange} value={this.state.motherName} type="text" id="motherName" placeholder="Enter your Mother's name here" name="motherName"/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="motherSurname">Mother's Surname</label>
                        <input className="FormField__Input" onChange={this.handleChange}  value={this.state.motherSurname} type="text" id="motherSurname" placeholder="Enter your Mother's surname here" name="motherSurname"/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="motherJobTitle">Mother's job title</label>
                        <input className="FormField__Input" onChange={this.handleChange}  value={this.state.motherJobTitle} type="text" id="motherJobTitle" placeholder="Enter your Mother's job title here" name="motherJobTitle"/>
                    </div>
                    <div className="FormField" style={{clear: "both"}}>
                        <button className="FormField__Button mr-20" onClick={(e) => this.handleSubmit(e)} type="reset" value="submit" >Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Additional;