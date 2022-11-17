let vill = require('../../modals/Village')

module.exports = {
    getVill: async (req, res) => {
        try {
            let Vill = await vill.findAll()
            return res.json(Vill);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    postVill: async (req, res) => {
        try {
            let Vill = await vill.create(req.body)
            return res.status(200).json({ message: `Village successfull created`, Village: Vill })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    putVill: async (req, res) => {
        try {
            id = req.params.id
            let Vill = await vill.update(req.body, { where: { id: id } })
            return res.json(Vill);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    deleteVill: async (req, res) => {
        try {
            id = req.params.id
            let Vill = await vill.destroy({ where: { id: id } })
            return res.json(Vill);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
}