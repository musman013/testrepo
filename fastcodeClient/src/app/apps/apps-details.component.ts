import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

import { AppsService } from './apps.service';
import { IApps } from './iapps';
import { BaseDetailsComponent, Globals, PickerDialogService, ErrorService } from 'projects/fast-code-core/src/public_api';



@Component({
  selector: 'app-apps-details',
  templateUrl: './apps-details.component.html',
  styleUrls: ['./apps-details.component.scss']
})
export class AppsDetailsComponent extends BaseDetailsComponent<IApps> implements OnInit {
	title:string='Apps';
	parentUrl:string='apps';
	//roles: IRole[];  
	constructor(
		public formBuilder: FormBuilder,
		public router: Router,
		public route: ActivatedRoute,
		public dialog: MatDialog,
		public global: Globals,
		public dataService: AppsService,
		public pickerDialogService: PickerDialogService,
		public errorService: ErrorService,
	) {
		super(formBuilder, router, route, dialog, global, pickerDialogService, dataService, errorService);
  }

	ngOnInit() {
		this.entityName = 'Apps';
		this.setAssociations();
		super.ngOnInit();
		this.setForm();
    this.getItem();
    this.setPickerSearchListener();
  }
  
  setForm(){
    this.itemForm = this.formBuilder.group({
      artifactId: ['', Validators.required],
      authMethod: [''],
      authTable: [''],
      caching: [false],
      createdDate: [''],
      description: [''],
      destinationPath: ['', Validators.required],
      emailTemplates: [false],
      entityHistory: [false],
      groupId: ['', Validators.required],
      id: [{value: '', disabled: true}, Validators.required],
      jdbcPassword: ['', Validators.required],
      jdbcUrl: ['', Validators.required],
      jdbcUsername: ['', Validators.required],
      name: [''],
      processAdminApp: [false],
      processManagement: [false],
      scheduler: [false],
      schema: [''],
      upgrade: [false],
      userId: [''],
      userOnly: [false],
      
    });
      
  }
  
  onItemFetched(item: IApps) {
    this.item = item;
		this.itemForm.patchValue(item);
		this.itemForm.get('createdDate').setValue(item.createdDate? new Date(item.createdDate): null);
  }
  
	setAssociations(){
  	
		this.associations = [
			{
				column: [
					{
						key: 'appId',
						value: undefined,
						referencedkey: 'id'
					},
				],
				isParent: true,
				table: 'task',
				type: 'OneToMany',
			},
		];
		
		this.childAssociations = this.associations.filter(association => {
			return (association.isParent);
		});

		this.parentAssociations = this.associations.filter(association => {
			return (!association.isParent);
		});
	}
}
