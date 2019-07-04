import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import { Router } from 'express';

import MainController from './controllers';

const router = Router();

// Init express
const app = express();

// Add middleware/settings/routes to express.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(MainController.path, MainController.router);

console.log(router.stack);

// Export express instance
export default app;
