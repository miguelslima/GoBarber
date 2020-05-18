import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appoitmentsRouter = Router();
const appointmentscController = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

appoitmentsRouter.use(ensureAuthenticated);

appoitmentsRouter.post('/', appointmentscController.create);
appoitmentsRouter.get('/me', providerAppointmentsController.index);

export default appoitmentsRouter;
