import React, { useState } from 'react';
import PropTypes from 'prop-types'
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
Input.propTypes = {
  onAdd: PropTypes.func,
}
Input.defaultProps = {
  onAdd: null
}
function Input( props ) {
  const [value, setValue] = useState('');
  const {onAdd} = props;

  function AddItem(e) {
    setValue(e.target.value);
  }

  function handleKeyDown(text) {
    const params = {
      text: value,
      done: false
  }
    if(text.key === 'Enter'){
      onAdd(params)
      setValue('')
    }
  }

  return (
    <div className="panel-block">
      <input 
        type="text" 
        className="input" 
        placeholder="Todoを入力してください"
        onKeyDown = {handleKeyDown}
        onChange={AddItem}/>
    </div>
  );
}

export default Input;
