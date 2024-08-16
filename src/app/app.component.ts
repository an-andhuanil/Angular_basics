import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm : NgForm;
  defaultSubcription = 'advanced';



  onSubmit(){
    console.log(this.signUpForm.value)
  }















































  

  // defaultQuestion = 'pet';
  // genders = ['male','female']
  // answer = '';



  // user = {
  //   username :'',
  //   mail :'',
  //   secretQuestion:'',
  //   answer:'',
  //   gender:''

  // }
  // // suggestUserName() {
  // //   const suggestedName = 'Superuser';
  // // }

  // onSubmit(form :NgForm){

  //   this.user.username = this.signUpForm.value.userData.usename;
  //   this.user.mail = this.signUpForm.value.userData.email;
  //   this.user.secretQuestion = this.signUpForm.value.secret;
  //   this.user.answer = this.signUpForm.value.questionAnswer;
  //   this.user.gender = this.signUpForm.value.gender;
  //   console.log(this.user);

  // }

  // suggestUsername(){
  //   const suggestedName = 'Superuser';

  //   console.log("btn-clicked");
  //   // this.signUpForm.setValue({
  //   //   userData:{
  //   //     usename : this.suggestUserName,
  //   //     email:''
  //   //   }
  //   // })

  //   this.signUpForm.form.patchValue({
  //     userData :{
  //       usename:suggestedName
  //     }

  //   })
  // }
}
