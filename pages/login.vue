<template>
<div id="register_bg">
  <div id="register">
		<aside>
			<figure>
				<NuxtLink to="/"><img :src="require(`~/assets/img/logo_sticky.png`)" alt=""></NuxtLink>
			</figure>
			<form autocomplete="off">
				<div class="form-group">
					<input class="form-control" type="email" placeholder="Email">
					<i class="icon_mail_alt"></i>
				</div>
				<div class="form-group">
					<input class="form-control" type="password" id="password" placeholder="Password">
					<i class="icon_lock_alt"></i>
				</div>
				<div class="clearfix add_bottom_15">
					<div class="checkboxes float-left">
						<label class="container_check">Remember me
						  <input type="checkbox">
						  <span class="checkmark"></span>
						</label>
					</div>
					<div class="float-right"><a id="forgot" href="#">Forgot Password?</a></div>
				</div>
				<button class="btn_1 gradient full-width">Login Now!</button>
				<div class="text-center mt-2"><small>Don't have an acccount? <strong><NuxtLink to="/register">Sign Up</NuxtLink></strong></small></div>
			</form>
			<div class="copy">© 2020 Chops.ng</div>
		</aside>
	</div>
	<!-- /login -->
</div>
</template>

<script>
export default {
    mounted() {
        let common_join_js = document.createElement('script')
        common_join_js.setAttribute('src', `/js/common_join.js`)
        document.body.appendChild(common_join_js)

        let script3 = document.createElement('script')
        script3.setAttribute('src', `/js/validate.js`)
        document.body.appendChild(script3)

        let script4 = document.createElement('script')
        script4.setAttribute('src', `/js/jarallax.min.js`)
        document.body.appendChild(script4)

        let script5 = document.createElement('script')
        script5.setAttribute('src', `/js/jarallax-video.min.js`)
        document.body.appendChild(script5)

        let script6 = document.createElement('script')
        script6.setAttribute('src', `/js/pw_strenght.js`)
        document.body.appendChild(script6)

        function initMap() {
        var input = document.getElementById('autocomplete');
        var autocomplete = new google.maps.places.Autocomplete(input);

        autocomplete.addListener('place_changed', function() {
            var place = autocomplete.getPlace();
            if (!place.geometry) {
                window.alert("Autocomplete's returned place contains no geometry");
                return;
            }

            var address = '';
            if (place.address_components) {
                address = [
                    (place.address_components[0] && place.address_components[0].short_name || ''),
                    (place.address_components[1] && place.address_components[1].short_name || ''),
                    (place.address_components[2] && place.address_components[2].short_name || '')
                ].join(' ');
            }
        });
        }
    }
}
</script>

<style>

</style>