import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({ onAddItem }) {

  const [newTodo, setNewTodo] = useState('')

  const enterHandler = (enter) => {
    if (enter.keyCode === 13) {
      setNewTodo(enter.target.value)
      onAddItem(newTodo)
      setNewTodo('')
    }
  }

  return (
    <div className="panel-block">
      <input
        className="input"
        type="text"
        placeholder="新しタスク"
        value={newTodo}
        onChange={(enter) => setNewTodo(enter.target.value)}
        onKeyDown={enterHandler}
      />
    </div>
  );
}

export default Input;
