import * as express from 'express';
import * as BodyParser from 'body-parser';
import DataBase from "./src/infra/dataBase"
import NewsController from "./src/controller/newsController";

class StartUp {
    public app: express.Application;

    private database: DataBase;

    private bodyParser;

    constructor() {
        this.app = express();
        this.database = new DataBase();
        this.database.createConnection();
        this.middler();
        this.routes();
    }

    middler() {
        this.app.use(BodyParser.json());
        this.app.use(BodyParser.urlencoded({ extended: false}));
    }

    routes(){
        this.app.route('/').get((req, res) => {
            res.send({versao : '0.0.1'})
        });

        //news
        this.app.route('/api/v1/news').get(NewsController.get);
        this.app.route('/api/v1/news/:id').get(NewsController.getById);
        this.app.route('/api/v1/news').post(NewsController.create);
        this.app.route('/api/v1/news/:id').put(NewsController.update);
        this.app.route('/api/v1/news/:id').delete(NewsController.delete);


    }


}

export default new StartUp