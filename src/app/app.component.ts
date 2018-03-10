import { Component } from '@angular/core';
import { ITableConfig } from './pcac/table/table.model';

@Component({
  selector: 'pcac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pioneer Code Angular Charts';

  tableConfig = {
    headerConfig: {
      title: 'I Am A Table'
    },
    data: [
      {
        data: [
          {
            value: 'Snack'
          },
          {
            value: 'Taste'
          },
          {
            value: 'Calories'
          },
          {
            value: 'Score'
          }
        ]
      },
      {
        data: [
          {
            value: 'Chocolate Chip'
          },
          {
            value: 'Tastey'
          },
          {
            value: '120'
          },
          {
            value: '8/10'
          }
        ]
      },
      {
        data: [
          {
            value: 'Chips'
          },
          {
            value: 'Gross'
          },
          {
            value: '200'
          },
          {
            value: '7/10'
          }
        ]
      },
      {
        data: [
          {
            value: 'Brownie'
          },
          {
            value: 'Yummy'
          },
          {
            value: '70'
          },
          {
            value: '5/10'
          }
        ]
      },
      {
        data: [
          {
            value: 'Peanuts'
          },
          {
            value: 'Ick'
          },
          {
            value: '160'
          },
          {
            value: '4.5/10'
          }
        ]
      }
    ]
  } as ITableConfig;
}
