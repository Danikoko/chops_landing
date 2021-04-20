<template>
  <div>
      <div id="toTop"></div><!-- Back to top button -->
        
    <!-- Sign In Modal -->
    <div id="sign-in-dialog" class="zoom-anim-dialog mfp-hide">
        <div class="modal_header">
            <h3>Sign In</h3>
        </div>
        <form>
            <div class="sign-in-wrapper">
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" name="email" id="email">
                    <i class="icon_mail_alt"></i>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" name="password" id="password" value="">
                    <i class="icon_lock_alt"></i>
                </div>
                <div class="clearfix add_bottom_15">
                    <div class="checkboxes float-left">
                        <label class="container_check">Remember me
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="float-right"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
                </div>
                <div class="text-center">
                    <input type="submit" value="Log In" class="btn_1 full-width mb_5">
                    Don’t have an account? <a class="make-normal" @click="close_modal_sign_up()">Sign up</a>
                </div>
                <div id="forgot_pw">
                    <div class="form-group">
                        <label>Please confirm login email below</label>
                        <input type="email" class="form-control" name="email_forgot" id="email_forgot">
                        <i class="icon_mail_alt"></i>
                    </div>
                    <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
                    <div class="text-center"><input type="submit" value="Reset Password" class="btn_1"></div>
                </div>
            </div>
        </form>
        <!--form -->
    </div>
    <!-- /Sign In Modal -->
  </div>
</template>

<script>
export default {
    methods: {
        close_modal_sign_up() {
            $('.mfp-close').click();
            this.$router.push('/register');
        }
    }
}
</script>

<style scoped>
    .make-normal {
        color: #1b5103 !important;
        cursor: pointer;
    }
    .make-normal:hover {
        color: #0b9c1d !important;
    }
</style>