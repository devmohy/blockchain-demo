import React from 'react';

export default class extends React.Component {

  render(){

    return (
      <div className="row mt-sm-5 login-cont" style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
        <form className="center" onSubmit={(e)=> e.preventDefault()}>
          <div className="form-group">
            <label for="citizenid">Identity</label>
            <input type="email" className="form-control" id="citizenid" aria-describedby="citizenidHelp" placeholder="Enter your id" />
            <small id="citizenidHelp" className="form-text text-muted">We'll never share your citizeni d with anyone else.</small>
          </div>
          <div className="form-group type-control">
            <label for="citizenid">Login as ?</label>
            <div className="form-check col-sm-6">
              <input className="form-check-input" type="radio" name="usertype" id="citizen" value="citizen" checked /> 
              <label className="form-check-label" for="citizen">
                Citizen
              </label>
            </div>
            <div className="form-check col-sm-6">
              <input className="form-check-input" type="radio" name="usertype" id="org" value="org" />
              <label className="form-check-label" for="org">
                Organization
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary col-sm-12">Login</button>
        </form>
      </div>
    )
  }
  
  }