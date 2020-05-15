import { Component } from '@angular/core';
import {HttpService} from './http.service';
import {PatientRequest} from './patient-request.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    requests$: Observable<PatientRequest []>;
    simulate = false;

    constructor(private serverData: HttpService) {
    this.loadRequests();
    }

    loadRequests() {
        this.requests$ = this.serverData.getAllRequests();
    }

    sendEmergency(request: PatientRequest) {
        //EMERGENCY SIMULATION
        request.simulate = true;
        setTimeout(() => {
            this.serverData.simulateTest(request.id).subscribe(() => {
                request.simulate = false;
                this.loadRequests();
            });
        }, 60000 * Math.random() * (15 - 1) + 1);

    }

    notCorona(requestId) {
        this.serverData.closeRequest(requestId).subscribe(() => this.loadRequests());
    }


    writeDoctorComment(request: PatientRequest) {
        // TODO Zana Begoli
        request.doctorComment = 'Test doctor comment';
        // this.serverData.closeRequest(request).subscribe(() => this.loadRequests());
    }


}
