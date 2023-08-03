import { ComponentFixture, TestBed } from '@angular/core/testing';


import { TopstateComponent } from './topstate.component';

describe('TopstateComponent', () => {
  let component: TopstateComponent;
  let fixture: ComponentFixture<TopstateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopstateComponent]
    });
    fixture = TestBed.createComponent(TopstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
