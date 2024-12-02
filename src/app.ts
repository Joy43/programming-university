import cors from 'cors';
import express, { Application, request, Request, response, Response } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';
import { NextFunction } from 'express';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

// const getAController = (req: Request, res: Response) => {
//   const a = 10;
//   res.send(a);
// };

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'ph university is running successfully 🏃🏽‍♂️➡️',
  });
});

/* app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  let statusCode = err.statusCode || 500; 
  let message = err.message || 'Something went wrong!';
  
  return res.status(statusCode).json({
    success: false,
    message,
    error: err.stack, 
  });
}); */
app.use(globalErrorHandler);

//Not Found
app.use(notFound);


export default app;
