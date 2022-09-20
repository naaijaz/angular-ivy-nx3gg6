import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.css'],
})
export class LoopsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  users = [
    {
      name: 'syed ',
      email: 'syed@gmail.com',
      Mobile: '0502207597',
      socialmedia: ['Sdfacebook', 'sdinsta', 'sdyoutube'],
    },
    {
      name: 'aijaz',
      email: 'aijazahmed@gmail.com',
      Mobile: '0293730984',
      socialmedia: ['aijazfacebook', 'aijazinsta', 'aijzyoutube'],
    },
    {
      name: 'syed lamda',
      email: 'sdlamda@gmail.com',
      Mobile: '0502445937',
      socialmedia: ['Sdlamfacebook', 'Sdlaminsta', 'Sdlamyoutube'],
    },
  ];
}
