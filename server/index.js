import mongoose from 'mongoose';
import express from 'express';
const app = express();
const CONNECTION_URL = 'mongodb://localhost:27017/IEEE'
const PORT = 5000

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log('Database connected')))
    .catch((error) => console.log(error.message));


    app.use(express.json());

    app.post('/signup', async (req, res) => {
        const { username, email, password } = req.body;
        try {

            const newUser = new User({ username, email, password });

            await newUser.save();
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
    
    app.get('/signin', async (req, res) => {
        try {

            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });