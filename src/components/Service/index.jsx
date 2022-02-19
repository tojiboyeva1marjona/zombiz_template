import React from 'react'
import './index.css'
import img1 from '../../assets/images/service/service1.png'
import img2 from '../../assets/images/service/service2.png'
import img3 from '../../assets/images/service/service3.png'
import img4 from '../../assets/images/service/service4.png'
import img5 from '../../assets/images/service/service5.png'
import img6 from '../../assets/images/service/service6.png'

const Service = () => {
  return (
    <div>
        <section  class="service">
				<div class="container">
					<div class="service-details">
						<div class="section-header text-center">
							<h2>our services</h2>
							<p>
								Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
							</p>
						</div>
						<div class="service-content-one">
							<div class="row">
								<div class="col-sm-4 col-xs-12">
									<div class="service-single text-center">
										<div class="service-img">
											<img src={img1} alt="image of service" />
										</div>
										<div class="service-txt">
											<h2>
												<a href="#">busisness planning</a>
											</h2>
											<p>
												Lorem ipsum dolo dolor in  in voluptate velit esse cillum dolore. epteur sint oat cupidatat 
											</p>
											<a href="#" class="service-btn">
												learn more
											</a>
										</div>
									</div>
								</div>
								<div class="col-sm-4 col-xs-12">
									<div class="service-single text-center">
										<div class="service-img">
											<img src={img2} alt="image of service"></img>
										</div>
										<div class="service-txt">
											<h2>
												<a href="#">busisness consultency</a>
											</h2>
											<p>
												Lorem ipsum dolo dolor in  in voluptate velit esse cillum dolore. epteur sint oat cupidatat 
											</p>
											<a href="#" class="service-btn">
												learn more
											</a>
										</div>
									</div>
								</div>
								<div class="col-sm-4 col-xs-12">
									<div class="service-single text-center">
										<div class="service-img">
											<img src={img3} alt="image of service"></img>
										</div>
										<div class="service-txt">
											<h2>
												<a href="#">financial services</a>
											</h2>
											<p>
												Lorem ipsum dolo dolor in  in voluptate velit esse cillum dolore. epteur sint oat cupidatat 
											</p>
											<a href="#" class="service-btn">
												learn more
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="service-content-two">
							<div class="row">
								<div class="col-sm-4 col-xs-12">
									<div class="service-single text-center">
										<div class="service-img">
											<img src={img4} alt="image of service"></img>
										</div>
										<div class="service-txt">
											<h2>
												<a href="#">risk management</a>
											</h2>
											<p>
												Lorem ipsum dolo dolor in  in voluptate velit esse cillum dolore. epteur sint oat cupidatat 
											</p>
											<a href="#" class="service-btn">
												learn more
											</a>
										</div>
									</div>
								</div>
								<div class="col-sm-4 col-xs-12">
									<div class="service-single text-center">
										<div class="service-img">
											<img src={img5} alt="image of service"></img>
										</div>
										<div class="service-txt">
											<h2>
												<a href="#">expert advisers</a>
											</h2>
											<p>
												Lorem ipsum dolo dolor in  in voluptate velit esse cillum dolore. epteur sint oat cupidatat 
											</p>
											<a href="#" class="service-btn">
												learn more
											</a>
										</div>
									</div>
								</div>
								<div class="col-sm-4 col-xs-12">
									<div class="service-single text-center">
										<div class="service-img">
											<img src={img6} alt="image of service"></img>
										</div>
										<div class="service-txt">
											<h2>
												<a href="#">24/7 customer support</a>
											</h2>
											<p>
												Lorem ipsum dolo dolor in  in voluptate velit esse cillum dolore. epteur sint oat cupidatat 
											</p>
											<a href="#" class="service-btn">
												learn more
											</a>
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

export default Service