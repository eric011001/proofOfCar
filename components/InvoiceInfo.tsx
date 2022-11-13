import React from 'react'

const InvoiceInfo = ({invoice}:any) => {
    const {accidents,carBrand,color,curp,engine,liters,method,model,name,rfc,serialNumber,services,yearOfVehicle} = invoice;
    


    return(
        <div className='m-5'>
            <div className='xl:flex lg:flex'>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full my-2'>
                    <p>Method of payment: <span className='font-bold'>{method}</span></p>
                </div>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full'>
                    <p>Serial Number: <span className='font-bold'>{serialNumber}</span></p>
                </div>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full'>
                    <p>Model: <span className='font-bold'>{model}</span></p>
                </div>
            </div>
            <div className='xl:flex lg:flex'>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full my-2'>
                    <p>Year of Vehicle: <span className='font-bold'>{yearOfVehicle}</span></p>
                </div>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full'>
                    <p>Color: <span className='font-bold'>{color}</span></p>
                </div>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full'>
                    <p>Car brand: <span className='font-bold'>{carBrand}</span></p>
                </div>
            </div>
            <div className='xl:flex lg:flex'>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full my-2'>
                    <p>Engine: <span className='font-bold'>{engine}</span></p>
                </div>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full'>
                    <p>Liters: <span className='font-bold'>{liters}</span></p>
                </div>
            </div>
            
            <div className='xl:flex lg:flex'>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full my-4'>
                    <p>Owner's name: <span className='font-bold'>{name}</span></p>
                </div>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full my-4'>
                    <p>RFC: <span className='font-bold'>{rfc}</span></p>
                </div>
                <div className='lg:w-1/3 xl:w-1/3 md:w-full my-4'>
                    <p>CURP: <span className='font-bold'>{curp}</span></p>
                </div>
            </div>
            <h3 className='text-center text-2xl font-extrabold'>Accident history</h3>
            {accidents.length != 0 ? (
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
            {accidents.length != 0 ? (
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