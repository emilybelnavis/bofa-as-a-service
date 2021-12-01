import express from 'express';
import limit from 'express-rate-limit';
import log from '@utils/log';
import routes from '@src/routes';
const config = require('@src/config');

const slash = require('express-trailing-slash');
const StatsD = require('hot-shots');

const app = express();

const dogstatsd = new StatsD({
    errorHandler: function(error: Error) {
        log.error(`Socket errors caught here: ${error}`);
    }
});

app.use(slash());

app.use(
    limit({
        message: { status: 429, message: "API Rate Limit Reached." },
        windowMs: 60 * 1000, // equal to 60,000ms or 1 minute
        max: 1000 // set rate limit it 1000req/min
    })
);

app.use((req: any, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'Origin, X-Forwarded-For, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.set('Cache-control', 'public, max-age=300, stale-if-error=60');
    log.info(`[Client: ${req.ip}] - ${req.method}:${req.url} ${res.statusCode}`);
    dogstatsd.increment('page.views');
    next();
});

app.use('/', routes);
app.set('trust-proxy','127.0.0.1');
app.enable('strict-routing');

export { app };
