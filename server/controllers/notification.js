import Notification from "../models/notification.js";

export const creatNoti = async (req, res) => {
    const notiInfo = req.body;
    try {
        if (!req.userId) return res.json({ message: "Unathenticated" });

        await Notification.create(notiInfo);

        res.json({message: 'Notification created successfully'});
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getNoti = async (req, res) => {
    const { _id } = req.params;
    try {
        if (!req.userId) return res.json({ message: "Unathenticated" });

        const notifications = await Notification.find({ receiver: _id });

        res.status(200).json(notifications);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const deleteNoti = async (req, res) => {
    const { _id } = req.params;
    try {
        if (!req.userId) return res.json({ message: "Unathenticated" });

        await Notification.findByIdAndDelete(_id);

        res.json({message: 'Notification deleted successfully'});
    } catch (error) {
        res.status(404).json({ message: error });
    }
}