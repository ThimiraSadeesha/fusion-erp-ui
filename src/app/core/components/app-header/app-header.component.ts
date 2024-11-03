import {AfterViewInit, Component, computed, ElementRef, inject, OnInit} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from "@angular/router";
import { NgClass } from "@angular/common";
import { filter } from "rxjs";
import {AuthService, PermissionFlagsService} from "../../services";
import { FormsModule } from "@angular/forms";
import { Dropdown } from 'flowbite';
import type { DropdownOptions, DropdownInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    FormsModule,
  ],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent  {

  constructor(private router: Router, private authService: AuthService) {}

  isActive(route: string): boolean {
    return this.router.url === '/' + route || this.router.url.startsWith('/' + route + '/');
  }

}
