import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/subject';

@Injectable()
export class SharedService {

  // observable string sources
  private missionAnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  missionAnounced$ = this.missionAnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  announceMission(mission: string) {
    this.missionAnouncedSource.next(mission);
  }

  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }

}
