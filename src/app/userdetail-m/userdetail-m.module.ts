import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserloginComponent } from './userlogin/userlogin.component';
import { EventComponent } from './event/event.component';
import { CounterComponent } from './counter/counter.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ConditionifComponent } from './conditionif/conditionif.component';
import { SwitchcompComponent } from './switchcomp/switchcomp.component';
import { LoopsComponent } from './loops/loops.component';
import { ToggleelementComponent } from './toggleelement/toggleelement.component';
import { TodolistComponent } from './todolist/todolist.component';
import { BindComponent } from './bind/bind.component';
import { FormsModule } from '@angular/forms';
import { LoginformComponent } from './loginform/loginform.component';
import { FormreactiveComponent } from './formreactive/formreactive.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    UserloginComponent,
    EventComponent,
    CounterComponent,
    PropertybindingComponent,
    ConditionifComponent,
    SwitchcompComponent,
    LoopsComponent,
    ToggleelementComponent,
    TodolistComponent,
    BindComponent,
    LoginformComponent,
    FormreactiveComponent,
  ],
  exports: [
    UserloginComponent,
    EventComponent,
    CounterComponent,
    PropertybindingComponent,
    ConditionifComponent,
    SwitchcompComponent,
    LoopsComponent,
    ToggleelementComponent,
    TodolistComponent,
    BindComponent,
    LoginformComponent,
    FormreactiveComponent,
  ],
})
export class UserdetailMModule {}
