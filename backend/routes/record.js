const  express =require('express');
const router = express.Router();
import formidable from 'express-formidable';

//controllers
import { createRecord, records} from '../controllers/record';
import { users} from '../controllers/users';


// routes 
router.post('/create-record', formidable(), createRecord);

router.get('/records', records);
router.get('/users', users);

module.exports = router;