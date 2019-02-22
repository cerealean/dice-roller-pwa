import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallInstructionsModalComponent } from './install-instructions-modal.component';

describe('InstallInstructionsModalComponent', () => {
  let component: InstallInstructionsModalComponent;
  let fixture: ComponentFixture<InstallInstructionsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallInstructionsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallInstructionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
