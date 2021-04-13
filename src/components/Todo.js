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
  const [items, putItems, clearItems] = useStorage();
  // const [items, putItems] = React.useState([
  //     /* テストコード 開始 */
  //   { key: getKey(), text: '日本語の宿題', done: false },
  //   { key: getKey(), text: 'reactを勉強する', done: false },
  //   { key: getKey(), text: '明日の準備をする', done: false },
  //   /* テストコード 終了 */
  // ]);
  const [filter, setFilter] = useState('すべて')
  const itemFilter = items.filter(item => {
    if (filter === 'すべて') return true;
    if (filter === '未完了') return !item.done;
    if (filter === '完了済み') return item.done;
  })

  function handleCheckBox(params) {
    const newItems = items.map(item => {
      if (item.key === params.key) {
        item.done = !item.done
      }
      return item
    });
    putItems(newItems)
  };

  function handleAdd(item) {
    const newItems = [...items]
    const newItem = {
      key: getKey(),
      ...item
    }
    console.log(newItem)
    newItems.push(newItem)
    putItems(newItems)
  }
  
  function handleFilter(params) {
    setFilter(params)
    console.log(params)
  }
  
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input onAdd = {handleAdd}/>
      <Filter choose={filter} onClickFilter={handleFilter}/>
      {itemFilter.map(item => (
        <TodoItem
          key             = {item.key}
          item            = {item}
          onClickCheckBox = {handleCheckBox}     
        />
      ))}
      <div className="panel-block">
        {itemFilter.length} items
      </div>
      <div className="panel-block">
        <button className="button" onClick={clearItems}>
          全てのToDoを削除
        </button>
      </div>
    </div>
  );
}

export default Todo;