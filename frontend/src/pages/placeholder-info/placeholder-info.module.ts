import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaceholderInfoPage } from './placeholder-info';

@NgModule({
  declarations: [
    PlaceholderInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PlaceholderInfoPage),
  ],
})
export class PlaceholderInfoPageModule {}
