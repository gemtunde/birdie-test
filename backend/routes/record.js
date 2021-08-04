const  express =require('express');
const router = express.Router();
import formidable from 'express-formidable';

//controllers
import { createRecord} from '../controllers/record';


// routes 
router.post('/create-record', formidable(), createRecord);

module.exports = router;