import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReproductionCardComponent } from './reproduction-card.component';
import { reproductionMock } from './reproduction.mock';

describe('ReproductionCardComponent', () => {
    let component: ReproductionCardComponent;
    let fixture: ComponentFixture<ReproductionCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReproductionCardComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(ReproductionCardComponent);
        fixture.componentRef.setInput('reproduction', reproductionMock);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
