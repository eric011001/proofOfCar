//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Transaction{

  
    address public owner;
    uint256 public activePostCounter = 0;
    uint256 public inactivePostCounter = 0;
    uint256 private postCounter = 0;
    string newWorkshopName = "New";
    string newDateOfEntrance = "New";
    string newDateOfExit = "New";
    string newServiceDescription = "New";
    string newNameInsurance = "New";
    string newAccidentDescription = "New";
    uint256 newDamageCost = 0;

    mapping(uint256 => address) public authorOf;
    mapping(address => uint256) public postsOf;

    enum Deactivated { NO, YES }

    struct Invoice{
        uint256 postId;

        string wayOfPayment;
        string serialNumber;
        string model;
        string yearOfVehicle;
        string color;
        string carBrand;
        string engine;
        string liters;

        string name;
        string RFC;
        string CURP;

        string workshopName;
        string dateOfEntrance;
        string dateOfExit;
        string serviceDescription;

        string nameInsurance;
        string accidentDescription;
        uint256 damageCost;

        address author;
        Deactivated deleted;
        uint256 created;
        uint256 updated;
        
    }
        
    Invoice[] invoicePosts;
    Invoice[] inInvoicePosts;

    event Action (
        uint256 postId,
        string actionType,
        Deactivated deleted,
        address indexed executor,
        uint256 created
    );

    modifier ownerOnly(){
        require(msg.sender == owner, "Owner reserved only");
        _;
    }

     constructor() {
        owner = msg.sender;
    }
        

    function findIndex(uint _id) internal view returns (uint){

        for(uint i = 0; i < invoicePosts.length; i++){
            if(invoicePosts[i].postId == _id){
                return i;
            }
        }
    }


    function readFactura(uint _id) public view returns (uint, string memory,string memory,string memory,
    string memory,string memory,string memory,string memory,string memory,string memory,
    string memory,string memory
    ){
        uint index = findIndex(_id);
        return(
        invoicePosts[index].postId,
        invoicePosts[index].wayOfPayment,
        invoicePosts[index].model,
        invoicePosts[index].serialNumber,
        invoicePosts[index].yearOfVehicle,
        invoicePosts[index].color,
        invoicePosts[index].carBrand,
        invoicePosts[index].engine,
        invoicePosts[index].liters,
        invoicePosts[index].name,
        invoicePosts[index].RFC,
        invoicePosts[index].CURP);

          
    }

    function readReparaciones(uint _id) public view returns (uint, string memory,string memory,
    string memory,string memory,string memory,string memory,uint,string memory ){
        uint index = findIndex(_id);
        return(
        invoicePosts[index].postId,
        invoicePosts[index].workshopName,
        invoicePosts[index].dateOfEntrance,
        invoicePosts[index].dateOfExit,
        invoicePosts[index].serviceDescription,
        invoicePosts[index].nameInsurance,
        invoicePosts[index].accidentDescription,
        invoicePosts[index].damageCost,
        invoicePosts[index].name);
    }

    function createInsurance(
        
        string memory wayOfPayment,
        string memory serialNumber,
        string memory model,
        string memory yearOfVehicle,
        string memory color,
        string memory carBrand,
        string memory engine,
        string memory liters,
        string memory name,
        string memory RFC,
        string memory CURP

    ) public {
        
        require(bytes(wayOfPayment).length > 0, "Way Of Payment cannot be empty");
        require(bytes(serialNumber).length > 0, "SerialNumber cannot be empty");
        require(bytes(model).length > 0, "Model cannot be empty");
        require(bytes(yearOfVehicle).length > 0, "Year Of Vehicle cannot be empty");
        require(bytes(color).length > 0, "Color cannot be empty");
        require(bytes(carBrand).length > 0, "Car Brand cannot be empty");
        require(bytes(engine).length > 0, "Engine cannot be empty");
        require(bytes(liters).length > 0, "Liters cannot be empty");
        require(bytes(name).length > 0, "Name cannot be empty");
        require(bytes(RFC).length > 0, "RFC cannot be empty");
        require(bytes(CURP).length > 0, "CURP cannot be empty");
      
        postCounter++;
        authorOf[postCounter] = msg.sender;
        postsOf[msg.sender]++;
        activePostCounter++;

        invoicePosts.push(
            Invoice(
                postCounter,
                wayOfPayment,
                serialNumber,
                model,
                yearOfVehicle,
                color,
                carBrand,
                engine,
                liters,
                name,
                RFC,
                CURP,
                newWorkshopName,
                newDateOfEntrance,
                newDateOfExit,
                newServiceDescription,
                newNameInsurance,
                newAccidentDescription,
                newDamageCost,
                msg.sender,
                Deactivated.NO,
                block.timestamp,
                block.timestamp
            )
        );

        emit Action (
            postCounter,
            "POST CREATED",
            Deactivated.NO,
            msg.sender,
            block.timestamp
        );
    }

    function changeOwner(
        uint256 postId,
        string memory name,
        string memory RFC,
        string memory CURP
    ) public {
        require(authorOf[postId] == msg.sender, "Unauthorized entity");
       
        for(uint i = 0; i < invoicePosts.length; i++) {
            if(invoicePosts[i].postId == postId) {
                invoicePosts[i].name = name;
                invoicePosts[i].RFC = RFC;
                invoicePosts[i].CURP = CURP;
                invoicePosts[i].updated = block.timestamp;
            }
        }

        emit Action (
            postId,
            "POST UPDATED",
            Deactivated.NO,
            msg.sender,
            block.timestamp
        );

        
    }


     function addAccident(
        uint256 postId,
        string memory nameInsurance,
        string memory accidentDescription,
        uint256 damageCost
    ) public {
        require(authorOf[postId] == msg.sender, "Unauthorized entity");
       

        for(uint i = 0; i < invoicePosts.length; i++) {
            if(invoicePosts[i].postId == postId) {
                invoicePosts[i].nameInsurance = nameInsurance;
                invoicePosts[i].accidentDescription = accidentDescription;
                invoicePosts[i].damageCost = damageCost;
                invoicePosts[i].updated = block.timestamp;
             

            }
        }

        emit Action (
            postId,
            "POST UPDATED",
            Deactivated.NO,
            msg.sender,
            block.timestamp
        );

    }

    function addService(
        uint256 postId,
        string memory workshopName,
        string memory dateOfEntrance,
        string memory dateOfExit,
        string memory serviceDescription

    ) public {
        require(authorOf[postId] == msg.sender, "Unauthorized entity");
       

        for(uint i = 0; i < invoicePosts.length; i++) {
            if(invoicePosts[i].postId == postId) {
                invoicePosts[i].workshopName = workshopName;
                invoicePosts[i].dateOfEntrance = dateOfEntrance;
                invoicePosts[i].dateOfExit = dateOfExit;
                invoicePosts[i].serviceDescription = serviceDescription;
                invoicePosts[i].updated = block.timestamp;
            }
        }

        emit Action (
            postId,
            "POST UPDATED",
            Deactivated.NO,
            msg.sender,
            block.timestamp
        );

     
    }

    function refacturar(
        uint256 postId,
        string memory wayOfPayment,
        string memory serialNumber,
        string memory model,
        string memory yearOfVehicle,
        string memory color,
        string memory carBrand,
        string memory engine,
        string memory liters
    ) public {
        require(authorOf[postId] == msg.sender, "Unauthorized entity");
       

        for(uint i = 0; i < invoicePosts.length; i++) {
            if(invoicePosts[i].postId == postId) {
                invoicePosts[i].wayOfPayment = wayOfPayment;
                invoicePosts[i].serialNumber = serialNumber;
                invoicePosts[i].model = model;
                invoicePosts[i].yearOfVehicle = yearOfVehicle;
                invoicePosts[i].color = color;
                invoicePosts[i].carBrand = carBrand;
                invoicePosts[i].engine = engine;
                invoicePosts[i].liters = liters;
                invoicePosts[i].updated = block.timestamp;
            }
        }

        emit Action (
            postId,
            "POST UPDATED",
            Deactivated.NO,
            msg.sender,
            block.timestamp
        );

    }




    


  






   

}