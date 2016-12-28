import Vue from 'vue';
import EditorView from './components/EditorView';
import ListView from './components/ListView';
import style from '../css/style.scss'

new Vue({
  el: '#app',
  data() {
    return {
      memos: []
    }
  },
  template: `
    <div>
      <editor-view @add="add"></editor-view>
      <list-view :memos="memos"></list-view>
    </div>
  `,
  computed: {
    nextId() {
      return this.memos.reduce((id, memo) => {
        return id < memo.id ? memo.id : id
      }, 0) + 1;
    }
  },
  methods: {
    add(newMemo) {
      newMemo.id = this.nextId
      this.memos.push(newMemo)
    }
  }
})
