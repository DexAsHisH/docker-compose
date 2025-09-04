import express from 'express';
import { PrismaClient } from '@prisma/client';


const client = new PrismaClient();

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {

    const users = await client.user.findMany();
    res.send(users);
});
app.post('/', async (req, res) => {

    const {username, password} = req.body;
    await client.user.create({
        data:{
            username,
            password
        }
    })
    res.send('user created');
});



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
