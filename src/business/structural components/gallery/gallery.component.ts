import { Component, HostListener, OnInit } from '@angular/core';
import { GetApiDataService } from '../../../services/get-api-data.service';
import { ExcelService } from '../../../services/excel.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  standalone: false
})
export class GalleryComponent implements OnInit {

  public readonly BASE_URL: string = "https://suman-ops-git.github.io/vcpk-database/assets/gallery/";
  public galleryImages: Array<any> = new Array<any>();

  constructor(private apiService: GetApiDataService, private excelService: ExcelService) {

  }

  ngOnInit(): void {
    this.apiService.getApiData("dataset/gallery-data.xlsx").subscribe(response => {
      this.galleryImages = this.excelService.convertExcelToJson(response.data) as any[];
    })
  }

  popupVisible = false;
  currentIndex = 0;

  openPopup(index: number) {
    this.currentIndex = index;
    this.popupVisible = true;
  }

  closePopup() {
    this.popupVisible = false;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
  }

  nextImage() {
    this.currentIndex =
      (this.currentIndex + 1) % this.galleryImages.length;
  }

  // 🎹 Keyboard Navigation
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.popupVisible) return;

    switch (event.key) {
      case 'Escape': // Close popup
        this.closePopup();
        break;
      case 'ArrowLeft': // Prev
        this.prevImage();
        break;
      case 'ArrowRight': // Next
        this.nextImage();
        break;
    }
  }
}
