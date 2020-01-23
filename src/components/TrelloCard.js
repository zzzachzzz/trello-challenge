import React from 'react';

export default function TrelloCard(props) {
  return (
    <div className="TrelloCard">
      <button onClick={() => props.moveItem(props.item, props.column, 'backward')} />
      {props.item}
      <button onClick={() => props.moveItem(props.item, props.column, 'forward')} />
    </div>
  );
}

