import React, { useState } from 'react';
import './App.css';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodoList } from './components/IncompleteTodoList';
import { CompleteTodoList } from './components/CompleteTodoList';

export const App = (): JSX.Element => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodoList, setIncompleteTodoList] = useState<string[]>([]);
  const [completeTodoList, setCompleteTodoList] = useState<string[]>([]);

  const changeTodoTextHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTodoText(event.target.value);

  const clickAddBtnHandler = () => {
    if (todoText === '') return;
    setIncompleteTodoList([...incompleteTodoList, todoText]);
    setTodoText('');
  };

  const clickDeleteBtnHandler = (index: number) => deleteTodo(index);

  const deleteTodo = (index: number) => {
    const newIncompleteTodoList = [...incompleteTodoList];
    newIncompleteTodoList.splice(index, 1);
    setIncompleteTodoList(newIncompleteTodoList);
  };

  const clickCompleteBtnHandler = (index: number) => {
    const cmpTodo = incompleteTodoList[index];
    setCompleteTodoList([...completeTodoList, cmpTodo]);
    deleteTodo(index);
  };

  const clickBackBtnHandler = (index: number) => {
    const incompleteTodo = completeTodoList[index];
    setIncompleteTodoList([...incompleteTodoList, incompleteTodo]);

    const newCompleteTodoList = [...completeTodoList];
    newCompleteTodoList.splice(index, 1);
    setCompleteTodoList(newCompleteTodoList);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChangeTodoText={(event) => changeTodoTextHandler(event)}
        onClickAddBtn={clickAddBtnHandler}
      />
      <IncompleteTodoList
        todoList={incompleteTodoList}
        onClickCompleteBtn={(index) => clickCompleteBtnHandler(index)}
        onClickDeleteBtn={(index) => clickDeleteBtnHandler(index)}
      />
      <CompleteTodoList
        todoList={completeTodoList}
        onClickBackBtn={(index) => clickBackBtnHandler(index)}
      />
    </>
  );
};
