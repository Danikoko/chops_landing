<template>
  <div class="animate__animated animate__fadeIn">
    <Header />
    <main>
		<div class="page_header blog element_to_stick">
		    <div class="container">
		    	<div class="row">
		    		<div class="col-xl-8 col-lg-7 col-md-7 d-none d-md-block">
		    			<h1>Blog and Articles</h1>
		    		</div>
		    		<div class="col-xl-4 col-lg-5 col-md-5">
		    			<div class="search_bar_list">
						    <input type="text" class="form-control" placeholder="Dishes, restaurants or cuisines">
						    <button type="submit"><i class="icon_search"></i></button>
						</div>
		    		</div>
		    	</div>
		    	<!-- /row -->		       
		    </div>
		</div>
		<!-- /page_header -->

		<div class="container margin_60_20">			
			<div class="row">
				<div class="col-lg-12">
					<div class="singlepost">
                    </div>
                </div>
				<!-- /col -->

				<aside class="col-lg-3">
					<div class="widget">
						<div class="widget-title first">
							<h4>Latest Post</h4>
						</div>
						<ul class="comments-list">
							<BlogLatest v-for="n in 3" :key="n" />
						</ul>
					</div>
					<!-- /widget -->
					<div class="widget">
						<div class="widget-title">
							<h4>Categories</h4>
						</div>
						<ul class="cats">
							<BlogCategory v-for="category in categories" :key="category" :category="category" />
						</ul>
					</div>
					<!-- /widget -->
					<div class="widget">
						<div class="widget-title">
							<h4>Popular Tags</h4>
						</div>
						<div class="tags">
							<BlogTag class="mr-1" v-for="tag in tags" :key="tag" :tag="tag" />
						</div>
					</div>
					<!-- /widget -->
				</aside>
				<!-- /aside -->
			</div>
			<!-- /row -->	
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