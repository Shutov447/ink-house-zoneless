import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Color } from '@shared/lib';
import { IconComponent } from './icon.component';

describe('IconComponent', () => {
    let component: IconComponent;
    let fixture: ComponentFixture<IconComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [IconComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(IconComponent);
        fixture.componentRef.setInput('name', 'logo');
        fixture.componentRef.setInput('color', Color.BlackRock);
        fixture.componentRef.setInput('noticesNumber', 4);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
