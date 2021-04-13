/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter( {choose, onClickFilter} ) {
  function clickFilter(params, e) {
    e.preventDefault(); //prevent reloading browser
    onClickFilter(params)
  }

  return (
    <div className="panel-tabs">
      <a 
        href="/#" 
        className={choose === 'すべて' ? 'is-active' : ''} 
        onClick={clickFilter.bind(null, 'すべて')}
      >すべて</a>
      <a 
        href="/#" 
        className={choose === '未完了' ? 'is-active' : ''} 
        onClick={clickFilter.bind(null, '未完了')}
      >未完了</a>
      <a 
        href="/#" 
        className={choose === '完了済み' ? 'is-active' : ''} 
        onClick={clickFilter.bind(null, '完了済み')}
      >完了済み</a>
    </div>
  );
}

export default Filter