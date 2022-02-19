import React from 'react'
import './style.css'

const Header = () => {
  return (
    <div>
        <section class="header">
			<div class="container d-flex">	
				<div class="header-left">
					<ul class="pull-left">
						<li>
							<a href="#">
								<i className="fa fa-phone" aria-hidden="true"> </i> +992 563 542
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fa fa-envelope" aria-hidden="true"></i>info@mail.com
							</a>
						</li>
					</ul>
				</div>
				<div class="header-right pull-right">
					<ul>
						<li class="reg">
							<a href="#" data-toggle="modal" data-target=".bs-example-modal-sm">
								Register
							</a>
								/
							<a href="#" data-toggle="modal" data-target=".bs-example-modal-lg">
								Log in
							</a>
							
						</li>

                        <li>
							<div class="social-icon">
								<ul>
									<li><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
									<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								</ul>
							</div>
						</li>
                        </ul>
				</div>
			</div>	

		</section>
		
    </div>
  )
}

export default Header