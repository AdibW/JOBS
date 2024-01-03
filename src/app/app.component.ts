import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {BodyComponent} from "./component/body/body.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BodyComponent , HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers :[
    HttpClientModule
  ]
})
export class AppComponent {
  title = 'RESUME-FRONT';
}

