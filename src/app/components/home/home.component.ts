import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from '../helper/charts/charts.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ChartsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  teamMembers = [
    {
      src: 'img/peru.svg',
      name: 'Lima - Perú',
      alias: '@Perú',
      mail: 'yquispe@travel.pe',
      status: 'active',
      tags: ['desing', 'QA']
    },
    {
      src: 'img/colombia.svg',
      name: 'Bogota - Colombia',
      alias: '@Perú',
      mail: 'yquispe@travel.pe',
      status: 'inactive',
      tags: ['marketing', 'desing']
    },
    {
      src: 'img/colombia.svg',
      name: 'Bogota - Colombia',
      alias: '@Perú',
      mail: 'yquispe@travel.pe',
      status: 'offline',
      tags: ['dev', 'QA']
    },
    {
      src: 'img/peru.svg',
      name: 'Lima - Perú',
      alias: '@Perú',
      mail: 'yquispe@travel.pe',
      status: 'offline',
      tags: ['dev', 'QA']
    },
    {
      src: 'img/colombia.svg',
      name: 'Bogota - Colombia',
      alias: '@Perú',
      mail: 'yquispe@travel.pe',
      status: 'offline',
      tags: ['dev', 'QA']
    },
    {
      src: 'img/peru.svg',
      name: 'Yorlin Quispe Ygnacio',
      alias: '@Yorlin',
      mail: 'yquispe@travel.pe',
      status: 'offline',
      tags: ['dev', 'QA']
    },
    {
      src: 'img/colombia.svg',
      name: 'Bogota - Colombia',
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
