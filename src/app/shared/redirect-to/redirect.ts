import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class Redirect {
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    redirectTo() {
        this.route.queryParamMap.subscribe((q) => {
            if (q.has('redirectTo')) {
              const link = q.get('redirectTo');
              this.router.navigateByUrl(link);
            }
        });
    }
}
