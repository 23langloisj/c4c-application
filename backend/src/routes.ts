import { Router } from 'express';
import { getAllPartners, addPartner, removePartner } from './controllers';

const router = Router();

// handle routing
router.get('/getPartners', getAllPartners);
router.post('/addPartner', addPartner);
router.delete('/removePartner/:key', removePartner);

export default router;