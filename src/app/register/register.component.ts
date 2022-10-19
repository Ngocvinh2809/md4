import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  public age = '';
  public phone = '';
  public email = '';
  public countrys = ['Việt Nam','Trung Quốc','Hàn Quốc','Lào','Thái Lan'];
  public genders = ['Nam','Nữ','Giới Tính Khác'];
  ngOnInit(): void {
  }
  handleSubmit(value: any): void {
    console.log(value);
  }
}
