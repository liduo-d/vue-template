import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import installElementPlus from './plugins/element'
import './styles/index.scss'

import * as ElIconModules from '@element-plus/icons'

const app = createApp(App);
installElementPlus(app);

for (const iconName in ElIconModules) {
    if (Reflect.has(ElIconModules, iconName))
        app.component(iconName, ElIconModules[iconName]);
}

app
    .use(store)
    .use(router)
    .mount('#app');
