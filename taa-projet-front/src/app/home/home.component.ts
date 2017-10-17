import { Component } from '@angular/core';
import {AccordionModule} from "ng2-accordion";

@Component({
  selector: 'taa-home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {
    isGroupOpen = false;

    groups: Array<any> = [
        {
            heading: 'Rennes',
            content: ' Cloudy :('
        },
        {
            heading: 'Nantes',
            content: ' Sunny :) '
        },
        {
            heading: 'Brest ',
            content: 'Windy :| '
        }
    ];

    removeAngular2AccordionGroup() {
        this.groups.splice(1,1);
    }

    addAngular2AccordionGroup() {
        let accordionGroupContent = {heading:'Hi New Content !', content:'Content angular 2 accordion '};
        this.groups.splice(1,0,accordionGroupContent);
    }
}
