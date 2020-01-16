var models = require('../models')
module.exports = {
  list: function (res) {
    models.Transactions.findAll()
      .then(function (transaction) {
        res.status(200).json(transaction)
      })
      .catch(function (err) {
      })
  },
  add:function (req,res) {
    let note = req.body.notes
    models.Transactions.create({
      date : req.body.date,
      description : req.body.description,
      notes : note.toUpperCase(),
      balance : req.body.balance
    })
      .then(function (transaction) {
        res.status(200).json({
          status: 'ok',
          data:transaction
        })
      }).catch(function (err) {
    })
  },
  hapus: function (req, res) {
    models.Transactions.destroy({
      where:{
        id: req.params.id
      }
    }).then(function (transaction) {
      res.status(200).json({
        status: 'ok'
      })
    })
  },
  update: function (req, res) {
    console.log(req.body)

    console.log(req.params.id)
    models.Transactions.update({
      date : req.body.date,
      description : req.body.description,
      notes : req.body.notes,
      balance : req.body.balance
    },{
      where:{
        id: req.params.id
      }
    }).then(function (transaction) {
      res.status(200).json({
        status:'ok',
        data:transaction
      })
    })
  }
}