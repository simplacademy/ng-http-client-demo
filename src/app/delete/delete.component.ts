import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../country.service';
import { Country } from '../model/country.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  country!: Country;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.countryService.getById(id).subscribe(data => this.country = data);
  }

  delete(): void {
    this.countryService.delete(this.country.id).subscribe(
      data => this.router.navigate(['list'])
    );
  }

}
