<template>
    <div>
        <div class="animate__animated animate__fadeIn">
            <BlogHeader />
            <main class="bg_gray">
                <div id="error_page">
                    <div class="container">
                        <div class="row justify-content-center text-center">
                            <div class="col-xl-7 col-lg-9">
                                <figure><img :src="require(`~/assets/img/404.svg`)" alt="" class="img-fluid" width="550" height="234"></figure>
                                <p>We're sorry, but the page you were looking for doesn't exist.</p>
                                <form method="post" action="grid-listing-filterscol.html">
                                        <div class="row no-gutters">
                                            <div class="col-lg-4 offset-lg-4">
                                                <NuxtLink to="/" class="btn_1 gradient" type="submit">Go Home</NuxtLink>
                                            </div>
                                        </div>
                                        <!-- /row -->
                                    </form>
                            </div>
                        </div>
                        <!-- /row -->
                    </div>
                    <!-- /container -->
                </div>
                <!-- /error -->		
            </main>
            <!-- /main -->
            <Footer />
            <Addons />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>