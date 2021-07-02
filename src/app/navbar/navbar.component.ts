import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';

interface DashboardList {
  name: string;
  id: string;
  fav: boolean;
  open: boolean;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class NavbarComponent implements OnInit {
  visibleSidebar1: boolean = false;
  newDashboardModal: boolean = false;
  expanded: boolean = false;
  dashboardApiData: DashboardList[] = [
    { name: 'New York', id: 'NY', fav: true, open: false },
    { name: 'Rome', id: 'RM', fav: false, open: false },
    { name: 'London', id: 'LDN', fav: true, open: true },
    { name: 'Istanbul', id: 'IST', fav: true, open: false },
    { name: 'Paris', id: 'PRS', fav: false, open: false },
  ];
  favList: MenuItem[] = [];
  allDashList: MenuItem[] = [];
  dashboardList: MenuItem[] = [];
  msgs: Message[] = [];

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.initSideBar();
  }

  initSideBar() {
    this.favList = this.dashboardApiData
      .filter((item: DashboardList) => {
        return item.fav;
      })
      .map((item: DashboardList) => {
        return {
          label: item.name,
          id: item.id,
          icon: 'pi pi-fw pi-star text-warning',
          command: () => this.loadDashboard(item.id),
        };
      });
    this.allDashList = this.dashboardApiData.map((item: DashboardList) => {
      return {
        label: item.name,
        id: item.id,
        icon: item.fav
          ? 'pi pi-fw pi-star text-warning'
          : 'pi pi-fw pi-star-o text-warning',
        command: () => this.loadDashboard(item.id),
      };
    });

    this.dashboardList = [
      {
        label: 'Dashboards',
        icon: 'pi pi-fw pi-th-large',
        styleClass: 'bg-warning',
        expanded: true,
        items: [
          {
            label: 'Favourite',
            icon: 'pi pi-fw pi-bookmark',
            expanded: true,
            items: this.favList,
          },
          {
            label: 'All Dashboard',
            icon: 'pi pi-fw pi-th-large',
            expanded: true,
            items: this.allDashList,
          },
          {
            label: 'Create Dashboard',
            icon: 'pi pi-fw pi-plus',
            command: () => (this.newDashboardModal = true),
          },
          {
            label: 'Manage Favourite',
            icon: 'pi pi-fw pi-pencil',
          },
        ],
      },
      {
        label: 'Data Sources',
        icon: 'pi pi-fw pi-folder',
        command: () => this.loadDashboard('22'),
      },
      {
        label: 'Data Sources',
        icon: 'pi pi-fw pi-folder',
        command: () => this.loadDashboard('22'),
      },
      {
        label: 'Data Sources',
        icon: 'pi pi-fw pi-folder',
        command: () => this.loadDashboard('22'),
      },
    ];
  }

  loadDashboard(id: string) {
    this.favList.forEach((item: any) => {
      if ('styleClass' in item) delete item.styleClass;
      if (item.id === id) item.styleClass = 'active';
    });
    this.allDashList.forEach((item: any) => {
      if ('styleClass' in item) delete item.styleClass;
      if (item.id === id) item.styleClass = 'active';
    });
  }

  createDashboard() {
    this.showToast('success', 'Success', 'New Dashboard created successfully');
    this.newDashboardModal = false;
  }

  confirmModal() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.showToast(
          'success',
          'Success',
          'New Dashboard created successfully'
        );
        // this.messageService.add({
        //   severity: 'success',
        //   summary: 'Success',
        //   detail: 'New Dashboard created successfully',
        //   life: 1500
        // });
        console.log('Yes');
      },
      reject: () => {
        console.log('No');
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to create Dashboard',
          life: 1500,
        });
      },
    });
  }
  showToast(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity,
      summary,
      detail,
      life: 1500,
    });
  }
  closePanelMenu(): void {
    // this.dashboardList.forEach((node) => {
    //   this.expandRecursive(node, false);
    // });
  }
}
