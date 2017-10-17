import { Component, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticlesService } from '../articles.service';
import { AuthenticationService } from '../../authentication/authentication.service';

 


@Component({
  selector: 'create',
  templateUrl: 'create.template.html',
  providers:[AuthenticationService]
})
export class CreateComponent {

  titleAlert: string = 'This field is required';
  flagIsEdit: boolean = false;
  routingObserver: any;

    article: any = {};
user:any = {};

  // CONSTRUCTOR
  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router,
    private _articlesService: ArticlesService,
    private elRef: ElementRef,
    private fb: FormBuilder, private ref: ChangeDetectorRef,
    private _route: ActivatedRoute) {
      
      this.user = _authenticationService.user;
      if(!this.user){
        this._router.navigate(['/authentication/signin']);
      }
    // //if opening edit page load asset info
    // this.routingObserver = this._route.params.subscribe(params => {
    //   if (params['articleId'] != undefined) {
    //     this.flagIsEdit = true;
    //     let articleId = params['articleId'];
    //     this._articlesService.read(articleId).subscribe(
    //       article => {
    //         this.article = article;
    //         this.imgGalleryUploaded = this.article.imgUrl;
    //       },
    //       error => {
    //         alert('failed to load asset page. \nplease try again.');
    //         this._router.navigate(['/articles']);
    //       }
    //     );
    //   }
    // });
  }

  ngOnInit() {

  }//end of ngoninit


  //upload article to server with images
  createArticle() {

  }

  //send to create new article 
  uploadArticle() {
    this._articlesService.create(this.article).subscribe(
      createdArticle => {
         /*this.navigate(createdArticle);*/ },
      error => {
        alert('failed to upload article! \nplease try again \nerror: ' + error);
      })
  }


 
  initParams() {
    this.article.title = '';

    // this.rFormStep1 = this.fb.group({
    //   'title': [null, Validators.required],
    //   'content': [null, Validators.required],
    // });
  }



  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        control.controls.forEach(c => this.markFormGroupTouched(c));
      }
    });
  }




}

