import { Component } from '@angular/core';

@Component({
  selector: 'app-student-testimonials',
  templateUrl: './student-testimonials.component.html',
  styleUrls: ['./student-testimonials.component.css'],
  standalone: false
})
export class StudentTestimonialsComponent {
  testimonials = [
    { name: 'Rahul Sharma', course: 'Full Stack Development', feedback: 'The training was very practical and industry-oriented. I got my first job within 2 months!', image: 'assets/students/student1.jpg' },
    { name: 'Priya Singh', course: 'Digital Marketing', feedback: 'Amazing mentors and great hands-on projects. Highly recommended!', image: 'assets/students/student2.jpg' },
    { name: 'Amit Kumar', course: 'Data Science', feedback: 'Very interactive classes with real-world examples. Helped me switch careers successfully.', image: 'assets/students/student3.jpg' },
    { name: 'Sneha Verma', course: 'UI/UX Design', feedback: 'Loved the creative environment and hands-on practice. Built a strong portfolio.', image: 'assets/students/student4.jpg' },
    { name: 'Rohit Mehta', course: 'Cloud Computing', feedback: 'Cloud labs were excellent! Got AWS certification with their guidance.', image: 'assets/students/student5.jpg' }
  ];

  currentIndex = 0;
  visibleCards = 3; // ✅ Show 3 cards
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    }, 3000);
  }

  // ✅ Dots logic
  getDots() {
    return Array(Math.ceil(this.testimonials.length / this.visibleCards));
  }

  getActiveDotIndex() {
    return Math.floor(this.currentIndex / this.visibleCards);
  }

  goToSlide(index: number) {
    this.currentIndex = index * this.visibleCards;
  }
}
