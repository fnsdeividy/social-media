import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors"

import { routes } from './routes';

const app = express()
const PORT = 3000

app.use(express.json());
app.use(routes);
app.use((err:Error, request:Request, response:Response, next:NextFunction) => {
  if(err instanceof Error) {
    return response.status(400).json({
      message:err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`) )