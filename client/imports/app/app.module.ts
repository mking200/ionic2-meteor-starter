import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from './page1/page1';
import { Page2 } from './page2/page2';
import { DemoComponent } from './demo/demo.component';
import { DemoDataService } from './demo/demo-data.service';


@NgModule({
  // Components, Pipes, Directive
  declarations: [
    MyApp,
    Page1,
    Page2,
    DemoComponent
  ],
  // Entry Components
  entryComponents: [
    MyApp,
    Page1,
    Page2
  ],
  // Providers
  providers: [
    DemoDataService
  ],
  // Modules
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  // Main Component
  bootstrap: [IonicApp]
})
export class AppModule {}
