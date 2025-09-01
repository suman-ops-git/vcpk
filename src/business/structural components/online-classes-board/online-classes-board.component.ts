import { Component, OnInit } from '@angular/core';
import { ClassNotice } from '../../model/class-notice';
import { ExcelService } from '../../../services/excel.service';
import { GetApiDataService } from '../../../services/get-api-data.service';

@Component({
  selector: 'app-online-classes-board',
  templateUrl: './online-classes-board.component.html',
  styleUrl: './online-classes-board.component.css',
  standalone: false
})
export class OnlineClassesBoardComponent implements OnInit {
  public notices: Array<ClassNotice> = new Array<ClassNotice>();

  constructor(private apiService: GetApiDataService, private excelService: ExcelService) { }

  ngOnInit(): void {
    this.apiService.getApiData("dataset/online-class-data.xlsx").subscribe(response => {
      this.notices = this.excelService.convertExcelToJson(response.data) as ClassNotice[];
    })

  }

}