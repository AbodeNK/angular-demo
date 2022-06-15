import { animate, animation, keyframes, query,group, state, style, transition, trigger, useAnimation, stagger, animateChild } from "@angular/animations";


export let bottomRightAnimation = animation(
  animate("2s ease-out", keyframes([
    style({backgroundColor:'red', offset: 0.2 ,opacity:1, }),
    // style({ top:"500px", offset: 0.6 ,opacity: 1, }),
    style({ left:"-100%", offset: 1,opacity: 0, })
   ])));

export let fadeinAnimation = animation([
  style({ transform:'translateY(-20px)',backgroundColor:"rgb(244, 220, 0)",opacity: 1}),
  animate("{{duration}} {{easing}}")
],{
  params:{
    duration:'2s',
    easing:'ease-out',
  }
});

export let slide=  trigger('slide',[
    transition('*=>void',[
    // animate('0.5s cubic-bezier(1,1.68,.88,-0.7)'),
    useAnimation(bottomRightAnimation),
    ]),
    transition('void=>*',[
      useAnimation(fadeinAnimation),
      ])
  ]);
  

export let fade=  trigger('fade',[
   transition('void=>*',[
    group([
      query('h1',[    
          useAnimation(fadeinAnimation,{
          params:{
            duration:'1s'
          }
         }),
       ]),
      query('@slide',[
        stagger(200,animateChild())    
       ])
    ])
  ])]);

  export let expandcollaspe = trigger('expandcollaspe',[
    state('collapsed',style({
      height:'0px',
      overflow:'hidden',
      paddingTop:'0px',
      paddingBottom:'0px',
      backgroundColor:'yellow'
    })),
    state('expand',style({
      height:'*',
      padding:'*',
      overflow:'auto',
    })),
    transition('collapsed<=>expand',[
      animate('1s ease-out')
    ])
    
 
  ]);