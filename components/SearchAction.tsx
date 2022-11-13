import React, { useState, useEffect } from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import InvoiceInfo from './InvoiceInfo';
import { createAlchemyWeb3 } from "@alch/alchemy-web3"
const contractABI = require('../json/abi.json');

const SearchAction = ({address}:any) => {
    const web3 = createAlchemyWeb3('wss://eth-goerli.g.alchemy.com/v2/plh6ykJB50474LfOAh1OS-MwwBpRCorB'); 
    const [search, setSearch] = useState(false)
    const [contract, setContract] = useState<any>(null);
    const [invoice, setInvoice] = useState({})
    const [reparation, setReparation] = useState({})
    const [crash, setCrash] = useState({});

    useEffect(() => {
        const myContract:any = new web3.eth.Contract(
            contractABI,
            "0xb8DD8A56b17d2896817F00d72190E57bb3c31a19"
        );
        setContract(myContract)
    }, [])

    const formikSearch = useFormik({
        initialValues: {
            valueToSearchInput: ''
        },
        validationSchema: Yup.object({
            valueToSearchInput: Yup.string().required('')
        }),
        onSubmit: async valores => {
            const {valueToSearchInput} = valores;
            await contract.methods.readFactura(parseInt(valueToSearchInput)).call().then(async (cosa:any) => {
                await contract.methods.readReparaciones(parseInt(valueToSearchInput)).call().then((item:any) => {
                    console.log(item);
                    
                    setReparation({workShop: item[0],
                        entranceDate: item[1],
                        exitDate: item[2],
                        serviceDescription: item[3]
                    })
                    setCrash({
                        insurer: item[4],
                        accidentDescription: item[5],
                        damageCost: item[6]
                    })
                    console.log(item);
                    
                });
            });
            
            setSearch(true)
            
        }
    })

    const invoiceTest = {
        method: 'CREDIT',
        serialNumber: '7312631762367123',
        model: 'Sonic',
        yearOfVehicle: '2014',
        color: 'Amarillo',
        carBrand: 'Chevrolet',
        engine: 'v8',
        liters: '2.0',
        name: 'Eric Alejandro Aguilar Marcial',
        curp: 'AUME011001HCHGRRA9',
        rfc: 'AUME011001',
        accidents:[
            {nameInsurance: 'Axxa',accidentDescription: 'Choco muy feo',damageCost: '1000000'},
            {nameInsurance: 'Axxa',accidentDescription: 'Choco muy feo',damageCost: '1000000'},
            {nameInsurance: 'Axxa',accidentDescription: 'Choco muy feo',damageCost: '1000000'},
            {nameInsurance: 'Axxa',accidentDescription: 'Choco muy feo',damageCost: '1000000'},
            {nameInsurance: 'Axxa',accidentDescription: 'Choco muy feo',damageCost: '1000000'},
            {nameInsurance: 'Axxa',accidentDescription: 'Choco muy feo',damageCost: '1000000'},
            {nameInsurance: 'Axxa',accidentDescription: 'Choco muy feo',damageCost: '1000000'},
            {nameInsurance: 'Axxa',accidentDescription: 'Choco muy feo',damageCost: '1000000'},
            {nameInsurance: 'Axxa',accidentDescription: 'Choco muy feo',damageCost: '1000000'},
            {nameInsurance: 'Axxa',accidentDescription: 'Choco muy feo',damageCost: '1000000'}
        ],
        services: [
            {workshopName: 'El taller', EntranceDate: '19/11/2001',exitDate: '30/11/2001', serviceDescription: 'le arreglamos muchas cosas'},
            {workshopName: 'El taller', EntranceDate: '19/11/2001',exitDate: '30/11/2001', serviceDescription: 'le arreglamos muchas cosas'},
            {workshopName: 'El taller', EntranceDate: '19/11/2001',exitDate: '30/11/2001', serviceDescription: 'le arreglamos muchas cosas'},
            {workshopName: 'El taller', EntranceDate: '19/11/2001',exitDate: '30/11/2001', serviceDescription: 'le arreglamos muchas cosas'}
        ]
    }

    return(
        <div className='bg-gray-50 '>
            <aside className="lg:w-full xl:w-full md:w-full" aria-label="Sidebar">
                <div className="overflow-y-auto py-4 px-3 bg-gray-100 rounded ">
                    <ul className="space-y-2">
                        <li>
                            <button  className={`flex w-full items-center p-2 text-base font-normal pointer-events-none  rounded-lg  hover:text-white  bg-sky-500 text-white`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                                <span className="ml-3">Invoice</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className='p-5 w-full'>
                <form onSubmit={formikSearch.handleSubmit}>
                    <div className='mr-2 w-full'>
                        <h3 className='text-center text-2xl font-extrabold'>Search Invoice</h3>
                    </div>
                    <div className='xl:flex lg:flex'>
                        <div className='mr-2 w-full'>
                            <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="valueToSearchInput">Token:</label>
                            <div className='flex'>
                                <input  id="valueToSearchInput" name="valueToSearchInput"  className='p-2 m-2 w-2/3 h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text"  onChange={formikSearch.handleChange} onBlur={formikSearch.handleBlur} value={formikSearch.values.valueToSearchInput}/>
                                <div className="flex flex-wrap justify-center w-1/3">
                                    <button type="submit" className="m-2 block h-10 w-1/3 sm:w-full md:w-full lg:w-full xl:w-full h-10 bg-red-600 hover:bg-red-700 rounded-xl text-white font-semibold transition-all">Search</button>
                                </div>
                            </div>
                            
                            {formikSearch.touched.valueToSearchInput && formikSearch.errors.valueToSearchInput ? (
                                <span className=" justify-center flex text-red-500">{formikSearch.errors.valueToSearchInput}</span>
                            ): null}
                        </div>
                    </div>
                    
                </form>
            </div>
            {search ? <InvoiceInfo invoice ={invoice} accidents={reparation} services = {crash}/> : ''}
            
        </div>
    )
}

export default SearchAction;