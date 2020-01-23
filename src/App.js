import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TrelloColumn from './components/TrelloColumn';
import { fakeData } from './fakeData';

function App() {
  const [items, setItems] = useState(fakeData);

  const columns = ['backlog', 'todo', 'inprogress', 'completed'];

  function moveItem(item, fromColumn, direction) {
    const columnIndex = columns.indexOf(fromColumn);
    const toColumnIndex = columnIndex + (direction === 'forward' ? 1 : -1);
    if (toColumnIndex < 0 || toColumnIndex > columns.length-1) return;
    const toColumn = columns[toColumnIndex];
    const itemIndex = items[fromColumn].indexOf(item);
    setItems({ ...items,
               fromColumn: items[fromColumn].splice(itemIndex, 1),
               toColumn: items[toColumn].push(item) });
  }

  function newItem(column) {
    const item = window.prompt();
    setItems({ ...items, column: items[column].push(item) });
  }

  return (
    <div className="App">
      { columns.map((column, i) => <TrelloColumn column={column} items={items[column]} moveItem={moveItem} newItem={newItem} key={i} /> )}
    </div>
  );
}

export default App;
