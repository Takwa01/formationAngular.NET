import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExempleComponent } from './page-exemple.component';

describe('PageExempleComponent', () => {
  let component: PageExempleComponent;
  let fixture: ComponentFixture<PageExempleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageExempleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
