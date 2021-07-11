import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { RippleModule } from 'primeng/ripple';
import { AccordionModule } from 'primeng/accordion';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ListboxModule } from 'primeng/listbox';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import {FileUploadModule} from 'primeng/fileupload';
// import { TabViewModule } from 'primeng/tabview';

@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    SidebarModule,
    DividerModule,
    CardModule,
    ToolbarModule,
    RippleModule,
    AccordionModule,
    SelectButtonModule,
    PanelMenuModule,
    ConfirmDialogModule,
    MessagesModule,
    ToastModule,
    DialogModule,
    ListboxModule,
    TableModule,
    DropdownModule,
    TooltipModule,
    FileUploadModule
  ],
})
export class PrimeNgModule {}
