import {createApp} from './main.js';

const { app, eventBus } = createApp();

if (window.__INITIAL_STATE__) {
    eventBus._data = window.__INITIAL_STATE__;
}

app.$mount('#app');
