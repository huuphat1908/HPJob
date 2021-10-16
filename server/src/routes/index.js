//import router
import noteRouter from './note.js';

const route = (app) => {
    app.use('/note', noteRouter);
}

export default route;