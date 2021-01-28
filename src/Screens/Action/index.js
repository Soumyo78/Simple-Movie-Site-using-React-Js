import './style.css';
import {useState} from 'react';
import MovieCard from '../../Components/Movie Image Card/index';
import ActionData from '../../Resources/action-data';

const Action = ()=>{
    
    const [card, setCard] = useState(ActionData);

    return(
        <main className="main-container">
            <h1 className="genre-title">Action Movies</h1>
            <MovieCard cardData={card}/>
            <button id="action-clr-btn">Clear All</button>
        </main>
    );
}

export default Action;