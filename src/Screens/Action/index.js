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
            <button id="action-clr-btn" onClick={()=>{
                setCard([])
                document.getElementById('action-clr-btn').style.display = "none";
                let txt = document.createElement('h2');
                txt.innerHTML =  "No Content Available";
                document.querySelector('.main-container').appendChild(txt);
            }}>Clear All</button>
        </main>
    );
}

export default Action;