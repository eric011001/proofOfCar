import React, { useState } from 'react'
import AddAction from '../components/AddAction';
import ChangeAction from '../components/ChangeAction';
import Menu from '../components/Menu';
import ReInvoiceAction from '../components/ReInvoice';
import SearchAction from '../components/SearchAction';

const Project = ({address}:any) => {
    
    const [action, setAction] = useState('ADD')

    return(
        <div className='h-screen'>
            <Menu/>
            <div className=' mt-10 lg:mx-20 md:mx-5 justify-center mb-100'>
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    <li className="mr-2">
                        <button onClick={() => setAction('ADD')} aria-current="page" className={action === 'ADD' ? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-sky-500 dark:text-white" : "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-white"}>Add</button>
                    </li>
                    <li className="mr-2">
                        <button onClick={() => setAction('SEARCH')} className={action === 'SEARCH' ? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-sky-500 dark:text-white" : "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-white"}>Search</button>
                    </li>
                    <li className="mr-2">
                        <button onClick={() => setAction('CHANGE')} className={action === 'CHANGE' ? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-sky-500 dark:text-white" : "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-white"}>Change</button>
                    </li>
                    <li className="mr-2">
                        <button onClick={() => setAction('RE-INVOICE')} className={action === 'RE-INVOICE' ? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-sky-500 dark:text-white" : "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-white"}>Re-invoice</button>
                    </li>
                </ul>
                <div>
                    {action === 'ADD' ? (<AddAction address={address}/>) : (action === 'SEARCH' ? (<SearchAction address={address}/>) : (action === 'CHANGE' ? (<ChangeAction address={address}/>) : (<ReInvoiceAction address={address}/>)))}
                </div>
            </div>
            
        </div>
    );

}

export default Project