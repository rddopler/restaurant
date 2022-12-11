import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrooklynComponent } from './brooklyn.component';

describe('BrooklynComponent', () => {
  let component: BrooklynComponent;
  let fixture: ComponentFixture<BrooklynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrooklynComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrooklynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
