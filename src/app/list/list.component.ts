import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../model/country.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  countries!: Country[];
  backendError: boolean = false;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.list().subscribe(
      (data) => this.countries = data,
      (error) => this.backendError = true
    );
  }

  delete(id: number): void {
    this.countryService.delete(id).subscribe(data => {
      this.countryService.list().subscribe(data => this.countries = data);
    });
  }

}
