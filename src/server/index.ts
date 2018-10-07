import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import http from 'http';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import passport from 'passport';
import mongoose from 'mongoose';
import socketIO from 'socket.io';

import { config } from '@server/constants';
import app from './app';

http.createServer(app).listen(config.express.port, () => {
  console.log(`Listening on port ${config.express.port}!`);
});
