import React from 'react';
import { Header, Navbar } from '../shared/common';
import SignupForm from '../components/SignupForm';

const Index = () =>
  <div>
    <Header />
    <Navbar />
    <div className="container app-container">
      <SignupForm />
    </div>
  </div>

export default Index;