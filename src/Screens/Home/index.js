import './style.css';
import {useEffect} from 'react';
import HomeCard from '../../Components/Home Card/index';

const Home = (props)=>{

    useEffect(() => {
        document.querySelector('#goToAction').addEventListener("click",
        ()=>{
            props.history.push('/action');
        }
        )

        document.querySelector('#goToHorror').addEventListener("click",
            ()=>{
                props.history.push('/horror');
            }
        )

        document.querySelector('#goToDocumentary').addEventListener("click",
            ()=>{
                props.history.push('/documentary');
            }
        )
    });
    
    return(
        <div className="home-container">
            <h1 className="home-title">Home</h1>
            <HomeCard titleTextList={["Action Movie", "Horror Movies", "Documentary Movies"]} idList={["goToAction", "goToHorror", "goToDocumentary"]}/>
        </div>
    );
}

export default Home;