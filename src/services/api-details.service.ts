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

  private apiList: Array<ApiDetails> = [
    new ApiDetails()
      .setBaseUrl(this.BASE_URL)
      .setVersion(this.version)
      .setUrl('dataset/gallery.json')
      .setMethod('get')
      .setHeader(this.getHeaders()),
    new ApiDetails()
      .setBaseUrl(this.BASE_URL)
      .setVersion(this.version)
      .setUrl('dataset/notice-database.xlsx')
      .setMethod('get')
      .setHeader({...this.getHeaders(),...{'responseType': 'arraybuffer'}}),
      new ApiDetails()
      .setBaseUrl(this.BASE_URL)
      .setVersion(this.version)
      .setUrl('dataset/online-class-database.xlsx')
      .setMethod('get')
      .setHeader({...this.getHeaders(),...{'responseType': 'arraybuffer'}}),
       new ApiDetails()
      .setBaseUrl(this.BASE_URL)
      .setVersion(this.version)
      .setUrl('json/newspaper.json')
      .setMethod('get')
      .setHeader(this.getHeaders()),
      new ApiDetails()
      .setBaseUrl(this.BASE_URL)
      .setVersion(this.version)
      .setUrl('json/language_data.json')
      .setMethod('get')
      .setHeader(this.getHeaders()),
      
  ];

  public getApiDetails(url: string): ApiDetails {
    const apiDetail = this.apiList.find(api => api.url === url);
    if (!apiDetail) {
      throw new Error(`API details not found for url: ${url}`);
    }
    return apiDetail;
  }
}

