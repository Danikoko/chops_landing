<template>
  <footer>
        <div class="wave footer"></div>
        <div class="container margin_60_40 fix_mobile">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <h3 data-target="#collapse_1">Legal</h3>
                    <div class="collapse dont-collapse-sm links" id="collapse_1">
                        <ul>
                            <li><a href="about.html">Terms Of Service</a></li>
                            <li><a href="submit-restaurant.html">Privacy Policy</a></li>
                            <li><a href="help.html">Attributions &amp; Disclaimers</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h3 data-target="#collapse_2">Company</h3>
                    <div class="collapse dont-collapse-sm links" id="collapse_2">
                        <ul>
                            <li><a href="grid-listing-filterscol.html">About Us</a></li>
                            <li><a href="grid-listing-filterscol-full-masonry.html">Careers</a></li>
                            <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                        <h3 data-target="#collapse_3">Contact</h3>
                    <div class="collapse dont-collapse-sm contacts" id="collapse_3">
                        <ul>
                            <li><i class="icon_chat_alt"></i><a href="#">Support</a></li>
                            <li><i class="icon_box-checked"></i><a href="#">Partner with us</a></li>
                            <li><i class="icon_mail_alt"></i><a href="#">support@chops.ng</a></li>
                            <li><i class="icon_mobile"></i>07012345678</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                        <h3 data-target="#collapse_4">Keep in touch</h3>
                    <div class="collapse dont-collapse-sm" id="collapse_4">
                        <div id="newsletter">
                            <div id="message-newsletter"></div>
                            <form method="post" action="assets/newsletter.php" name="newsletter_form" id="newsletter_form">
                                <div class="form-group">
                                    <input type="email" name="email_newsletter" id="email_newsletter" class="form-control" placeholder="Your email">
                                    <button type="submit" id="submit-newsletter"><i class="arrow_carrot-right"></i></button>
                                </div>
                            </form>
                        </div>
                        <div class="follow_us">
                            <h5>Follow Us</h5>
                            <ul>
                                <li><a href="https://twitter.com/Chopsdotng/" target="_blank"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" :data-src="require(`~/assets/img//twitter_icon.svg`)" alt="" class="lazy"></a></li>
                                <li><a href="https://www.facebook.com/chopsdotng" target="_blank"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" :data-src="require(`~/assets/img//facebook_icon.svg`)" alt="" class="lazy"></a></li>
                                <li><a href="https://www.instagram.com/chopsdotng_/" target="_blank"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" :data-src="require(`~/assets/img//instagram_icon.svg`)" alt="" class="lazy"></a></li>
                                <!-- <li><a href="#" target="_blank"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" :data-src="require(`~/assets/img//youtube_icon.svg`)" alt="" class="lazy"></a></li> -->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /row-->
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>