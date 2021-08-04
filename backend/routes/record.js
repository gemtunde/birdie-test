const  express =require('express');
const router = express.Router();
import formidable from 'express-formidable';

//controllers
import { createRecord, records} from '../controllers/record';


// routes 
router.post('/create-record', formidable(), createRecord);

router.get('/records', records);

module.exports = router;