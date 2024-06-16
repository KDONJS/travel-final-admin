import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  teamMembers = [
    {
      src: 'img/profile-pic.jpg',
      name: 'Yorlin Quispe Ygnacio',
      alias: '@Yorlin',
      mail: 'yquispe@travel.pe',
      status: 'active',
      tags: ['desing', 'QA']
    },
    {
      src: 'img/profile-pic.jpg',
      name: 'Yorlin Quispe Ygnacio',
      alias: '@Yorlin',
      mail: 'yquispe@travel.pe',
      status: 'inactive',
      tags: ['marketing', 'desing']
    },
    {
      src: 'img/profile-pic.jpg',
      name: 'Yorlin Quispe Ygnacio',
      alias: '@Yorlin',
      mail: 'yquispe@travel.pe',
      status: 'offline',
      tags: ['dev', 'QA']
    },
    {
      src: 'img/profile-pic.jpg',
      name: 'Yorlin Quispe Ygnacio',
      alias: '@Yorlin',
      mail: 'yquispe@travel.pe',
      status: 'offline',
      tags: ['dev', 'QA']
    },
    {
      src: 'img/profile-pic.jpg',
      name: 'Yorlin Quispe Ygnacio',
      alias: '@Yorlin',
      mail: 'yquispe@travel.pe',
      status: 'offline',
      tags: ['dev', 'QA']
    },
    {
      src: 'img/profile-pic.jpg',
      name: 'Yorlin Quispe Ygnacio',
      alias: '@Yorlin',
      mail: 'yquispe@travel.pe',
      status: 'offline',
      tags: ['dev', 'QA']
    },
    {
      src: 'img/profile-pic.jpg',
      name: 'Yorlin Quispe Ygnacio',
      alias: '@Yorlin',
      mail: 'yquispe@travel.pe',
      status: 'offline',
      tags: ['dev', 'QA']
    }
  ];
  itemsOnPage = 5;
  start = 1;
  numberOfPage = 1;
  mappedRecords: any[] = [];
  pageNumbers: number[] = [];

  ngOnInit() {
    this.numberOfPage = Math.ceil(this.teamMembers.length / this.itemsOnPage);
    this.updatePagination();
    this.updateTableRows();
  }

  updatePagination() {
    this.pageNumbers = Array.from({ length: this.numberOfPage }, (_, i) => i + 1);
  }

  updateTableRows() {
    const startIndex = (this.start - 1) * this.itemsOnPage;
    const endIndex = this.start * this.itemsOnPage;
    this.mappedRecords = this.teamMembers.slice(startIndex, endIndex);
  }

  onPageChange(page: number) {
    this.start = page;
    this.updateTableRows();
  }
}
