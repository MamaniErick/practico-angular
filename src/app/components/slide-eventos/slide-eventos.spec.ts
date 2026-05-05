import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideEventos } from './slide-eventos';

describe('SlideEventos', () => {
  let component: SlideEventos;
  let fixture: ComponentFixture<SlideEventos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideEventos],
    }).compileComponents();

    fixture = TestBed.createComponent(SlideEventos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
