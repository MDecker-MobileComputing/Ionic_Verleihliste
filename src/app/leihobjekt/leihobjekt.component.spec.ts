import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { LeihobjektComponent } from './leihobjekt.component';

describe('MessageComponent', () => {
  let component: LeihobjektComponent;
  let fixture: ComponentFixture<LeihobjektComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeihobjektComponent],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(LeihobjektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
