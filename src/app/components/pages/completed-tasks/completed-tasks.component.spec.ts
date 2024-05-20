import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTasksComponent } from './completed-tasks.component';
import { TaskListComponent } from '../../task-list/task-list.component';

describe('CompletedTasksComponent', () => {
  let component: CompletedTasksComponent;
  let fixture: ComponentFixture<CompletedTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedTasksComponent,TaskListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompletedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
