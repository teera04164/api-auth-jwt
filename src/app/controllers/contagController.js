import mongoose from 'mongoose'
import contagModel from '../model/contagModel'

const getContag = (req , res ,next) =>{
    res.status(200).send({
        status: 200,
        message: 'Successfully created Campaign'
    })
}

const createContag = (req ,res ,next ) => {
    console.log(req.body);
    
    contagModel.create({
        title: req.body.title,
    }).then((data) => {
        res.status(201).send({
            status: 201,
            message: 'Successfully created contag',
            dataCampaign: data
        })
    }).catch(err => {
        res.status(400).send({
            status: 400,
            message: '',
            error: err
        })
    })

}



export default {
    getContag,
    createContag
}