<template>
    <div>
        <header class="main-header">
            <!-- Logo -->
            <a href="#" class="logo" style="background-color: #ffffff; text-align: center;">
                <!-- mini logo for sidebar mini 50x50 pixels -->
                <b class="logo-mini">
                    <span class="light-logo"><img src="@/assets/theme/images/logo_navbar.png" alt="logo" style=""></span>
                </b>
            </a>
            <!-- Header Navbar: style can be found in header.less -->
            <nav class="navbar navbar-static-top" style="background-color: #fff;">
                <!-- Sidebar toggle button-->
                <div style="display: inline-flex;align-items: center;">
                    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button" style="color: #54bdc1;">
                        <span class="sr-only">Toggle navigation</span>
                    </a>
                    <p style="color: #9e6f4e;border-left: solid 1px #9e6f4e;border-right: solid 1px #9e6f4e;padding: 0px 10px;margin-top: 5px;margin-bottom: 5px;">
                        Test<br/>Cuemby
                    </p>
                </div>
                
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <li class="search-box">
                            <a class="nav-link hidden-sm-down" href="javascript:void(0)"><i class="mdi mdi-magnify"></i></a>
                            <form class="app-search" style="display: none;">
                                <input type="text" class="form-control" placeholder="Search &amp; enter"> <a class="srh-btn"><i class="ti-close"></i></a>
                            </form>
                        </li>
                        <li class="dropdown user user-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <img src="@/assets/theme/images/flag_es.png" class="" alt="">
                            </a>

                            <ul class="dropdown-menu scale-up">
                                <li class="pb-5" style="border-bottom: 0;">
                                    <a href="#"><img src="@/assets/theme/images/flag_es.png" class="" alt=""> Español</a>
                                </li>
                                <li class="" style="border-bottom: 0;">
                                    <a href="#"><img src="@/assets/theme/images/flag_us.png" class="" alt=""> Ingles</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown user user-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <img src="@/assets/theme/images/default.png" class="user-image rounded-circle" alt="User Image">
                            </a>

                            <ul class="dropdown-menu scale-up">
                                <!-- User image -->
                                <li class="user-header">
                                    <img src="@/assets/theme/images/default.png" class="float-left rounded-circle" alt="User Image">
                                    <p>
                                        <small class="mb-5">{{ name }}</small>
                                    </p>
                                </li>
                                <li class="user-body" style="border-bottom: 0;">
                                    <div class="row no-gutters">
                                        <div class="col-12 text-left">
                                            <a href="#"><i class="ion ion-person"></i> Profile</a>
                                        </div>
                                        <div role="separator" class="divider col-12"></div>
                                        <div class="col-12 text-left">
                                            <a href="#"><i class="fa fa-power-off"></i> Logout</a>
                                        </div>
                                    </div>
                                    <!-- /.row -->
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
</template>
<script>
export default {
    props: ['name'],
    methods: {
    }
}
</script>

