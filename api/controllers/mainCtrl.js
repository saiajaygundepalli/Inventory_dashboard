var appmdl = require('../models/model');
// var AWS = require('aws-sdk');
// var awsS3 = 'config/aws.config.json';
var moment = require('moment');

var fs = require('fs');

//***************************************************************************************login********************************************************************************************/

//get login details
exports.getlogindataCtrl = function (req, res) {

    appmdl.getlogindataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

// update the password
exports.updatepasswordCtrl = function (req, res) {
    var std = req.body;
    console.log(std);
    appmdl.updatepasswordMdl(std, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}


//****************************************************************************************login***************************************************************************************/


//**************************************************************************************Customer registertion*************************************************************************/

// post customer details
exports.postcustomerDataCtrl = function (req, res) {
    var std = req.body;
    appmdl.postcustomerDataMdl(std, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}


//duplication check for customer phone number
exports.getcustomerphnnumCtrl = function (req, res) {
    var phnnum = req.params.phnnum;

    appmdl.getcustomerphnnumMdl(phnnum, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

// get customer details
exports.getcustomerDataCtrl = function (req, res) {

    appmdl.getcustomerDataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

//update the customer details data
exports.updatecustomerdataCtrl = function (req, res) {
    var std1 = req.body;
    appmdl.updatecustomerdataMdl(std1, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

// delete the customer details data
exports.deletecustomerDataCtrl = function (req, res) {
    var id = req.params.id;

    appmdl.deletecustomerDataMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
//**************************************************************************************Customer registertion*************************************************************************/



//**************************************************************************************Order Products*************************************************************************/

// get customer names
exports.getCustomernameCtrl = function (req, res) {

    appmdl.getCustomernameMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

// get customer phn num and address
exports.getCustomerphnaddressCtrl = function (req, res) {
    var id = req.params.id;
    appmdl.getCustomerphnaddressMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}


// get category name
exports.getCategorynameCtrl = function (req, res) {

    appmdl.getCategorynameMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

// get items name
exports.getitemsnameCtrl = function (req, res) {
    var id = req.params.id;
    appmdl.getitemsnameMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}


// get items cost
exports.getitemscostCtrl = function (req, res) {
    var id = req.params.id;
    appmdl.getitemscostMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}


// post order  details
exports.postorderdetailsDataCtrl = function (req, res) {
    var std = req.body;
    appmdl.postorderdetailsDataMdl(std, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

// get order details
exports.getorderdetailsCtrl = function (req, res) {

    appmdl.getorderdetailsMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}


// delete the order details data
exports.deleteordersDataCtrl = function (req, res) {
    var id = req.params.id;

    appmdl.deleteordersDataMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

// pay the bill of order
exports.paybillCtrl = function (req, res) {
    var id = req.params.id;

    appmdl.paybillMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

//**************************************************************************************Order Products*************************************************************************/


//************************************************************Payments*******************************************************************************************************/

// get the payment details
exports.getpaymentdetailsCtrl = function (req, res) {

    appmdl.getpaymentdetailsCtrl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}



// post bill details and update the order status to successful
exports.postbilldetailsDataCtrl = function (req, res) {
    var std = req.body;
    console.log(std);
    appmdl.postbilldetailsDataMdl(std, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        } appmdl.updateorderstatusMdl(std,function (err, results1) {
            if (err) {
                res.send({ 'status': 500, 'data': results1 });
                return;
            }
            res.send({ 'status': 200, 'data': results1 });
        });
    });
}

//************************************************************Payments*******************************************************************************************************/