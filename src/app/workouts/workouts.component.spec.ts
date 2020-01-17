import { ModalModule } from './../shared/modal/modal.module';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutsComponent } from './workouts.component';

describe('WorkoutsComponent', () => {
  let component: WorkoutsComponent;
  let fixture: ComponentFixture<WorkoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutsComponent ],
      imports: [ ModalModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
