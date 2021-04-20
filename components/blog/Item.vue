<template>
  <div class="col-md-6">
    <article class="blog">
        <figure>
            <NuxtLink :to="{ name: 'blog-id', params: { id: 4 } }"><img :src="require('~/assets/img/blog-22.jpg')" alt="">
                <div class="preview"><span>Read more</span></div>
            </NuxtLink>
        </figure>
        <div class="post_info">
            <small>Category - 20 Nov. 2017</small>
            <h2><NuxtLink :to="{ name: 'blog-id', params: { id: 4 } }">At usu sale dolorum offendit</NuxtLink></h2>
            <p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
            <ul>
                <li>
                    <div class="thumb"><img :src="require('~/assets/img/avatar.jpg')" alt=""></div> Admin
                </li>
                <li><i class="icon_comment_alt"></i>20</li>
            </ul>
        </div>
    </article>
    <!-- /col -->
</div>
<!-- /article -->
</template>

<script>
export default {

}
</script>

<style>

</style>