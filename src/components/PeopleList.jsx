import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import * as peopleAction from '../redux/Actions/peopleAction';
import * as personAction from '../redux/Actions/personAction';
import clone from 'lodash/clone';
class PeopleList extends Component {

    handleEdit = (id) => {
        const { people, onEdit } = this.props;
        const p = clone(people);
        for(let i = 0; i < p.length; i++) {
            const po = p[i];
            if (po.id === id) {
                onEdit(po.id, po.name, po.email, po.editing);
            }
        }
    }

    handleDelete = (e, index) => {
        e.preventDefault();
        this.props.deletePerson(index);

    }
    render() {
        return (
            <div className="card card-body my-3">
                <Table>
                    <thead>
                        <tr className="text-secondary">
                            <th>Name</th>
                            <th>Email</th>
                            {/* <th>Date oF Birth</th> */}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="mb-5">
                        {
                            this.props.people.map((pers, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{pers.name}</td>
                                        <td>{pers.email}</td>
                                        <td>
                                            <div className="icon ml-3">
                                                <button type="button" onClick={() => this.handleEdit(pers.id)} className="btn btn-outline-success" >
                                                    Edit <i className="fa fa-pen" aria-hidden="true"></i>
                                                </button>
                                                <button type="button" className="btn btn-outline-danger ml-2" onClick={(e) => this.handleDelete(e, index)}>
                                                    Delete <i className="fa fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        people: state.people,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePerson: (index) => { dispatch(peopleAction.deletePerson(index)) },
        onEdit: (id, name, email, editing) => { dispatch(personAction.onEdit(id, name, email, editing)) },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);