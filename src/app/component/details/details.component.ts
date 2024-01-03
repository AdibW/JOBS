import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common'
import {  ElementRef, OnInit, ViewChild} from '@angular/core';
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

@Component({
  selector: 'app-details',
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
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnChanges{


  @Input() offers: any

  ngOnChanges(changes: SimpleChanges): void {
  }
}
