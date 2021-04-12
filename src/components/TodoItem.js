/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem( {item, onClickCheckBox} ) {
  function onTodoClick() {
    if(onClickCheckBox){
      onClickCheckBox(item)
      // console.log(item.done)
    }    
  }

  return (
    <label className="panel-block">
      <input 
        type      = "checkbox"
        onClick  = {onTodoClick}
      />
      <span className={item.done ? 'has-text-grey-light':  ''}>
        {item.text}
      </span>
      
    </label>
  );
}

export default TodoItem;