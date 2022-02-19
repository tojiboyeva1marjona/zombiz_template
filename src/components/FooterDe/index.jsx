import React from 'react'
import './index.css'
import img1 from '../../assets/images/logo/logo.png'

const Footer = () => {
  return (
    <>
        <section class="hm-footer">
			<div class="container">
				<div class="hm-footer-details">
					<div class="row">
						<div class="col-md-4 col-sm-6 col-xs-12">
							<div class="hm-footer-widget">
								<div class="hm-foot-title ">
									<div class="logo">
										<a href="index.html">
											<img src={img1} alt="logo" />
										</a>
									</div>
								</div>
								<div class="hm-foot-para">
									<p>
										Lorem ipsum dolor sit amt conetur adcing elit. Sed do eiusod tempor utslr. Ut laboris nisi ut aute irure dolor in rein velit esse.
									</p>
								</div>
								<div class="hm-foot-icon">
									<ul>
										<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class=" col-md-2 col-sm-6 col-xs-12">
							<div class="hm-footer-widget">
								<div class="hm-foot-title">
									<h4>Useful Links</h4>
								</div>
								<div class="footer-menu ">	  
									<ul class="">
										<li><a href="index.html" >Home</a></li>
										<li><a href="about.html">About</a></li>
										<li><a href="services.html">Service</a></li>
										<li><a href="portfolio.html">Portfolio</a></li>
										<li><a href="blog.html">Blog</a></li>
										<li><a href="contact.html">Contact us</a></li> 
									</ul>
								</div>
							</div>
						</div>
						<div class=" col-md-3 col-sm-6 col-xs-12">
							<div class="hm-footer-widget">
								<div class="hm-foot-title">
									<h4>from the news</h4>
								</div>
								<div class="hm-para-news">
									<a href="blog_single.html">
										The Pros and Cons of Starting an Online Business.
									</a>
									<span>12th June 2017</span>
								</div>
								<div class="footer-line">
									<div class="border-bottom"></div>
								</div>
								<div class="hm-para-news">
									<a href="blog_single.html">
										The Pros and Cons of Starting an Online Business.
									</a>
									<span>12th June 2017</span>
								</div>
							</div>
						</div>
						<div class=" col-md-3 col-sm-6  col-xs-12">
							<div class="hm-footer-widget">
								<div class="hm-foot-title">
									<h4> Our Newsletter</h4>
								</div>
								<div class="hm-foot-para">
									<p class="para-news">
										Subscribe to our newsletter to get the latest News and offers..
									</p>
								</div>
								<div class="hm-foot-email">
									<div class="foot-email-box">
										<input style={{width:150, height:25}} type="text" class="form-control" placeholder="Email Address"></input>
									</div>
									<div class="foot-email-subscribe">
										<button type="button" >go</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
    </>
  )
}

export default Footer