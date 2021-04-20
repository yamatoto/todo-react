import React from 'react';

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
  onClickBackBtn: (index: number) => void;
};

export const CompleteTodoList = (props: Props): JSX.Element => {
  const { todoList, onClickBackBtn } = props;

  return (
    <>
      <div style={style}>
        <p className="title">完了したTODO</p>
        <ul>
          {todoList.map((todo, idx) => (
            <li key={todo}>
              <div className="list-row">
                <span>{todo}</span>
                <button onClick={() => onClickBackBtn(idx)}>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
