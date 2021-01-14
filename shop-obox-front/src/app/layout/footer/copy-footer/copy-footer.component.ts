import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'copy-footer',
  templateUrl: './copy-footer.component.html',
  styleUrls: ['./copy-footer.component.css']
})
export class CopyFooterComponent implements OnInit {

  icons = {
    instagram : faInstagram,
    facebook: faFacebook,
    whatsapp: faWhatsapp
  };

  constructor() { }

  ngOnInit(): void {
  }

}
