import React, { useState } from 'react';
import './App.css';

export const App = (): JSX.Element => {
  const [inputText, setInputText] = useState('');
  const [incompleteTodoList, setIncompleteTodoList] = useState<string[]>([]);
  const [completeTodoList, setCompleteTodoList] = useState<string[]>([]);

  const changeTodoTextHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputText(event.target.value);

  const addTodoHandler = () => {
    if (inputText === '') return;
    setIncompleteTodoList([...incompleteTodoList, inputText]);
    setInputText('');
  };

  const deleteTodoHandler = (index: number) => deleteTodo(index);

  const deleteTodo = (index: number) => {
    const newIncompleteTodoList = [...incompleteTodoList];
    newIncompleteTodoList.splice(index, 1);
    setIncompleteTodoList(newIncompleteTodoList);
  };

  const completeTodoHandler = (index: number) => {
    const cmpTodo = incompleteTodoList[index];
    setCompleteTodoList([...completeTodoList, cmpTodo]);
    deleteTodo(index);
  };

  const backTodoHandler = (index: number) => {
    const incompleteTodo = completeTodoList[index];
    setIncompleteTodoList([...incompleteTodoList, incompleteTodo]);

    const newCompleteTodoList = [...completeTodoList];
    newCompleteTodoList.splice(index, 1);
    setCompleteTodoList(newCompleteTodoList);
  };

  return (
    <>
      <div className="input-area">
        <input
          type="text"
          placeholder="TODOを入力"
          value={inputText}
          onChange={(event) => changeTodoTextHandler(event)}
        />
        <button onClick={addTodoHandler} disabled={inputText === ''}>
          追加
        </button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodoList.map((todo, idx) => (
            <li key={todo}>
              <div className="list-row">
                <span>{todo}</span>
                <button onClick={() => completeTodoHandler(idx)}>完了</button>
                <button onClick={() => deleteTodoHandler(idx)}>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodoList.map((todo, idx) => (
            <li key={todo}>
              <div className="list-row">
                <span>{todo}</span>
                <button onClick={() => backTodoHandler(idx)}>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
