import Vue from "vue"
import AppComponent from "./App/App.vue"
import axios from "axios"
import ElementUi from 'element-ui'
import Router from 'vue-router'
import HelloWorld from "../component/HelloWorld";

Vue.component("app-component", AppComponent);
Vue.use(ElementUi)
Vue.use(Router)
Vue.prototype.$axios = axios

new Vue({
    el: "#app",
    render: createElement => {
        return createElement(AppComponent)
    }
});

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }
    ]
})
