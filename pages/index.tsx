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
              <h3 className='font-extrabold text-2xl tracking-wider'>Seguro. Confiable.</h3>
              <h3 className='font-extrabold text-2xl tracking-wider'>Desde el inicio.</h3>
            </div>
            <div className='mt-5 flex justify-center'>
              <p className='text-lg text-cyan-600 font-bold tracking-wide'>― ¿Qué hacemos? ―</p>
            </div>
              <p className='mt-5 text-center tracking-tight'>Proof Of Car te permite verificar los datos de tu auto, así como su historial. Podrás ver cuantos dueños ha tenido, las reparaciones más grandes que se le han hecho, los servicios mecánicos mayores, e incluso los accidentes en los que ha estado involucrado.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
