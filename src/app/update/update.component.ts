import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../country.service';
import { Country } from '../model/country.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private countryService: CountryService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({ id:0, code: '', name: ''});
    let id = this.route.snapshot.params['id'];
    this.countryService.getById(id).subscribe(data => this.form.patchValue(data));
  }

  update(): void {
    let country: Country = this.form.value;
    this.countryService.update(country)
      .subscribe(data => this.router.navigate(['list']));
  }

}
