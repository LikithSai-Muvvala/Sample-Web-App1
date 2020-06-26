import {Component, OnInit, ViewChild, AfterViewInit} from "@angular/core";
import { AppService } from "../app-service.service";
import * as $ from 'jquery';

@Component({
  selector:"app-posts",
  templateUrl:"./posts.component.html",
  styleUrls:["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  @ViewChild('tableBody') tableBodyElement
  @ViewChild('tableHead') tableHeadElement
  posts:object[] = [];

  constructor(private appService: AppService) {}

  ngOnInit() {
    console.log("came");
    this.appService.getPosts().subscribe(data=>{
      this.posts = data;
      this.sample();
    });
  }

  sample() {
    // console.log(this.tableElement.nativeElement.rows);
    if(this.tableBodyElement && this.tableBodyElement.nativeElement && this.tableBodyElement.nativeElement.rows &&this.tableBodyElement.nativeElement.rows.length > 2) {
        let headRow = this.tableHeadElement.nativeElement.rows[0];
        let rows = this.tableBodyElement.nativeElement.rows[0];
        if(rows) {
          // let headerWidths = [];
          // console.log(headRow.cells.length);
          // let headRowCellsLen = headRow.cells.length
          // for(let cellIdx=0; cellIdx < headRowCellsLen; cellIdx) {
          //   console.log(headRow.cells[cellIdx].clientWidth)
          //   headerWidths.push(headRow.cells[cellIdx].clientWidth);
          // }

          // for(let rowIdx=0; rowIdx < rows.length; rowIdx++) {
          //   let cells = rows[rowIdx].cells;
          //   let cellsLen = cells.length
          //   for(let cellIdx; cellIdx < cellsLen; cellIdx) {
          //     if(cells[cellIdx].clientWidth > headerWidths[cellIdx].clientWidth) {
          //       headerWidths[cellIdx]= cells[cellIdx].clientWidth;
          //     } 
          //   }
          // }
          // console.log(headerWidths)
          // for(let rowIdx=0; rowIdx < rows.length; rowIdx++) {
          //   let cells = rows[rowIdx].cells;
          //   let cellsLen = cells.length
          //   for(let cellIdx; cellIdx < cellsLen; cellIdx) {
          //     cells[cellIdx].style.width = headerWidths[cellIdx]+"px";
          //   }
          // }

          // for(let cellIdx=0; cellIdx < headRow.cells.length; cellIdx) {
          //   headRow.cells[cellIdx].style.width = headerWidths[cellIdx]+"px";
          // }
          for(let idx=0; rows.cells.length; idx++) {
            headRow.cells[idx].style.width = (rows.cells[idx].clientWidth-15) + "px"
          }
        } else {
          console.log("likith")
        }
    } else {
      console.log("sfsf")
    }
  }

}