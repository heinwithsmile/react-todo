import React, { Component } from 'react';
import PeopleForm from '../components/PeopleForm';
import PeopleList from '../components/PeopleList';
class App extends Component {
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-8 align-center">
            <h2 className="mt-3 text-success text-center"> Address Book </h2>
             <PeopleForm />
             <PeopleList />
          </div>
        </div>
      </div>
    );
  }
}
export default App;