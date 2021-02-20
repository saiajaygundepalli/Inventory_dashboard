function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/login");
    $ocLazyLoadProvider.config({
        debug: false
    });
    $stateProvider
       
        .state('forgotpassword', {
            url: "/forgotpassword",
            templateUrl: "views/Amvt/forgotpassword.html",
            data: {
                pageTitle: 'forgotpassword',
                specialClass: 'page-header-fixed'
            }
        })
// rotary club dashboard start
.state('dashboard', {
    url: "/dashboard",
    templateUrl: "views/Amvt/dashboard.html",
    data: {
        pageTitle: 'dashboard',
        specialClass: 'page-header-fixed'
    }
})

//customer state start
.state('customer', {
    url: "/Customer",
    templateUrl: "views/Amvt/customer.html",
    data: {
        pageTitle: 'Customer Registration',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})
//customer state end



//Order Products state start
.state('orderproducts', {
    url: "/OrderProducts",
    templateUrl: "views/Amvt/orderproducts.html",
    data: {
        pageTitle: 'Order Products',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})
//Order Products state end

//payments start

.state('payments', {
    url: "/Payments",
    templateUrl: "views/Amvt/payments.html",
    data: {
        pageTitle: 'Payments',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})

//payment ends


.state('login', {
    url: "/login",
    templateUrl: "views/Amvt/login.html",
    data: {
        pageTitle: 'login',
        specialClass: 'header-none sidebar-none footer-none green-bg  login'
    }
})


        


}
angular
    .module('adminbag')
    .config(config)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });