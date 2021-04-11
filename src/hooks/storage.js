import { useState, useEffect } from 'react';

/* 
  【Storageフック】
　・TodoをlocalStorageを使って保存する
　・以下機能をサポートする
　  - localstrageに保存されているすべてのTodoの読み出し機能
　  - Todoをlocalstrageに保存する
　  - localstrageにあるTodoを削除する
*/

/*global localStorage*/

const STORAGE_KEY = 'itss-todo';

function useStorage() {
  const [items, setItems] = useState([]);
　
　/* 副作用を使う */
  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY) 
    if (data) {
      setItems(JSON.parse(data))
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]))
    }
  }, []);

  const putItems = items => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    setItems(items)
  };

  const clearItems = () => {
    localStorage.setItem(STORAGE_KEY,JSON.stringify([]))
    setItems([])
  };

  return [items, putItems, clearItems];
}

export default useStorage;