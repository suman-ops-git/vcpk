import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  public convertExcelToJson(_data: ArrayBuffer, _sheetNumber?: number) {
    const workbook = XLSX.read(_data, { type: 'array' });
    const sheetName = workbook.SheetNames[_sheetNumber || 0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
    return jsonData;
  }

}