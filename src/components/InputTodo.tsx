import React, { FC, memo } from 'react';

const style = {
  backgroundColor: '#c1ffff',
  width: '400px',
  height: '30px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
};

type Props = {
  todoText: string;
  isTodoListLimit: boolean;
  onChangeTodoText: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickAddBtn: () => void;
};

export const InputTodo:FC<Props> = memo(({ todoText, isTodoListLimit, onChangeTodoText, onClickAddBtn }): JSX.Element => {
  return (
    <>
      <div style={style}>
        <input
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={(event) => onChangeTodoText(event)}
        />
        <button
          onClick={onClickAddBtn}
          disabled={todoText === '' || isTodoListLimit}>
          追加
        </button>
      </div>
    </>
  );
});

InputTodo.displayName = 'InputTodo';