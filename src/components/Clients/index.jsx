import React from 'react'
import './index.css'
import img1 from '../../assets/images/client/client1.png'
import img2 from '../../assets/images/client/client2.png'
import img3 from '../../assets/images/client/client3.png'
import img4 from '../../assets/images/client/client4.png'
import img5 from '../../assets/images/client/client5.png'


const Clients = () => {
  return (
    <div>
        <section class="clients ">
			<div class="container ">
				<div class="clients-area ">
					<div class="owl-carousel owl-theme d-flex gap-5" id="client">
						<div class="item">
							<a href="#">
								<img src={img1} alt="brand-image" />
							</a>
						</div>
						<div class="item">
							<a href="#">
								<img src={img2} alt="brand-image"></img>
							</a>
						</div>
						<div class="item">
							<a href="#">
								<img src={img3} alt="brand-image"></img>
							</a>
						</div>
						<div class="item">
							<a href="#">
								<img src={img4} alt="brand-image"></img>
							</a>
						</div>
						<div class="item">
							<a href="#">
								<img src={img5} alt="brand-image"></img>
							</a>
						</div>
					</div>
				</div>
			</div>

		</section>
    </div>
  )
}

export default Clients