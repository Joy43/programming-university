import cors from 'cors';
import express, { Application, request, Request, response, Response } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';
import { NextFunction } from 'express';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);

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

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  let statusCode = err.statusCode || 500; // Default to 500 if no statusCode is provided
  let message = err.message || 'Something went wrong!';
  
  return res.status(statusCode).json({
    success: false,
    message,
    error: err.stack, // Optional: Include the stack trace for debugging purposes
  });
});

export default app;
