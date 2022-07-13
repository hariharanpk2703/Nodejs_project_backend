 const express= require('express')

 const detailController = require('../Components/details')

 const detailsxRouter = express.Router()
 detailsxRouter.route("/details")
 .get(detailController.apiController)

 module.exports = detailsxRouter;