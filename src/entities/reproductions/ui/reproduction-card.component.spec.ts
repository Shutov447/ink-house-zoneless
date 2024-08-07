import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReproductionCardComponent } from './reproduction-card.component';

describe('ReproductionCardComponent', () => {
    let component: ReproductionCardComponent;
    let fixture: ComponentFixture<ReproductionCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReproductionCardComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ReproductionCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
