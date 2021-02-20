/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
router = express.Router();
//Include Controller
var sampleRoutes = require('../controllers/mainCtrl');

//********************************************************login***************************************************************************************************************/

router.get('/getlogindata', sampleRoutes.getlogindataCtrl); // get login data
router.post('/updatepassword', sampleRoutes.updatepasswordCtrl); //update the password

//*******************************************************login************************************************************************************************************** */


//*******************************************************Customer registertion**********************************************************************************************/

router.post('/postcustomerData', sampleRoutes.postcustomerDataCtrl); //post customer details

router.get('/getcustomerphnnum/:phnnum', sampleRoutes.getcustomerphnnumCtrl); // get contact number of customer

router.get('/getcustomerData', sampleRoutes.getcustomerDataCtrl); // get customer details

router.post('/updatecustomerdata', sampleRoutes.updatecustomerdataCtrl); // update the customer details

router.get('/deletecustomerData/:id', sampleRoutes.deletecustomerDataCtrl); // delete the customer details

//*******************************************************Customer registertion**********************************************************************************************/



//************************************************************Order Products*********************************************************************************************** */
router.get('/getCustomername', sampleRoutes.getCustomernameCtrl); // get the customer names

router.get('/getCustomerphnaddress/:id', sampleRoutes.getCustomerphnaddressCtrl); // get the customer phnnum and address

router.get('/getCategoryname', sampleRoutes.getCategorynameCtrl); // get the category name

router.get('/getitemsname/:id', sampleRoutes.getitemsnameCtrl); // get the items name

router.get('/getitemscost/:id', sampleRoutes.getitemscostCtrl); // get the items cost

router.post('/postorderdetailsData', sampleRoutes.postorderdetailsDataCtrl); //post order details

router.get('/getorderdetails', sampleRoutes.getorderdetailsCtrl); // get the order details

router.get('/deleteordersData/:id', sampleRoutes.deleteordersDataCtrl); // cancel the order details

router.get('/paybill/:id', sampleRoutes.paybillCtrl); // pay the bill of order


//************************************************************Order Products*********************************************************************************************** */

//************************************************************Payments*********************************************************************************************** */
router.get('/getpaymentdetails', sampleRoutes.getpaymentdetailsCtrl); // get the payment details

router.post('/postbilldetailsData', sampleRoutes.postbilldetailsDataCtrl); //post bills details


//************************************************************Payments*********************************************************************************************** */
module.exports = router;

