import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'multiSelect',
  templateUrl: './multiselectui.component.html',
  styleUrls: ['./multiselectui.component.css']
})
export class MultiselectuiComponent implements OnInit {
	
 // All input array goes here.	
 @Input() filter: any;
 @Input() filterBy: any;
 @Input() options: any;

 // All any array goes here
 countryLists: any;
 address: any;
 countriesArrTemp: any;
 checkCountriesArr:any = [];

 // All string variables goes here
 arrowDown:string = "arrowDown";
 arrowUp:string = "arrowUp";
 selectedOptionsHtml: string = "";
 selectedOptionsHtmlTemp: string = "";

 // All boolean variables goes here
 listHtml:boolean = false;
 arrowDownstatus: boolean = false;

 constructor() { }

  ngOnInit(): void {

	this.countriesArrTemp = this.options; // Operation: all options data stored into Temp array.
	this.countriesArrResult(); // Operation: By details call country data here
  		
  }

  countriesArrResult(){ 
		for(let country of this.options){	
			country.isChecked = false;	// Operation: all checkbox value goes here default false.
		};
	}

    onChange(event:any) {
    	let isCheck = event.target.checked;
    	if(isCheck == true){
    		this.checkCountriesArr.push(event.target.value);
    	}else{
    		var index = this.checkCountriesArr.indexOf(event.target.value);
			this.checkCountriesArr.splice(index, 1);
    	}
	}

	onClickArrowDown(event:any){
		this.arrowDownstatus = !this.arrowDownstatus; // Operation: toogle class used here for arrowUp and arrowDown
	}
	
	searchCountry(filterValue:any){	

		if(this.arrowDownstatus == false){
			this.arrowDownstatus = !this.arrowDownstatus; // Operation: toogle class used here for arrowUp and arrowDown
		}
		
		let filter = filterValue.target.value;
		let filterBy = this.filterBy;
		this.options = this.countriesArrTemp ;
		if (filter == '') {
			return this.options;
		}

		let filterByCondition = this.filterBy.split(',');
		
		for(let param of filterByCondition){

		if(param == "label"){
			this.options = this.options.filter( (res: any) => {

				res.isChecked = false; // Operation: all checkbox default uncheck here
				for(let countryVal of this.checkCountriesArr){
					if(countryVal == res.label){
						res.isChecked = true; // Operation: here value match with check input then check here checkbox
					}
				}

		        return res.label.toLowerCase().match(filter.toLowerCase());
		    });
		}
		if(param == "value"){
			this.options = this.options.filter( (res: any) => {

				res.isChecked = false;
				for(let countryVal of this.checkCountriesArr){
					if(countryVal == res.value){
						res.isChecked = true; // Operation: here value match with check input then check here checkbox
					}
				}

		        return res.value.toLowerCase().match(filter.toLowerCase());
		    });

		    return this.options;
		}
		
		}

	}
	

}
