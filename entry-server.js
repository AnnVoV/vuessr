import { createApp } from './main'

export default context => {
    const { app, eventBus } = createApp();
    // context.state = eventBus._data;
    return app;
}
