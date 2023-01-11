import React from 'react';
import { useSelector } from 'react-redux';
import './History.css';

export function History() {
  const history = useSelector(state => state.history);

  return (
    <div className="history">
      <h2>History</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Link</th>
            <th>Played at</th>
          </tr>
        </thead>
        <tbody>
          { history.map(entry => (
            <tr key={ entry.id }>
              <td>{ entry.name }</td>
              <td>{ entry.link }</td>
              <td>{ entry.playedAt }</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}
