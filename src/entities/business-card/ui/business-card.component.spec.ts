import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, RouterLink } from '@angular/router';
import { ButtonComponent } from '@shared/ui';
import { BusinessCardComponent } from './business-card.component';

describe('BusinessCardComponent', () => {
    let component: BusinessCardComponent;
    let fixture: ComponentFixture<BusinessCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BusinessCardComponent, RouterLink, ButtonComponent],
            providers: [provideRouter([])],
        }).compileComponents();

        fixture = TestBed.createComponent(BusinessCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
