import './style.css';

const HomeCard = (props)=>{

    return(
        <>
            {props.titleTextList.map((item, index)=>{
                return(
                    <div className="home-card-containers">
                        <div className="text-container">
                            <h1>{item}</h1>
                        </div>
                        <button className="arrow-btn" id={props.idList[index]}>&#8594;</button>
                    </div>
                );
            })}
        </>
    );
}

export default HomeCard;