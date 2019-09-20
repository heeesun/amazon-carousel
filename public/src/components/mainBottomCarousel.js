import data  from '../data/bottomData.js';
import slide  from './slide.js';
class mainCarousel extends slide{
    constructor(parentName,carouselName,width){
        super(parentName,carouselName,width);  

        //publisher
        this.observers = [];
        this.state = null; 

        //observer
        this.data;
        this.publisher=[];
    }

    //발행 메소드
    add(observer) {
        this.observers.push(observer);
    }
    notifyObservers() {
        this.observers.forEach(observer => {
          observer.update();
        });
    }
    changeState(currentNumber) {
        this.state =  currentNumber;
        this.notifyObservers();
    }

    //구독 메소드
    subscribe(publisher) {
        this.publisher = publisher;
        this.publisher.add(this);
    }
    update() {
        this.data = this.publisher.state;   //클릭이벤트가 발생한 번호 
        this.slideLoop(parseInt(this.data));
    }

    slideLoop(id){
        let slideTime;
        if(this.currentNumber === id){
            return;
        }else if(this.currentNumber < id){
            slideTime = 200/(id-this.currentNumber);
            this.slideLeft(id-this.currentNumber,slideTime);
        }else{
            slideTime = 200/(this.currentNumber-id);
            this.slideRight(this.currentNumber-id,slideTime);
        }
    }

    render(){
        let childHTML = "";
        data.forEach((obj,idx) => {
            childHTML +=`
<li id="bottom-${idx}" class="${obj.title}-li" style="background: url(${obj.image}); background-size: contain; background-position-x: -5rem;">
    <div class="main-text">
        <span class="main-text-title category-${obj.category}">${obj.title}</span><br/>
        <span class="main-text-header">${obj.head}</span>
        <div class="main-text-description">${obj.body}</div>
        <a class="main-text-link" href=${obj.link}>
            ${obj.tail} &#9656;
        </a>
    </div>
</li>`
    });
        return childHTML;
    }
}

export default mainCarousel;