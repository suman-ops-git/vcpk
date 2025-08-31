import { Injectable } from '@angular/core';
import { GetApiDataService } from './get-api-data.service';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productList: any[] = [];
  private carouselDetails: any[] = [];
  private listDetails: any[] = [];

  private productDetailsLoaded = false;

  constructor(private apiService: GetApiDataService) { }

  private getProductDetilsList(): Observable<any[]> {
    if (this.productDetailsLoaded) {
      return of(this.productList);
    }
    return this.apiService.getApiData('json/productDetails.json').pipe(
      tap((response: any) => {
        this.productList = response.data;
        this.productDetailsLoaded = true;
      }),
      map((response: any) => response.data)
    );
  }

  public handleCarouselDetails(): Observable<any[]> {
    if (this.carouselDetails.length > 0 && this.productDetailsLoaded) {
      return of(this.carouselDetails);
    }

    if (!this.carouselDetails.length && this.productDetailsLoaded) {
      this.formatCarousalData();
      return of(this.carouselDetails);
    }
    return this.getProductDetilsList().pipe(
      map(() => {
        if (this.carouselDetails.length === 0) {
          this.formatCarousalData();
        }
        return this.carouselDetails;
      })
    );
  }

  private formatCarousalData() {
    const formatted = this.productList
      .filter((item: any) => item.carouselDetails.isDisplayed)
      .sort((a: any, b: any) => a.carouselDetails.order - b.carouselDetails.order)
      .map((item: any) => {
        return {
          id: item.id,
          title: item.title,
          author: item.author,
          imageUrl: item.carouselDetails.imageUrl,
          description: item.carouselDetails.description,
          alt: item.carouselDetails.alt || 'No image available'
        };
      });
    this.carouselDetails = formatted;
  }

  public handleListDetails(prodSortkey: "newest" | "lowToHigh" | "highToLow"): Observable<any[]> {
    if (this.listDetails.length > 0) {
      this.formatListPage(prodSortkey);
      return of(this.listDetails);
    }

    if (!this.listDetails.length && this.productDetailsLoaded) {
      this.formatListPage(prodSortkey);
      return of(this.listDetails);
    }

    return this.getProductDetilsList().pipe(
      map(() => {
        if (this.listDetails.length === 0) {
          this.formatListPage(prodSortkey);
        }
        return this.listDetails;
      })
    );
  }


  private formatListPage(prodSortkey: "newest" | "lowToHigh" | "highToLow") {
    const formatted = this.productList
      .sort((a, b) => {
        if ("newest" == prodSortkey) { // Descending (newest first)
          const dateA = new Date(a.publishDate);
          const dateB = new Date(b.publishDate);
          return dateB.getTime() - dateA.getTime();
        } else if ("lowToHigh" == prodSortkey) { // Low to High
          return a.price - b.price;
        } else { // High to Low
          return b.price - a.price;
        }
      })
      .map((item: any) => {
        return {
          id: item.id,
          title: item.title,
          author: item.author,
          price: item.price,
          publishDate: item.publishDate,
          imageUrl: item.listPageDetails.imageUrl,
          description: item.listPageDetails.description,
          alt: item.listPageDetails.alt || 'No image available'
        };
      });
    this.listDetails = formatted;
  }

  public handleProductDetails(id?: number): Observable<any> {
    if (this.productDetailsLoaded) {
      return of(this.formatProductDetails(id));
    }
    return this.getProductDetilsList().pipe(
      map(() => this.formatProductDetails(id))
    );
  }

  private formatProductDetails(id?: number) {
    const product = this.productList.find((item: any) => item.id == id);
    if (!product) return null;
    return {
      id: product.id,
      title: product.title,
      author: product.author,
      price: product.price,
      publishDate: product.publishDate,
      imageUrls: product.productPageDeatils.imageUrls,
      description: product.productPageDeatils.description,
      alt: product.productPageDeatils.alt || 'No image available'
    };
  }
}