import React, {useState, useEffect} from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { servicesVersion } from 'typescript';
import { createAlchemyWeb3 } from "@alch/alchemy-web3"
const contractABI =  require('../../json/abi.json');


const AddService = ({address}:any) => {

    const [contract, setContract] = useState<any>(null);
    const web3 = createAlchemyWeb3('wss://eth-goerli.g.alchemy.com/v2/plh6ykJB50474LfOAh1OS-MwwBpRCorB'); 

    useEffect(() => {
        const myContract:any = new web3.eth.Contract(
            contractABI,
            "0xb8DD8A56b17d2896817F00d72190E57bb3c31a19"
        );
        setContract(myContract)
    }, [])

    const formikService = useFormik({
        initialValues: {
            idInput: '',
            workShopNameInput: '',
            entranceDateInput: '',
            exitDateInput: '',
            descriptionService: ''
        },validationSchema: Yup.object({
            idInput: Yup.string().required('Required field'),
            workShopNameInput: Yup.string().required('Required field'),
            entranceDateInput: Yup.string().required('The date is not correct'),
            exitDateInput: Yup.string().required('The date is not correct'),
            descriptionService: Yup.string().required('Required field')
        }),
        onSubmit: async valores => {
            const {idInput, workShopNameInput, entranceDateInput, exitDateInput, descriptionService} = valores;
            try {
                contract.methods.addService(parseInt(idInput),workShopNameInput,entranceDateInput,exitDateInput,descriptionService).send({from:address}).then((ex:any) => {
                    console.log(ex);
                    
                }).catch((err:any) => console.log(err));
            } catch (error) {
                console.log(error);
                
            }   
        }
    })

    return(
        <div className='p-5 w-full'>
            <form onSubmit={formikService.handleSubmit}>
                <div className='mr-2 w-full'>
                    <h3 className='text-center text-2xl font-extrabold'>Service</h3>
                </div>
                <div className='xl:flex lg:flex'>
                    <div className='mr-2 lg:w-1/5 md:w-full'>
                        <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="idInput">Id of Vehicle:</label>
                        <input  id="idInput" name="idInput"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text"  onChange={formikService.handleChange} onBlur={formikService.handleBlur} value={formikService.values.idInput}/>
                        {formikService.touched.idInput && formikService.errors.idInput ? (
                            <span className=" justify-center flex text-red-500">{formikService.errors.idInput}</span>
                        ): null}
                    </div>
                    <div className='mr-2 lg:w-2/5 md:w-full'>
                        <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="workshopNameInput">Workshop name:</label>
                        <input  id="workShopNameInput" name="workShopNameInput"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text"  onChange={formikService.handleChange} onBlur={formikService.handleBlur} value={formikService.values.workShopNameInput}/>
                        {formikService.touched.workShopNameInput && formikService.errors.workShopNameInput ? (
                            <span className=" justify-center flex text-red-500">{formikService.errors.workShopNameInput}</span>
                        ): null}
                    </div>
                    <div className='mr-2 lg:w-2/4 md:w-full'>
                        <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="entranceDateInput">Date of entrance:</label>
                        <input  id="entranceDateInput" name="entranceDateInput"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="date"  onChange={formikService.handleChange} onBlur={formikService.handleBlur} value={formikService.values.entranceDateInput}/>
                        {formikService.touched.entranceDateInput && formikService.errors.entranceDateInput ? (
                            <span className=" justify-center flex text-red-500">{formikService.errors.entranceDateInput}</span>
                        ): null}
                    </div>
                    <div className='mr-2 lg:w-1/4 md:w-full'>
                        <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="exitDateInput">Date of end:</label>
                        <input  id="exitDateInput" name="exitDateInput"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="date"  onChange={formikService.handleChange} onBlur={formikService.handleBlur} value={formikService.values.exitDateInput}/>
                        {formikService.touched.exitDateInput && formikService.errors.exitDateInput ? (
                            <span className=" justify-center flex text-red-500">{formikService.errors.exitDateInput}</span>
                        ): null}
                    </div>
                </div>
                <div className='xl:flex lg:flex'>
                    <div className='mr-2 w-full'>
                        <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="descriptionService">Accident description:</label>
                        <textarea  id="descriptionService" name="descriptionService"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'   onChange={formikService.handleChange} onBlur={formikService.handleBlur} value={formikService.values.descriptionService}></textarea>
                        {formikService.touched.descriptionService && formikService.errors.descriptionService ? (
                            <span className=" justify-center flex text-red-500">{formikService.errors.descriptionService}</span>
                        ): null}
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <button type="submit" className="m-2 block h-10 w-1/3 sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 h-10 bg-red-600 hover:bg-red-700 rounded-xl text-white font-semibold transition-all">Add service</button>
                </div>
            </form>
        </div>
    )
}

export default AddService;