import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {

  baseUrl = "https://localhost:5001/api/";
  validationErrors:string[] = [];

  constructor( private http:HttpClient ) { }

  ngOnInit(): void {
  }

  get404Eror(){
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe( respons =>{
      console.log(respons);
    }, error =>{
      console.log(error);
    })
  }
  get400Eror(){
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe( respons =>{
      console.log(respons);
    }, error =>{
      console.log(error);
    })
  }
  get500Eror(){
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe( respons =>{
      console.log(respons);
    }, error =>{
      console.log(error);
    })
  }
  get401Eror(){
    this.http.get(this.baseUrl + 'buggy/auth').subscribe( respons =>{
      console.log(respons);
    }, error =>{
      console.log(error);
    })
  }

  get400ValidationError(){
    this.http.get(this.baseUrl + 'account/register', {}).subscribe( respons =>{
      console.log(respons);
    }, error =>{
      console.log(error);
      this.validationErrors = error;
    })
  }

}
