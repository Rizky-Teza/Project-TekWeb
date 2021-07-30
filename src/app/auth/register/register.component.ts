import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  

  constructor(
    public router:Router,
    public auth:AngularFireAuth 
  ) { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password= new FormControl('', [Validators.minLength(6), Validators.required]);

  user:any={};
  hide:boolean=true;

  //email = new FormControl('', [Validators.required, Validators.email]);
  //password = new FormControl('', [Validators.minLength(6), Validators.required]);

  loading!: boolean;
  register()
  {
    this.loading=true;
    this.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(res=>{
      this.loading=false;
      alert('register berhasil');
      this.router.navigate(['auth/login']);
    }).catch(err=>{
      this.loading=false;
      alert('Ada masalah');
    })
    
  }

}
