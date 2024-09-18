import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent {
  @Input()
  photoCover: string =
    'https://imgs.search.brave.com/mtmPdRTOiX63EvsrZLt6PzdcNAxs-LiFNk2j4_NkvMo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS5wb2x5Z29u/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/c2l0ZXMvMi9jaG9y/dXMvdXBsb2Fkcy9j/aG9ydXNfYXNzZXQv/ZmlsZS8xNjIwNjY2/OC90aG9yX3RoZV9k/YXJrX3dvcmxkXzIz/MDUxXzE5MjB4MTIw/MC5qcGc_cXVhbGl0/eT05MCZzdHJpcD1h/bGwmY3JvcD0zLjEy/NSwwLDkzLjc1LDEw/MCZ3PTI0MDA';
  @Input()
  cardTitle: string = 'NEW SERIES ANNOUNCED';
}
