import { Component, OnInit } from '@angular/core';
import { TempsService } from '../../services/temps.service';
import { InfoGeneral, Capitulo } from '../../interface/data.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _tempsService: TempsService) { }

  ngOnInit(): void {
  }

  datos(){
    
    // console.log(this._tempsService.info.capitulos[titulo]);
    
  }

}
