import { Component } from '@angular/core';
import { LocaleService } from '../services/locale.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  locale = 'en-ca';
  constructor(private localeService: LocaleService) {
    //
  }
  products = [
    {
      id: 1,
      name: 'The Complete Management Skills Certification Course',
      price: 59.99,
      rating: 4,
      description:
        'Used at Amazon®, Unilever®, Walmart®, and other top firms. Learn leadership, productivity, communication skills & more!',
    },
    {
      id: 2,
      name: 'Business Development For Startups and Tech Companies',
      price: 69.99,
      rating: 4,
      description:
        'Unlock massive growth using the business development channel. Learn pitching, BD strategy, cold emailing, & deal closing',
    },
    {
      id: 3,
      name: 'SQL Masterclass: SQL for Data Analytics',
      price: 89.99,
      rating: 3,
      description:
        'SQL course covering basic to advanced SQL topics for SQL Database (PostgreSQL). Beginner friendly SQL training',
    },
    {
      id: 4,
      name: 'Angular - The Complete Guide (2023 Edition)',
      price: 45,
      rating: 5,
      description:
        'Master Angular (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js',
    },
    {
      id: 5,
      name: 'Angular & NodeJS - The MEAN Stack Guide [2023 Edition]',
      price: 49.99,
      rating: 5,
      description:
        'Learn how to connect your Angular Frontend to a NodeJS & Express & MongoDB Backend by building a real Application',
    },
  ];

  share() {
    window.alert('The product has been shared!');
  }
}
