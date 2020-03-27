import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

import { TestingModule, EntryComponents } from '../../testing/utils';
import { IApps, AppsService, AppsDetailsComponent, AppsListComponent } from './index';

describe('AppsDetailsComponent', () => {
  let component: AppsDetailsComponent;
  let fixture: ComponentFixture<AppsDetailsComponent>;
  let el: HTMLElement;
    
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
  };
  
  describe('Unit Tests', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppsDetailsComponent       
        ],
        imports: [TestingModule],
        providers: [
          AppsService,
        ],
        schemas: [NO_ERRORS_SCHEMA]  
      }).compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(AppsDetailsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should run #ngOnInit()', async () => {
      spyOn(component.dataService, "getById").and.returnValue(of(data));
      component.ngOnInit();

      expect(component.item).toEqual(data);
      expect(component.itemForm.getRawValue()).toEqual(data);
      component.itemForm.enable();
      expect(component.itemForm.valid).toEqual(true);
      expect(component.title.length).toBeGreaterThan(0);
      expect(component.associations).toBeDefined();
      expect(component.childAssociations).toBeDefined();
      expect(component.parentAssociations).toBeDefined();
    });

    it('should run #onSubmit()', async () => {
      component.item = data;
      component.itemForm.patchValue(data);
      component.itemForm.enable();
      fixture.detectChanges();

      spyOn(component, "onSubmit").and.returnValue();
      el = fixture.debugElement.query(By.css('button[name=save]')).nativeElement;
      el.click();

      expect(component.onSubmit).toHaveBeenCalled();
    });

    it('should call the back', async () => {
      component.item = data;
      fixture.detectChanges();

      spyOn(component, "onBack").and.returnValue();
      el = fixture.debugElement.query(By.css('button[name=back]')).nativeElement;
      el.click();
      
      expect(component.onBack).toHaveBeenCalled();
    });

  });
  
  describe('Integration Tests', () => {
    beforeEach(async(() => {

      TestBed.configureTestingModule({
        declarations: [
          AppsDetailsComponent,
          AppsListComponent
        ].concat(EntryComponents),
        imports: [
          TestingModule,
          RouterTestingModule.withRoutes([
            { path: 'apps', component: AppsDetailsComponent },
            { path: 'apps/:id', component: AppsListComponent }
          ])
        ],
        providers: [
          AppsService
        ]

      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(AppsDetailsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should run #ngOnInit()', async () => {
      spyOn(component.dataService, "getById").and.returnValue(of(data));

      component.ngOnInit();

      expect(component.item).toEqual(data);
      expect(component.itemForm.getRawValue()).toEqual(data);
      component.itemForm.enable();
      expect(component.itemForm.valid).toEqual(true);
      expect(component.title.length).toBeGreaterThan(0);
      expect(component.associations).toBeDefined();
      expect(component.childAssociations).toBeDefined();
      expect(component.parentAssociations).toBeDefined();
    });

    it('should update the record and redirect to list component', async () => {
      const router = TestBed.get(Router);
      const location = TestBed.get(Location);
      let navigationSpy = spyOn(router, 'navigate').and.callThrough();

      component.item = data;
      component.itemForm.patchValue(data);
      component.itemForm.enable();
      fixture.detectChanges();

      spyOn(component.dataService, 'update').and.returnValue(of(data));
      el = fixture.debugElement.query(By.css('button[name=save]')).nativeElement;
      el.click();

      let responsePromise = navigationSpy.calls.mostRecent().returnValue;
      await responsePromise;
      expect(location.path()).toBe('/apps');

    });

    it('should go back to list component when back button is clicked', async () => {
      const router = TestBed.get(Router);
      const location = TestBed.get(Location);
      let navigationSpy = spyOn(router, 'navigate').and.callThrough();

      component.item = data;
      fixture.detectChanges();
      el = fixture.debugElement.query(By.css('button[name=back]')).nativeElement;
      el.click();

      let responsePromise = navigationSpy.calls.mostRecent().returnValue;
      await responsePromise;
      expect(location.path()).toBe('/apps');

    });

  });
  
});
