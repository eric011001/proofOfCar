import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";



const AddCrash = () => {

    const formikCrash = useFormik({
        initialValues: {
            nameInsurerInput: '',
            accidentDescriptionInput: '',
            damageCostInput: ''
        },validationSchema: Yup.object({
            nameInsurerInput: Yup.string().required('Required field'),
            accidentDescriptionInput: Yup.string().required('Required field'),
            damageCostInput: Yup.string().required('The damage cost is not right')
    
        }),
        onSubmit: async valores => {
            console.log(valores);
            
        }
    })

    return(
        <div className='p-5 w-full'>
            <form onSubmit={formikCrash.handleSubmit}>
                <div className='mr-2 w-full'>
                    <h3 className='text-center text-2xl font-extrabold'>Crash</h3>
                </div>
                <div className='xl:flex lg:flex'>
                    <div className='mr-2 lg:w-3/5 md:w-full'>
                        <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="nameInsurerInput">Name of insurer:</label>
                        <input  id="nameInsurerInput" name="nameInsurerInput"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text"  onChange={formikCrash.handleChange} onBlur={formikCrash.handleBlur} value={formikCrash.values.nameInsurerInput}/>
                        {formikCrash.touched.nameInsurerInput && formikCrash.errors.nameInsurerInput ? (
                            <span className=" justify-center flex text-red-500">{formikCrash.errors.nameInsurerInput}</span>
                        ): null}
                    </div>
                    <div className='mr-2 lg:w-2/5 md:w-full'>
                        <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="damageCostInput">Damage cost:</label>
                        <input  id="damageCostInput" name="damageCostInput"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text"  onChange={formikCrash.handleChange} onBlur={formikCrash.handleBlur} value={formikCrash.values.damageCostInput}/>
                        {formikCrash.touched.damageCostInput && formikCrash.errors.damageCostInput ? (
                            <span className=" justify-center flex text-red-500">{formikCrash.errors.damageCostInput}</span>
                        ): null}
                    </div>
                </div>
                <div className='xl:flex lg:flex'>
                    <div className='mr-2 w-full'>
                        <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="accidentDescriptionInput">Accident description:</label>
                        <textarea  id="accidentDescriptionInput" name="accidentDescriptionInput"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'   onChange={formikCrash.handleChange} onBlur={formikCrash.handleBlur} value={formikCrash.values.accidentDescriptionInput}></textarea>
                        {formikCrash.touched.accidentDescriptionInput && formikCrash.errors.accidentDescriptionInput ? (
                            <span className=" justify-center flex text-red-500">{formikCrash.errors.accidentDescriptionInput}</span>
                        ): null}
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <button type="submit" className="m-2 block h-10 w-1/3 sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 h-10 bg-red-600 hover:bg-red-700 rounded-xl text-white font-semibold transition-all">Add crash</button>
                </div>
            </form>
        </div>
    )
}

export default AddCrash;