import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(0, '', this.powers[0], null);
  submitted = false;
  constructor() { }
  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    console.log(JSON.stringify(this.model));
  }
}