import React from 'react'
import './index.css'
import img1 from '../../assets/images/project/project1.jpg'
import img2 from '../../assets/images/project/project2.jpg'
import img3 from '../../assets/images/project/project3.jpg'
import img4 from '../../assets/images/project/project4.jpg'
import img5 from '../../assets/images/project/project5.jpg'
const Project = () => {
  return (
    <div>
        <section id="project"  class="project">
			<div class="container">
				<div class="project-details">
					<div class="project-header text-left">
						<h2>Our Finished Projects</h2>
						<p>
							Pallamco laboris nisi ut aliquip ex ea commodo consequat. 
						</p>
					</div>
					<div class="project-content">
						<div class="gallery-content">
							<div class="isotope">
								<div class="row">
									<div class=" col-md-4 col-sm-12">
										<div class="item big-height">
											<img src={img1} alt="portfolio image"/>
											<div class="isotope-overlay">
												<a href="project.html">
													<span class="lnr lnr-link"></span>
													
												</a>
												<h3>
													<a href="project.html">
														aquisition plan
													</a>
												</h3>
												<p>busisness planning</p>
											</div>
										</div>
									</div>
									<div class="col-md-8 col-sm-12">
										<div class="row">
											<div class="col-sm-6 col-xs-12">
												<div class="item">
													<img src={img2} alt="portfolio image"/>
													<div class="isotope-overlay">
														<a href="project.html">
															<span class="lnr lnr-link"></span>
															
														</a>
														<h3>
															<a href="project.html">
																aquisition plan
															</a>
														</h3>
														<p>busisness planning</p>
													</div>
												</div>
											</div>
											<div class="col-sm-6 col-xs-12">
												<div class="item">
													<img src={img3} alt="portfolio image"/>
													<div class="isotope-overlay">
														<a href="project.html">
															<span class="lnr lnr-link"></span>
															
														</a>
														<h3>
															<a href="project.html">
																aquisition plan
															</a>
														</h3>
														<p>busisness planning</p>
													</div>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-sm-6 col-xs-12">
												<div class="item">
													<img src={img4} alt="portfolio image"/>
													<div class="isotope-overlay">
														<a href="project.html">
															<span class="lnr lnr-link"></span>
															
														</a>
														<h3>
															<a href="project.html">
																aquisition plan
															</a>
														</h3>
														<p>busisness planning
														</p>
													</div>
												</div>
											</div>
											<div class="col-sm-6 col-xs-12">
												<div class="item">
													<img src={img5} alt="portfolio image"/>
													<div class="isotope-overlay">
														<a href="project.html">
															<span class="lnr lnr-link"></span>
															
														</a>
														<h3>
															<a href="project.html">
																aquisition plan
															</a>
														</h3>
														<p>busisness planning
														</p>
													</div>
												</div>
											</div>
										</div>

									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
				<div class="project-btn text-center">
					<a href="project.html"  class="project-view">view all
					</a>
				</div>
			</div>

		</section>
    </div>
  )
}

export default Project