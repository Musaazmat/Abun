import React from 'react';
import { useParams } from 'react-router-dom';
import comingSoon from '../../assets/feature.png';
import './Upgrade.css';


const Upgrade = () =>{
    const { type } = useParams();
    return (
        
        <div className='upgrade-container'>
            <h4>{type}</h4>
            <img src={comingSoon} alt='Image' className='feature-image' width={400}/>
        </div>

        
    )
}

export default Upgrade