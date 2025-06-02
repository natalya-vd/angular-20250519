import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
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
    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    // product = productsMock[0];
    readonly count = signal(0, {
        equal: (a, b) => a === b,
    });

    // readonly product = signal(productsMock[0]);
    readonly product = computed(() => {
        // eslint-disable-next-line no-console
        console.log('Computed calculated');

        return productsMock[this.count()];
    });

    constructor() {
        // let count = 0;

        setInterval(() => {
            // count += 1;

            // this.product.set(productsMock[count]);

            // this.changeDetectorRef.markForCheck();

            this.count.update(count => count + 1);
        }, 1000);

        // const count = signal(0, {
        //     equal: (a, b) => a === b,
        // });

        // console.log(count());

        // count.set(10);

        // console.log(count());

        // // count.update(curentCount => curentCount + 1);
        // count.update(curentCount => {
        //     return curentCount + 1;
        // });

        // console.log(count());

        // -------------------------------------------------------

        // console.log('Start test');

        // console.log(this.product());
        // console.log(this.product());
        // console.log(this.product());

        // console.log('Update count');
        // this.count.update(count => count + 1);

        // console.log(this.product());
        // console.log(this.product());
        // console.log(this.product());

        // -------------------------------------------------------
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
