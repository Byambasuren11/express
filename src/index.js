import express from 'express';
import { userRouter } from './routers/user-router.js';
import { loginRouter } from './routers/login-router.js';

const app = express();
const port = 4000;
app.use(express.json());


app.use('/users', userRouter)
// app.use('/users',loginRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
