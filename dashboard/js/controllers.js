angular.module('adminbag')

    .controller('loginCtrl', function ($http, $scope, $rootScope, $state) {
        $scope.getLoggedIn = function (a) {
            $http.get('http://localhost:7878/nodeapp/getlogindata/')
                .success(function (resdata, status) {
                    $scope.login_details = resdata.data[0];
                    //console.log( $scope.login_details);
                    if (a.username == $scope.login_details.username && a.password == $scope.login_details.password) {
                        $state.go('dashboard');
                    }
                    else {
                        alert('Invalid Credentials');
                    }
                })
            // var user_data = {
            //     "usr_name": $scope.username,
            //     "password": $scope.password,
            // }
            // if (user_data.usr_name == 'rotary' && user_data.password == 'rotary@123') {
            //     $state.go('dashboard');
            // } else if (user_data.usr_name == 'amvt' && user_data.password == 'amvt@123') {
            //     $state.go('dashboard');
            // } else {

            // }
        }

        $scope.updatepassword = function (data) {
            //console.log(data.update_password);
            $http.post('http://localhost:7878/nodeapp/updatepassword', data)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert('success..');
                        location.reload();

                    } else {
                        alert('failed..');
                        location.reload();

                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })


        }

        $scope.showerror = false;
        $scope.showdata = function () {
            if ($scope.showerror == false) {
                $scope.showerror = true;
            }
        }
    })
    .controller('MainCtrl', function ($http, $scope, $state, $filter, $rootScope) {
        var club_id = localStorage.getItem("club_id");
        ////console.log(club_id);
        if (club_id == null) {
            club_id = 0;
        }
        if (club_id) {
            $rootScope.checkusr = true;
            ////console.log($rootScope.checkusr)
        } else {
            $rootScope.checkusr = false;
            ////console.log($rootScope.checkusr)
        }

        $scope.logout = function () {
            ////console.log("fdfdfsdf");
            localStorage.removeItem('club_id');
            $state.go('login')

        }
    })



    //*******************************************************Customer registertion**********************************************************************************************/
    .controller('customerCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {

        $scope.showcustomerData = false;
        $scope.CloseIsVisible = false;
        $scope.AddIsVisible = true;
        $scope.showdata = function () {
            if ($scope.showcustomerData == false) {
                $scope.showcustomerData = true;
                $scope.CloseIsVisible = true;
                $scope.AddIsVisible = false;
            } else {
                $scope.showcustomerData = false;
                $scope.AddIsVisible = true;
                $scope.CloseIsVisible = false;
            }
        }

        // to check the length of customer phone number
        $scope.count_of_phnnum = function (num) {
            $scope.phnnum = String(num);
            if ($scope.phnnum.length > 10) {
                alert('Number will be only of 10 Digits');
                $scope.a.customer_phn_num = Number({});
            }
        }


        $scope.submitcustomerdata = function (a) {
            $http.get('http://localhost:7878/nodeapp/getcustomerphnnum/' + a.customer_phn_num)
                .success(function (resdata, status) {
                    $scope.count_data = resdata.data[0].count;
                    if ($scope.count_data == 0) {
                        $http.post('http://localhost:7878/nodeapp/postcustomerData', a)
                            .success(function (resdata, status) {
                                if (resdata.status == 200) {
                                    alert('success..');
                                    $scope.a = {};
                                    $scope.getcustomerdetails();
                                } else {
                                    alert('failed..')
                                    $scope.a = {};
                                    $scope.getcustomerdetails();
                                }
                            })
                            .error(function (data, status, headers, config) {
                                if (status == 500) { }
                            })
                    }
                    else {
                        alert('Mobile Number already Exists')
                    }

                })
        }


        //report start
        $scope.getcustomerdetails = function () {
            $http.get('http://localhost:7878/nodeapp/getcustomerData/')
                .success(function (resdata, status) {
                    $scope.abutd = resdata.data;
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

        }
        $scope.getcustomerdetails();

        //report end

        // Edit the customer details
        $scope.Editprsntdt = function (a) {
            $scope.updated_arr = a;
            $scope.updated_arr.customer_phn_num = Number(a.customer_phn_num)
        }

        //update the customer data
        $scope.updatecustomerdata = function (updata) {
            $http.post('http://localhost:7878/nodeapp/updatecustomerdata', updata)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert('success..');
                        $scope.updated_arr = {};
                        $scope.getcustomerdetails();

                    } else {
                        alert('failed..')
                        $scope.updated_arr = {};
                        $scope.getcustomerdetails();

                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

        }


        // delete the customer details
        $scope.deleteprsntdt = function (id) {
            //console.log(id);
            $http.get('http://localhost:7878/nodeapp/deletecustomerData/' + id)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert('Deleted Sucessfully');
                        $scope.getcustomerdetails();
                    }
                    else {
                        alert('Unsuccess Deletion');

                    }

                })
                .error(function (data, status, headers, config) {

                })

        }

        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)

            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end

    })

    //***************************************************************Customer registertion**********************************************************************************************/


    //***************************************************************Order Products**********************************************************************************************/


    .controller('orderproductsCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {
        $scope.showcustomerData = false;
        $scope.CloseIsVisible = false;
        $scope.AddIsVisible = true;
        $scope.showdata = function () {
            if ($scope.showcustomerData == false) {
                $scope.showcustomerData = true;
                $scope.CloseIsVisible = true;
                $scope.AddIsVisible = false;
            } else {
                $scope.showcustomerData = false;
                $scope.AddIsVisible = true;
                $scope.CloseIsVisible = false;
            }
        }

        // get the customer names
        $http.get('http://localhost:7878/nodeapp/getCustomername/')
            .success(function (resdata, status) {
                $scope.customer_arr = resdata.data;
                //console.log($scope.customer_arr);
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })



        //get the customer phone number and address
        $scope.getphnandaddress = function (id) {
            $http.get('http://localhost:7878/nodeapp/getCustomerphnaddress/' + id)
                .success(function (resdata, status) {
                    $scope.a.customer_phn_num = Number(resdata.data[0].customer_phn_num);
                    $scope.a.customer_address = resdata.data[0].customer_address;
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }

        //get the category names
        $http.get('http://localhost:7878/nodeapp/getCategoryname/')
            .success(function (resdata, status) {
                $scope.category_arr = resdata.data;
                //console.log($scope.category_arr);

            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })

        // get the items names
        $scope.getitems = function (id) {

            $http.get('http://localhost:7878/nodeapp/getitemsname/' + id)
                .success(function (resdata, status) {
                    $scope.items_arr = resdata.data;
                    //console.log($scope.items_arr); 

                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

        }

        // get the cost of items
        $scope.getcost = function (id) {
            //console.log(id);
            $http.get('http://localhost:7878/nodeapp/getitemscost/' + id)
                .success(function (resdata, status) {

                    $scope.a.cost = resdata.data[0].cost * $scope.a.quantity;
                    // var array = [];
                    // $scope.a.cost = 0;
                    // for(var i =0;i<id.length;i++){

                    //     $scope.a.cost =  $scope.a.cost + resdata.data[i].cost * 1;
                    //     array.push( $scope.a.cost)
                    // }
                    //console.log($scope.a.cost);
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }

        $(".js-example-placeholder-single").select2({
            placeholder: "Search Your Name",
            allowClear: true
        });


        // post the order details
        $scope.submitorderdata = function (a) {
            $http.post('http://localhost:7878/nodeapp/postorderdetailsData', a)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert('sucess..');
                        $scope.a = {};
                        $scope.getorderdetails();
                    } else {
                        alert('failed..')
                        $scope.a = {};
                        $scope.getorderdetails();
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

        }


        //get the order details
        $scope.getorderdetails = function () {
            $http.get('http://localhost:7878/nodeapp/getorderdetails/')
                .success(function (resdata, status) {
                    $scope.orderdetails_arr = resdata.data;
                    //console.log($scope.orderdetails_arr);

                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        $scope.getorderdetails();


        // delete the order details
        $scope.cancelorder = function (id) {
            //console.log(id);
            $http.get('http://localhost:7878/nodeapp/deleteordersData/' + id)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert('Deleted Sucessfully');
                        $scope.getorderdetails();

                    }
                    else {
                        alert('Unsuccess Deletion');

                    }

                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

        }


        // pay the bill 
        $scope.payed = function (id) {
            //console.log(id);
            $http.get('http://localhost:7878/nodeapp/paybill/' + id)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert('Pay in Payment Section');


                    }
                    else {
                        alert('Please Contact admin there is trouble');

                    }

                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

        }







        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)

            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end

    })






    //***************************************************************order products**********************************************************************************************



    //***************************************************************payments**********************************************************************************************

    .controller('paymentCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {


        // get the payment data
        $http.get('http://localhost:7878/nodeapp/getpaymentdetails/')
            .success(function (resdata, status) {
                //console.log(resdata.data);
                $scope.abutd = resdata.data;

            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })

        // got the item details
        $scope.viewdetails = function () {
            $scope.updated_arr = $scope.abutd;
            $scope.updated_arr.Sub_category = $scope.updated_arr[0].Sub_category;
            $scope.updated_arr.item_name = $scope.updated_arr[0].Item_Name;
            $scope.updated_arr.quantity = Number($scope.updated_arr[0].quantity);
            $scope.updated_arr.Cost = $scope.updated_arr[0].cost;
        }

        // get bill details
        $scope.paybill = function () {
            $scope.updated_arr = $scope.abutd;
            //console.log($scope.updated_arr);
            $scope.updated_arr.customer_name = $scope.updated_arr[0].customer_name;
            $scope.updated_arr.customer_phnnum = $scope.updated_arr[0].customer_phn_num;
            $scope.updated_arr.customer_address = $scope.updated_arr[0].customer_address;
            $scope.updated_arr.order_number = $scope.updated_arr[0].customer_phn_num.slice(0, 5);
            $scope.updated_arr.category = $scope.updated_arr[0].Sub_category;
            $scope.updated_arr.item_name = $scope.updated_arr[0].Item_Name;
            $scope.updated_arr.quantity = Number($scope.updated_arr[0].quantity);
            $scope.updated_arr.amount = $scope.updated_arr[0].cost;

        }

        //customer_phn_num
        //         amount: "84000"
        // card_number: "143434"
        // category: "single_door_refrigerators"
        // customer_address: "Bangalore"
        // customer_name: "swethaa"
        // customer_phnnum: "8179309242"
        // cvv_number: "33"
        // expiry_month: 13
        // expiry_year: 13
        // item_name: "Havells 3 Blade 400 mm White Table Fan"
        // order_number: "81793"
        // quantity:
        //post the bil data
        $scope.postbilldata = function (data) {
            console.log(data);
            var data1 = {
                'customer_name': data.customer_name,
                'customer_phnnum': data.customer_phnnum,
                'customer_address': data.customer_address,
                'order_number': data.order_number,
                'category': data.category,
                'item_name': data.item_name,
                'quantity': data.quantity,
                'amount': data.amount,
                'card_number': data.card_number,
                'expiry_month': data.expiry_month,
                'expiry_year': data.expiry_year,
                'cvv_number': data.cvv_number
            }
            console.log(data1);
            $http.post('http://localhost:7878/nodeapp/postbilldetailsData', data1)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert('sucess..');
                        $scope.data = {};
                        location.reload();


                    } else {
                        alert('failed..')
                        $scope.data = {};
                        location.reload();
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }


        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)

            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end


    })












//***************************************************************payments**********************************************************************************************