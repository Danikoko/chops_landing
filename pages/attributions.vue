<template>
  <div class="animate__animated animate__fadeIn">
    <BlogHeader />
    <main>
		
		<!-- /page_header -->

		<div class="container margin_30_20">			
			<div class="main_title center">
				<span><em></em></span>
				<h2>Attributions &amp; Disclaimers</h2>
				<!-- <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p> -->
			</div>

			<div class="row justify-content-center align-items-center add_bottom_15">
				<div class="col-lg-8 col-offset-lg-1">
					<div class="box_about">
						<!-- <h3 style="font-size: 150%;">Terms of Service</h3> -->
						<h3 class="text-center" style="font-size: 150%;">Media Credits</h3>
                        <p class="text-center justify-sm">All Logos and trademarks belong to their respectful owners
                        </p>
					</div>
				</div>
			</div>
		</div>
	<!-- /container -->
		
	</main>
    <Footer />
    <Addons />
  </div>
</template>

<script>
import axios from '@nuxtjs/axios'
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
	ol {
		padding-left: 15px;
	}
	@media (max-width: 991px) {
		.center-sm {
			text-align: center;
		}
		.justify-sm {
			text-align: justify !important;
			hyphens: auto;
		}
	}
</style>