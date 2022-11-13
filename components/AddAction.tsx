import React, { useState } from 'react'
import AddCrash from './options/addCrash';
import AddInvoice from './options/AddInvoice';
import AddService from './options/AddService';

const AddAction = () => {
    const [option, setOption] = useState('INVOICE');



    return(
        <div className='bg-gray-50 lg:flex '>
            <aside className="lg:w-64 xl:w-64 md:w-full" aria-label="Sidebar">
                <div className="overflow-y-auto py-4 px-3 bg-gray-100 rounded ">
                    <ul className="space-y-2">
                        <li>
                            <button onClick={() => setOption('INVOICE')}  className={`flex w-full items-center p-2 text-base font-normal  rounded-lg hover:bg-gray-800 hover:text-white dark:hover:bg-gray-800 ${option ===  'INVOICE' ? 'bg-sky-500 text-white' : 'text-gray-900'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                                <span className="ml-3">Invoice</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setOption('CRASH')}  className={`flex w-full items-center p-2 text-base font-normal  rounded-lg hover:bg-gray-800 hover:text-white dark:hover:bg-gray-800 ${option ===  'CRASH' ? 'bg-sky-500 text-white' : 'text-gray-900'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                            </svg>

                                <span className="ml-3">Crash</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setOption('SERVICE')}  className={`flex w-full items-center p-2 text-base font-normal  rounded-lg hover:bg-gray-800 hover:text-white dark:hover:bg-gray-800 ${option ===  'SERVICE' ? 'bg-sky-500 text-white' : 'text-gray-900'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
                            </svg>
                                <span className="ml-3">Service</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </aside>
            {option == 'INVOICE' ? <AddInvoice/> : (option === 'CRASH' ? <AddCrash/> : <AddService/>)}
        </div>
    )
}

export default AddAction;