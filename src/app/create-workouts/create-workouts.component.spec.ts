import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkoutsComponent } from './create-workouts.component';

describe('CreateWorkoutsComponent', () => {
  let component: CreateWorkoutsComponent;
  let fixture: ComponentFixture<CreateWorkoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWorkoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
