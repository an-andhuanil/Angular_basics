import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './posts.model';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }
  

  createAndStorePost(title : string, content : string){
    const postData : Post =  {title : title, content : content}
    this.http.post<{ name:string }>('https://http-demo-test-default-rtdb.firebaseio.com/posts.json ',postData,{ observe : 'response' }).subscribe((res)=>{
      return res;
    });
  }

  fetchPosts(){
    return this.http.get<{[key : string] : Post}>('https://http-demo-test-default-rtdb.firebaseio.com/posts.json ',
      // {
      //   headers : new HttpHeaders({'Custom-header' : 'Hello'}),
      //   params : new HttpParams().set( 'Print' , 'pretty' )
      // }
    ).
    pipe(map((responseData ) =>{
      const postsArray : Post[] = [];
      for (const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postsArray.push({ ...responseData[key], id :key});
        }
      }
      return  postsArray;
    }),catchError(errorsRes =>{
      return throwError(errorsRes);
    })
  );
  }

  deletePost(){
    return this.http.delete('https://http-demo-test-default-rtdb.firebaseio.com/posts.json ');
  }
}
