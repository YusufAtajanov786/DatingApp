import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  @Input() userFromHomeComponent:any; 
  @Output() cancelRegister = new EventEmitter()
  model:any = {};

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe(response=>{
      console.log(response);
      this.cansel();
    }, error => {
      console.log(error)
    })
  }

  cansel(){
    console.log("cancelled");
  }
}
