import { Injectable } from '@angular/core';
import { ApiDetails } from '../model/api-details';

@Injectable({
  providedIn: 'root'
})
export class ApiDetailsService {

  constructor() { }

  private readonly BASE_URL = 'https://suman-ops-git.github.io/vcpk-database/'; // Base URL for the API
  private version = '1.0';

  private getHeaders() {
    return {
      'Content-Type': 'application/json'
      // Add more headers as needed, e.g. Authorization
      // 'Authorization': 'Bearer <token>'
    };
  }

  private getHeaderForExcel() {
    return {
      ...this.getHeaders(),
      ...{'responseType': 'arraybuffer'}
    }
  }

  private apiList: Array<ApiDetails> = [
    new ApiDetails()
      .setBaseUrl(this.BASE_URL)
      .setVersion(this.version)
      .setUrl('dataset/gallery-data.xlsx')
      .setMethod('get')
      .setHeader(this.getHeaderForExcel()),
    new ApiDetails()
      .setBaseUrl(this.BASE_URL)
      .setVersion(this.version)
      .setUrl('dataset/notice-data.xlsx')
      .setMethod('get')
      .setHeader(this.getHeaderForExcel()),
      new ApiDetails()
      .setBaseUrl(this.BASE_URL)
      .setVersion(this.version)
      .setUrl('dataset/online-class-data.xlsx')
      .setMethod('get')
      .setHeader(this.getHeaderForExcel()),
       new ApiDetails()
      .setBaseUrl(this.BASE_URL)
      .setVersion(this.version)
      .setUrl('dataset/carousel-data.xlsx')
      .setMethod('get')
      .setHeader(this.getHeaderForExcel()),
      new ApiDetails()
      .setBaseUrl(this.BASE_URL)
      .setVersion(this.version)
      .setUrl('dataset/featured-section-data.xlsx')
      .setMethod('get')
      .setHeader(this.getHeaderForExcel()),
      new ApiDetails()
      .setBaseUrl(this.BASE_URL)
      .setVersion(this.version)
      .setUrl('dataset/student-testimonial-data.xlsx')
      .setMethod('get')
      .setHeader(this.getHeaderForExcel()),
      
  ];

  public getApiDetails(url: string): ApiDetails {
    const apiDetail = this.apiList.find(api => api.url === url);
    if (!apiDetail) {
      throw new Error(`API details not found for url: ${url}`);
    }
    return apiDetail;
  }
}

