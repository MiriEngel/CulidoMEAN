import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ArticlesService } from '../articles.service';



@Component({
	selector: 'view',
	templateUrl: 'view.template.html',
	styles: [
		`
  .my-class {
    background-color: yellow;
  }
  `
	],
	providers: [AuthenticationService, ArticlesService]
})
export class ViewComponent {

	@ViewChild('ref') ref;
	user: any;
	article: any;
	routingObserver: any;
	errorMessage: string;
	allowEdit: boolean = false;
	isClassVisible: any = false;
	titleAlert: string = '';

	constructor(
		private _router: Router,
		private _route: ActivatedRoute,
		private _authenticationService: AuthenticationService,
		private _articlesService: ArticlesService,
	) { }


	ngOnInit() {
		this.user = this._authenticationService.user
		this.routingObserver = this._route.params.subscribe(params => {
			let articleId = params['articleId'];
			this._articlesService
				.read(articleId)
				.subscribe(
				article => {
					this.article = article;
					this.allowEdit = (this.user && this.user._id === this.article.creator._id);
				},
				error => this._router.navigate(['/articles'])
				);
		});
	}

	ngOnDestroy() {
		this.routingObserver.unsubscribe();
	}

}

