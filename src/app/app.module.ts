import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product.service';
import { PlayersComponent } from './players/players.component';
import { AgePipe } from './age.pipe';
import { FilterPipe } from './filter.pipe';
import { ScorePipe } from './score.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    UserComponent,
    ProductComponent,
    PlayersComponent,
    AgePipe,
    FilterPipe,
    ScorePipe,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
