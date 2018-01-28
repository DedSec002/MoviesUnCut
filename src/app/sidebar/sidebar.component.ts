import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'movie-home', title: 'Home',  icon: 'ti-panel', class: '' },
    { path: 'genre', title: 'Genre',  icon: 'ti-user', class: '' },
    { path: 'country', title: 'Country',  icon: 'ti-view-list-alt', class: '' },
    { path: 'tv-series', title: 'TV-Series',  icon: 'ti-text', class: '' },
    { path: 'top-imdb', title: 'Top IMDb',  icon: 'ti-pencil-alt2', class: '' },
    { path: 'a-z-list', title: 'A-Z List',  icon: 'ti-map', class: '' },
    { path: 'news', title: 'News',  icon: 'ti-bell', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
