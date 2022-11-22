import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: 'The Complete Management Skills Certification Course',
      price: 799,
      description:
        'Used at Amazon®, Unilever®, Walmart®, and other top firms. Learn leadership, productivity, communication skills & more!',
    },
    {
      id: 2,
      name: 'Business Development For Startups and Tech Companies',
      price: 699,
      description:
        'Unlock massive growth using the business development channel. Learn pitching, BD strategy, cold emailing, & deal closing',
    },
    {
      id: 3,
      name: 'SQL Masterclass: SQL for Data Analytics',
      price: 299,
      description:
        'SQL course covering basic to advanced SQL topics for SQL Database (PostgreSQL). Beginner friendly SQL training',
    },
    {
      id: 4,
      name: 'Angular - The Complete Guide (2023 Edition)',
      price: 299,
      description:
        'Master Angular (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js',
    },
    {
      id: 5,
      name: 'Angular & NodeJS - The MEAN Stack Guide [2023 Edition]',
      price: 299,
      description:
        'Learn how to connect your Angular Frontend to a NodeJS & Express & MongoDB Backend by building a real Application',
    },
  ];

  share() {
    window.alert('The product has been shared!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
