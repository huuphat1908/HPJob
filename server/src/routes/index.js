//router
import noteRouter from './note.js';
import colorRouter from './color.js';


const route = (app) => {
    app.use('/api/notes', noteRouter);
    app.use('/api/colors', colorRouter);
}

export default route;