import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule,
         MatListModule, MatButtonModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { LayoutModule } from '@angular/cdk/layout';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { PaymentComponent } from './payment/payment.component';
import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    OrderComponent,
    GalleryComponent,
    ImageUploadComponent,
    PaymentComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
  })
  export class AppModule { }
