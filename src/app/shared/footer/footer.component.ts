import { Component, HostBinding } from '@angular/core';
import * as $ from 'jquery';
@Component({
    moduleId: module.id,
    selector: 'footer-cmp',
    templateUrl: 'footer.component.html'
})

export class FooterComponent{
    test : Date = new Date();
}
