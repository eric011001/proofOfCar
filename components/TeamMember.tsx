const TeamMember = ({name,des,img}:any) => {

    return(
        <div className="mt-5 shadow-lg rounded-lg ml-5 overflow-hidden lg:w-1/5 md:w-full">
            <img src={img} alt="" />
            <div className="mx-5 my-5">
                <h3 className="font-bold text-lg">{name}</h3>
                <p>{des}</p>
            </div>
        </div>
    )
}

export default TeamMember;