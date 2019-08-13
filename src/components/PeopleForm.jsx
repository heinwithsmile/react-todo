import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as personAction from '../redux/Actions/personAction';
import * as peopleAction from '../redux/Actions/peopleAction';
import { connect } from 'react-redux';

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
class PeopleForm extends Component {
    handleSave = (e) => {
        e.preventDefault();
        const {id, name, email,editing, submitForm,updateForm } = this.props;
        if(editing){
            updateForm({ id:id,name: name, email: email ,editing:!editing});
        }else{ 
            submitForm({ id:id,name: name, email: email ,editing:editing});
        }
    }
    render() {
        return (
            <div>
                <form className="card card-body my-3"  >
                    <div className="form-group">
                        <label className="text-secondary">Name:</label>
                        <input type="text" onChange={this.props.changeName} value={this.props.name} className="form-control" placeholder="name" />
                    </div>
                    <div className="form-group">
                        <label className="text-secondary">Email:</label>
                        <input type="text" onChange={this.props.changeEmail} value={this.props.email} className="form-control" placeholder="Email" />
                    </div>
                    {/* <div className="form-group" >
                        <label className="text-secondary">Date of Birth :</label><br />
                        <DatePicker
                           selected={this.props.inputDate}
                           onChange={this.props.changeDate}
                        />
                    </div> */}
                    <button type="button" className="btn btn-outline-success mt-2" onClick={(e)=>this.handleSave(e)}>{this.props.editing ? "Update" : "Add"}</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        id: state.person.id,
        name: state.person.name,        
        email: state.person.email,
        editing:state.person.editing
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeName: (e) => { dispatch(personAction.addname(e.target.value)) },
        changeEmail: (e) => { dispatch(personAction.addemail(e.target.value)) },
        // changeDate: (date) => { dispatch(personAction.addDate(date)) }
        submitForm: (person) => {
            dispatch(personAction.reset());
            dispatch(peopleAction.addPerson(person));
        },
        updateForm: (person) => {
            dispatch(peopleAction.updatePerson(person));
            dispatch(personAction.reset());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleForm);
