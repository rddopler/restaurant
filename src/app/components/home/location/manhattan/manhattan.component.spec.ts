import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManhattanComponent } from './manhattan.component';

describe('ManhattanComponent', () => {
  let component: ManhattanComponent;
  let fixture: ComponentFixture<ManhattanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManhattanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManhattanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
