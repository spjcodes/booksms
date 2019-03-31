import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SearchComponent } from './pages/search/search.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { HotrecommendComponent } from './index/hotrecommend/hotrecommend.component';
import { ProductComponent } from './index/product/product.component';
import { UsermanageComponent } from './manage/usermanage/usermanage.component';
import { AdminmanageComponent } from './manage/adminmanage/adminmanage.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { CarouselmanageComponent } from './manage/carouselmanage/carouselmanage.component';
import { AddcarosuelComponent } from './carousel/addcarosuel/addcarosuel.component';
import { EditcarouselComponent } from './carousel/editcarousel/editcarousel.component';
import { DetailcarouselComponent } from './carousel/detailcarousel/detailcarousel.component';
import { AddhotrecommendComponent } from './hotrecommend/addhotrecommend/addhotrecommend.component';
import {HotrecommendService} from './services/hotrecommend.service';
import {ConfigserviceService} from './services/configservice.service';
import { HttpClientModule} from '@angular/common/http';
import { HotrecommendmanageComponent } from './manage/hotrecommendmanage/hotrecommendmanage.component';
import { RouterModule, Routes } from '@angular/router';
import { ListhotrecommendComponent } from './hotrecommend/listhotrecommend/listhotrecommend.component';


export const ROUTES: Routes = [
  {path: 'hotrecommendManage', component: HotrecommendmanageComponent},
  {path: 'addHorrecommend/:id', component: AddhotrecommendComponent},
  {path: 'adminmanage', component: AdminmanageComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    HotrecommendComponent,
    ProductComponent,
    UsermanageComponent,
    AdminmanageComponent,
    AdduserComponent,
    EdituserComponent,
    CarouselmanageComponent,
    AddcarosuelComponent,
    EditcarouselComponent,
    DetailcarouselComponent,
    AddhotrecommendComponent,
    HotrecommendmanageComponent,
    ListhotrecommendComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(ROUTES),

  ],
  providers: [
    NgbCarouselConfig,
    HotrecommendService,
    ConfigserviceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
