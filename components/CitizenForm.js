import React, {Fragment} from 'react';

export default ( data ) => {
  console.log(data);

  return (
    <Fragment>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" aria-describedby="username" placeholder="username" required={true}/>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="phone">Phone number</label>
          <input type="tel" className="form-control" id="phone" aria-describedby="phone" placeholder="phone" required={true} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="firstname">Firstname</label>
          <input type="text" className="form-control" id="firstname" aria-describedby="firstname" placeholder="firstname" required={true} />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="lastname">Lastname</label>
          <input type="text" className="form-control" id="lastname" aria-describedby="lastname" placeholder="lastname" required={true} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-12">
          <label htmlFor="address">Residential Address</label>
          <textarea className="form-control" id="address" rows="3" placeholder="main address" required={true} ></textarea>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="stateorigin">State of origin</label>
          <input type="text" className="form-control" id="stateorigin" aria-describedby="stateorigin" placeholder="state of origin" required={true} />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="cityorigin">City of origin</label>
          <input type="text" className="form-control" id="cityorigin" aria-describedby="cityorigin" placeholder="city of origin" required={true} />
        </div>
      </div>

    </Fragment>
  );
}

