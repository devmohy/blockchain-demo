// const IPFS = require('ipfs-api');
window.web3 = new Web3(window.web3.currentProvider);
// window.ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
// const ipfs = require("nano-ipfs-store").at("https://ipfs.infura.io:5001");

//Your contract address
window.address = '0x692a70d2e424a56d2c6c27aa97d1a86395877b3a';

//Your contract ABI
window.abi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "org",
        "type": "address"
      }
    ],
    "name": "addOrg",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "user",
        "type": "address"
      },
      {
        "name": "ipfsAddr",
        "type": "string"
      }
    ],
    "name": "addUser",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "ipfsAddr",
        "type": "string"
      }
    ],
    "name": "register",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "organization",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "ipfsAddr",
        "type": "string"
      }
    ],
    "name": "CitizenAdded",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getUser",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "login",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "officer",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]

window.citizenContract = new web3.eth.Contract(abi, address);