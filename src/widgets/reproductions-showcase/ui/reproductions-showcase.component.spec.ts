import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from '@shared/ui';
import { ReproductionsShowcaseComponent } from './reproductions-showcase.component';

describe('ReproductionsShowcaseComponent', () => {
    let component: ReproductionsShowcaseComponent;
    let fixture: ComponentFixture<ReproductionsShowcaseComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReproductionsShowcaseComponent, ButtonComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ReproductionsShowcaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
