import React from 'react';

const Card = (props) => {

    return(
        <div className="Card" >
            <h3 className="Name"> {props.name}</h3>
            <ul>
                
            <li className="Species">{props.species}</li>
            <li className = "BirthYear">{props.birth_year}</li>
        </ul>
        </div>
    )


}

export default Card;