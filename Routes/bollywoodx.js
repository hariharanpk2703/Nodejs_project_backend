const express= require('express')

const detailController = require('../Components/bollywood')

const detailsxRouter2 = express.Router()
detailsxRouter.route("/bollywood")
.get(detailController.apiController)

module.exports = detailsxRouter2;