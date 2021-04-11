/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem(  {item , onTodoItemClick} ) {
  return (
     <label className={
      `panel-block ${item.done ? "has-text-grey-light" : ""}`
    } >
      <input type="checkbox" onClick={() => onTodoItemClick(item.key)} />
      {item.text}
    </label>
  );
}

export default TodoItem;