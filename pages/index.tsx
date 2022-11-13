import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Menu from '../components/Menu';
export default function Home() {
  

  return (
    <div className='h-screen overflow-hidden'>
      <Menu/>
      <div className='h-full borde flex items-center justify-center mb-100'>
        <div className=''>
          <img src="./index.gif" className='h-96' alt="" />
        </div>
        <div className='w-1/2 flex  mr-10'>
          <div className='ml-12'>
            <div className='flex flex-col justify-center text-center'>
              <h3 className='font-extrabold text-2xl tracking-wider'>Safe. Trustworthy.</h3>
              <h3 className='font-extrabold text-2xl tracking-wider'>Since the beggining.</h3>
            </div>
            <div className='mt-5 flex justify-center'>
              <p className='text-lg text-cyan-600 font-bold tracking-wide'>― What do we do? ―</p>
            </div>
              <p className='mt-5 text-center tracking-tight'>Proof Of Car allows you to check your car's data, as well as its history. You will be able to see how many owners it has had, the major repairs it has had, major mechanical services, and even accidents it has been involved in.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
