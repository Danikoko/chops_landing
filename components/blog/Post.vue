<template>
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
				<div class="col-lg-9">
					<div class="singlepost">
						<figure><img alt="" class="img-fluid" :src="require(`~/assets/img/blog-single.jpg`)"></figure>
						<h1>Cooking best practices</h1>
						<div class="postmeta">
							<ul>
								<li><i class="icon_folder-alt"></i> Category</li>
								<li><i class="icon_calendar"></i> 23/12/2015</li>
								<li><i class="icon_pencil-edit"></i> Admin</li>
								<li><i class="icon_comment_alt"></i> (14) Comments</li>
							</ul>
						</div>
						<!-- /post meta -->
						<div class="post-content">
							<div class="dropcaps">
								<p>Aorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
							</div>

							<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
						</div>
						<!-- /post -->
					</div>
					<!-- /single-post -->

                    <div id="comments">
						<h5>Comments</h5>
						<ul>
							<li>
								<div class="avatar">
									<a href="#"><img :src="require(`~/assets/img/avatar1.jpg`)" alt="">
									</a>
								</div>
								<div class="comment_right clearfix">
									<div class="comment_info">
										By <a href="#">Anna Smith</a><span>|</span>25/10/2019<span>|</span><a href="#">Reply</a>
									</div>
									<p>
										Nam cursus tellus quis magna porta adipiscing. Donec et eros leo, non pellentesque arcu. Curabitur vitae mi enim, at vestibulum magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sit amet sem a urna rutrumeger fringilla. Nam vel enim ipsum, et congue ante.
									</p>
								</div>
								<ul class="replied-to">
									<li>
										<div class="avatar">
											<a href="#"><img :src="require(`~/assets/img/avatar4.jpg`)" alt="">
											</a>
										</div>
										<div class="comment_right clearfix">
											<div class="comment_info">
												By <a href="#">Anna Smith</a><span>|</span>25/10/2019<span>|</span><a href="#">Reply</a>
											</div>
											<p>
												Nam cursus tellus quis magna porta adipiscing. Donec et eros leo, non pellentesque arcu. Curabitur vitae mi enim, at vestibulum magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sit amet sem a urna rutrumeger fringilla. Nam vel enim ipsum, et congue ante.
											</p>
											<p>
												Aenean iaculis sodales dui, non hendrerit lorem rhoncus ut. Pellentesque ullamcorper venenatis elit idaipiscingi Duis tellus neque, tincidunt eget pulvinar sit amet, rutrum nec urna. Suspendisse pretium laoreet elit vel ultricies. Maecenas ullamcorper ultricies rhoncus. Aliquam erat volutpat.
											</p>
										</div>
										<ul class="replied-to">
											<li>
												<div class="avatar">
													<a href="#"><img :src="require(`~/assets/img/avatar6.jpg`)" alt="">
													</a>
												</div>
												<div class="comment_right clearfix">
													<div class="comment_info">
														By <a href="#">Anna Smith</a><span>|</span>25/10/2019<span>|</span><a href="#">Reply</a>
													</div>
													<p>
														Nam cursus tellus quis magna porta adipiscing. Donec et eros leo, non pellentesque arcu. Curabitur vitae mi enim, at vestibulum magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sit amet sem a urna rutrumeger fringilla. Nam vel enim ipsum, et congue ante.
													</p>
													<p>
														Aenean iaculis sodales dui, non hendrerit lorem rhoncus ut. Pellentesque ullamcorper venenatis elit idaipiscingi Duis tellus neque, tincidunt eget pulvinar sit amet, rutrum nec urna. Suspendisse pretium laoreet elit vel ultricies. Maecenas ullamcorper ultricies rhoncus. Aliquam erat volutpat.
													</p>
												</div>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<div class="avatar">
									<a href="#"><img :src="require(`~/assets/img/avatar1.jpg`)" alt="">
									</a>
								</div>

								<div class="comment_right clearfix">
									<div class="comment_info">
										By <a href="#">Anna Smith</a><span>|</span>25/10/2019<span>|</span><a href="#">Reply</a>
									</div>
									<p>
										Cursus tellus quis magna porta adipiscin
									</p>
								</div>
							</li>
						</ul>
					</div>

					<hr>

					<h5>Leave a comment</h5>
					<div class="row">
						<div class="col-md-4 col-sm-6">
							<div class="form-group">
								<input type="text" name="name" id="name2" class="form-control" placeholder="Name">
							</div>
						</div>
						<div class="col-md-4 col-sm-6">
							<div class="form-group">
								<input type="text" name="email" id="email2" class="form-control" placeholder="Email">
							</div>
						</div>
						<div class="col-md-4 col-sm-12">
							<div class="form-group">
								<input type="text" name="email" id="website3" class="form-control" placeholder="Website">
							</div>
						</div>
					</div>
					<div class="form-group">
						<textarea class="form-control" name="comments" id="comments2" rows="6" placeholder="Comment"></textarea>
					</div>
					<div class="form-group">
						<button type="submit" id="submit2" class="btn_1 add_bottom_15">Submit</button>
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
</template>

<script>
export default {
    data() {
        return {
            tags: ['Food', 'Bars', 'Cocktails', 'Shops', 'Best Offers', 'Transports', 'Restaurants'],
            categories: ['Food', 'Snacks', 'Cocktails', 'Wine'],
        }
    }
}
</script>

<style>

</style>