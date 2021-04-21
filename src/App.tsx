/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useCallback } from 'react';
import './App.css';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodoList } from './components/IncompleteTodoList';
import { CompleteTodoList } from './components/CompleteTodoList';

export const App = (): JSX.Element => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodoList, setIncompleteTodoList] = useState<string[]>([]);
  const [completeTodoList, setCompleteTodoList] = useState<string[]>([]);

  const isTodoListLimit = () => incompleteTodoList.length >= 5;

  const changeTodoTextHandler = useCallback(
  (event: React.ChangeEvent<HTMLInputElement>) =>
    setTodoText(event.target.value),[]);

  const clickAddBtnHandler = useCallback(() => {
    if (todoText === '') return;
    setIncompleteTodoList([...incompleteTodoList, todoText]);
    setTodoText('');
  },[]);

  const clickDeleteBtnHandler = useCallback((index: number) => deleteTodo(index),[]);

  const deleteTodo = useCallback((index: number) => {
    const newIncompleteTodoList = [...incompleteTodoList];
    newIncompleteTodoList.splice(index, 1);
    setIncompleteTodoList(newIncompleteTodoList);
  },[]);

  const clickCompleteBtnHandler = useCallback((index: number) => {
    const cmpTodo = incompleteTodoList[index];
    setCompleteTodoList([...completeTodoList, cmpTodo]);
    deleteTodo(index);
  },[]);

  const clickBackBtnHandler = useCallback((index: number) => {
    const incompleteTodo = completeTodoList[index];
    setIncompleteTodoList([...incompleteTodoList, incompleteTodo]);

    const newCompleteTodoList = [...completeTodoList];
    newCompleteTodoList.splice(index, 1);
    setCompleteTodoList(newCompleteTodoList);
  },[]);

  return (
    <>
      <InputTodo
        todoText={todoText}
        isTodoListLimit={isTodoListLimit()}
        onChangeTodoText={(event) => changeTodoTextHandler(event)}
        onClickAddBtn={clickAddBtnHandler}
      />
      {isTodoListLimit() && (
        <p style={{ color: 'red' }}>登録可能なTODOは5個までです。</p>
      )}
      <IncompleteTodoList
        todoList={incompleteTodoList}
        onClickCompleteBtn={(index) => clickCompleteBtnHandler(index)}
        onClickDeleteBtn={(index) => clickDeleteBtnHandler(index)}
      />
      <CompleteTodoList
        todoList={completeTodoList}
        isTodoListLimit={isTodoListLimit()}
        onClickBackBtn={(index) => clickBackBtnHandler(index)}
      />
    </>
  );
};
