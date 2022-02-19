import React from 'react'
import './index.css'

const Contact = () => {
  return (
    <div>
        <section  class="contact">
			<div class="container">
				<div class="contact-details">
					<div class="section-header contact-head  text-center">
						<h2>contact us</h2>
						<p>
							Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						</p>
					</div>
					<div class="contact-content">
						<div class="row">
							<div class="col-sm-offset-1 col-sm-5">
								<div class="single-contact-box">
									<div class="contact-right">
										<div class="contact-adress">
											<div class="contact-office-address">
												<h3>contact info</h3>
												<p>
													125, Park street avenue, Brocklyn, Newyork.
												</p>
												<div class="contact-online-address">
													<div class="single-online-address">
														<i class="fa fa-phone"></i>
														+11253678958
													</div>
													
													<div class="single-online-address">
														<i class="fa fa-envelope-o"></i>
														<span>info@mail.com</span>
													</div>
												</div>
											</div>
											<div class="contact-office-address">
												<h3>social partner</h3>
												<div class="contact-icon">
													<ul>
														<li><a href="#"><i class="fa fa-facebook" aria-hidden="true">  </i></a></li>
														<li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
														<li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
														<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
													</ul>
												</div>
											</div>
											
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-5">
								<div class="single-contact-box">
									<div class="contact-form">
										<h3>Leave us a Massage Here</h3>
										<form>
											<div class="row">
												<div class="col-sm-6 col-xs-12">
													<div class="form-group">
													  <input type="text" class="form-control" id="firstname" placeholder="First Name" name="firstname"></input>
													</div>
												</div>
												<div class="col-sm-6 col-xs-12">
													<div class="form-group">
													  <input type="text" class="form-control" id="lastname" placeholder="Last Name" name="laststname"></input>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-sm-6 col-xs-12">
													<div class="form-group">
														<input type="email" class="form-control" id="email" placeholder="Email" name="email"></input>
													</div>
												</div>
												<div class="col-sm-6 col-xs-12">
													<div class="form-group">
														<input type="text" class="form-control" id="phone" placeholder="Phone" name="phone"></input>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-sm-12">
													<div class="form-group">
														<textarea class="form-control" rows="7" id="comment" placeholder="Message" ></textarea>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-sm-12">
													<div class="single-contact-btn pull-right">
														<button class="contact-btn" type="button">send message</button>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
    </div>
  )
}

export default Contact