import React, { FC, memo } from 'react';

const style = {
  backgroundColor: '#c6ffe2',
  width: '400px',
  minHeight: '200px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
};

type Props = {
  todoList: string[];
  onClickCompleteBtn: (index: number) => void;
  onClickDeleteBtn: (index: number) => void;
};

export const IncompleteTodoList:FC<Props> = memo(({ todoList, onClickCompleteBtn, onClickDeleteBtn }): JSX.Element => {
  return (
    <>
      <div style={style}>
        <p className="title">未完了のTODO</p>
        <ul>
          {todoList.map((todo, idx) => (
            <li key={todo}>
              <div className="list-row">
                <span>{todo}</span>
                <button onClick={() => onClickCompleteBtn(idx)}>完了</button>
                <button onClick={() => onClickDeleteBtn(idx)}>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
});

IncompleteTodoList.displayName = 'IncompleteTodoList';