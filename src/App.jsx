import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [cards, setCards] = useState([])
  const [buckets, setBuckets] = useState([])

  const fetchBuckets = () => {
    return axios.get("http://localhost:3000/buckets")
      .then((response) => setBuckets(response.data));
  }

  const fetchCards = () => {
    return axios.get("http://localhost:3000/cards")
      .then((response) => setCards(response.data));
  }

  useEffect(() => {
    fetchCards();
    fetchBuckets();
  }, [])
  console.log(cards);
  console.log(buckets);
  return (
    <div className='App'>
      <ul>
        { cards.map(card =>
          <li key={ card.id }>
            { card.name } <br />
            {card.link}
          </li>
        ) }
      </ul>
      <ul>
        { buckets.map(bucket =>
          <li key={ bucket.id }>
            { bucket.name } <br />
          </li>
        ) }
      </ul>
    </div>
  )
}

export default App
