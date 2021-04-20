import React from 'react';

type Props = {
  todoText: string;
  onChangeTodoText: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickAddBtn: () => void;
};

export const InputTodo = (props: Props): JSX.Element => {
  const { todoText, onChangeTodoText, onClickAddBtn } = props;

  return (
    <>
      <div className="input-area">
        <input
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={(event) => onChangeTodoText(event)}
        />
        <button onClick={onClickAddBtn} disabled={todoText === ''}>
          追加
        </button>
      </div>
    </>
  );
};