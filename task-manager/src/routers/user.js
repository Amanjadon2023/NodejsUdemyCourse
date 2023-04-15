const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth')
const router = new express.Router();
router.get('/users', async (req, res) => {
    console.log(User)
    User.find({}).then((data) => {
        console.log(data, "data")
        return res.send(data)
    }).catch(() => {
        res.status(400).send("not a valid request")
    })
})
router.get('/users/me', auth, async (req, res) => {
    try {
        res.send(req.user)
    } catch (error) {
        res.send({ 'error': error })
    }
})
router.post('/users', async (req, res) => {
    try {
        const user = new User(req.body)
        const token = await user.generateAuthToken();
        res.status(200).send({ user, token });
    }
    catch (e) {
        console.log('error');
        res.status(400).send({ "error": "not able to add user" })
    }
})
router.post('/users/logIn', async (req, res) => {
    try {
        const data = await User.findByCredentials(req.body.email, req.body.password);
        const token = await data.generateAuthToken();
        // data.save()
        console.log(token);
        res.status(200).send({ data, token });
    } catch (error) {
        // console.log(error);
        res.status(400).send({ error: "unable to logIn" })
    }
})

router.patch('/users', async (req, res) => {
    try {
        //ist way
        //     console.log("%",req.query,req.body);
        //     const dataToBeUpdated= await User.updateOne({_id:req.query.id},{
        //     name:req.body.name,
        //     age:req.body.age,
        // password:req.body.password})

        //     // const data=await User.save();
        //     res.send(dataToBeUpdated)


        // 2nd way to trigger middleware function 
        const user = await User.findById(req.query.id)
        const arr = Object.keys(req.body);
        arr.map((data) => {
            console.log(data);
            user[data] = req.body[data]
        })
        const data = await user.save();
        console.log("((");
        res.send(data)
    }
    catch (e) {
        res.send(e)
    }
})
router.get('/users/:id', async (req, res) => {
    try {
        const data = await User.findOne({ _id: req.params.id })
        res.send(data)
    }
    catch (e) {
        res.send({ error: e })
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const data = await User.deleteOne({ _id: req.params.id })
        res.send(data)
    }
    catch (e) {
        res.send({ error: e })
    }
})
router.delete('/tasks/:id', async (req, res) => {
    console.log('object');
    try {
        console.log(req.params.id);
        const data = await Task.deleteOne({ _id: req.params.id })
        res.send(data)
    }
    catch (e) {
        res.send(e);
    }
})
module.exports = router