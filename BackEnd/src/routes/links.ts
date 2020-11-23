import {Router} from 'express';
import linksController from  '../controllers/links'

const router = Router();

router.post('/Links', linksController.postLink);

router.get('/Links/:code', linksController.hitLink);

router.get('/Links/:code/stats', linksController.getLink)

export default router;