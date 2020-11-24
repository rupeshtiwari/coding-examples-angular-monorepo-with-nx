import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LogService {
  consoleLog(msg: string) {
    console.log(msg);
  }
}
