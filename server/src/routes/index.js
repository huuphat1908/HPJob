//import router
import noteRouter from './note.js';

const route = (app) => {
    app.use('/', noteRouter);
}

export default route;