import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';

import { TestingModule, EntryComponents, checkValues } from '../../testing/utils';
import { IApps,AppsService, AppsNewComponent } from './index';

describe('AppsNewComponent', () => {
  let component: AppsNewComponent;
  let fixture: ComponentFixture<AppsNewComponent>;
  
  let el: HTMLElement;
  
  let relationData: any = {
  }
  let data:IApps = {
		artifactId: 'artifactId1',
		authMethod: 'authMethod1',
		authTable: 'authTable1',
		caching: true,
		createdDate: new Date(),
		description: 'description1',
		destinationPath: 'destinationPath1',
		emailTemplates: true,
		entityHistory: true,
		groupId: 'groupId1',
		id: 1,
		jdbcPassword: 'jdbcPassword1',
		jdbcUrl: 'jdbcUrl1',
		jdbcUsername: 'jdbcUsername1',
		name: 'name1',
		processAdminApp: true,
		processManagement: true,
		scheduler: true,
		schema: 'schema1',
		upgrade: true,
		userId: 1,
		userOnly: true,
		... relationData

	};
  
  let formData = {...data};
  delete formData["id"];
  describe('Unit tests', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppsNewComponent
        ],
        imports: [TestingModule],
        providers: [
          AppsService,
          { provide: MAT_DIALOG_DATA, useValue: {} }
        ]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(AppsNewComponent);
      component = fixture.componentInstance;
      spyOn(component, 'manageScreenResizing').and.returnValue();
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should run #ngOnInit()', async(() => {
      component.ngOnInit();

      expect(component.title.length).toBeGreaterThan(0);
      expect(component.associations).toBeDefined();
      expect(component.parentAssociations).toBeDefined();
      expect(component.itemForm).toBeDefined();
    }));

    it('should run #onSubmit()', async () => {
      component.itemForm.patchValue(data);
      component.itemForm.enable();
      fixture.detectChanges();
      spyOn(component, "onSubmit").and.returnValue();
      el = fixture.debugElement.query(By.css('button[name=save]')).nativeElement;
      el.click();
      expect(component.onSubmit).toHaveBeenCalled();
    });

    it('should call the cancel', async () => {
      spyOn(component, "onCancel").and.callThrough();
      el = fixture.debugElement.query(By.css('a[name=cancel]')).nativeElement;
      el.click();
      expect(component.onCancel).toHaveBeenCalled();
    });
  })

  describe('Integration tests', () => {

    // had to create a different suite because couldn't override MAT_DIALOG_DATA provider
    describe('', () => {
      it('should set the passed data to form', async () => {

        TestBed.configureTestingModule({
          declarations: [
            AppsNewComponent
          ].concat(EntryComponents),
          imports: [TestingModule],
          providers: [
            AppsService,
            { provide: MAT_DIALOG_DATA, useValue: relationData }
          ]
        });
        TestBed.overrideProvider(MAT_DIALOG_DATA, {useValue : relationData})
        fixture = TestBed.createComponent(AppsNewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
  
        component.checkPassedData();
        fixture.detectChanges();
        expect(checkValues(component.itemForm.getRawValue(), relationData)).toBe(true);
      });
    })

    describe('', () => {
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [
            AppsNewComponent
          ].concat(EntryComponents),
          imports: [TestingModule],
          providers: [
            AppsService,
            { provide: MAT_DIALOG_DATA, useValue: {} }
          ]
        });
      }));
  
      beforeEach(() => {
        fixture = TestBed.createComponent(AppsNewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  
      it('should create', () => {
        expect(component).toBeTruthy();
      });
  
      it('should run #ngOnInit()', async(() => {
        component.ngOnInit();
  
        expect(component.title.length).toBeGreaterThan(0);
        expect(component.associations).toBeDefined();
        expect(component.parentAssociations).toBeDefined();
        expect(component.itemForm).toBeDefined();
        expect(component.data).toEqual({});
      }));
  
      it('should create the record and close the dialog with created object response', async () => {
        component.itemForm.patchValue(data);
        component.itemForm.enable();
        fixture.detectChanges();
        spyOn(component.dialogRef, "close").and.returnValue();
        spyOn(component.dataService, "create").and.returnValue(of(data));
  
        el = fixture.debugElement.query(By.css('button[name=save]')).nativeElement;
        el.click();
        expect(component.dialogRef.close).toHaveBeenCalledWith(data);
      });
  
      it('should close the dialog with null data when cancel button is pressed', async () => {
        spyOn(component.dialogRef, "close").and.returnValue();
        el = fixture.debugElement.query(By.css('a[name=cancel]')).nativeElement;
        el.click();
        expect(component.dialogRef.close).toHaveBeenCalledWith(null);
      });

    })

  })
  
});