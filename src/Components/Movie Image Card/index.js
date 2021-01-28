import './style.css';

const MovieCard = ({cardData})=>{
    return(
        <div className="card-container">
            {
                cardData.map((item)=>{
                    const {id, name, image} = item;
                    return <article key={id} className="card-item">
                                <img className="card-img" src={image} alt={name} />
                                <h3>{name}</h3>
                            </article>
                })
            }
        </div>
    );
}

export default MovieCard;