import React, { FC, memo } from 'react';

const style = {
  backgroundColor: '#ffffe0',
  width: '400px',
  minHeight: '200px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
};

type Props = {
  todoList: string[];
  isTodoListLimit: boolean;
  onClickBackBtn: (index: number) => void;
};

export const CompleteTodoList:FC<Props> = memo(({ todoList, isTodoListLimit, onClickBackBtn }): JSX.Element => {
  return (
    <>
      <div style={style}>
        <p className="title">完了したTODO</p>
        <ul>
          {todoList.map((todo, idx) => (
            <li key={todo}>
              <div className="list-row">
                <span>{todo}</span>
                <button
                  onClick={() => onClickBackBtn(idx)}
                  disabled={isTodoListLimit}>
                  戻す
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
});

CompleteTodoList.displayName ="CompleteTodoList";