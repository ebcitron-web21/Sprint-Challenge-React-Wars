import React, {useEffect} from 'react';
import Card from './Card';


const Cardlist = props => {

    const [card, setCard] = useState();
  

    return(
        <div className = "Cardlist">
            {props.characters.map(char => {
                <Card name={char.name} species={char.species} birth_year={char.birth_year} />

            })}
        </div>
    )

}

export default Cardlist;