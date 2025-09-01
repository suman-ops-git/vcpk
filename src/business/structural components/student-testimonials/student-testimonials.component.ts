import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExcelService } from '../../../services/excel.service';
import { GetApiDataService } from '../../../services/get-api-data.service';

@Component({
  selector: 'app-student-testimonials',
  templateUrl: './student-testimonials.component.html',
  styleUrls: ['./student-testimonials.component.css'],
  standalone: false
})
export class StudentTestimonialsComponent implements OnInit, OnDestroy {
  public readonly BASE_URL: string = "https://suman-ops-git.github.io/vcpk-database/assets/student-profile-picture/";
  public testimonials: Array<any> = new Array<any>();

  public currentIndex = 0;
  public visibleCards = 3; // ✅ Show 3 cards
  public intervalId: any;

  constructor(private apiService: GetApiDataService, private excelService: ExcelService) { }

  ngOnInit(): void {
    this.apiService.getApiData("dataset/student-testimonial-data.xlsx").subscribe(response => {
      this.testimonials = this.excelService.convertExcelToJson(response.data) as any[];
      this.setVisibleCards();
      window.addEventListener('resize', this.setVisibleCards.bind(this));
    })
  }

  setVisibleCards() {
    const w = window.innerWidth;
    this.visibleCards = w < 576 ? 1 : w < 992 ? 2 : 3;
    // keep index in bounds after resize
    this.currentIndex = Math.min(this.currentIndex, this.maxIndex());
  }

  maxIndex(): number {
    return Math.max(0, this.testimonials.length - this.visibleCards);
  }

  next() {
    this.currentIndex = this.currentIndex >= this.maxIndex() ? 0 : this.currentIndex + 1;
  }

  prev() {
    this.currentIndex = this.currentIndex <= 0 ? this.maxIndex() : this.currentIndex - 1;
  }

  /* Dots */
  getDots(): number[] {
    return Array.from({ length: Math.ceil(this.testimonials.length / this.visibleCards) });
  }
  getActiveDotIndex(): number {
    return Math.floor(this.currentIndex / this.visibleCards);
  }
  goToDot(dotIndex: number) {
    this.currentIndex = Math.min(dotIndex * this.visibleCards, this.maxIndex());
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.setVisibleCards.bind(this));
  }
}