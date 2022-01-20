import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  salesProduct=[{
    name:"mobile",price:24670},
{
  name:"book",price:250},
{
  name:"car",price:2500000}
]

newProduct=[{
  name:"pen",price:10},
{
name:"marker",price:40},
{
name:"car",price:2500000}
]


oldProduct=[{
  name:"paper",price:5},
{
name:"laptop",price:65000},
{
name:"BMWcar",price:2500000}
]
}
