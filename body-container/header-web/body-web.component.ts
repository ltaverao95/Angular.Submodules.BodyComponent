import { Component } from '@angular/core';

@Component({
  selector: 'body-web',
  standalone: true,
  templateUrl: './body-web.component.html',
  styles: [
    `
      .body {
        &__p {
          color:red ;
        }
        &--green{
          color: green,
        }
      }
    `,
  ],
})
export class BodyWebComponent {
  
}
