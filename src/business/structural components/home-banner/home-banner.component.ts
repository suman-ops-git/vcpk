import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css'],
  standalone: false
})
export class HomeBannerComponent implements OnInit, OnDestroy {
  content = [
    {
      image: 'assets/banner/class1.jpeg',
      title: 'Smart Learning',
      tagline: 'Smart Class with Smart Devices | Digital Payment Facility'
    },
    {
      image: 'assets/banner/class2.jpeg',
      title: 'Expert Guidance',
      tagline: 'Hands-on training by certified professionals'
    },
    {
      image: 'assets/banner/class3.jpeg',
      title: 'Career Support',
      tagline: 'Get placement assistance and career guidance'
    }
  ];

  currentContent = this.content[0];
  currentIndex = 0;
  private intervalSubscription!: Subscription;

  ngOnInit(): void {
    this.intervalSubscription = interval(4000).subscribe(() => {
      this.updateContent();
    });
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  updateContent(): void {
    this.currentIndex = (this.currentIndex + 1) % this.content.length;
    this.currentContent = this.content[this.currentIndex];
  }
}
