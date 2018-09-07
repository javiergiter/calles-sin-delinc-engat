import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalPolicePage } from './local-police';

@NgModule({
  declarations: [
    LocalPolicePage,
  ],
  imports: [
    IonicPageModule.forChild(LocalPolicePage),
  ],
})
export class LocalPolicePageModule {}
