import React from 'react'

const InvoiceInfo = ({invoice, accidents, services}:any) => {

    console.log(invoice[0]);
    
    console.log('cosa');
    
    console.log(invoice);
    

    return(
        <div className='m-5'>
            <div className='xl:flex lg:flex'>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full my-2'>
                    <p>Method of payment: <span className='font-bold'>{invoice[1]}</span></p>
                </div>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full'>
                    <p>Serial Number: <span className='font-bold'>{invoice[3]}</span></p>
                </div>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full'>
                    <p>Model: <span className='font-bold'>{invoice[2]}</span></p>
                </div>
            </div>
            <div className='xl:flex lg:flex'>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full my-2'>
                    <p>Year of Vehicle: <span className='font-bold'>{invoice[4]}</span></p>
                </div>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full'>
                    <p>Color: <span className='font-bold'>{invoice[5]}</span></p>
                </div>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full'>
                    <p>Car brand: <span className='font-bold'>{invoice[6]}</span></p>
                </div>
            </div>
            <div className='xl:flex lg:flex'>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full my-2'>
                    <p>Engine: <span className='font-bold'>{invoice[7]}</span></p>
                </div>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full'>
                    <p>Liters: <span className='font-bold'>{invoice[8]}</span></p>
                </div>
            </div>
            
            <div className='xl:flex lg:flex'>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full my-4'>
                    <p>Owner's name: <span className='font-bold'>{invoice[9]}</span></p>
                </div>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full my-4'>
                    <p>RFC: <span className='font-bold'>{invoice[10]}</span></p>
                </div>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full my-4'>
                    <p>CURP: <span className='font-bold'>{invoice[11]}</span></p>
                </div>
            </div>
            <h3 className='text-center text-2xl font-extrabold'>Accident history</h3>
            {accidents.lenght != 0  ? (
                <div className='flex overflow-x-scroll mb-2'>
                    {accidents.map((accident:any) => (
                        <div className='shadow-lg rounded-lg w-max px-12 py-5 mr-5 bg-white '>
                            <p className='font-bold'>Name of insurer: <span className='font-normal'>{accident.nameInsurance}</span></p>
                            <p className='font-bold'>Accident description: <span className='font-normal'>{accident.accidentDescription}</span></p>
                            <p className='font-bold'>Damage cost: <span className='font-normal'>{accident.damageCost}</span></p>
                        </div>
                    ))}
                </div>
            ): 
            (
                ''
            )}
            <h3 className='text-center text-2xl font-extrabold'>Service history</h3>
            {services.length != 0  ? (
                <div className='flex overflow-x-scroll p-2 mt-2 mb-2'>
                    {services.map((service:any) => (
                        <div className='shadow-lg  rounded-lg w-max px-12 py-5 mr-5 bg-white '>
                            <p className='font-bold'>Workshop Name: <span className='font-normal'>{service.nameInsurance}</span></p>
                            <p className='font-bold'>Entrance day: <span className='font-normal'>{service.accidentDescription}</span></p>
                            <p className='font-bold'>Exit Date: <span className='font-normal'>{service.damageCost}</span></p>
                            <p className='font-bold'>Service description: <span className='font-normal'>{service.serviceDescription}</span></p>
                        </div>
                    ))}
                </div>
            ): 
            (
                ''
            )}
            <div></div>
        </div>

    )
}

export default InvoiceInfo;