import React from 'react';
import './HistoryItems.css';

export function HistoryItems({ history }) {

  return (
    <div className="history-items">
      { history.map(entry => (
        <div key={ entry.id } className="history-item">
          <h3>{ entry.name }</h3>
          <a href={ entry.link } target="_blank" rel="noopener noreferrer">{ entry.link }</a>
          <p>Played at: { entry.playedAt }</p>
        </div>
      )) }
    </div>
  );
}
