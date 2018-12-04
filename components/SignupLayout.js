import React from 'react';
import Link from 'next/link';

export default () =>
  <form className="form-inline">
    <Link href="/signup"><button className="btn btn-sm btn-outline-success" type="button">Sign up</button></Link>
    <Link href="/"><button className="btn btn-sm btn-outline-secondary ml-sm-2" type="button">Login</button></Link>
  </form>