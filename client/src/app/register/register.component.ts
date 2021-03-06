import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private accountService:AccountService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe(response=>{
      console.log(response);
      this.cansel();
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    })
  }

  cansel(){
    this.cancelRegister.emit(false);
    console.log("cancelled");
  }
}
