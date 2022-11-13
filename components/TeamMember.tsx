const TeamMember = ({name,des,img}) => {

    return(
        <div className="mt-5 shadow-lg rounded-lg ml-5 overflow-hidden w-1/5">
            <img src={img} alt="" />
            <div className="mx-5 my-5">
                <h3 className="font-bold text-lg">{name}</h3>
                <p>{des}</p>
            </div>
        </div>
    )
}

export default TeamMember;