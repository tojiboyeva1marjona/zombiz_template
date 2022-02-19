import React from 'react'
import img from '../../assets/images/home/consultency.png'
import img1 from '../../assets/images/home/busisness_grow.png'
import iim from '../../assets/images/home/support-logo.png'

import './index.css'

const We = () => {
  return (
    <div>
        <section  class="we-do">
			<div class="container">
				<div class="we-do-details">
					<div class="section-header text-center">
						<h2>what we do</h2>
						<p>
							Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						</p>
					</div>
					<div class="we-do-carousel">
						<div class="row">
							<div class="col-sm-4 col-xs-12">
								<div class="single-we-do-box text-center">
									<div class="we-do-description">
										<div class="we-do-info">
											<div class="we-do-img">
												<img src={img} alt="image of consultency" />
											</div>
											<div class="we-do-topics">
												<h2>
													<a href="#">
														Business Consultancy
													</a>
												</h2>
											</div>
										</div>
										<div class="we-do-comment">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ul.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-4 col-xs-12">
								<div class="single-we-do-box text-center">
									<div class="we-do-description">
										<div class="we-do-info">
											<div class="we-do-img">
												<img src={img1} alt="image of business" />
											</div>
											<div class="we-do-topics">
												<h2>
													<a href="#">
														help to grow Business
													</a>
												</h2>
											</div>
										</div>
										<div class="we-do-comment">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ul.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-4 col-xs-12">
								<div class="single-we-do-box text-center">
									<div class="we-do-description">
										<div class="we-do-info">
											<div class="we-do-img">
												<img src={iim} alt="image of support" />
											</div>
											<div class="we-do-topics">
												<h2>
													<a href="#">
														great support
													</a>

												</h2>
											</div>
										</div>
										<div class="we-do-comment">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ul.
											</p>
										</div>
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

export default We