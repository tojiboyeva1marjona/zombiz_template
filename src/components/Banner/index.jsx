import {Carousel} from 'react-bootstrap'
import React, { Component } from 'react'
import './index.css'
class Banner extends Component {

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
        <section class="header-slider-area">
      <div id="carousel-example-generic" class="carousel slide carousel-fade" data-ride="carousel">
      
        <ol class="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        </ol>

        
                <Carousel autoPlay={true} onSelect={this.handleSelect}  style={{ maxWidth: '100%' }}>
                <Carousel.Item>
                <div class="item active">
            <div class="single-slide-item slide-1">
              <div class="container">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="single-slide-item-content">
                      <h2>Consult Your <br/> Business With Us</h2>
                      <p>
                        We are the unique Consultancy Farm for your business solution, That is ready to take challenge and knockout your business problems. 
                      </p>
                      <button type="button" class="slide-btn">
                      get started
                      </button>
                      <button type="button"  class="slide-btn">
                        explore more
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                    
                </Carousel.Item>
                <Carousel.Item>
               
            <div class="single-slide-item slide-2">
              <div class="container">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="single-slide-item-content">
                      <h2>
                        Consult Your <br/> Business
                      </h2>
                      <p>
                        We are the unique Consultancy Farm for your business solution, That is ready to take challenge and knockout your business problems.  
                      </p>
                      <button type="button"  class="slide-btn">
                        get started
                      </button>
                      <button type="button"  class="slide-btn
                      ">
                        explore more
                      </button>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          
                    
                </Carousel.Item>
                
            </Carousel>
{/* 
        <div class="carousel-inner" role="listbox">
          
          
        </div> */}

        
        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span class="lnr lnr-chevron-left"></span>
        </a>
        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span class="lnr lnr-chevron-right"></span>
        </a>
      </div>

    </section>
    </div>
  )
}}

export default Banner