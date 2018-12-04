import React, {Fragment} from 'react';

export default () =>
  <Fragment>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="orgname">Organization name</label>
        <input type="text" className="form-control" id="orgname" aria-describedby="orgname" placeholder="name" required={true} />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="orgcode">Organization code</label>
        <input type="text" className="form-control" id="orgcode" aria-describedby="orgcode" placeholder="abbreviation" required={true} />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-12">
        <label htmlFor="orgaddr">Headquarter Address</label>
        <textarea className="form-control" id="orgaddr" rows="3" placeholder="main address" required={true} ></textarea>
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="orgstate">State located</label>
        <input type="text" className="form-control" id="orgstate" aria-describedby="orgstate" placeholder="state" required={true} />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="orgcity">City located</label>
        <input type="text" className="form-control" id="orgcity" aria-describedby="orgcity" placeholder="city" required={true} />
      </div>
    </div>
  </Fragment>


