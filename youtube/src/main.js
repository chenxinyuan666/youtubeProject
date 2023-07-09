import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import VideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(VideoPlayer);
Vue.use(ElementUI, { locale }) 

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
