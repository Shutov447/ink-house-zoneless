import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from '@shared/ui';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { ReproductionsShowcaseComponent } from './reproductions-showcase.component';
import { countriesMock } from './reproductions-showcase.mock';

describe('ReproductionsShowcaseComponent', () => {
    let component: ReproductionsShowcaseComponent;
    let fixture: ComponentFixture<ReproductionsShowcaseComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReproductionsShowcaseComponent, ButtonComponent],
            providers: [provideHttpClient(), provideHttpClientTesting()],
        }).compileComponents();

        fixture = TestBed.createComponent(ReproductionsShowcaseComponent);
        fixture.componentRef.setInput('selectedCountry', countriesMock[0]);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
