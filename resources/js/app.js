

require('./bootstrap');
import App from './components/App.vue'
import vuetify from "./vuetify";

window.Vue = require('vue').default;

const app = new Vue({
    el: '#app',
    vuetify,
    render: h => h(App),
});
