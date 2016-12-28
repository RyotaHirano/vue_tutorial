import Vue from 'vue';
import ListItem from './components/ListItem';
import style from '../css/style.scss'

new Vue({
  el: '#app',
  data: {
    memo: {
      id: 1,
      text: 'テスト',
      date: '16-10-28',
      tags: ['タグ1', 'タグ2']
    }
  },
  template: `
    <div>
      <list-item></list-item>
    </div>
  `
})
