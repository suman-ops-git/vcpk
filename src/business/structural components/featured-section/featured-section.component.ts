import { Component } from '@angular/core';
import { ExcelService } from '../../../services/excel.service';
import { GetApiDataService } from '../../../services/get-api-data.service';

@Component({
  selector: 'app-featured-section',
  templateUrl: './featured-section.component.html',
  styleUrl: './featured-section.component.css',
  standalone: false
})
export class FeaturedSectionComponent {
  public readonly BASE_URL: string = "https://suman-ops-git.github.io/vcpk-database/assets/featured-section/";
  public featuredList: Array<any> = new Array<any>();


  constructor(private apiService: GetApiDataService, private excelService: ExcelService) { }

  ngOnInit(): void {
    this.apiService.getApiData("dataset/featured-section-data.xlsx").subscribe(response => {
      this.featuredList = this.excelService.convertExcelToJson(response.data) as any[];
    })
  }
}