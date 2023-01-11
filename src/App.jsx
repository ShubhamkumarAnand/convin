import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [cards, setCards] = useState([])
  const fetchData = () => {
    return axios.get("http://localhost:3000/cards")
      .then((response) => setCards(response.data));
  }

  useEffect(() => {
    fetchData();
  }, [])
  console.log(cards);
  return (
    <div className='App'>
      <ul>
        { cards.map(card =>
          <li key={ card.id }>
            {card.id} <br />
            { card.name } <br />
            {card.link}
          </li>
        ) }
      </ul>
    </div>
  )
}

export default App
