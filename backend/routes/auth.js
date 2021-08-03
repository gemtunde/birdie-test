const  express =require('express');
const router = express.Router();
import { register, login} from '../controllers/auth';


// routes 
router.post('/register', register);
router.post('/login', login);


  module.exports = router;