import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Router, ActivatedRoute } from '@angular/router';
// import {MapComponent} from '../../map/map.component'

declare var google: any;
declare var map: any;



@Component({
	selector: 'list',
	templateUrl: 'list.template.html',
	providers:[ArticlesService]


})
export class ListComponent {
	// @ViewChild('refDates') refDates;

	articles: any[];
	errorMessage: string;

	markers: any = [];
	map = null;
	resList = [];
	tempIndex: any = null;
	showPinBubble: boolean = false;
	tempMarker: any = null;
	search: any;
	routingObserver: any;


	constructor(private _articlesService: ArticlesService, private _route: ActivatedRoute,
		private ref: ChangeDetectorRef) {
		// load map
		// setTimeout(() => {
		// 	this.map = new google.maps.Map(document.getElementById('map'), {
		// 		center: { lat: 32.078985, lng: 34.774306 },
		// 		zoom: 12,
		// 		disableDefaultUI: true,
		// 		streetViewControl: false,
		// 		zoomControl: true,
		// 		mapTypeControl: false,
		// 		mapTypeId: google.maps.MapTypeId.ROADMAP
		// 	});
		// 	//infoBubble close when click/leave map
		// 	this.map.addListener('click', () => {
		// 		setTimeout(() => {
		// 			this.showPinBubble = false;
		// 			this.ref.detectChanges();
		// 		}, 0);
		// 	});
		// 	this.map.addListener('mouseout', () => {
		// 		setTimeout(() => {
		// 			this.showPinBubble = false;
		// 			this.ref.detectChanges();
		// 		}, 0);
		// 	});
		// }, 0);
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



