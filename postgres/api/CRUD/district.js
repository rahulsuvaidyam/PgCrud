let dist = require('../../modals/District')

module.exports = {
    getDist: async (req, res) => {
        try {
            let Dist = await dist.findAll({})
            return res.json(Dist);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    postDist: async (req, res) => {
        try {
            let Dist = await dist.create(req.body)
            return res.status(200).json({ message: `District successfull created`, District: Dist })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    putDist: async (req, res) => {
        try {
            id = req.params.id
            let Dist = await dist.update(req.body, { where: { id: id } })
            return res.json(Dist);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    deleteDist: async (req, res) => {
        try {
            id = req.params.id
            let Dist = await dist.destroy({ where: { id: id } })
            return res.json(Dist);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
}