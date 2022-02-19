import React from 'react'
import './index.css'
import img1 from '../../assets/images/blog/bl1.jpg'
import img2 from '../../assets/images/blog/bl2.jpg'
import img3 from '../../assets/images/blog/bl3.jpg'

const New = () => {
  return (
    <div>
        <section  class="news">
			<div class="container">
				<div class="news-details">
					<div class="section-header text-center">
						<h2>our latest news</h2>
						<p>
							Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						</p>
					</div>
					<div class="news-card news-card-pb-25">
							<div class="row">
								<div class="col-md-4 col-sm-6">
									<div class="single-news-box">
										<div class="news-box-bg">
											<img src={img1} alt="blog image"></img>
											<div class="isotope-overlay">
												<a href="blog_single.html">
													<span class="lnr lnr-link"></span>
													
												</a>
											</div>

										</div>
										<div class="news-box-inner">
											<h3>
												<a href="blog_single.html">
													The Pros and Cons of Starting an Online Consulting Business
												</a>
											</h3>
											<p class="news-meta">
												Posted By:  <span>Mick Steven</span>  //  On <span>12th June, 2017</span>
											</p>
											{/* <!-- <a href="#" class="learn-btn">
												learn more
											</a> --> */}
										</div>
									</div>
								</div>
								<div class="col-md-4 col-sm-6">
									<div class="single-news-box">
										<div class="news-box-bg">
											<img src={img2} alt="blog image"></img>
											<div class="isotope-overlay">
												<a href="blog_single.html">
													<span class="lnr lnr-link"></span>
													
												</a>
											</div>

										</div>
										<div class="news-box-inner">
											<h3>
												<a href="blog_single.html">
													8 Secrets for Your successful Business Mentor Won't Tell You
												</a>
											</h3>
											<p class="news-meta">
												Posted By:  <span>Mick Steven</span>  //  On <span>12th June, 2017</span>
											</p>
											 <a href="#" class="learn-btn">
												learn more
											</a> 
										</div>
									</div>
								</div>
								<div class="col-md-4 col-sm-6">
									<div class="single-news-box">
										<div class="news-box-bg">
											<img src={img3} alt="blog image"></img>
											<div class="isotope-overlay">
												<a href="blog_single.html">
													<span class="lnr lnr-link"></span>
													
												</a>
											</div>

										</div>
										<div class="news-box-inner">
											<h3>
												<a href="blog_single.html">
													Hire a Branding Consultant With a Similar Aesthetic to Your Own
												</a>
											</h3>
											<p class="news-meta">
												Posted By:  <span>Mick Steven</span>  //  On <span>12th June, 2017</span>
											</p>
										 <a href="#" class="learn-btn">
												learn more
											</a> 
										</div>
									</div>
								</div>
							</div>
							<div class="project-btn text-center">
								<a href="blog.html"  class="project-view">read more
								</a>
							</div>
					</div>
					
				</div>
			</div>

		</section>
    </div>
  )
}

export default New