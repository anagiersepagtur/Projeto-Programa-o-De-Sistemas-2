import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarUserComponent } from './criar-user.component';

describe('CriarUserComponent', () => {
  let component: CriarUserComponent;
  let fixture: ComponentFixture<CriarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
