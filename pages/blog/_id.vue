<template>
  <div class="animate__animated animate__fadeIn">
    <BlogHeader />
    <BlogPost />
    <Footer />
    <Addons />
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