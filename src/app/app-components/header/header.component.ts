import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ApplicationConfig} from '../../shared/application-config/application-config.interface';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [MatToolbarModule, MatIconModule, MatButtonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    // readonly title = input<string>();
    readonly appConfig = input.required<ApplicationConfig>();
    readonly menuClick = output<Event>();

    // readonly title = 'angular-20250519';
    // readonly logoUrl = 'favicon.ico';

    onMenuClick(event: Event) {
        // eslint-disable-next-line no-console
        console.log('Menu clicked');

        this.menuClick.emit(event);
    }
}
