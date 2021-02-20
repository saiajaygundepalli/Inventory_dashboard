
var sqldb = require('../config/dbconnect');
var dbutil = require(appRoot + '/utils/dbutils');
var moment = require('moment');

//***************************************************************************login***********************************************************************************************/

exports.getlogindataMdl = function (callback) {
  var cntxtDtls = "in getlogindataMdl";
  var QRY_TO_EXEC = `select * from login`;
  //console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.updatepasswordMdl = function (data, callback) {
  var cntxtDtls = "in updatepasswordMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `update  login set password = '${data.update_password}'`;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
//***************************************************************************login***********************************************************************************************/


//***************************************************************************Customer Registration*********************************************************************************/


exports.postcustomerDataMdl = function (data ,callback) {
  var cntxtDtls = "in postcustomerDataMdl";
  var QRY_TO_EXEC = `insert into customer_registration (customer_name,customer_phn_num,customer_email,customer_address) values ('${data.customer_name}','${data.customer_phn_num}','${data.customer_email}','${data.customer_address}')`;
  //console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.getcustomerphnnumMdl = function (phnnum, callback) {
  var cntxtDtls = "in getcustomerphnnumMdl";
  var QRY_TO_EXEC = `select count(id) as count from customer_registration where customer_phn_num ='${phnnum}' `;
  //console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.getcustomerDataMdl = function (callback) {
  var cntxtDtls = "in getcustomerDataMdl";
  var QRY_TO_EXEC = `select * from customer_registration where d_in = '0' order by id desc;`;
   //console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.updatecustomerdataMdl = function (data, callback) {
  var cntxtDtls = "in updatecustomerdataMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `update  customer_registration set customer_name='${data.customer_name}', customer_phn_num='${data.customer_phn_num}', customer_email='${data.customer_email}',customer_address='${data.customer_address}'where id = '${data.id}'`;
  //console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.deletecustomerDataMdl = function (id, callback) {
  var cntxtDtls = "in deletecustomerDataMdl";
  var QRY_TO_EXEC = `update customer_registration set d_in ='1' where id = '${id}'`;

  //console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

//***************************************************************************Customer Registration*********************************************************************************/


//***************************************************************************Order Products*****************************************************************************************/

exports.getCustomernameMdl = function (callback) {
  var cntxtDtls = "in getCustomernameMdl";
  var QRY_TO_EXEC = `select  * from customer_registration where d_in = '0' order by id desc;`;
   //console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.getCustomerphnaddressMdl = function (id, callback) {
  var cntxtDtls = "in getCustomerphnaddressMdl";
  var QRY_TO_EXEC = `select customer_phn_num , customer_address from customer_registration where id ='${id}'`;
  //console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.getCategorynameMdl = function (callback) {
  var cntxtDtls = "in getCategorynameMdl";
  var QRY_TO_EXEC = `select * from sub_category ;`;
  //console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.getitemsnameMdl = function (id, callback) {
  var cntxtDtls = "in getitemsnameMdl";
  var QRY_TO_EXEC = `select * from add_items where Sub_category = '${id}'`;
  //console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.getitemscostMdl = function (id, callback) {
  
  var cntxtDtls = "in getitemscostMdl";
  var QRY_TO_EXEC = `select cost from add_items where  id = '${id}'`;
  //console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.postorderdetailsDataMdl = function (data ,callback) {
  var cntxtDtls = "in postorderdetailsDataMdl";
  var date = moment().format("YYYY-MM-DD");
  var QRY_TO_EXEC = `insert into order_details (customer_name,customer_phn_num,customer_address,date,category,item_name,quantity,cost) values ('${data.customer_name}','${data.customer_phn_num}','${data.customer_address}','${date}','${data.category}','${data.item_name}','${data.quantity}','${data.cost}')`;
  //console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.getorderdetailsMdl = function (callback) {
  var cntxtDtls = "in getorderdetailsMdl";
  var QRY_TO_EXEC = `select od.*,c.customer_name,s.Sub_category, a.Item_Name from order_details as od  
  join customer_registration as c on c.id = od.customer_name
  join sub_category as s on s.id = od.category 
  join add_items as a on a.id = od.item_name
  where od.d_in= '0'
  order by od.id desc ;`;
  //console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.deleteordersDataMdl = function (id, callback) {
  var cntxtDtls = "in deleteordersDataMdl";
  var QRY_TO_EXEC = `update order_details set d_in ='1' where id = '${id}'`;

  //console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.paybillMdl = function (id, callback) {
  var cntxtDtls = "in paybillMdl";
  var QRY_TO_EXEC = `update order_details set pay_ind ='1' where id = '${id}'`;

  console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


//***************************************************************************Order Products*****************************************************************************************/

//************************************************************Payments*******************************************************************************************************/

exports.getpaymentdetailsCtrl = function ( callback) {
  var cntxtDtls = "in getpaymentdetailsCtrl";
  //var QRY_TO_EXEC = `select * from  order_details where pay_ind ='1' `;
  var QRY_TO_EXEC = `select od.*,c.customer_name,s.Sub_category, a.Item_Name from order_details as od  
  join customer_registration as c on c.id = od.customer_name
  join sub_category as s on s.id = od.category 
  join add_items as a on a.id = od.item_name
  where od.pay_ind= '1'`;
  //console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.postbilldetailsDataMdl = function (data ,callback) {
  //console.log(data);
  var cntxtDtls = "in postbilldetailsDataMdl";
  var date = moment().format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `insert into payment_details (customer_name,customer_phnnum,customer_address,order_number,category,item_name,quantity,amount,card_number,expiry_month,expiry_year,cvv_number,i_ts) 
  values ('${data.customer_name}','${data. customer_phnnum}','${data.customer_address}','${data.order_number}','${data.category}','${data.item_name}','${data.quantity}','${data.amount}','${data.card_number}','${data.expiry_month}','${data.expiry_year}','${data.cvv_number}','${date}')`;
  //console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.updateorderstatusMdl = function (id, callback) {
  console.log(id)
  var cntxtDtls = "in updateorderstatusMdl";
  var QRY_TO_EXEC = `update order_details set 	order_status ='1' where customer_phn_num = '${id.customer_phnnum}'`;

  //console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


//************************************************************Payments*******************************************************************************************************/