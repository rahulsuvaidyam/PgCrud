let block = require('../../modals/Blocks')

module.exports = {
    getBlock: async (req, res) => {
        try {
            let Block = await block.findAll()
            return res.json(Block);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    postBlock: async (req, res) => {
        try {
            let Block = await block.create(req.body)
            return res.status(200).json({ message: `Block successfull created`, Block: Block })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    putBlock: async (req, res) => {
        try {
            id = req.params.id
            let Block = await block.update(req.body, { where: { id: id } })
            return res.json(Block);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    deleteBlock: async (req, res) => {
        try {
            id = req.params.id
            let Block = await block.destroy({ where: { id: id } })
            return res.json(Block);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
}