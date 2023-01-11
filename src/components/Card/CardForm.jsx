import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../actions/cards';
import './CardForm.css';

export function CardForm({ buckets, setIsAddingCard }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [bucketId, setBucketId] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && link && bucketId) {
      // todo id is a number and we have to update it to the latest
      const id = 1;
      dispatch(addCard({ id, name, link, bucketId }));
      setIsAddingCard(false);
    }
  }

  return (
    <form className="card-form" onSubmit={ handleSubmit }>
      <input
        type="text"
        placeholder="Enter Card name"
        value={ name }
        onChange={ (e) => setName(e.target.value) }
      />
      <input
        type="text"
        placeholder="Enter Card link"
        value={ link }
        onChange={ (e) => setLink(e.target.value) }
      />
      <select value={ bucketId } onChange={ (e) => setBucketId(e.target.value) }>
        <option value="">Select a bucket</option>
        { buckets.map(bucket => (
          <option key={ bucket.id } value={ bucket.id }>{ bucket.name }</option>
        )) }
      </select>
      <button type="submit">Add Card</button>
    </form>
  );
}
