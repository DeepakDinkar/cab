import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { AuthService } from './../auth.service';

@Component({
    selector: 'app-cab-list',
    templateUrl: './cab-list.page.html',
    styleUrls: ['./cab-list.page.scss'],
})
export class CabListPage implements OnInit {
    driversList = new Array(25).fill(0, 0, 10);
    constructor(
        private router: Router,
        private navCtrl: NavController,
        private authService: AuthService,
        private route: ActivatedRoute
        ) { }

    ngOnInit() {
        console.log(this.authService.getTrip());
        console.log(this.authService.employee);
    }

    navigate() {
        this.router.navigate(['/map']);
    }

    loadMore(infiniteScroll: any) {
        console.log('Begin async operation');
        setTimeout(() => {
            for (let i = 0; i < 30; i++) {
                this.driversList.push(0);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    }

}
