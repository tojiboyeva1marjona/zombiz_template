import {Carousel} from 'react-bootstrap'
import React, { Component } from 'react'
import img1 from '../../assets/images/client/testimonial1.jpg'
import img2 from '../../assets/images/client/testimonial2.jpg'
import img3 from '../../assets/images/client/testimonial1.jpg'
import './index.css'
class Cliend extends Component {

    constructor(props) {
        super(props);
        this.state = {
            prevIcon: '<Glyphicon glyph="chevron-up" />'
        }
    }

    handleSelect = (selectedIndex, e) => {
        this.setState({
            index: selectedIndex,
            // direction: e.direction
        });
    }
    render(){
  return (
    <div>
        <section   class="testemonial">
			<div class="container">
				<div class="section-header text-center">
					<h2>
						<span>
							what our client say about us
						</span>
					</h2>
				</div>
				<div class="owl-carousel owl-theme" id="testemonial-carousel">
				<Carousel autoPlay={true} onSelect={this.handleSelect}  style={{ maxWidth: '100%' }}>
				<Carousel.Item>
				<div class="home1-testm item">
						<div class="home1-testm-single text-center">
							<div class="home1-testm-img">
								<img src={img1} alt="img"></img>
							</div>
							<div class="home1-testm-txt">
								<span class="icon section-icon">
									<i class="fa fa-quote-left" aria-hidden="true"></i>
								</span>
								<p>
									Lorem ipsum dolor sit amet conse adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..
								</p>
								<h3>
									<a href="#">
										kevin watson
									</a>
								</h3>
								<h4>CEO, Kingston</h4>
							</div>	
						</div>
					</div>
				</Carousel.Item>
					<Carousel.Item>
					<div class="home1-testm item">
						<div class="home1-testm-single text-center">
							<div class="home1-testm-img">
								<img src={img2} alt="img"></img>
							</div>
							<div class="home1-testm-txt">
								<span class="icon section-icon">
									<i class="fa fa-quote-left" aria-hidden="true"></i>
								</span>
								<p>
									Lorem ipsum dolor sit amet conse adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..
								</p>
								<h3>
									<a href="#">
										kevin watson
									</a>
								</h3>
								<h4>CEO, Kingston</h4>
							</div>	
						</div>
					</div>
					</Carousel.Item>
					<Carousel.Item>
					<div class="home1-testm item">
						<div class="home1-testm-single text-center">
							<div class="home1-testm-img">
								<img src={img3} alt="img"></img>
							</div>
							<div class="home1-testm-txt">
								<span class="icon section-icon">
									<i class="fa fa-quote-left" aria-hidden="true"></i>
								</span>
								<p>
									Lorem ipsum dolor sit amet conse adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..
								</p>
								<h3>
									<a href="#">
										kevin watson
									</a>
								</h3>
								<h4>CEO, Kingston</h4>
							</div>	
						</div>
					</div>
					</Carousel.Item>
					</Carousel>
				</div>
			</div>

		</section>
    </div>
  )
}
}

export default Cliend


