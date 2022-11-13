import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";

const ChangeAction = () => {
    const formikInvoice = useFormik({
        initialValues: {
            nameInput: '',
            curpInput: '',
            rfcInput: ''
        },
        validationSchema: Yup.object({
            nameInput: Yup.string().required('Required field'),
            curpInput: Yup.string().required('Required field'),
            rfcInput:  Yup.string().required('Required field'),
            
            
        }),
        onSubmit: async valores => {
            console.log(valores);
            
        }
    });

    return(
        <div>
            <aside className="lg:w-full xl:w-full md:w-full" aria-label="Sidebar">
                <div className="overflow-y-auto py-4 px-3 bg-gray-100 rounded ">
                    <ul className="space-y-2">
                        <li>
                            <button  className={`flex w-full pointer-events-none items-center p-2 text-base font-normal  rounded-lg  hover:text-white  bg-sky-500 text-white`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                                <span className="ml-3">Invoice</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </aside>
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
                    
                    <div className='lg:w-1/2 md:w-full mr-2'>
                        <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="curpInput">CURP:</label>
                        <input  id="curpInput" name="curpInput"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text" onChange={formikInvoice.handleChange} onBlur={formikInvoice.handleBlur} value={formikInvoice.values.curpInput} />
                    
                        {formikInvoice.touched.curpInput && formikInvoice.errors.curpInput ? (
                            <span className="bg-white justify-center flex text-red-500">{formikInvoice.errors.curpInput}</span>
                        ): null}
                    </div>
                    <div className='lg:w-1/2 md:w-full mr-2'>
                        <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="rfc">RFC:</label>
                        <input  id="rfcInput" name="rfcInput"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text" onChange={formikInvoice.handleChange} onBlur={formikInvoice.handleBlur} value={formikInvoice.values.rfcInput}/>
                    
                        {formikInvoice.touched.rfcInput && formikInvoice.errors.rfcInput ? (
                            <span className="bg-white justify-center flex text-red-500">{formikInvoice.errors.rfcInput}</span>
                        ): null}
                    </div>                    
                </div>
                <div className="flex flex-wrap justify-center">
                    <button type="submit" className="m-2 block h-10 w-1/3 sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 h-10 bg-red-600 hover:bg-red-700 rounded-xl text-white font-semibold transition-all">Change invoice</button>
                </div>
        </div>
    )
}

export default ChangeAction;