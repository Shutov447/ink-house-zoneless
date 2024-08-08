import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerAdComponent } from './banner-ad.component';

describe('BannerAdComponent', () => {
    let component: BannerAdComponent;
    let fixture: ComponentFixture<BannerAdComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BannerAdComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(BannerAdComponent);
        fixture.componentRef.setInput('title', 'Title ad');
        fixture.componentRef.setInput('texts', ['test1', 'test2']);
        fixture.componentRef.setInput('bgImage', 'image.png');
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
