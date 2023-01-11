import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBucket } from '../../actions/buckets';
import './BucketForm.css';

export function BucketForm() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      // Todo id is a number
      const id = 1;
      dispatch(addBucket({ id, name }));
      setName('');
    }
  }

  return (
    <form className="bucket-form" onSubmit={ handleSubmit }>
      <input
        type="text"
        placeholder="Enter Bucket name"
        value={ name }
        onChange={ (e) => setName(e.target.value) }
      />
      <button type="submit">Add Bucket</button>
    </form>
  );
}
