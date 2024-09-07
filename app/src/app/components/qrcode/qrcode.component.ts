import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QRCodeComponent {
  textToCopy = 'www.tazkrty.com/463847';

  public myAngularxQrCode: string = "";
  public qrCodeDownloadLink: SafeUrl = "";

  constructor(private clipBoard:Clipboard) {
    this.myAngularxQrCode = 'Your QR code data string';
  }

  copyText() {
    
    console.log("ammar")
    this.clipBoard.copy(this.textToCopy);
    alert('Text copied!');
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
}
