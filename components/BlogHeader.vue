<template>
  <header class="header_in clearfix">
        <div class="container">
            <div id="logo">
                <NuxtLink to="/">
                    <img :src="require(`~/assets/img/logo_sticky.png`)" width="70" height="41" alt="" class="logo_normal">
                </NuxtLink>
            </div>
            <div class="layer"></div><!-- Opacity Mask Menu Mobile -->
            <ul id="top_menu">
                <!-- <li><a href="#" class="btn_1 gradient pulse_bt"><i class="icon-food_icon_shop" style="position: relative; top: 2px;"></i> Partner with us</a></li> -->
                <li><a href="#sign-in-dialog" id="sign-in" class="login">Sign In</a></li>
                <li><a href="wishlist.html" class="wishlist_bt_top" title="Your wishlist">Your wishlist</a></li>
            </ul>
            <!-- /top_menu -->
            <a href="#" class="open_close">
                <i class="icon_menu"></i><span>Menu</span>
            </a>
           <nav class="main-menu mt-0">
                <div id="header_menu" class="py-4">
                    <a href="#" class="open_close">
                        <i class="icon_close"></i><span>Menu</span>
                    </a>
                    <NuxtLink to="/"><img :src="require(`~/assets/img/logo_sticky.png`)" width="70" height="41" alt=""></NuxtLink>
                </div>
                <ul>
                    <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                    <li><a href="#">Partner with us</a></li>
                    <!-- <li><a href="#" class="btn_1 gradient pulse_bt"><i class="icon-food_icon_shop" style="position: relative; top: 2px;"></i> Partner with us</a></li> -->
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.main-menu > ul > li > a:hover {
  color: #1b5103 !important;
}
</style>