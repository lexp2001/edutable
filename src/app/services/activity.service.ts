import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Activity } from '../interfaces/activity.interface'

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>('https://edutable.azurewebsites.net/api/getActivities')
  }

}
