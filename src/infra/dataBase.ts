import * as mongoose from 'mongoose';

class DataBase
{
    private DB_URL = 'mongodb://127.0.0.1:27017/db_portal';

    createConnection()
    {
        mongoose.connect(this.DB_URL);
    }
}

export default DataBase;