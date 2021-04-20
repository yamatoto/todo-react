import React from 'react';
import './App.css';

export const App = (): JSX.Element => {
  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <li>
            <div className="list-row">
              <span>TODO1</span>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
          <li>
            <div className="list-row">
              <span>TODO2</span>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          <li>
            <div className="list-row">
              <span>TODO3</span>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
