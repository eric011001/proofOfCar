import React, { useEffect, useState } from 'react'
import Menu from '../components/Menu';
const Web3 = require('web3');

const About = () => {
    const [web3, setWeb3] = useState(null)
    const [address, setAddress] = useState(null)
    const [contract, setContract] = useState(null)
    
    let contractAddress = address  

    let abi = [[
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "postId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "actionType",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "enum Transaction.Deactivated",
                    "name": "deleted",
                    "type": "uint8"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "executor",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "created",
                    "type": "uint256"
                }
            ],
            "name": "Action",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "postId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "nameInsurance",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "accidentDescription",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "damageCost",
                    "type": "uint256"
                }
            ],
            "name": "addAccident",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "postId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "workshopName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "dateOfEntrance",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "dateOfExit",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "serviceDescription",
                    "type": "string"
                }
            ],
            "name": "addService",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "postId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "RFC",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "CURP",
                    "type": "string"
                }
            ],
            "name": "changeOwner",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "wayOfPayment",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "serialNumber",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "model",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "yearOfVehicle",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "color",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "carBrand",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "engine",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "liters",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "RFC",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "CURP",
                    "type": "string"
                }
            ],
            "name": "createInsurance",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "postId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "wayOfPayment",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "serialNumber",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "model",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "yearOfVehicle",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "color",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "carBrand",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "engine",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "liters",
                    "type": "string"
                }
            ],
            "name": "refacturar",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "activePostCounter",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "authorOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "inactivePostCounter",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "postsOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "readFactura",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "readReparaciones",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]] // Paste your ABI here
      

    return(
        <div className='h-screen'>
            <Menu/>
            <div className='lg:flex lg:p-16 md:p-16 sm:p-16 p-5 '>
                <div className='lg:w-1/2 md:w-full mb-10'>
                    <h3 className='font-bold text-xl mb-2'>Sobre</h3>
                    <p className='mr-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo nisi quod voluptates dicta obcaecati sunt porro perspiciatis soluta dignissimos, saepe labore velit dolorum ratione voluptatum debitis reiciendis eos provident quidem eius vel. Laudantium eius ab necessitatibus omnis sequi id rem dolorum! Assumenda suscipit facilis explicabo at reprehenderit in nihil!</p>
                    <div className="lg:flex mt-6">
                        <img src="./exchange.jpeg" className='w-1/2' alt="" />
                        <p className='mr-12 ml-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem assumenda quo culpa consequuntur, consectetur excepturi eius, reprehenderit facere delectus expedita cupiditate animi quisquam vero recusandae.</p>
                    </div>
                    <p className='mr-12 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo nisi quod voluptates dicta obcaecati sunt porro perspiciatis soluta dignissimos, saepe labore velit dolorum ratione voluptatum debitis reiciendis eos provident quidem eius vel. Laudantium eius ab necessitatibus omnis sequi id rem dolorum! Assumenda suscipit facilis explicabo at reprehenderit in nihil!</p>
                    
                </div>
                <div className='lg:w-1/2 border-l-2 lg:border-black border-none lg:border-solid'>
                    <div className='ml-2'>
                        <h3 className='font-bold text-xl mb-2'>About</h3>
                        <p className='mr-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo nisi quod voluptates dicta obcaecati sunt porro perspiciatis soluta dignissimos, saepe labore velit dolorum ratione voluptatum debitis reiciendis eos provident quidem eius vel. Laudantium eius ab necessitatibus omnis sequi id rem dolorum! Assumenda suscipit facilis explicabo at reprehenderit in nihil!</p>
                        <div className="lg:flex mt-6">
                            <p className='mr-12 ml-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem assumenda quo culpa consequuntur, consectetur excepturi eius, reprehenderit facere delectus expedita cupiditate animi quisquam vero recusandae.</p>
                            <img src="./exchange.jpeg" className='w-1/2' alt="" />
                        </div>
                        <p className='mr-12 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo nisi quod voluptates dicta obcaecati sunt porro perspiciatis soluta dignissimos, saepe labore velit dolorum ratione voluptatum debitis reiciendis eos provident quidem eius vel. Laudantium eius ab necessitatibus omnis sequi id rem dolorum! Assumenda suscipit facilis explicabo at reprehenderit in nihil!</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );

}

export default About