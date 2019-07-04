import { logger } from '@shared';
import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';

// Init router and path
const router = Router();
const path = '';

router.post('/login', async (req: Request, res: Response) => {
    try {
        return res.status(OK).json({success: true});
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
});

export default { router, path };
