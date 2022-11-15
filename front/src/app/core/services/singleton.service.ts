import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {

	private alert = new BehaviorSubject({});
	currentAlert = this.alert.asObservable();

	private loading = new BehaviorSubject(false);
	currentLoading = this.loading.asObservable();

	permissions = [];

	constructor(private router: Router) {
	}

	showAlert(alert: object): void {
		this.alert.next(alert);
	}

	updateLoading(loading: boolean): void {
		this.loading.next(loading);
	}
}
