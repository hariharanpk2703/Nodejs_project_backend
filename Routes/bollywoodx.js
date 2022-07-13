const express= require('express')

const detailController = require('../Components/bollywood')

const detailsxRouter = express.Router()
detailsxRouter.route("/bollywood")
.get(detailController.apiController)

module.exports = detailsxRouter;