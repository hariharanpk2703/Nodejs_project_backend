 const express= require('express')

 const detailController = require('../Components/details')

 const detailsxRouter1 = express.Router()
 detailsxRouter.route("/details")
 .get(detailController.apiController)

 module.exports = detailsxRouter1;