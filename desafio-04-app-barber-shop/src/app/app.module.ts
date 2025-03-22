import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewClientComponent } from './clients/new-client/new-client.component';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { EditClientComponent } from './clients/edit-client/edit-client.component';
import { ClientFormComponent } from './clients/components/client-form/client-form.component';
import { ClientTableComponent } from './clients/components/client-table/client-table.component';
import { SchedulesMonthComponent } from './schedules/schedules-month/schedules-month.component';
import { ScheduleCalendarComponent } from './schedules/components/schedule-calendar/schedule-calendar.component';
import { CardHeaderComponent } from './commons/components/card-header/card-header.component';
import { MenuBarComponent } from './commons/components/menu-bar/menu-bar.component';
import { DialogComponent } from './commons/components/dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NewClientComponent,
    ListClientsComponent,
    EditClientComponent,
    ClientFormComponent,
    ClientTableComponent,
    SchedulesMonthComponent,
    ScheduleCalendarComponent,
    CardHeaderComponent,
    MenuBarComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
