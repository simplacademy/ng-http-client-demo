import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryService } from '../country.service';
import { Country } from '../model/country.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private countryService: CountryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({id: 0, code: '', name: ''});
  }

  add(): void {
    let country: Country = this.form.value;
    this.countryService.add(country).subscribe((data) => {
      this.router.navigate(['list']);
    });
  }

}
