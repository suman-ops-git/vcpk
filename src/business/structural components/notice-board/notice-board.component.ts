
import { Component, OnInit } from '@angular/core';
import { Notice } from '../../model/notice';
import { ExcelService } from '../../../services/excel.service';
import { GetApiDataService } from '../../../services/get-api-data.service';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrl: './notice-board.component.css',
  standalone: false
})
export class NoticeBoardComponent implements OnInit {

  public notices: Array<Notice> = new Array<Notice>();

  constructor(private apiService:GetApiDataService, private excelService: ExcelService) { }

  ngOnInit(): void {
    this.apiService.getApiData("dataset/notice-data.xlsx").subscribe(response => {
      this.notices = this.excelService.convertExcelToJson(response.data) as Notice[];
    })

  }

  removeNotice(id:any){}
}
