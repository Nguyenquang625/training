const app = require('./app');

const authRouter = require('../Routes/Auth');
const userRouter = require('../Routes/Users');
const teamRouter = require('../Routes/Team');

const apiPrefix = '/api/v1';

app.use(`${apiPrefix}/auth`,authRouter);
app.use(`${apiPrefix}/users`, userRouter);
app.use(`${apiPrefix}/teams`, teamRouter);