import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'list',
	templateUrl: 'list.template.html',
	providers:[ArticlesService]


})
export class ListComponent {


	articles: any[];
	errorMessage: string;

	search: any;



	constructor(private _articlesService: ArticlesService, private _route: ActivatedRoute,
		private ref: ChangeDetectorRef) {

			this._articlesService.list().subscribe(articles => {
								this.articles = articles;
							},
				error => alert("Error in bringing results: " + error)
				);

	}

	ngOnInit() {
		// this.search = {};
		// this.search.dates = [];
		// setTimeout(() => {
		// 	this.routingObserver = this._route.params.subscribe(params => {
		// 		if (params && params['searchStr']) {
		// 			this.getListWithParam(params['searchStr']);
		// 		}
		// 		else {
		// 			//bring all markers
		// 			this._articlesService.list().subscribe(articles => {
		// 				this.articles = articles;
		// 				this.articles.forEach(article => {
		// 					article.created = article.created.substring(0, 10);
		// 					this.createMarker(article);
		// 				});
		// 			},
		// 				error => alert("Error in bringing results: " + error)
		// 			);
		// 		}
		// 	});
		// }, 0);

	}

	findByCity() {
		let searchStr = '';
		if (this.search.city && this.search.city !== undefined)
			searchStr = `city=${this.search.city}`;

		if (this.search.dates)
			// searchStr +=`&startDate=${new Date(this.refDates.beginDate.year,this.refDates.beginDate.month -1,this.refDates.beginDate.day ) }&endDate=${ new Date(this.refDates.endDate.year,this.refDates.endDate.month -1,this.refDates.endDate.day) }`;
			searchStr += `&startDate=${new Date(this.search.dates.startDate)}&endDate=${new Date(this.search.dates.endDate)}`;

		if (this.search.size)
			searchStr += `&size=${this.search.size}`;

		if (this.search.assetType)
			searchStr += `&assetType=${this.search.assetType}`;
		this.getListWithParam(searchStr);

	}

	getListWithParam(searchStr) {
		this._articlesService.queryList(searchStr).subscribe(articles => {
			this.articles = articles;
			this.articles.forEach(article => {
				article.created = article.created.substring(0, 10);
			});
		},
			error => console.log("Error in bringing results: ", error)
		);
	}



}



