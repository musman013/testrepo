import { Component, OnInit, Inject } from '@angular/core';
import { AppsService } from './apps.service';
import { IApps } from './iapps';

import { ActivatedRoute,Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Globals, BaseNewComponent, PickerDialogService, ErrorService } from 'projects/fast-code-core/src/public_api';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-apps-new',
  templateUrl: './apps-new.component.html',
  styleUrls: ['./apps-new.component.scss']
})
export class AppsNewComponent extends BaseNewComponent<IApps> implements OnInit {
  
    title:string = "New Apps";
	constructor(
		public formBuilder: FormBuilder,
		public router: Router,
		public route: ActivatedRoute,
		public dialog: MatDialog,
		public dialogRef: MatDialogRef<AppsNewComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		public global: Globals,
		public pickerDialogService: PickerDialogService,
		public dataService: AppsService,
		public errorService: ErrorService,
	) {
		super(formBuilder, router, route, dialog, dialogRef, data, global, pickerDialogService, dataService, errorService);
	}
 
	ngOnInit() {
		this.entityName = 'Apps';
		this.setAssociations();
		super.ngOnInit();
    this.setForm();
		this.checkPassedData();
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
	 
	setAssociations(){
  	
		this.associations = [
		];
		this.parentAssociations = this.associations.filter(association => {
			return (!association.isParent);
		});

	}  
    
}
