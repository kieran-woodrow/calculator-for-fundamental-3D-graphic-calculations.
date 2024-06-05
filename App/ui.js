class UI{

    clearAlert(classname){
   
      setTimeout(() => {
         const currentAlert = document.querySelector(classname);

         if( currentAlert ){
            location.reload();
            return false;  
         }
      }, 15000);
   }

   colourAnswer(classname){

      const answer = document.querySelector(classname);
      answer.style.color='green';
   }

   
}