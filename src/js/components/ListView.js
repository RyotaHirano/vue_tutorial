import Vue from 'vue';
import ListItem from './ListItem';

Vue.component('list-view', {
  props: {
    memos: Array
  },
  template: `
    <div class="list-view">
      <div v-if="memos && memos.length !== 0">
        <list-item v-for="memo in memos" :memo="memo"></list-item>
      </div>
      <div v-else>
        <p>メモがありません。</p>
      </div>
    </div>
  `
});
