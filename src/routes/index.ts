import express from 'express';
import log from "@utils/log";

let router = express.Router({strict: true});

const API_VERSION = "4.2.0";

router.get('/bofa/', (req: any, res: express.Response) => {
    return res.status(200).json({message: "bofa deez nuts lmao"});
});

router.get('/ligma/', (req: any, res: express.Response) => {
    return res.status(200).json({message: "ligma nuts lmao"});
});

router.get('/figma/', (req: any, res: express.Response) => {
    return res.status(200).json({message: "figma balls lmao"});
});

// catch-all
router.get('/*', (req: any, res: express.Response) => {
    return res.status(200).json({message: "sucon me nuts lmao"});
});


export default router;
