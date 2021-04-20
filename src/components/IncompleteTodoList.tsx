import React from 'react';

type Props = {
  todoList: string[];
  onClickCompleteBtn: (index: number) => void;
  onClickDeleteBtn: (index: number) => void;
};

export const IncompleteTodoList = (props: Props): JSX.Element => {
  const { todoList, onClickCompleteBtn, onClickDeleteBtn } = props;

  return (
    <>
      <div className="incomplete-area">
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
};
