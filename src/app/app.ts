import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {

  images:string[]=[
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpg",
    "11.jpeg",
    "12.jpeg",

  ];

   currentIndexImg:number=0;
   popUpEleImg !:HTMLImageElement;

  openPopUp(popUp:HTMLElement,popImg:HTMLImageElement,currentImg:HTMLImageElement){

      popUp.classList.add("active");
      this.popUpEleImg=popImg;
      setTimeout(function(){
        popUp.classList.add("show");
      },500)

      this.updateImage(currentImg.src);
      this.currentIndexImg=Number(currentImg.getAttribute('data-index'));

  }

  closePopUp(popUp:HTMLElement){

    popUp.classList.remove("show");
      setTimeout(function(){
        popUp.classList.remove("active");
      },500)

  }
  stop(e:Event){
    e.stopPropagation();

  }

  updateImage(currentImgSrc:string){

   this.popUpEleImg.src=currentImgSrc;
  }

  nextImg(){
      this.currentIndexImg =(++this.currentIndexImg )%this.images.length;
      let newImg=this.images[this.currentIndexImg ],
      newSrc=`assets/images_ex4/${newImg}`;
      this.popUpEleImg.src=newSrc;

  }
  prevImg(){
      this.currentIndexImg =(--this.currentIndexImg +this.images.length)%this.images.length;
      let newImg=this.images[this.currentIndexImg ],
      newSrc=`assets/images_ex4/${newImg}`;
      this.popUpEleImg.src=newSrc;
  }

  changeImg(index:number){
    this.currentIndexImg=index;
    let newSrc=this.images[this.currentIndexImg];
    this.updateImage(`assets/images_ex4/${newSrc}`)

  }


}

