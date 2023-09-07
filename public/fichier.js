
let btn=document.querySelector('.envoyer')
btn.addEventListener('click',change)
function change(){
    let auto=document.querySelector('.autorisation')
    let mail=document.querySelector('.mail')
    let mail1=mail.value
    let pass=document.querySelector('.pass')
    let pass1=pass.value
    let objet=document.querySelector('.tableau')

    let Tab=objet.innerHTML
    if (mail1.length >= 4) {
        if (pass1.length >=4) {
         if (Tab.indexOf(mail.value)!= -1 ) {

             if (Tab.indexOf(pass.value)!= -1) {
              setTimeout(() => {
                  auto.setAttribute('class','autre')
                  auto.innerHTML='connection ok'
              }, 1000);                                 
           }
      
         } else {
                setTimeout(() => {
                auto.innerHTML='incorrect'
                                }, 1000);
         }                                  
                     } 
        else {
         auto.innerHTML='verifiez les informations'
                  }        
         }      
else {
 auto.innerHTML='verifiez les informations'
      }                     
 }







        
          
       