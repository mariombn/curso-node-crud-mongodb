import * as mongoose from 'mongoose';
import NewsShema from '../model/newsSchema';

export default mongoose.model('news', NewsShema);