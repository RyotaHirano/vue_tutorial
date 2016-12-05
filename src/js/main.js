import Vue from 'vue';
import marked from 'marked';
import style from '../css/style.scss'

new Vue({
  el: '#editor',
  data: {
    input: '# hello'
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: function (e) {
      this.input = e.target.value
    }
  }
})
