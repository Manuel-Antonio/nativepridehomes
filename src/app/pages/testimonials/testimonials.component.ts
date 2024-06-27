import { Component, OnInit } from '@angular/core';
import { testimonials } from 'src/app/data/testimonials.data';
import { Testimonial } from 'src/app/models/testimonial.model';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
  animateChild,
  group
} from '@angular/animations';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  animations: [
    trigger('testimonialAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = testimonials;
  currentIndex: number = 0;
  showTestimonial: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  prevTestimonial(): void {
    this.showTestimonial = false;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex === 0) ? this.testimonials.length - 1 : this.currentIndex - 1;
      this.showTestimonial = true;
    }, 500);
  }

  nextTestimonial(): void {
    this.showTestimonial = false;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex === this.testimonials.length - 1) ? 0 : this.currentIndex + 1;
      this.showTestimonial = true;
    }, 500);
  }
}
