import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export abstract class OnDispose implements OnDestroy {
    public destroyed$ = new Subject<boolean>();

    constructor() {}

    ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
        this.onDispose();
    }

    protected onDispose() {}
}
