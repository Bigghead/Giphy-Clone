import { SecureUrl } from './Custom-Pipes/trusted-url.pipe';
import { DataService } from './Services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoContainerComponent } from './Components/video-container/video-container.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoContainerComponent,
    SecureUrl
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
