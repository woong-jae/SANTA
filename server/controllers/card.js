import mongoose from 'mongoose';
import Card from '../models/card.js';

export const getAllCard = async (req, res) => {
    try {
        const { mountain, date } = req.params;
        const cardList = await Card.find( { mountain: mountain, date: date });
        res.status(200).json(cardList);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}
export const getCard = async (req, res) => {
    try {
        const cardMessage = await Card.findOne({_id: req.params.card_id});
        res.status(200).json(cardMessage);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}
export const createCard = async (req, res) => {
    const cardInfo = req.body;
    const newCard = new Card(cardInfo);
    try {
        await newCard.save();
        res.status(201).json(newCard);
    } catch (error) {
        res.status(409).json({ message: error });
    }
}