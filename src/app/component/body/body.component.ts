import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SplitButtonModule} from "primeng/splitbutton";
import {ToolbarModule} from "primeng/toolbar";
import {FileUploadModule} from "primeng/fileupload";
import {CardModule} from "primeng/card";
import {NgClass, NgStyle} from "@angular/common";
import {DataViewModule} from "primeng/dataview";
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {OpportunityModel} from "../../model/Opportunity.model";
import {UploadService} from "../../service/upload.service";
import {HttpClientModule} from "@angular/common/http";
import { CommonModule } from '@angular/common'
import test from "node:test";
import {DetailsComponent} from "../details/details.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule,
    HttpClientModule,
    SplitButtonModule,
    ToolbarModule,
    FileUploadModule,
    CardModule,
    NgClass,
    NgStyle,
    DataViewModule,
    RatingModule,
    TagModule,
    FormsModule,
    DropdownModule, DetailsComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit{

  public jobs : any[] ;
  public file : File | undefined ;

  constructor(private uploadService: UploadService) {
    this.jobs =[]
  }

  ngOnInit() {


  }

  // @ts-ignore
  public uploadResume() : void {
    if(this.file && this.file.type == 'application/pdf'){

      this.uploadService.uploadfile( this.file ).subscribe((jobs: any) =>{

        this.jobs = jobs ;
      })
    }else {
      alert('only pdf')
    }
  }


  public uploadeFile($event: Event) {
  if( $event  &&  $event.target  &&  $event.target   ){
    // @ts-ignore
    this.file = $event.target.files[0]
  }
  }
}

