import express, {Request, Response} from 'express'
import multer from 'multer';

const app = express();
const port = 3000;

const upload = multer({storage: multer.memoryStorage()});

// app.post('/v1/pdf/email',upload.array('files'),(req: Request, res: Response)=>{
//     console.log('----------------1---------------');
//     // console.dir(req, { depth: 1, colors: true });
//     console.dir(req.files, { depth: 1, colors: true });
//     res.send('ok');
// });

// app.post('/v1/pdf/email',upload.any(),(req: Request, res: Response)=>{
//     console.log('----------------1---------------');
//     // console.dir(req, { depth: 1, colors: true });
//     console.dir(req.files, { depth: 1, colors: true });
//     res.send('ok');
// });

app.post('/v1/pdf/email',upload.any(),(req: Request, res: Response)=>{
    console.log('----------------1---------------');
    // console.dir(req, { depth: 1, colors: true });
    console.dir(req.files, { depth: 1, colors: true });
    res.send('ok');
});

app.listen(port, ()=>{
    console.log('server running')
})