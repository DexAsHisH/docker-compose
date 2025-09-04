import express from 'express';
import { PrismaClient } from '@prisma/client';


const client = new PrismaClient();

const app = express();


app.get('/', async (req, res) => {

    const users = await client.user.findMany();
    res.send(users);
});
app.post('/', async (req, res) => {

    await client.user.create({
        data:{
            username: Math.random().toString(36).substring(7),
            password: Math.random().toString(36).substring(7)
        }
    })
    res.send('user created');
});



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
