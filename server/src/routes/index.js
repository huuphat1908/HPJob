//import router
import noteRouter from './note.js';

const route = (app) => {
    app.use('/api/notes', noteRouter);
}

export default route;