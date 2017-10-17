import { Component } from '@angular/core';

@Component({
  selector: 'taa-activite-list',
  templateUrl: './activite-list.component.html',
  styleUrls: ['./activite-list.component.css']
})
export class ActiviteListComponent{

activities: any[] = [{ name: 'Foot' }, { name: 'Volley' }, { name: 'Surf' }
                    ,{ name: 'Tennis' }, { name: 'Basket' }, { name: 'Vélo' }];
  activitiesFilter: any = { name: '' };

}
