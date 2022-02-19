import React from 'react'
import './index.css'
import img1 from '../../assets/images/counter/counter1.png'
import img2 from '../../assets/images/counter/counter2.png'
import img3 from '../../assets/images/counter/counter3.png'
import img4 from '../../assets/images/counter/counter4.png'

const Statistika = () => {
  return (
    <div>
        <section  class="statistics">
			<div class="container">
				<div class="statistics-counter d-flex "> 
					<div class="col-md-3 col-sm-6">
						<div class="single-ststistics-box">
							<div class="statistics-img">
								<img src={img1} alt="counter-icon"></img>
							</div>
							<div class="statistics-content">
								<div class="counter">2556</div>
								<h3>days worked</h3>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6">
						<div class="single-ststistics-box">
							<div class="statistics-img">
								<img src={img2} alt="counter-icon"></img>
							</div>
							<div class="statistics-content">
								<div class="counter">326</div>
								<h3>project finished</h3>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6">
						<div class="single-ststistics-box">
							<div class="statistics-img">
								<img src={img3} alt="counter-icon"></img>
							</div>
							<div class="statistics-content">
								<div class="counter">1526</div>
								<h3>coffee cup</h3>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6">
						<div class="single-ststistics-box">
							<div class="statistics-img">
								<img src={img4} alt="counter-icon"></img>
							</div>
							<div class="statistics-content">
								<div class="counter">856</div>
								<h3>client satisfied</h3>
							</div>
						</div>
					</div>
				</div>	
			</div>

		</section>
    </div>
  )
}

export default Statistika