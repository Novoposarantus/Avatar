import Vue from 'vue';
import App from './App.vue'
import store from './store';
import initPlugins from './plugins'

Vue.config.productionTip = false;

const app = {
  store,
  render: h => h(App),
};

initPlugins(app).then(() => new Vue(app).$mount('#app'));