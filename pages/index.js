import React from 'react';
import { Header, Navbar } from '../shared/common';
import LoginForm from '../components/LoginForm';

const Index = () =>
  <div>
    <Header />
    <Navbar />
    <div class="container app-container">
      <LoginForm />
    </div>
  </div>

export default Index;