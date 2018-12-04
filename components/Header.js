import React from 'react';
import Head from 'next/head';

export default () =>
  <Head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css?family=Nunito:300" rel="stylesheet" />
    <link href="static/base.css" rel="stylesheet" />
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.0.0-beta.36/dist/web3.min.js" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/ipfs-http-client/dist/index.min.js"></script>
    <script src="https://requirejs.org/docs/release/2.3.5/minified/require.js"></script>
    <script src="static/js/app.js"></script>
  </Head>