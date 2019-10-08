import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [ChatDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ClickOutsideModule
  ],
  exports: [
    ChatDialogComponent
  ],
  providers: [
    ChatService
  ]
})
export class ChatModule { }
