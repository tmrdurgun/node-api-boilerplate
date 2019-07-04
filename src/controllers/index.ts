import { Router } from 'express';
import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';

// Init router and path
const router = Router();
const path = '/api';

// Add sub-routes
router.use(Login.path, Login.router);
router.use(Dashboard.path, Dashboard.router);

// Export the base-router
export default { router, path };
