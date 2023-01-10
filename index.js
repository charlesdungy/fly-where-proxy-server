const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const routes = require('./routes');

require('dotenv').config();
const port = process.env.PORT || 5005;

const limitConfig = rateLimit({
  windowMs: process.env.RATE_LIMIT_MS,
  max: process.env.RATE_LIMIT_MAX,
});

const corsConfig = cors({
  origin: process.env.CORS_ORIGIN,
  methods: process.env.CORS_METHODS,
});

const app = express();
app.set('trust proxy', process.env.TRUST_PROXY);
app.use(limitConfig);
app.use(morgan('common'));
app.use(helmet());
app.use(corsConfig);

app.use('/', routes);
app.listen(port, () => console.log(`Server running on port ${port}`));
