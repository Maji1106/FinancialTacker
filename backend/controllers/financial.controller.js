const Financial = require("../models/fanancial.models");

//create a new Financial record
exports.create = async (req, res) =>{
    const {userId, date, description, amount, catgory, paymentMethod} = req.body;
    const newRecord = {
      userId,
      date,
      description,
      amount,
      catgory,
      paymentMethod,
    };
    await Financial.create(newRecord).then((data)=>{
        res.send(date);
    }).catch((Error)=>{
        res.status(500).send({message: 
            error.message ||
            "Something error occured while creating the restaurant.",
        });
    });
};

//Retreive all financial records
exports.findAll = async (req, res) => {
  await Restaurant.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Something error occured while creating the restaurant.",
      });
    });
};

//Retreive all financial records by User Id
exports.findAllByUserId = async (req ,res) =>{
    const userId =req.params.userId;
    //select * from Financial ehere userId = xxx
    await Financial.findAll({where: { userId:
    userId} })
    .then((data) => {
        res.send(data);

    })
    .chatch((error) => {
        res.status(500).send({
            message:
            error.message ||
            "Something error occured while creating the restaurant.",
        });
    });


}