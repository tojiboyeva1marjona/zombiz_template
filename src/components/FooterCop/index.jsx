import React from 'react'
import './index.css'

const FooterCop = () => {
  return (
    <div>
        <footer class="footer-copyright">
			<div class="container">
				<div class="row">
					<div class="col-sm-7">
						<div class="foot-copyright pull-left">
							<p>
								&copy; All Rights Reserved. Designed and Developed by
							 	<a href="https://www.themesine.com">ThemeSINE</a>
							</p>
						</div>
					</div>
					<div class="col-sm-5">
						<div class="foot-menu pull-right
						">	  
							<ul>
								<li ><a href="#">legal</a></li>
								<li ><a href="#">sitemap</a></li>
								<li ><a href="#">privacy policy</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div id="scroll-Top">
					<i class="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
				</div>
			</div>

		</footer>
    </div>
  )
}

export default FooterCop