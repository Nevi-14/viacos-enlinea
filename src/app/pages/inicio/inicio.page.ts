import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public appPages = [
    { title: 'Inicio', url: '/inicio/detalle', icon: 'home' },
    { title: 'Ordenes de Compra', url: '/inicio/gestion-ordernes', icon: 'reader' },
    { title: 'Compras en Linea', url: '/inicio/dashboard-compras-en-linea', icon: 'storefront' },
   
  ];

  titulo = 'Inicio'
  class:boolean =false;
  width:number;
  url = '';
  showMenu = false;
  large:boolean;
  small:boolean;
  image = '../assets/islena.png';
  constructor(
    public router: Router,
    public menuCtrl: MenuController,
    public plt:Platform,
    public usuariosService:UsuariosService
    
    
    
    ) {}

  ngOnInit() {

     
    //console.log( this.userService.usuarioActual.Foto)
      this.width = this.plt.width();
    this.toggleMenu()
      }

  // REMVOE MENU ON BIGGER SCREENS
  toggleMenu(){
   
    if(this.width > 768){
      this.large = true;
      this.small = false;
      this.class = true;
     // this.menuCtrl.toggle('myMenu');
  
    }else{
      this.class = false;
      this.large = false;
      this.small = true;
       // this.menuCtrl.toggle('myMenu');

     
   
  
    }
  
    }

    toggle(){
      this.class = true;
      this.menuCtrl.toggle('myMenu');

    }
  // CHECKS SCREEN RESIZE LIVE

  @HostListener('window:resize',['$event'])

  private onResize(event){

    this.width = event.target.innerWidth;

    this.toggleMenu();

  }

setTitle(titulo){
this.titulo = titulo;

}

}
