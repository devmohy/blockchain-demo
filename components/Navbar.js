import React from 'react';
import Link from 'next/link';
import SigupLayout from '../components/SignupLayout';


export default () =>
<div className="container">
  <nav className="navbar navbar-light bg-light">
    <img src="static/images/logo.png" style={{maxWidth:'80px'}} className="rounded" alt="app logo" />
    <Link href="/"><a className="navbar-brand">Decentralized Citizen Application</a></Link>
    <SigupLayout />
  </nav>
</div>
  
