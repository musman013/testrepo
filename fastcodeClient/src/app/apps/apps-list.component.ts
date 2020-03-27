import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { IApps } from './iapps';
import { AppsService } from './apps.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppsNewComponent } from './apps-new.component';
import { BaseListComponent, Globals, IListColumn, listColumnType, PickerDialogService, ErrorService } from 'projects/fast-code-core/src/public_api';


@Component({
  selector: 'app-apps-list',
  templateUrl: './apps-list.component.html',
  styleUrls: ['./apps-list.component.scss']
})
export class AppsListComponent extends BaseListComponent<IApps> implements OnInit {

	title:string = "Apps";
	constructor(
		public router: Router,
		public route: ActivatedRoute,
		public global: Globals,
		public dialog: MatDialog,
		public changeDetectorRefs: ChangeDetectorRef,
		public pickerDialogService: PickerDialogService,
		public dataService: AppsService,
		public errorService: ErrorService,
	) { 
		super(router, route, dialog, global, changeDetectorRefs, pickerDialogService, dataService, errorService)
  }

	ngOnInit() {
		this.entityName = 'Apps';
		this.setAssociation();
		this.setColumns();
		this.primaryKeys = [ "id",  ]
		super.ngOnInit();
	}
  
  
	setAssociation(){
  	
		this.associations = [
		];
	}
  
  	setColumns(){
  		this.columns = [
    		{
				column: 'artifactId',
				label: 'artifactId',
				sort: true,
				filter: true,
				type: listColumnType.String
			},
    		{
				column: 'authMethod',
				label: 'authMethod',
				sort: true,
				filter: true,
				type: listColumnType.String
			},
    		{
				column: 'authTable',
				label: 'authTable',
				sort: true,
				filter: true,
				type: listColumnType.String
			},
    		{
				column: 'caching',
				label: 'caching',
				sort: true,
				filter: true,
				type: listColumnType.Boolean
			},
    		{
				column: 'createdDate',
				label: 'createdDate',
				sort: true,
				filter: true,
				type: listColumnType.Date
			},
    		{
				column: 'description',
				label: 'description',
				sort: true,
				filter: true,
				type: listColumnType.String
			},
    		{
				column: 'destinationPath',
				label: 'destinationPath',
				sort: true,
				filter: true,
				type: listColumnType.String
			},
    		{
				column: 'emailTemplates',
				label: 'emailTemplates',
				sort: true,
				filter: true,
				type: listColumnType.Boolean
			},
    		{
				column: 'entityHistory',
				label: 'entityHistory',
				sort: true,
				filter: true,
				type: listColumnType.Boolean
			},
    		{
				column: 'groupId',
				label: 'groupId',
				sort: true,
				filter: true,
				type: listColumnType.String
			},
    		{
				column: 'id',
				label: 'id',
				sort: false,
				filter: false,
				type: listColumnType.Number
			},
    		{
				column: 'jdbcPassword',
				label: 'jdbcPassword',
				sort: true,
				filter: true,
				type: listColumnType.String
			},
    		{
				column: 'jdbcUrl',
				label: 'jdbcUrl',
				sort: true,
				filter: true,
				type: listColumnType.String
			},
    		{
				column: 'jdbcUsername',
				label: 'jdbcUsername',
				sort: true,
				filter: true,
				type: listColumnType.String
			},
    		{
				column: 'name',
				label: 'name',
				sort: true,
				filter: true,
				type: listColumnType.String
			},
    		{
				column: 'processAdminApp',
				label: 'processAdminApp',
				sort: true,
				filter: true,
				type: listColumnType.Boolean
			},
    		{
				column: 'processManagement',
				label: 'processManagement',
				sort: true,
				filter: true,
				type: listColumnType.Boolean
			},
    		{
				column: 'scheduler',
				label: 'scheduler',
				sort: true,
				filter: true,
				type: listColumnType.Boolean
			},
    		{
				column: 'schema',
				label: 'schema',
				sort: true,
				filter: true,
				type: listColumnType.String
			},
    		{
				column: 'upgrade',
				label: 'upgrade',
				sort: true,
				filter: true,
				type: listColumnType.Boolean
			},
    		{
				column: 'userId',
				label: 'userId',
				sort: true,
				filter: true,
				type: listColumnType.Number
			},
    		{
				column: 'userOnly',
				label: 'userOnly',
				sort: true,
				filter: true,
				type: listColumnType.Boolean
			},
		  	{
				column: 'actions',
				label: 'Actions',
				sort: false,
				filter: false,
				type: listColumnType.String
			}
		];
		this.selectedColumns = this.columns;
		this.displayedColumns = this.columns.map((obj) => { return obj.column });
  	}
	addNew() {
		super.addNew(AppsNewComponent);
	}
  
}
