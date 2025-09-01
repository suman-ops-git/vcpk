import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/services/excel.service';
import { GetApiDataService } from 'src/services/get-api-data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  standalone: false
})
export class CarouselComponent implements OnInit {
  public readonly BASE_URL: string = "https://suman-ops-git.github.io/vcpk-database/assets/carousel/";
  public carouselList: Array<any> = new Array<any>();

  constructor(private apiService: GetApiDataService, private excelService: ExcelService) { }

  ngOnInit(): void {
    this.apiService.getApiData("dataset/carousel-data.xlsx").subscribe(response => {
      this.carouselList = this.excelService.convertExcelToJson(response.data) as any[];
    })
  }

}
