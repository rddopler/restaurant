import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDiningComponent } from './private-dining.component';

describe('PrivateDiningComponent', () => {
  let component: PrivateDiningComponent;
  let fixture: ComponentFixture<PrivateDiningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateDiningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateDiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
