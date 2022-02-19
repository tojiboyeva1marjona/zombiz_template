import React from 'react'
import './index.css'


const Team = () => {
  return (
    <div>
        <section  class="team">
			<div class="container">
				<div class="team-details">
					<div class="project-header team-header text-left">
						<h2>Our expert team</h2>
						<p>
							Pallamco laboris nisi ut aliquip ex ea commodo consequat. 
						</p>
					</div>
					<div class="team-card">
						<div class="container ">
							<div class="row ">
								<div class="owl-carousel d-flex gap-3 team-carousel">
									<div class="col-sm-3 col-xs-12">
										<div class="single-team-box team-box-bg-1">
											<div class="team-box-inner">
												<h3>tom hanks</h3>
												<p class="team-meta">Founder &  CEO</p>
												<a href="team.html" class="learn-btn">
													learn more
												</a>
											</div>

										</div>
									</div>
									<div class="col-sm-3 col-xs-12">
										<div class="single-team-box team-box-bg-2">
											<div class="team-box-inner">
												<h3>alex browne</h3>
												<p class="team-meta">
													Director, Management & Research
												</p>
												<a href="team.html" class="learn-btn">
													learn more
												</a>
											</div>
										</div>
									</div>
									<div class="col-sm-3 col-xs-12">
										<div class="single-team-box team-box-bg-3">
											<div class="team-box-inner">
												<h3>darren j. stevens</h3>
												<p class="team-meta">
													Director, Finance Solution
												</p>
												<a href="team.html" class="learn-btn">
													learn more
												</a>
											</div>
										</div>
									</div>
									<div class="col-sm-3 col-xs-12">
										<div class="single-team-box team-box-bg-4">
											<div class="team-box-inner">
												<h3>kevin thomson</h3>
												<p class="team-meta">
													Head, Legal Advising
												</p>
												<a href="team.html" class="learn-btn">
													learn more
												</a>
											</div>
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

export default Team