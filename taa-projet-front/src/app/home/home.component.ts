import { Component } from '@angular/core';
import {AccordionModule} from 'ng2-accordion';

@Component({
  selector: 'taa-home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {
    isGroupOpen = false;

    groups: Array<any> = [
        {
            heading: 'Rennes',
            content: ' Cloudy :( | Foot : 7/10 | tennis : 5/10 | velo : 6/10'
        },
        {
            heading: 'Nantes',
            content: ' Sunny :) | Foot : 9/10 | tennis : 9/10 | velo : 9/10'
        },
        {
            heading: 'Brest ',
            content: 'Windy :| | Foot : 6/10 | tennis : 4/10 | velo : 4/10'
        }
    ];

}
