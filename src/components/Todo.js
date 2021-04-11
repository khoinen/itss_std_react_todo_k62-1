import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, putItems] = React.useState([
      /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);
  
  const changeTodoStatusHandler = (key) => {
    const newItems = items.map(item => {
      return item.key === key ? {...item, done: !item.done} : item
    })
    putItems(newItems)
  }
  
  const addTodoItemHandler = (newTodo) => {
    putItems([...items, { key: getKey(), text: newTodo, done: false}])
  }
  
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input onAddItem={addTodoItemHandler}/>
      {items.map(item => (
        <TodoItem 
          key={item.key} 
          item={item}
          onTodoItemClick = {changeTodoStatusHandler}
        />
      ))}
      <div className="panel-block">
        {items.length} items
      </div>
    </div>
  );
}

export default Todo;