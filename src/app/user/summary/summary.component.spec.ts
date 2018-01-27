import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { ClarityModule } from '@clr/angular';
import { SummaryComponent } from './summary.component';


describe('SummaryComponent', () => {

    let expectedMsg: string = 'This is a page to help demonstrate routing.';

    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                SummaryComponent
            ],
            imports: [
                ClarityModule.forRoot()
            ]
        });

        fixture = TestBed.createComponent(SummaryComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;

    });

    afterEach(() => {
        fixture.destroy();
    });

    it('should create the about page', async(() => {
        expect(compiled).toBeTruthy();
    }));

    it(`should display: "${expectedMsg}"`, async(() => {
        expect(compiled.querySelector("p").textContent).toMatch(expectedMsg);
    }));


});
