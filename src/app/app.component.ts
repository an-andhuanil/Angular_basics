import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  genders = ['male', 'female'];
  signupForm : FormGroup;
  forbiddenUsernames = ['Chris','Anna'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData':new FormGroup({
        'username': new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
        'email': new FormControl(null,[Validators.required,Validators.email],this.forbideenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([

      ])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.signupForm.statusChanges.subscribe(
      (statusChanges) => console.log(statusChanges)
    );
  }

  onSubmit(){
    console.log(this.signupForm);
    console.log(this.signupForm.value);
  }
  
  onAddHobby(){
    console.log('btn-clicked');
    const control = new FormControl(null,Validators.required);
   (<FormArray> this.signupForm.get('hobbies')).push(control);
  }
  forbiddenNames(control : FormControl):{[s:string] : boolean}{
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {'forbiddenUsernames': true}
    }
    return null;
  };

  forbideenEmails(control : FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve,reject)=>{
      setTimeout(() =>{
        if(control.value === 'test@test.com'){
          resolve({'emailForbidden' : true})
        }else{
          resolve (null);
        }
      },1500);
    });
    return promise;
  }
}
 