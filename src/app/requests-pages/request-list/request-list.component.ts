import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/apis.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  fileName = 'ExcelSheet.XLSX';
  AllRequests:any;
  term:any;
   p:number = 1;
  constructor(private service:ApiService, private router:Router) { }

  ngOnInit(): void {
     this.getAllRequestList();

  }

  raiseRequest(){
    this.router.navigate(['register'])
    console.log("raiserequest")
  }

  getAllRequestList(){
    this.service.getAllDevelopers().subscribe(data=>
      {
        this.AllRequests=data;
        console.log(data);
      })
  }

  exportToExcel():void{
    // pass here the table id
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    // generate workbook and add the worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'sheet1');

    // save to file
    XLSX.writeFile(wb, this.fileName);
  }

}
