import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliService } from '../services/peli.service';
import { iPelis } from '../model/iPelis.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  results: Observable<iPelis>;
  term: string = "";
  type: string = "";

  constructor(private peliservice:PeliService) { }

  ngOnInit() { 
  }

  searchChanged() {
    this.results = this.peliservice.searchMovies(this.term, this.type);
  }

}
