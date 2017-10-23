import { AuthService } from '../services/auth.service';
import {Component} from "@angular/core";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    constructor(public auth: AuthService) { }
}
