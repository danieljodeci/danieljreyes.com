import React, {Component} from 'react'
import P5Wrapper from '../../../hocs/P5Wrapper'
import {primary} from '../../../hocs/Page/styles/colors';

const sketch = p => {
  let img_scale, scale_factor, particles;
  const SPACING = 2;

  p.preload = function() {
    img_scale = p.loadImage('/static/images/rainbow-mountains.jpg');
  }

  p.setup = function() {
    const canvas = p.createCanvas(800, 800);
    p.noStroke();
    scale_factor = 8;
    img_scale.resize(800 / scale_factor, 800 / scale_factor);
    img_scale.loadPixels();
    particles = [];

    for(let i = 0; i < img_scale.width; i++) {
      for(let j = 0; j < img_scale.height; j++) {
        let index = (i * SPACING) + (j * img_scale.width * SPACING);
        particles[index] = new Particle(p, p.createVector(i * scale_factor, j * scale_factor), {})
      }
    }
    p.background(primary.neutral);
    
  }

  p.draw = function() {
    p.background(255, 4);
    img_scale.loadPixels();

    
    // p.translate(100, 100);

    // p.ellipse((p.sin(p.frameCount * 0.02) * 100) + 300, (p.cos(p.frameCount * 0.02) * 100) + 200, 5, 5);

    for(let i = 0; i < img_scale.width; i++) {
      for(let j = 0; j < img_scale.height; j++) {
        let index = (i * SPACING) + (j * img_scale.width * SPACING);

        let limit = 1;
        let scale = 0.8
        let repeller = p.createVector(
          (p.sin(p.frameCount * 0.2) * 300) * p.cos(p.frameCount * 0.09) + 400,
          (p.tan(p.frameCount * 0.2) * 300) * p.sin(p.frameCount * 0.09) + 400);

        let attr = p.createVector(
          (i * scale_factor),
          (j * scale_factor)
        );

        particles[index].attract(attr, {
          acc_scale: 0.4,
          vel_limit: 1
        });

        particles[index].repel(repeller, {
          acc_scale: 0.4,
          vel_limit: 1
        });

        

        let size = 2;
        particles[index].display([img_scale.pixels[index], img_scale.pixels[index+1], img_scale.pixels[index+2]], size)
      }
    } //p.save(p.frameCount + '.jpg');
  }
};

let Particle = function(renderer, loc, params) {
  this.params = params || {}
  this.renderer = renderer;
  this.loc = loc;
  this.acc = this.params.acc || this.renderer.createVector(0, 0);
  this.vel = this.params.vel || this.renderer.createVector(0, 0);
  
  // attract the particle towards a point and
  // returns the new particle location
  //
  // target: p5.Vector
  // params: {
  //   acc_scale: number,
  //   vel_limit: number
  // }
  //
  this.attract = function(target, params) {
    this.params = Object.assign({}, this.params, params);
    this.acc = target.sub(this.loc);
    this.acc.normalize();
    this.acc.mult(this.params.acc_scale || 0.5);

    this.vel.add(this.acc)
    this.vel.limit(this.params.vel_limit || 9);
    this.loc.add(this.vel);
    return this.loc;
  };

  // repels the particle away from a point and
  // return the new particle location
  //
  // target: p5.Vector
  // params: {
  //   acc_scale: number,
  //   vel_limit: number
  // }
  //
  this.repel = function(target, params) {
    this.params = Object.assign({}, this.params, params);
    if ( this.loc.dist(target) < 50 ) {
      this.acc = target.sub(this.loc);
      this.acc.normalize();
      this.acc.mult(this.params.acc_scale || 0.5);

      this.acc.mult(-1);
      this.vel.add(this.acc)
      this.vel.limit(this.params.vel_limit || 9);
      this.loc.add(this.vel);
    }
    return this.loc;
  };

  this.display = function(fill, size) {
    this.renderer.fill(fill);
    this.renderer.rect(this.loc.x, this.loc.y, size, size);
  };
}

const Sketch = P5Wrapper()(sketch)


export default class Wrapper extends Component {
  render(){
    return (
      <section id="sketch" className="align-center justify-center full-width">
        <Sketch />
      </section>
    )
  }
}
