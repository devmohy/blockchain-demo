pragma solidity 0.4.24;

contract CitizenData {
    
    event CitizenAdded(address indexed organization, address indexed user, string ipfsAddr);
    
    mapping(address => mapping(address => string)) organizationUserDetails;
    mapping(address => uint8) Organizations;
    mapping(address => string) allUser;
    
    address public officer;
    
    constructor() public {
        officer = msg.sender;
    }
    
    //register public user
    function register(string ipfsAddr) public returns(bool){
        allUser[msg.sender] = ipfsAddr;
    }
    
    //login public user
    function login() public view returns (string){
        return allUser[msg.sender];
    }
    
    //add Organization
    function addOrg(address org) public returns (bool){
        require(msg.sender == officer);
        Organizations[org] = 1;
        return true;
    }
    
    //add user detail to Organization
    function addUser(address user, string ipfsAddr) public returns (bool){
        require(Organizations[msg.sender] == 1);
        organizationUserDetails[msg.sender][user] = ipfsAddr;
        emit CitizenAdded(msg.sender, user, ipfsAddr);
        return true;
    }
    
    //get user detail from Organizations
    function getUser(address user, string ipfsAddr) public view returns (string){
        require(Organizations[msg.sender] == 1);
        return organizationUserDetails[msg.sender][user];
    }
    
    
}