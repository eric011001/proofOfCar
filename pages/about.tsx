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
            <div className='flex justify-center mt-5'>
                <div className='w-1/12'>
                    <img src="./ethereum.svg" alt="" />
                </div>
            </div>
            <div className='lg:flex lg:p-16 md:p-16 sm:p-16 p-5 '>
                <div className='lg:w-1/2 md:w-full mb-10'>
                    <h3 className='font-bold text-xl mb-2'>Sobre</h3>
                    <p className='mr-12 ml-2'>Toda la información relevante de los automoviles, descentralizada, confiable, inviolable, segura y accesible desde cualquier dispositivo sobre blockchain y web.</p>
                    
                    <p className='mr-12 ml-2'>La engorrosa papelería que desprende un automovil se acabó. Toda la información sobre los automoviles en blockchain disponible para aseguradoras, bancos, gobiernos y ciudadanos. Un solo sistema descentralizado, abierto a consulta, seguro e incorruptible.La modificación de los datos están sujetos al consentimiento del poseedor de la llave. Registra refacturaciones, siniestros, compra - venta de vehículos, todo con una perfecta trazabilidad de los datos.</p>
                    
                </div>
                <div className='lg:w-1/2 border-l-2 lg:border-black border-none lg:border-solid'>
                    <div className='ml-2'>
                        <h3 className='font-bold text-xl mb-2'>About</h3>
                        <p className='mr-12 ml-2'>All relevant automotive information, decentralized, reliable, inviolable, secure and accessible from any device over blockchain and web.</p>
                        
                        <p className='mr-12 ml-2'>The tedious paperwork that comes out of a car is over. All information about cars in blockchain available to insurers, banks, governments and citizens. A single decentralized system, open to consultation, secure and incorruptible. Modification of data is subject to the consent of the key holder. Records re-invoicing, claims, purchase and sale of vehicles, all with perfect traceability of data.</p>
                            
                        
                    </div>
                </div>
            </div>
        </div>
    );

}

export default About