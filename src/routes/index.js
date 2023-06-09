const authRouter = require('./auth.route');
const userRouter = require('./users.route');
const contactsRouter = require('./contacts.route');
const express = require('express');
const { sendErrorResponse } = require('../utils/sendResponse');

module.exports = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use('/api/auth', authRouter);
  app.use('/api/users', userRouter);
  app.use('/api/contacts', contactsRouter);

  
};
