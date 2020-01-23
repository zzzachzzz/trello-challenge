import React from 'react';
import TrelloCard from './TrelloCard';

export default function TrelloColumn(props) {
  return (
    <div className="TrelloColumn" style={{width: '25%', outline: '1px solid black'}}>
      <h2>{props.column}</h2>
      <button onClick={() => props.newItem(props.column)}>New item +</button>
      { props.items.map((item, i) => <TrelloCard item={item} column={props.column} moveItem={props.moveItem} key={i} /> )}
    </div>
  );
}

