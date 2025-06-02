import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {productsMock} from '../../../shared/products/products.mock';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatIconModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    readonly count = signal(0);

    readonly product = computed(() => productsMock[this.count()]);

    // eslint-disable-next-line max-statements
    constructor() {
        setInterval(() => {
            this.count.update(count => count + 1);
        }, 1000);

        const showCount = signal(false);
        const count = signal(0);
        const conditionalCount = computed(() => {
            console.warn('Computed calculated');

            return showCount() ? `The count: ${count()}` : `Nothing`;
        });

        // eslint-disable-next-line no-console
        console.log(conditionalCount());
        // eslint-disable-next-line no-console
        console.log(conditionalCount());
        // eslint-disable-next-line no-console
        console.log(conditionalCount());

        // eslint-disable-next-line no-console
        console.log('Update count');
        count.update(count => count + 1);

        // eslint-disable-next-line no-console
        console.log(conditionalCount());

        // eslint-disable-next-line no-console
        console.log('Update count');
        count.update(count => count + 1);

        // eslint-disable-next-line no-console
        console.log(conditionalCount());

        // eslint-disable-next-line no-console
        console.log('Update count');
        count.update(count => count + 1);

        // eslint-disable-next-line no-console
        console.log(conditionalCount());

        // eslint-disable-next-line no-console
        console.log('Show count: true');
        showCount.set(true);

        // eslint-disable-next-line no-console
        console.log(conditionalCount());
        // eslint-disable-next-line no-console
        console.log(conditionalCount());
        // eslint-disable-next-line no-console
        console.log(conditionalCount());

        // eslint-disable-next-line no-console
        console.log('Update count');
        count.update(count => count + 1);

        // eslint-disable-next-line no-console
        console.log(conditionalCount());

        // eslint-disable-next-line no-console
        console.log('Update count');
        count.update(count => count + 1);

        // eslint-disable-next-line no-console
        console.log(conditionalCount());

        // eslint-disable-next-line no-console
        console.log('Update count');
        count.update(count => count + 1);

        // eslint-disable-next-line no-console
        console.log(conditionalCount());
    }

    onProductBuy(event: Event) {
        event.stopPropagation();

        // eslint-disable-next-line no-console
        console.log('Buy product');
    }

    isStarActive(starIndex: number): boolean {
        return !!this.product() && this.product().rating >= starIndex;
    }
}
