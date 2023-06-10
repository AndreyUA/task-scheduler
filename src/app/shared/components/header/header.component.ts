import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [ToolbarModule],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
