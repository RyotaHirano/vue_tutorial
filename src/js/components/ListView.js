import Vue from 'vue';
import ListItem from './ListItem';

Vue.component('list-view', {
  props: {
    memos: Array
  },
  template: `
    <div class="list-view">
      <div v-if="memos && memos.lenght !== 0">
        <list-item v-for="memo in memos" :memo="memo"></list-item>
      </div>
      <div v-else>
        メモがありません。
      </div>
    </div>
  `
});
