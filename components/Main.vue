<template>
  <main>
        <div class="hero_single jarallax" data-jarallax>
            <img class="jarallax-img" :src="require(`~/assets/img/home_section_1.jpg`)" alt="">
            <div class="opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.6)">
                <div class="container">
                    <div class="row justify-content-lg-start justify-content-md-center">
                        <div class="col-xl-7 col-lg-8">
                            <h1>Think Food. <br class="shutdown-lg" />Think Us.</h1>
                            <p>We have a huge database of restaurants and cuisines on chops for you.</p>
                            <form method="post" action="grid-listing-filterscol.html">
                                <div class="row no-gutters custom-search-input">
                                    <div class="col-lg-10">
                                        <!-- <div class="form-group">
                                            <input class="form-control no_border_r" type="text" id="autocomplete" placeholder="Address, neighborhood...">
                                        </div> -->
                                        <div class="form-group">
                                            <div class="custom_select clearfix">
                                                <select class="wide form-control" style="display: none;">
                                                    <option disabled value="">Your Location</option>
                                                    <option value="Abuja">Abuja</option>
                                                    <option value="Lagos">Lagos</option>
                                                    <option value="Enugu">Enugu</option>
                                                </select>
                                                <div style="height: 50px; border: none;" class="nice-select wide form-control" tabindex="0">
                                                    <span style="vertical-align: sub;" class="current">
                                                        Select your location to get started
                                                    </span>
                                                    <ul class="list">
                                                        <!-- <li data-value="" class="option selected focus">Your Location</li> -->
                                                        <li data-value="Abuja" class="option">Abuja</li>
                                                        <li data-value="Lagos" class="option">Lagos</li>
                                                        <li data-value="Enugu" class="option">Enugu</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2">
                                        <button class="btn_1 gradient" type="submit">Search</button>
                                    </div>
                                </div>
                                <!-- /row -->
                                <div class="search_trends white">
                                    <h5>Trending:</h5>
                                    <ul>
                                        <li><a href="#">Suya,</a></li>
                                        <li><a href="#">Burger,</a></li>
                                        <li><a href="#">Chinese,</a></li>
                                        <li><a href="#">Pizza</a></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- /row -->
                </div>
            </div>
            <div class="wave hero"></div>
        </div>
        <!-- /hero_single -->

        <div class="container margin_30_60">
            <div class="main_title center">
                <span><em></em></span>
                <h2>CHOPS</h2>
                <p>Think Food. Think Us.</p>
                <div class="banner lazy" :data-bg="'url(' + require(`~/assets/img/banner_bg_desktop.jpg`) + ')'">
                        <div class="wrapper d-flex align-items-center opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.3)">
                            <div>
                                <h3>We deliver your food to you... <br>Right where you are!</h3>
                                <p>
                                    Place orders on our wide variety of cuisines - <br />
                                    Local foods, International dishes, fast foods, <br />
                                    fruit shakes, ice cream, etc.
                                </p>
                                <a href="#!" class="btn_1 gradient">Start Now!</a>
                            </div>
                        </div>
                        <!-- /wrapper -->
                    </div>
            </div>
            <!-- /main_title -->
            
            <!-- <div class="owl-carousel owl-theme categories_carousel">
                <div class="item_version_2">
                    <a href="grid-listing-filterscol.html">
                        <figure>
                            <span>98</span>
                            <img :src="require(`~/assets/img/home_cat_placeholder.jpg`)" :data-src="require(`~/assets/img/home_cat_pizza.jpg`)" alt="" class="owl-lazy" width="350" height="450">
                            <div class="info">
                                <h3>Pizza</h3>
                                <small>Avg price $40</small>
                            </div>
                        </figure>
                    </a>
                </div>
                <div class="item_version_2">
                    <a href="grid-listing-filterscol.html">
                        <figure>
                            <span>87</span>
                            <img :src="require(`~/assets/img/home_cat_placeholder.jpg`)" :data-src="require(`~/assets/img/home_cat_sushi.jpg`)" alt="" class="owl-lazy" width="350" height="450">
                            <div class="info">
                                <h3>Japanese</h3>
                                <small>Avg price $50</small>
                            </div>
                        </figure>
                    </a>
                </div>
                <div class="item_version_2">
                    <a href="grid-listing-filterscol.html">
                        <figure>
                            <span>55</span>
                            <img :src="require(`~/assets/img/home_cat_placeholder.jpg`)" :data-src="require(`~/assets/img/home_cat_hamburgher.jpg`)" alt="" class="owl-lazy" width="350" height="450">
                            <div class="info">
                                <h3>Burghers</h3>
                                <small>Avg price $55</small>
                            </div>
                        </figure>
                    </a>
                </div>
                <div class="item_version_2">
                    <a href="grid-listing-filterscol.html">
                        <figure>
                            <span>55</span>
                            <img :src="require(`~/assets/img/home_cat_placeholder.jpg`)" :data-src="require(`~/assets/img/home_cat_vegetarian.jpg`)" alt="" class="owl-lazy" width="350" height="450">
                            <div class="info">
                                <h3>Vegetarian</h3>
                                <small>Avg price $40</small>
                            </div>
                        </figure>
                    </a>
                </div>
                <div class="item_version_2">
                    <a href="grid-listing-filterscol.html">
                        <figure>
                            <span>65</span>
                            <img :src="require(`~/assets/img/home_cat_placeholder.jpg`)" :data-src="require(`~/assets/img/home_cat_bakery.jpg`)" alt="" class="owl-lazy" width="350" height="450">
                            <div class="info">
                                <h3>Bakery</h3>
                                <small>Avg price $60</small>
                            </div>
                        </figure>
                    </a>
                </div>
                <div class="item_version_2">
                    <a href="grid-listing-filterscol.html">
                        <figure>
                            <span>25</span>
                            <img :src="require(`~/assets/img/home_cat_placeholder.jpg`)" :data-src="require(`~/assets/img/home_cat_chinesse.jpg`)" alt="" class="owl-lazy" width="350" height="450">
                            <div class="info">
                                <h3>Chinese</h3>
                                <small>Avg price $40</small>
                            </div>
                        </figure>
                    </a>
                </div>
                <div class="item_version_2">
                    <a href="grid-listing-filterscol.html">
                        <figure>
                            <span>35</span>
                            <img :src="require(`~/assets/img/home_cat_placeholder.jpg`)" :data-src="require(`~/assets/img/home_cat_mexican.jpg`)" alt="" class="owl-lazy" width="350" height="450">
                            <div class="info">
                                <h3>Mexican</h3>
                                <small>Avg price $35</small>
                            </div>
                        </figure>
                    </a>
                </div>
            </div> -->
            <!-- /carousel -->
        </div>
        <!-- /container -->

        <div style="background-color: #f9f9f9; background-image: linear-gradient(1deg, rgb(249, 249, 249) 0%, rgb(255 255 255 / 75%) 74%);" class="shape_element_2">
            <div class="container margin_60_0">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="box_how">
                                    <figure><img :src="require(`~/assets/img/lazy-placeholder-100-100-white.png`)" :data-src="require(`~/assets/img/how_1.svg`)" alt="" width="150" height="167" class="lazy"></figure>
                                    <h3>Place Order</h3>
                                    <p>Order your favorite meals/cuisines and pay comfortably.</p>
                                </div>
                                <div class="box_how">
                                    <figure><img :src="require(`~/assets/img/lazy-placeholder-100-100-white.png`)" :data-src="require(`~/assets/img/how_2.svg`)" alt="" width="130" height="145" class="lazy"></figure>
                                    <h3>We Deliver</h3>
                                    <p>We promptly process and get your meal to your location.</p>
                                </div>
                            </div>
                            <div class="col-lg-6 align-self-center">
                                <div class="box_how">
                                    <figure><img :src="require(`~/assets/img/lazy-placeholder-100-100-white.png`)" :data-src="require(`~/assets/img/how_3.svg`)" alt="" width="150" height="132" class="lazy"></figure>
                                    <h3>Enjoy Food</h3>
                                    <p>Voila! Enjoy your tasty meal delivered to you by Chops.</p>
                                </div>
                            </div>
                        </div>
                        <p class="text-center mt-3 d-block d-lg-none"><a href="#" class="btn_1 medium gradient pulse_bt mt-2">Register Now!</a></p>
                    </div>
                    <div class="col-lg-5 offset-lg-1 align-self-center add-sm-padding">
                        <div class="intro_txt">
                            <div class="main_title">
                                <span class="span-center"><em></em></span>
                                <h2 class="sm-center-it">Start Ordering Now</h2>
                            </div>
                            <p class="lead sm-center-it">Placing orders from our rich list of restaurants has never been easier. We have broken the process
                                into three (3) simple steps. Haba, you no suppose hungry where we dey! 😉</p>
                            <!-- <p><a href="#" class="btn_1 medium gradient pulse_bt mt-2">Register</a></p> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /shape_element_2 -->

        <div class="container margin_60_0">
            <div class="row justify-content-center">
                <div class="col-xl-9">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="box_info_1 pr-lg-3 sm-center-it">
                                <div class="wrapper_img">
                                    <figure><img :src="require('~/assets/img/submit_restaurant_home.jpg')" :data-src="require('~/assets/img/submit_restaurant_home.jpg')" alt="" class="img-fluid lazy loaded" data-was-processed="true"></figure><span></span>
                                </div>
                                <h3>Add Your Restaurant</h3>
                                <p>Join us to be a part of the restaurants and food vendors that work with Chops to meet the needs of more customers with emphasis on prompt deliveries.</p>
                                <a href="#!" class="btn_1 gradient">Partner with us</a>
                            </div>
                        </div>
                        <div class="col-md-6 ">
                            <div class="box_info_1 pl-lg-3 sm-center-it">
                                <div class="wrapper_img">
                                    <figure><img :src="require('~/assets/img/submit_rider_home.jpg')" :data-src="require('~/assets/img/submit_rider_home.jpg')" alt="" class="img-fluid lazy loaded" data-was-processed="true"></figure><span></span>
                                </div>
                                <h3>Become a Rider</h3>
                                <p>As a rider, you can earn tangible income working as a Chops rider, join the fleet to be a part of our vast partner network.</p>
                                <a href="#!" class="btn_1 gradient">Start with us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style="background-color: #ffffff; background-image: linear-gradient(1deg, #ffffff 0%, #f9f9f9 74%);">
            <div class="container margin_60_40">
                <!-- <div class="main_title">
                    <span><em></em></span>
                    <h2>Top Rated Restaurants</h2>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    <a href="#">View All &rarr;</a>
                </div> -->
                <div class="row add_bottom_25">
                    <div class="col-lg-7 shutdown-sm" :style="'/*background-image: url(' + require(`~/assets/img/app_show_display.png`) + ');*/'">
                        <div class="list_home">
                            <figure>
                                <img style="width: 100%" :src="require(`~/assets/img/app_show_display.png`)" :data-src="require(`~/assets/img/app_show_display.png`)" alt="" class="lazy">
                            </figure>
                        </div>
                    </div>
                    <div class="col-lg-4 offset-lg-1 align-self-center">
                        <div class="intro_txt">
                            <div class="main_title">
                                <span class="span-center">
                                    <em></em>
                                </span> 
                                <h2 class="sm-center-it">
                                    The Chops App
                                </h2>
                            </div> 
                            <p class="lead sm-center-it">
                                Download Chops app and start ordering your food. With Chops, you are guaranteed a satisfactory delivery experience.
                            </p>  
                            <p class="sm-center-it">
                                <a href="#" class="mt-2" target="_blank">
                                    <img style="" :src="require(`~/assets/img/app-store.jpg`)" :data-src="require(`~/assets/img/app-store.jpg`)" alt="" class="lazy img-reduce">
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.ije.ijechop" class="mt-2" target="_blank">
                                    <img style="" :src="require(`~/assets/img/google-play.jpg`)" :data-src="require(`~/assets/img/google-play.jpg`)" alt="" class="lazy img-reduce">
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- /row -->
            </div>
        </div>
        <!-- /bg_gray -->

    </main>
</template>

<script>
export default {

}
</script>

<style>

</style>