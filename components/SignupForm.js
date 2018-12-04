import React from 'react';
// import web3 from '../contracts/web3';
// import ipfs from '../contracts/ipfs';
// import abi from '../contracts/citizenContract';

//components
import CitizenForm from '../components/CitizenForm';
import OrganizationForm from '../components/OrganizationForm';

export default class extends React.Component {
  state = {
    userType: 'citizen',
    citizenObj: {},
    organizationObj: {},
    ethAddress: null,
    ipfsHash: null,
  }

  handleChange = (e) => {
    const userType = e.target.value == 'citizen' ? 'citizen' : 'org';
    this.setState({
      userType,
      citizenObj: {},
      organizationObj: {}
    });
  }

  handleSubmit = async (event) => {
      event.preventDefault();

      this.state.userType == 'citizen' ? this.setState({
        citizenObj: {
          username: $('#username').val(),
          phonenumber: $('#phone').val(),
          firstname: $('#firstname').val(),
          lastname: $('#lastname').val(),
          address: $('#address').val(),
          state: $('#stateorigin').val(),
          city: $('#cityorigin').val(),
          type: 'citizen'
        }
      }) : this.setState({
        organizationObj: {
          name: $('#orgname').val(),
          abbr: $('#orgcode').val(),
          address: $('#orgaddr').val(),
          state: $('#orgstate').val(),
          city: $('#orgcity').val(),
          type: 'organization'
        }
      });

      //bring in user's metamask account address
      const accounts = await web3.eth.getAccounts();

      //obtain contract address from citizenContract.js
      const ethAddress= await citizenContract.options.address;
      this.setState({ethAddress});

      //get sav
      const doc = this.state.userType == 'citizen' ? this.state.citizenObj : this.state.organizationObj;

      //save document to IPFS,return its hash#, and set hash# to state
      await ipfs.add(doc, (err, ipfsHash) => {
        console.log('ipfs response: ', err,ipfsHash);
        //setState by setting ipfsHash to ipfsHash[0].hash
        this.setState({ ipfsHash:ipfsHash[0].hash });

        return
        // call Ethereum contract method "sendHash" and .send IPFS hash to etheruem contract
        //return the transaction hash from the ethereum contract
        citizenContract.methods.setHash(this.state.ipfsHash).send({
          from: accounts[0]
        }, (error, transactionHash) => {
          console.log('transaction er', transactionHash);
          this.setState({transactionHash});
        });
      });

    };

  render(){
    const usertype = this.state.userType;

    return (
      <div className="row mt-sm-5 login-cont" style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}>
      <form className="" onSubmit={this.handleSubmit}>

        <div className="form-group type-control">
          <label htmlFor="citizenid">Signup as ?</label>
          <div className="form-check col-sm-6">
            <input className="form-check-input" type="radio" name="usertype" id="citizen" value="citizen" onChange={this.handleChange} checked={ usertype == 'citizen' ? true : false } /> 
            <label className="form-check-label" htmlFor="citizen">
              Citizen
            </label>
          </div>
          <div className="form-check col-sm-6">
            <input className="form-check-input" type="radio" name="usertype" id="org" value="org" onChange={this.handleChange} checked={ usertype == 'org' ? true : false } />
            <label className="form-check-label" htmlFor="org">
              Organization
            </label>
          </div>
        </div>
        {
          ( usertype == 'citizen'? (<CitizenForm data={this.state.citizenObj} />) : (<OrganizationForm />))
        }
        <button type="submit" className="btn btn-primary col-sm-12">Register</button>
      </form>
    </div>
    )
  }
  
  }