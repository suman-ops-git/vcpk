import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  standalone: false
})
export class GalleryComponent {
 galleryImages: string[] = [
    'assets/gallery/img1.jpeg',
    'assets/gallery/img2.jpeg',
    'assets/gallery/img3.jpeg',
    'assets/gallery/img4.jpeg',
    'assets/gallery/img5.jpeg',
    'assets/gallery/img6.jpeg',
    'assets/gallery/img7.jpeg',
    'assets/gallery/img8.jpeg'
  ];

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
