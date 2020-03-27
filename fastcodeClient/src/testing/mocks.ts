export { ActivatedRoute } from '@angular/router';
import { Input, Injectable, Directive } from "@angular/core";
import { of, Observable, Subject } from "rxjs";
import { ITokenDetail } from 'projects/fast-code-core/src/public_api';

@Directive({
  selector: '[routerLink]'
})
export class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;
  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

export let GlobalsMock = {
  isSmallDevice$: of({ value: true }),
  isMediumDeviceOrLess$: of({ value: true })
};

export let ActivatedRouteMock = {
  snapshot: { 
    paramMap: { get: () => { return '1' } },
    queryParams: { get: () => { return '1' } }
  }
}

@Injectable()
export class RouterMock { 
  navigate = (commands: any) => {}; 
}

@Injectable()
export class PickerDialogServiceMock { }

export const dialogRefMock = {
  afterClosed: () => of(true),
  close: (dialogResult: any) => {},
  updateSize: () => {}
};

export class MatDialogMock {
  // When the component calls this.dialog.open(...) we'll return an object
  // with an afterClosed method that allows to subscribe to the dialog result observable.
  open() {
    return dialogRefMock;
  }
}