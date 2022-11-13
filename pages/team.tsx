import React from 'react'
import Menu from '../components/Menu';
import TeamMember from '../components/TeamMember';
const Team = () => {
    return(
        <div className='h-screen'>
            <Menu/>
            <div className='flex justify-center my-5'>
                <h1 className='text-2xl font-bold '>Our team</h1>
            </div>
            <div className='lg:flex mx-5 justify-center' >
                <TeamMember name={'Alexis Villalba'} des={'Developer / Frontend'} img={'./alex.jpeg'}/>
                <TeamMember name={'Saul Rodriguez'} des={'Developer / Backend'} img={'./saul.jpeg'}/>
                <TeamMember name={'Angel Cepeda'} des={'Developer / Backend'} img={'./angel.jpeg'}/>
                <TeamMember name={'Eric Aguilar'} des={'Developer / Frontend'} img={'./eric.jpeg'}/>
            </div>
        </div>
    );

}

export default Team