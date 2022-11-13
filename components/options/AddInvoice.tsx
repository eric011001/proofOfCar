import React, { useState, useEffect } from 'react'
import Select from "react-select";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createAlchemyWeb3 } from "@alch/alchemy-web3"
const contractABI =  require('../../json/abi.json');

const AddInvoice = ({address}:any) => {
    
    const [methods, setMethods] = useState({ value: 'CREDIT', label: 'Credit' })
    const [year, setYear] = useState({ value: '2023', label: '2023'})
    const [engine, setEngine] = useState({ value: '4cil', label: '4 cil.' })
    const [contract, setContract] = useState<any>(null);
    const web3 = createAlchemyWeb3('wss://eth-goerli.g.alchemy.com/v2/plh6ykJB50474LfOAh1OS-MwwBpRCorB'); 
    
    useEffect(() => {
        const myContract:any = new web3.eth.Contract(
            contractABI,
            "0xb8DD8A56b17d2896817F00d72190E57bb3c31a19"
        );
        setContract(myContract)
    }, [])
    
    
    

    
    const methodsOptions = [
        { value: 'CREDIT', label: 'Credit' },
        { value: 'CASH', label: 'Cash' }
    ];

    

    const formikInvoice = useFormik({
        initialValues: {
            methodInput: 'CREDIT',
            serialNumberInput: '',
            modelInput: '',
            yearOfVehicleInput: '2023',
            colorInput: '',
            carBrandInput: '',
            engineInput: '4cil',
            litersInput: '',
            nameInput: '',
            curpInput: '',
            rfcInput: ''
        },
        validationSchema: Yup.object({
            methodInput: Yup.string().required('Required field'),
            serialNumberInput: Yup.string().required('Required field'),
            modelInput: Yup.string().required('Required field'),
            yearOfVehicleInput: Yup.string().required('This year is not valid'),
            colorInput: Yup.string().required('This color is not valid'),
            carBrandInput: Yup.string().required('This brand is not abailable'),
            engineInput: Yup.string().required('Required field'),
            litersInput: Yup.string().required('Wrong liters quantity'),
            nameInput: Yup.string().required('Required field'),
            curpInput: Yup.string().required('Required field'),
            rfcInput:  Yup.string().required('Required field'),
            
            
        }),
        onSubmit: async valores => {
            const {methodInput, serialNumberInput ,modelInput ,yearOfVehicleInput,colorInput, carBrandInput,engineInput, litersInput, nameInput, curpInput, rfcInput} = valores
            
            try {
                if(contract){
                    contract.methods.createInsurance(methodInput,serialNumberInput,modelInput,yearOfVehicleInput,colorInput,carBrandInput,engineInput,litersInput,nameInput, rfcInput, curpInput).send({from:address}).then((ex:any) => {
                        //console.log('si se pudeo');
                        
                    }).catch((err:any) => console.log(err));
                }
                
            } catch (error) {
                console.log(error);
                
            }
            
        }
    });

    const yearOptions = [
        { value: '2023', label: '2023'},
        { value: '2022', label: '2022'},
        { value: '2021', label: '2021'},
        { value: '2020', label: '2020'},
        { value: '2019', label: '2019'},
        { value: '2018', label: '2018'},
        { value: '2017', label: '2017'},
        { value: '2016', label: '2016'},
        { value: '2015', label: '2015'},
        { value: '2014', label: '2014'},
        { value: '2013', label: '2013'},
        { value: '2012', label: '2012'},
        { value: '2011', label: '2011'},
        { value: '2010', label: '2010'},
        { value: '2009', label: '2009'},
        { value: '2008', label: '2008'},
        { value: '2007', label: '2007'},
        { value: '2006', label: '2006'},
        { value: '2005', label: '2005'},
        { value: '2004', label: '2004'},
        { value: '2003', label: '2003'},
        { value: '2002', label: '2002'},
        { value: '2001', label: '2001'},
        { value: '2000', label: '2000'},
        { value: '1999', label: '1999'},
        { value: '1998', label: '1998'},
        { value: '1997', label: '1997'},
        { value: '1996', label: '1996'},
        { value: '1995', label: '1995'},
        { value: '1994', label: '1994'},
        { value: '1993', label: '1993'},
        { value: '1992', label: '1992'},
        { value: '1991', label: '1991'},
        { value: '1990', label: '1990'}
    ];

    const engineOptions = [
        { value: '4cil', label: '4 cil.' },
        { value: '6cil', label: '6 cil.' },
        { value: '8cil', label: '8 cil.' }
    ];

    const selectStyles = {
        option: (provided:any, state:any) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#d1d5db' : '#e5e7eb',
            color: '#212529',
        }),
        control: (provided:any, state:any) => ({
            ...provided,
            borderRadius: '0.75em',
            backgroundColor: state.isFocused ? '#d1d5db' : '#e5e7eb',
            borderWidth: '0px'
        }),
        menuList: (provided:any, state:any) => ({
            ...provided,
            borderRadius: '0.75em'
        })
    };

    return (
        <div className='p-5 w-full'>
            <form onSubmit={formikInvoice.handleSubmit}>
                <div className='mr-2 w-full'>
                    <h3 className='text-center text-2xl font-extrabold'>Car</h3>
                </div>
                <div className='xl:flex lg:flex'>
                    <div className='lg:w-1/5 xl:w-1/5 md:w-full'>
                        <label className="font-semibold mt-2 mb-2 ml-4 mr-2 truncate ... " htmlFor="methodInpu">Method of payment:</label>
                        <Select id="methodInput" name='methodInput' options={methodsOptions} onChange={(selectedOption:any) => {
                            formikInvoice.handleChange('methodInput')(selectedOption.value); 
                            setMethods(selectedOption);}} value={methods} className="m-2" styles={selectStyles}/>
                        {formikInvoice.touched.methodInput && formikInvoice.errors.methodInput ? (
                            <span className="bg-white justify-center flex text-red-500">{formikInvoice.errors.methodInput}</span>
                        ): null}
                    </div>
                    <div className='mr-2 lg:w-3/5 md:w-full'>
                        <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="serialNumberInput">Serial number:</label>
                        <input  id="serialNumberInput" name="serialNumberInput"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text"  onChange={formikInvoice.handleChange} onBlur={formikInvoice.handleBlur} value={formikInvoice.values.serialNumberInput}/>
                        {formikInvoice.touched.serialNumberInput && formikInvoice.errors.serialNumberInput ? (
                            <span className="bg-white justify-center flex text-red-500">{formikInvoice.errors.serialNumberInput}</span>
                        ): null}
                    </div>
                    <div className=' mr-2  lg:w-1/5 md:w-full'>
                        <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="color">Color:</label>
                        <input  id="colorInput" name="colorInput"  className='p-2  m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text" onChange={formikInvoice.handleChange} onBlur={formikInvoice.handleBlur} value={formikInvoice.values.colorInput}/>
                        {formikInvoice.touched.colorInput && formikInvoice.errors.colorInput ? (
                            <span className="bg-white justify-center flex text-red-500">{formikInvoice.errors.colorInput}</span>
                        ): null}
                    </div>
                </div>

                <div className='xl:flex lg:flex'>
                    <div className='mr-2 lg:w-1/3 md:w-full'>
                        <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="carBrand">Car brand:</label>
                        <input  id="carBrandInput" name="carBrandInput"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text" onChange={formikInvoice.handleChange} onBlur={formikInvoice.handleBlur} value={formikInvoice.values.carBrandInput}/>
                    
                        {formikInvoice.touched.carBrandInput && formikInvoice.errors.carBrandInput ? (
                            <span className="bg-white justify-center flex text-red-500">{formikInvoice.errors.carBrandInput}</span>
                        ): null}
                    </div>
                    <div className='mr-2 lg:w-1/3 md:w-full'>
                        <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="modelInput">Model:</label>
                        <input  id="modelInput" name="modelInput"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text"onChange={formikInvoice.handleChange} onBlur={formikInvoice.handleBlur} value={formikInvoice.values.modelInput}/>
                    
                        {formikInvoice.touched.modelInput && formikInvoice.errors.modelInput ? (
                            <span className="bg-white justify-center flex text-red-500">{formikInvoice.errors.modelInput}</span>
                        ): null}
                    </div>
                    <div className='mr-2 lg:w-1/3 md:w-full'>
                        <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="yearOfVehicle">Year of vehicle:</label>
                        <Select id="yearOfVehicleInput" options={yearOptions} onChange={(yearOption:any) => {
                            console.log(yearOption);
                            
                            formikInvoice.handleChange('yearOfVehicleInput')(yearOption.value); 
                            setYear(yearOption);}} value={year} className="m-2" styles={selectStyles}/>
                        {formikInvoice.touched.yearOfVehicleInput && formikInvoice.errors.yearOfVehicleInput ? (
                            <span className="bg-white justify-center flex text-red-500">{formikInvoice.errors.yearOfVehicleInput}</span>
                        ): null}
                    </div>
                    
                </div>

                <div className='xl:flex lg:flex'>
                    
                    <div className='lg:w-1/3 md:w-full mr-2'>
                        <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="engineInput">Engine:</label>
                        <Select id="engineInput" options={engineOptions} onChange={(engineOption:any) => {
                            console.log(engineOption);
                            
                            formikInvoice.handleChange('engineInput')(engineOption.value); 
                            setEngine(engineOption);}} value={engine} className="m-2" styles={selectStyles}/>
                        {formikInvoice.touched.engineInput && formikInvoice.errors.engineInput ? (
                            <span className="bg-white justify-center flex text-red-500">{formikInvoice.errors.engineInput}</span>
                        ): null}
                    </div>
                    <div className='lg:w-1/3 md:w-full mr-2'>
                        <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="liters">Liters:</label>
                        <input  id="litersInput" name="litersInput"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text" onChange={formikInvoice.handleChange} onBlur={formikInvoice.handleBlur} value={formikInvoice.values.litersInput}/>
                    
                        {formikInvoice.touched.litersInput && formikInvoice.errors.litersInput ? (
                            <span className="bg-white justify-center flex text-red-500">{formikInvoice.errors.litersInput}</span>
                        ): null}
                    </div>
                </div>
                <div className='mr-2 w-full'>
                    <h3 className='text-center text-2xl font-extrabold'>Owner</h3>
                </div>
                <div className='xl:flex lg:flex'>
                    
                    <div className='w-full mr-2'>
                        <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="name">Full name:</label>
                        <input  id="nameInput" name="nameInput"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text"  onChange={formikInvoice.handleChange} onBlur={formikInvoice.handleBlur} value={formikInvoice.values.nameInput}/>
                    
                        {formikInvoice.touched.nameInput && formikInvoice.errors.nameInput ? (
                            <span className="bg-white justify-center flex text-red-500">{formikInvoice.errors.nameInput}</span>
                        ): null}
                    </div>
                                   
                </div>

                <div className='xl:flex lg:flex'>
                    
                    <div className='lg:w-1/3 md:w-full mr-2'>
                        <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="curpInput">CURP:</label>
                        <input  id="curpInput" name="curpInput"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text" onChange={formikInvoice.handleChange} onBlur={formikInvoice.handleBlur} value={formikInvoice.values.curpInput} />
                    
                        {formikInvoice.touched.curpInput && formikInvoice.errors.curpInput ? (
                            <span className="bg-white justify-center flex text-red-500">{formikInvoice.errors.curpInput}</span>
                        ): null}
                    </div>
                    <div className='lg:w-1/3 md:w-full mr-2'>
                        <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="rfc">RFC:</label>
                        <input  id="rfcInput" name="rfcInput"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text" onChange={formikInvoice.handleChange} onBlur={formikInvoice.handleBlur} value={formikInvoice.values.rfcInput}/>
                    
                        {formikInvoice.touched.rfcInput && formikInvoice.errors.rfcInput ? (
                            <span className="bg-white justify-center flex text-red-500">{formikInvoice.errors.rfcInput}</span>
                        ): null}
                    </div>                    
                </div>
                <div className="flex flex-wrap justify-center">
                    <button type="submit" className="m-2 block h-10 w-1/3 sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 h-10 bg-red-600 hover:bg-red-700 rounded-xl text-white font-semibold transition-all">Add invoice</button>
                </div>
            </form>
        </div>
    )
}

export default AddInvoice;