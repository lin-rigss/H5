let dew =$('#dew')[0],
   //  音视频获取都要转面原生JS  所以获取的时候[0]    
    $playBtn =$('#btn'); 



// 播放音乐
function play(){
       dew.play();  //   并不能让音乐播放， 要加DOM 2级事件，  当音频可以播放时，当音频可以播放时，可以做的事件
       dew.addEventListener('canplay',function(){ 
           this.play(); 
           move();       
       },false);      

}
play();


// 控制音乐
function move(){
    $playBtn.addClass('move');
    $playBtn.tap(()=>{    // 按控音乐暂停 与 播放  .tap()
        if(dew.paused){  // 判断音乐当前的播放状态 (是否为暂停状态)   dew.paused    如果是暂停播放 条件成立， 让音乐重新播放
            dew.play();
            $playBtn.addClass('move');
            return;
        } 
        dew.pause();
        $playBtn.removeClass('move');
    })
}


// 上下滑动切换页面   使用   Swiper 插件
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    // loop:false,

    speed:1000,
    // autoplay:true,// 是否自动播放。 默认是false 
    autoplay:{
        // 用户操作swiper后，是否停止自动播放，true为停止， false，是继续播放。
        disableOnInteraction: false, 
        // 两张图片之间切换的等待时间
        delay:7000   
    },   
    
    on: {
        slideChangeTransitionEnd:  function move(){
           
            let activeIn = this.activeIndex,
                slideAry =[].slice.call(this.slides);
               
                console.log(activeIn,slideAry);
                slideAry.forEach((item,index) => {
                    if(activeIn === index){
                        item.id = `page${index + 1}`;
                        return;
                    }
                    item.id = null;
                    
                });
        }
      },
  });


