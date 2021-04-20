import React, { useState } from 'react';
import './App.css';

export const App = (): JSX.Element => {
  const [incompleteTodoList, setIncompleteTodoList] = useState([
    'TODO1',
    'TODO2',
  ]);
  const [completeTodoList, setCompleteTodoList] = useState(['TODO3']);
  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodoList.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <span>{todo}</span>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodoList.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <span>{todo}</span>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
