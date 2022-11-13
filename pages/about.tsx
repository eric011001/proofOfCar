import React from 'react'
import Menu from '../components/Menu';

const About = () => {
    return(
        <div className='h-screen'>
            <Menu/>
            <div className='lg:flex p-16'>
                <div className='w-1/2 '>
                    <h3 className='font-bold text-xl mb-2'>Sobre</h3>
                    <p className='mr-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo nisi quod voluptates dicta obcaecati sunt porro perspiciatis soluta dignissimos, saepe labore velit dolorum ratione voluptatum debitis reiciendis eos provident quidem eius vel. Laudantium eius ab necessitatibus omnis sequi id rem dolorum! Assumenda suscipit facilis explicabo at reprehenderit in nihil!</p>
                    <div className="lg:flex mt-6">
                        <img src="./exchange.jpeg" className='w-1/2' alt="" />
                        <p className='mr-12 ml-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem assumenda quo culpa consequuntur, consectetur excepturi eius, reprehenderit facere delectus expedita cupiditate animi quisquam vero recusandae.</p>
                    </div>
                    <p className='mr-12 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo nisi quod voluptates dicta obcaecati sunt porro perspiciatis soluta dignissimos, saepe labore velit dolorum ratione voluptatum debitis reiciendis eos provident quidem eius vel. Laudantium eius ab necessitatibus omnis sequi id rem dolorum! Assumenda suscipit facilis explicabo at reprehenderit in nihil!</p>
                    
                </div>
                <div className='w-1/2 border-l-2 border-black'>
                    <div className='ml-2'>
                        <h3 className='font-bold text-xl mb-2'>About</h3>
                        <p className='mr-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo nisi quod voluptates dicta obcaecati sunt porro perspiciatis soluta dignissimos, saepe labore velit dolorum ratione voluptatum debitis reiciendis eos provident quidem eius vel. Laudantium eius ab necessitatibus omnis sequi id rem dolorum! Assumenda suscipit facilis explicabo at reprehenderit in nihil!</p>
                        <div className="lg:flex mt-6">
                            <p className='mr-12 ml-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem assumenda quo culpa consequuntur, consectetur excepturi eius, reprehenderit facere delectus expedita cupiditate animi quisquam vero recusandae.</p>
                            <img src="./exchange.jpeg" className='w-1/2' alt="" />
                        </div>
                        <p className='mr-12 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo nisi quod voluptates dicta obcaecati sunt porro perspiciatis soluta dignissimos, saepe labore velit dolorum ratione voluptatum debitis reiciendis eos provident quidem eius vel. Laudantium eius ab necessitatibus omnis sequi id rem dolorum! Assumenda suscipit facilis explicabo at reprehenderit in nihil!</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );

}

export default About