import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import { score } from './store/store.js'

const store = createStore({
    modules: {
      score
    }
  })
createApp(App).use(store).mount('#app')
