import React from 'react'
import './index.css'
import img from '../../assets/images/about/about-part.jpg'

const About = () => {
  return (
    <div>
        <section class="about-us">
			<div class="container">
				<div class="about-us-content">
					<div class="row">
						<div class="col-sm-6">
							<div class="single-about-us">
								<div class="about-us-txt">
									<h2>about us</h2>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
									</p>
									<div class="project-btn">
										<a href="#"  class="project-view">learn more
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="single-about-us">
								<div class="about-us-img">
									<img src={img} alt="about images"></img>
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

export default About