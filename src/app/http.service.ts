import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SERVER_URL} from './app.constants';
import {PatientRequest} from './patient-request.model';
import {Observable} from 'rxjs';


@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getAllRequests(): Observable<PatientRequest[]> {
    return this.http.get<PatientRequest[]>(`${SERVER_URL}/requests`);
  }

  closeRequest(requestId: number): Observable<any> {
    return this.http.put(`${SERVER_URL}/close-request/${requestId}`, null);
  }

  simulateTest(requestId: number): Observable<any> {
    return this.http.put(`${SERVER_URL}/simulate-test/${requestId}`, null);
  }

}

