import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogService } from './log.service';

@NgModule({
  imports: [CommonModule],
  exports:[LogService]
})
export class SharedLoggerModule {}
