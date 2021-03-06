import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
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
import { DetailcarouselComponent } from './carousel/detailcarousel/detailcarousel.component';
import { AddhotrecommendComponent } from './hotrecommend/addhotrecommend/addhotrecommend.component';
import {HotrecommendService} from './services/hotrecommend.service';
import {ConfigserviceService} from './services/configservice.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HotrecommendmanageComponent } from './manage/hotrecommendmanage/hotrecommendmanage.component';
import { RouterModule, Routes } from '@angular/router';
import { ListhotrecommendComponent } from './hotrecommend/listhotrecommend/listhotrecommend.component';
import { PageoneComponent } from './index/pageone/pageone.component';
import {CarouselmanageService} from './services/carouselmanage.service';
import { DetailhotrecommendComponent } from './hotrecommend/detailhotrecommend/detailhotrecommend.component';
import { NovelmanageComponent } from './manage/novelmanage/novelmanage.component';
import { TextbookmanageComponent } from './manage/textbookmanage/textbookmanage.component';
import { OtherbookmanageComponent } from './manage/otherbookmanage/otherbookmanage.component';
import { AddbookComponent } from './books/addbook/addbook.component';
import { DetailbookComponent } from './books/detailbook/detailbook.component';
import {BookmanageService} from './services/bookmanage.service';
import {UsermanageService} from './services/usermanage.service';
import { NovelbooksComponent } from './books/novelbooks/novelbooks.component';
import { TextbooksComponent } from './books/textbooks/textbooks.component';
import { OtherbooksComponent } from './books/otherbooks/otherbooks.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { TohtmlPipe } from './pipe/tohtml.pipe';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import {PicturemanageService} from './services/picturemanage.service';
import { StarsComponent } from './pages/stars/stars.component';
import { DetailuserComponent } from './user/detailuser/detailuser.component';
import { ProductdetailComponent } from './index/productdetail/productdetail.component';
import { BookinfoComponent } from './books/bookinfo/bookinfo.component';
import { UserdetailComponent } from './user/userdetail/userdetail.component';
import { AlipaypageComponent } from './pay/alipaypage/alipaypage.component';
import {PaymanageService} from './services/paymanage.service';
import { InfomanageComponent } from './user/infomanage/infomanage.component';
import {AuthService} from './services/auth.service';
import {InterceptorService} from './services/interceptor.service';
import {AdminGuard} from './guard/admin.guard';
import {NavbarComponent} from './pages/navbar/navbar.component';
import {TestService} from './services/test.service';
import { PagtestComponent } from './test/pagtest/pagtest.component';
import { ManageComponent } from './orders/manage/manage.component';
import {OrderformService} from './services/orderform.service';
import { OrderComponent } from './manage/order/order.component';


export const ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'hotrecommendManage', component: HotrecommendmanageComponent, canActivate: [AdminGuard]},
  {path: 'addHorrecommend/:id', component: AddhotrecommendComponent},
  {path: 'detailhotrecommed/:id', component: DetailhotrecommendComponent},
  {path: 'adminmanage', component: AdminmanageComponent,
    children: [
      {path: '' , component: AdminmanageComponent},
      {path: 'hotrecom', component: HotrecommendmanageComponent },
      {path: 'carouselmanage', component: CarouselmanageComponent, },
      {path: 'bookmanage', component: NovelmanageComponent},
      {path: 'usermanage', component: UsermanageComponent},
      {path: 'textbookmanage', component: TextbookmanageComponent},
      {path: 'otherbookmanage', component: OtherbookmanageComponent},
      {path: 'orderManage', component: OrderComponent},
    ] , canActivate: [AdminGuard]
  },
  {path: 'pageone', component: PageoneComponent},
  {path: 'addcarousel/:id', component: AddcarosuelComponent},
  {path: 'detailcarousel/:id', component: DetailcarouselComponent},
  {path: 'addbook/:id', component: AddbookComponent},
  {path: 'detailbook/:id', component: DetailbookComponent},
  {path: 'adduser/:id', component: AdduserComponent},
  {path: 'novelbooks/:id', component: NovelbooksComponent},
  {path: 'searchResult/:id', component: SearchComponent},
  {path: 'textbooks/:id', component: TextbooksComponent},
  {path: 'otherbooks/:id', component: OtherbooksComponent},
  {path: 'bookdetail/:id', component: DetailbookComponent},
  {path: 'productdetail/:id', component: ProductdetailComponent},
  {path: 'bookinfo/:id', component: BookinfoComponent},
  {path: 'userdetail/:id', component: UserdetailComponent},
  {path: 'edituser/:id', component: EdituserComponent},
  {path: 'carouseldetail/:id/:type', component: DetailcarouselComponent},
  {path: 'gotoalipay/:id', component: AlipaypageComponent},
  {path: 'ordermanage/:id', component: ManageComponent},
  {path: 'userinfochange', component: InfomanageComponent},
  {path: 'test', component: PagtestComponent},
  {path: '**', component: PageoneComponent},

];

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
    DetailcarouselComponent,
    AddhotrecommendComponent,
    HotrecommendmanageComponent,
    ListhotrecommendComponent,
    PageoneComponent,
    DetailhotrecommendComponent,
    NovelmanageComponent,
    TextbookmanageComponent,
    OtherbookmanageComponent,
    AddbookComponent,
    DetailbookComponent,
    NovelbooksComponent,
    TextbooksComponent,
    OtherbooksComponent,
    TohtmlPipe,
    LoginComponent,
    RegisterComponent,
    StarsComponent,
    DetailuserComponent,
    ProductdetailComponent,
    BookinfoComponent,
    UserdetailComponent,
    AlipaypageComponent,
    InfomanageComponent,
    PagtestComponent,
    ManageComponent,
    OrderComponent,
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
    CKEditorModule,

  ],
  providers: [
    NgbCarouselConfig,
    HotrecommendService,
    ConfigserviceService,
    CarouselmanageService,
    BookmanageService,
    UsermanageService,
    PicturemanageService,
    PaymanageService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    // { provide: LocationStrategy, useClass: HashLocationStrategy },
    InterceptorService,
    AdminGuard,
    TestService,
    OrderformService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
