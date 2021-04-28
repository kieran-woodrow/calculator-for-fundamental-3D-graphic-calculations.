const uiObject = new UI();
/**
 *  THIS WORKS OUT SCALAR MULTIPLICATION ON A VECTOR
 */
document.querySelector('#s1').addEventListener('click', function(){

   document.querySelector('#s1').style.display = 'none';
   const scalar=parseFloat(document.querySelector('#i4').value);
   const answer1=parseInt(document.querySelector('#i1').value);
   const vectorTable=document.querySelector('#vtable');

   if( answer1 <= 0 || Number.isNaN(answer1) ){
      alert("Vector has to be a positive integer bigger than 0.");
         location.reload();
            return false;  
   }

   for(let i = 0; i < 1; i++ ){

      let x = document.createElement('tr');
      vectorTable.appendChild(x);

      for(let j = 0; j < answer1; j++){
         let y = document.createElement('td');
         let input = document.createElement('input');
         input.id='td'+i+j;
         y.appendChild(input);
         x.appendChild(y);
      }
   }

   const processbtn = document.createElement('input');
   processbtn.className="button-primary";
   processbtn.type='button';
   processbtn.value='Calculate';
   processbtn.id="s111";
   vectorTable.appendChild(processbtn);

   document.querySelector('#s111').addEventListener('click', function(){

      document.querySelector('#s111').style.display = 'none';
      const answer=document.createElement('h3');
      answer.id='answer';
      answer.innerHTML='The resultant vector is: ';
      vectorTable.appendChild(answer);

      for(let i = 0; i < 1; i++){

         let x = document.createElement('tr');
         vectorTable.appendChild(x);
   
          for(let j = 0; j < answer1; j++){

            if( Number.isNaN(parseInt(document.querySelector('#td'+i+j).value)) ){
               alert("Please insert valid numbers");
               location.reload();
                  return false;  
            }

            let y = document.createElement('td');
            let input = document.createElement('input');
            let current=parseFloat((document.querySelector('#td'+i+j).value)*scalar).toFixed(2);
            input.value=current;
            y.appendChild(input);
            x.appendChild(y);
          }
      }

      uiObject.clearAlert("#vtable");
      uiObject.colourAnswer('#answer');
   });
});

/**
 *  THIS WORKS OUT VECTOR ADDITIONS
 */
document.querySelector('#s2').addEventListener('click', function(){

   document.querySelector('#s2').style.display = 'none';
   const vector1=document.querySelector('#vector1');
   const vector2=document.querySelector('#vector2');
   const size1=parseInt(document.querySelector('#i5').value);
   const size2=parseInt(document.querySelector('#i6').value);

   if( size1 !== size2 || size1 <=0 || size2 <=0 || Number.isNaN(size1) || Number.isNaN(size2) ){
      alert("Vectors have to be a positive interer bigger than 0 and must the same size");
      location.reload();
         return false;  
}

   for(let i = 0; i < 1; i++){

      let x = document.createElement('tr');
      vector1.appendChild(x);

       for(let j = 0; j < size1; j++){
         let y = document.createElement('td');
         let input = document.createElement('input');
         input.id='td1'+i+j;
         y.appendChild(input);
         x.appendChild(y);
       }
   }

   for(let k = 0; k < 1; k++){

      let x = document.createElement('tr');
      vector2.appendChild(x);

       for(let l = 0; l < size2; l++){
         let y = document.createElement('td');
         let input = document.createElement('input');
         input.id='td2'+k+l;
         y.appendChild(input);
         x.appendChild(y);
       }
   }

   const processbtn = document.createElement('input');
   processbtn.className="button-primary";
   processbtn.type='button';
   processbtn.value='Generate answer ';
   processbtn.id="s112";
   vector2.appendChild(processbtn);

   document.querySelector('#s112').addEventListener('click', function(){

      document.querySelector('#s112').style.display = 'none';
      const answer=document.createElement('h3');
      answer.id='answer';
      answer.innerHTML='The resultant vector is: ';
      vector2.appendChild(answer);

      const answerTable=document.createElement('table');
      answerTable.id='answertable';
      vector2.appendChild(answerTable);

      for(let i = 0, k = 0; i < 1, k < 1; i++, k++){

         let x = document.createElement('tr');
         answerTable.appendChild(x);
   
          for(let j = 0, l = 0; j < size1, l < size2; j++, l++){

            if( ( Number.isNaN(parseInt(document.querySelector('#td1'+i+j).value)) ) ||( Number.isNaN(parseInt(document.querySelector('#td2'+k+l).value)) )){
               alert("Please insert valid numbers");
               location.reload();
                  return false;  
            }

            let y = document.createElement('td');
            let input = document.createElement('input');
            let current1=parseFloat(document.querySelector('#td1'+i+j).value);
            let current2=parseFloat(document.querySelector('#td2'+k+l).value);
            let current3=current1 + current2;
            input.value=current3.toFixed(2);
            y.appendChild(input);
            x.appendChild(y);
          }
      }

      uiObject.clearAlert("#vtable");
      uiObject.colourAnswer('#answer');
   });

 });

/**
 *  THIS WORKS OUT VECTOR SUBTRACTION
 */
document.querySelector('#s3').addEventListener('click', function(){

   document.querySelector('#s3').style.display = 'none';
   const vector1=document.querySelector('#vector3');
   const vector2=document.querySelector('#vector4');
   const size1=parseInt(document.querySelector('#i7').value);
   const size2=parseInt(document.querySelector('#i8').value);

   if( size1 !== size2 || size1 <=0 || size2 <=0 || Number.isNaN(size1) || Number.isNaN(size2)  ){
      alert("Vectors have to be a positive interer bigger than 0 and must the same size");
      location.reload();
         return false;  
}

   for(let i = 0; i < 1; i++){

      let x = document.createElement('tr');
      vector1.appendChild(x);

       for(let j = 0; j < size1; j++){
         let y = document.createElement('td');
         let input = document.createElement('input');
         input.id='td1'+i+j;
         y.appendChild(input);
         x.appendChild(y);
       }
   }

   for(let k = 0; k < 1; k++){

      let x = document.createElement('tr');
      vector2.appendChild(x);

       for(let l = 0; l < size2; l++){
         let y = document.createElement('td');
         let input = document.createElement('input');
         input.id='td2'+k+l;
         y.appendChild(input);
         x.appendChild(y);
       }
   }

   const processbtn = document.createElement('input');
   processbtn.className="button-primary";
   processbtn.type='button';
   processbtn.value='Generate answer ';
   processbtn.id="s113";
   vector2.appendChild(processbtn);

   document.querySelector('#s113').addEventListener('click', function(){

      document.querySelector('#s113').style.display = 'none';
      const answer=document.createElement('h3');
      answer.id='answer';
      answer.innerHTML='The resultant vector is: ';
      vector2.appendChild(answer);

      const answerTable=document.createElement('table');
      answerTable.id='answertable';
      vector2.appendChild(answerTable);

      for(let i = 0, k = 0; i < 1, k < 1; i++, k++){

         let x = document.createElement('tr');
         answerTable.appendChild(x);
   
         for(let j = 0, l = 0; j < size1, l < size2; j++, l++){

            if( ( Number.isNaN(parseInt(document.querySelector('#td1'+i+j).value)) ) ||( Number.isNaN(parseInt(document.querySelector('#td2'+k+l).value)) )){
               alert("Please insert valid numbers");
               location.reload();
                  return false;  
            }

            let y = document.createElement('td');
            let input = document.createElement('input');
            let current1=parseFloat(document.querySelector('#td1'+i+j).value);
            let current2=parseFloat(document.querySelector('#td2'+k+l).value);
            let current3=current1 - current2;
            input.value=current3.toFixed(2);
            y.appendChild(input);
            x.appendChild(y);
         }
      }

      uiObject.clearAlert("#vtable");
      uiObject.colourAnswer('#answer');
   });
 });


 /**
 *  THIS WORKS OUT THE DOT PRODUCT OF TWO VECTORS
 */
document.querySelector('#s4').addEventListener('click', function(){

   document.querySelector('#s4').style.display = 'none';
   const vector1=document.querySelector('#vector5');
   const vector2=document.querySelector('#vector6');
   const size1=parseInt(document.querySelector('#i9').value);
   const size2=parseInt(document.querySelector('#i10').value);

   if( size1 !== size2 || size1 <=0 || size2 <=0 || Number.isNaN(size1) || Number.isNaN(size2)  ){
      alert("Vectors have to be a positive interer bigger than 0 and must the same size");
      location.reload();
         return false;  
}

   for(let i = 0; i < 1; i++){

      let x = document.createElement('tr');
      vector1.appendChild(x);

       for(let j = 0; j < size1; j++){
         let y = document.createElement('td');
         let input = document.createElement('input');
         input.id='td1'+i+j;
         y.appendChild(input);
         x.appendChild(y);
       }
   }

   for(let k = 0; k < 1; k++){

      let x = document.createElement('tr');
      vector2.appendChild(x);

       for(let l = 0; l < size2; l++){
         let y = document.createElement('td');
         let input = document.createElement('input');
         input.id='td2'+k+l;
         y.appendChild(input);
         x.appendChild(y);
       }
   }

   const processbtn = document.createElement('input');
   processbtn.className="button-primary";
   processbtn.type='button';
   processbtn.value='Generate answer ';
   processbtn.id="s114";
   vector2.appendChild(processbtn);

   document.querySelector('#s114').addEventListener('click', function(){

      document.querySelector('#s114').style.display = 'none';
      const answer=document.createElement('h3');
      answer.id='answer';
      answer.innerHTML='The resultant scalar is: ';
      vector2.appendChild(answer);

      const answerTable=document.createElement('table');
      answerTable.id='answertable';
      vector2.appendChild(answerTable);

      let current3 = 0;

      for(let i = 0, k = 0; i < 1, k < 1; i++, k++){

          for(let j = 0, l = 0; j < size1, l < size2; j++, l++){

            if( ( Number.isNaN(parseInt(document.querySelector('#td1'+i+j).value)) ) ||( Number.isNaN(parseInt(document.querySelector('#td2'+k+l).value)) )){
               alert("Please insert valid numbers");
               location.reload();
                  return false;  
            }

            let current1=parseFloat(document.querySelector('#td1'+i+j).value);
            let current2=parseFloat(document.querySelector('#td2'+k+l).value);
            current3+=(current1 * current2);
         }
      }

      for(let i = 0, k = 0; i < 1, k < 1; i++, k++){

         let x = document.createElement('tr');
         answerTable.appendChild(x);

          for(let j = 0, l = 0; j < 1, l < 1; j++, l++){

            let y = document.createElement('td');
            let input = document.createElement('input');
            input.value=current3.toFixed(2);
            y.appendChild(input);
            x.appendChild(y);
          }
      }

      uiObject.clearAlert("#vtable");
      uiObject.colourAnswer('#answer');
   });
 });

 /**
 *  THIS WORKS OUT THE NORM OF A VECTOR
 */
 document.querySelector('#s117').addEventListener('click', function(){

   document.querySelector('#s117').style.display = 'none';
   const vector1=document.querySelector('#vector7');
   const size1=parseInt(document.querySelector('#i11').value);
    
   if( size1 <= 0 || Number.isNaN(size1) ){
      alert("Vectors have to be a positive interer bigger than 0 and must the same size");
      location.reload();
         return false;  
   }

   for(let i = 0; i < 1; i++){

      let x = document.createElement('tr');
      vector1.appendChild(x);

       for(let j = 0; j < size1; j++){

         let y = document.createElement('td');
         let input = document.createElement('input');
         input.id='td1'+i+j;
         y.appendChild(input);
         x.appendChild(y);
       }
   }

   const processbtn = document.createElement('input');
   processbtn.className="button-primary";
   processbtn.type='button';
   processbtn.value='Generate answer ';
   processbtn.id="s118";
   vector1.appendChild(processbtn);

   document.querySelector('#s118').addEventListener('click', function(){

      document.querySelector('#s118').style.display = 'none';
      const answer=document.createElement('h3');
      answer.id='answer';
      answer.innerHTML='The Euclidean norm is: ';
      vector1.appendChild(answer);

      const answerTable=document.createElement('table');
      answerTable.id='answertable';
      vector1.appendChild(answerTable);

      let norm = 0;

      for(let i = 0; i < 1; i++){

          for(let j = 0; j < size1; j++){

            if(  Number.isNaN(parseInt(document.querySelector('#td1'+i+j).value))){
               alert("Please insert valid numbers");
               location.reload();
                  return false;  
            }

            let current=parseFloat(document.querySelector('#td1'+i+j).value);
            norm+=(current * current);
         }
      }

      const finalNorm = (Math.sqrt(norm));

      for(let i = 0; i < 1; i++){

         let x = document.createElement('tr');
         answerTable.appendChild(x);

          for(let j = 0; j < 1; j++){

            let y = document.createElement('td');
            let input = document.createElement('input');
            input.value=finalNorm.toFixed(2);
            y.appendChild(input);
            x.appendChild(y);
          }
      }

      uiObject.clearAlert("#vtable");
      uiObject.colourAnswer('#answer');
   });
});

 /**
 *  THIS WORKS OUT THE CROSS PRODUCT OF TWO VECTORS
 */
document.querySelector('#s5').addEventListener('click', function(){

   document.querySelector('#s5').style.display = 'none';
   let a=parseFloat(document.querySelector('#i24').value)*parseInt(document.querySelector('#i28').value);
   let b=parseFloat(document.querySelector('#i25').value)*parseInt(document.querySelector('#i27').value);
   let c=parseFloat(document.querySelector('#i25').value)*parseInt(document.querySelector('#i26').value);
   let d=parseFloat(document.querySelector('#i23').value)*parseInt(document.querySelector('#i28').value);
   let e=parseFloat(document.querySelector('#i23').value)*parseInt(document.querySelector('#i27').value);
   let f=parseFloat(document.querySelector('#i24').value)*parseInt(document.querySelector('#i26').value);

   if( Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c) || Number.isNaN(d) || Number.isNaN(e) || Number.isNaN(f) ){
      alert("Please insert valid numbers");
      location.reload();
         return false;  
   }

   let v0=a-b;
   let v1=c-d;
   let v2 =e-f;
   const answers = [];
   answers.push(v0, v1, v2);

   const table = document.querySelector('#cross');
   const answer=document.createElement('h3');
   answer.id='answer';
   answer.innerHTML='The cross-product of the two vectors is: ';
   table.appendChild(answer);

   for( let i = 0; i < 1; i++){

      let x = document.createElement('tr');
      table.appendChild(x);

      for( let j = 0; j < 3; j++){

         let y = document.createElement('td');
         let input = document.createElement('input');
         input.value= answers[j].toFixed(2);
         y.appendChild(input);
         x.appendChild(y);
      }
   }

   uiObject.clearAlert('#cross');
   uiObject.colourAnswer('#cross');
 });

 /**
 *  THIS WORKS OUT SCALAR MULTIPLICATION OF A MATRIX
 */
document.querySelector('#s6').addEventListener('click', function(){

   document.querySelector('#s6').style.display = 'none';
   const table = document.querySelector('#table');

   if(table.innerHTML)
      table.remove();
   
   let a=parseInt(document.querySelector('#i29').value);
   let b=parseInt(document.querySelector('#i30').value);

   if( Number.isNaN(a) || Number.isNaN(b) || a <= 0 ||  b <= 0){
      alert("Please insert valid numbers");
      location.reload();
         return false;  
   }

   for(let i = 0; i < a; i++){

      let x = document.createElement('tr');
      table.appendChild(x);

       for(let j = 0; j < b; j++){
         let y = document.createElement('td');
         let input = document.createElement('input');
         input.id='td'+i+j;
         y.appendChild(input);
         x.appendChild(y);
       }
   }

   const processbtn = document.createElement('input');
   processbtn.className="button-primary";
   processbtn.type='button';
   processbtn.value='Calculate';
   processbtn.id="s7";
   table.appendChild(processbtn);
   const scalarQuantity=parseFloat(document.querySelector('#i31').value);

   document.querySelector('#s7').addEventListener('click', function(){

      document.querySelector('#s7').style.display = 'none';
      const answer=document.createElement('h3');
      answer.id='answer';
      answer.innerHTML='The resultant matrix is: ';
      table.appendChild(answer);

      for(let i = 0; i < a; i++){

         let x = document.createElement('tr');
         table.appendChild(x);
   
          for(let j = 0; j < b; j++){

            if(  Number.isNaN(parseInt(document.querySelector('#td'+i+j).value))){
               alert("Please insert valid numbers");
               location.reload();
                  return false;  
            }

            let y = document.createElement('td');
            let input = document.createElement('input');
            let current=parseFloat((document.querySelector('#td'+i+j).value)*scalarQuantity);
            input.value=current.toFixed(2);
            y.appendChild(input);
            x.appendChild(y);
          }
      }
      uiObject.clearAlert(".table");
      uiObject.colourAnswer('#answer');
   });
});

/**
 *  THIS WORKS OUT THE TRANSPOSITION OF TWO MATRIX
 */
document.querySelector('#s8').addEventListener('click', function(){

   document.querySelector('#s8').style.display = 'none';
   const table = document.querySelector('#table2');

   if(table.innerHTML)
      table.remove();

   let a=parseInt(document.querySelector('#i32').value);
   let b=parseInt(document.querySelector('#i33').value);

   if( Number.isNaN(a) || Number.isNaN(b) || a <= 0 ||  b <= 0){
      alert("Please insert valid numbers");
      location.reload();
         return false;  
   }

   for(let i = 0; i < a; i++){

      let x = document.createElement('tr');
      table.appendChild(x);

       for(let j = 0; j < b; j++){
         let y = document.createElement('td');
         let input = document.createElement('input');
         input.id='td'+i+j;
         y.appendChild(input);
         x.appendChild(y);
       }
   }

   const processbtn = document.createElement('input');
   processbtn.className="button-primary";
   processbtn.type='button';
   processbtn.value='Calculate';
   processbtn.id="s9";
   table.appendChild(processbtn);

   document.querySelector('#s9').addEventListener('click', function(){

      document.querySelector('#s9').style.display = 'none';
      const answer=document.createElement('h3');
      answer.id='transposed'
      answer.innerHTML='The transposed matrix is: ';
      table.appendChild(answer);

      for(let i = 0; i < b; i++){

         let x = document.createElement('tr');
         table.appendChild(x);
   
         for(let j = 0; j < a; j++){

            let y = document.createElement('td');
            let input = document.createElement('input');
            let current=parseFloat(document.querySelector('#td'+j+i).value);
            input.value=current;
            y.appendChild(input);
            x.appendChild(y);
         }
      }
      uiObject.clearAlert(".table2");
      uiObject.colourAnswer('#transposed');
   });
 });

 /**
 *  THIS WORKS OUT VECTOR MATRIX MULTIPLICATION
 */
document.querySelector('#s10').addEventListener('click', function(){

   document.querySelector('#s10').style.display = 'none';
   const matrixTable=document.querySelector('#matrixTable');
   const matrixRow=parseInt(document.querySelector('#i34').value);
   const matrixColumn=parseInt(document.querySelector('#i35').value);

   const answer1=parseInt(document.querySelector('#i36').value);
   const vectorTable=document.querySelector('#vectort');

   const arrayAnswer1 = [];

   if( answer1 <= 0 || Number.isNaN(answer1) || answer1 != matrixColumn ){
      alert("Vector has to be a positive integer bigger than 0.");
         location.reload();
            return false;  
   }

   for(let i = 0; i < answer1; i++ ){

      let x = document.createElement('tr');
      vectorTable.appendChild(x);

      for(let j = 0; j < 1; j++){
         let y = document.createElement('td');
         let input = document.createElement('input');
         input.id='td1'+i+j;
         y.appendChild(input);
         x.appendChild(y);
      }
   }

   for(let i = 0; i < matrixRow; i++){

      let x = document.createElement('tr');
      matrixTable.appendChild(x);

       for(let j = 0; j < matrixColumn; j++){
         let y = document.createElement('td');
         let input = document.createElement('input');
         input.id='td'+i+j;
         y.appendChild(input);
         x.appendChild(y);
       }
   }
      
   const processbtn = document.createElement('input');
   processbtn.className="button-primary";
   processbtn.type='button';
   processbtn.value='Generate answer ';
   processbtn.id="s11";
   matrixTable.appendChild(processbtn);

   document.querySelector('#s11').addEventListener('click', function(){

      document.querySelector('#s11').style.display = 'none';

         for( let i = 0; i < 1; i++){
            for( let j = 0; j < answer1; j++){
               arrayAnswer1.push(document.querySelector('#td1'+j+i).value);
            }
         }

         const answerTable=document.createElement('table');
         answerTable.id='answertable';
         matrixTable.appendChild(answerTable);

         let answer=0;
         const answerArray=[]

         for(let i = 0; i < matrixRow; i++){

            let x = document.createElement('tr');
            answerTable.appendChild(x);
      
            for(let j = 0; j < matrixColumn; j++){

               if(  Number.isNaN(parseInt(document.querySelector('#td'+i+j).value))){
                  alert("Please insert valid numbers");
                  location.reload();
                     return false;  
               }
               let m1=parseFloat(document.querySelector('#td'+i+j).value);
               let v1=parseFloat(arrayAnswer1[j]);
               answer+=m1*v1;
            }

             answerArray.push(answer);
             answer=0;
         }

         const answerLabel=document.createElement('h3');
         answerLabel.id='vector-matrix-multiplication'
         answerLabel.innerHTML='The resultant matrix is:';
         answerTable.appendChild(answerLabel);

         for(let i = 0; i < matrixRow; i++){

            let x = document.createElement('tr');
            answerTable.appendChild(x);
      
             for(let j = 0; j < 1; j++){
               let y = document.createElement('td');
               let input = document.createElement('input');
               input.value=answerArray[i].toFixed(2);
               y.appendChild(input);
               x.appendChild(y);
             }
         }
      uiObject.clearAlert("#matrixTable");
      uiObject.colourAnswer('#vector-matrix-multiplication');
   });
});

/**
 *  THIS WORKS OUT THE MULTIPLICATION OF TWO MATRICIES
 */
document.querySelector('#s12').addEventListener('click', function(){

   document.querySelector('#s12').style.display = 'none';
   const table1=document.querySelector('#matrixtable1');
   const table2=document.querySelector('#matrixtable2');
   const size1=parseInt(document.querySelector('#i39').value);
   const size2=parseInt(document.querySelector('#i40').value);
   const size3=parseInt(document.querySelector('#i41').value);
   const size4=parseInt(document.querySelector('#i42').value);

   if( Number.isNaN(size1) || Number.isNaN(size2) || Number.isNaN(size3) || Number.isNaN(size4) || size1<=0 || size2<=0 ||size3<=0 ||size4<=0 || size3!==size2){
      alert("This is impossible to calculate");
      location.reload();
         return false;  
   }

   if( size2 !== size3 ){
      alert("This is impossible to calculate. Please check your dimensions");
         location.reload();
            return false;  
   }

   for(let i = 0; i < size1; i++){

      let x = document.createElement('tr');
      table1.appendChild(x);

       for(let j = 0; j < size2; j++){
         let y = document.createElement('td');
         let input = document.createElement('input');
         input.id='td1'+i+j;
         y.appendChild(input);
         x.appendChild(y);
       }
   }

   for(let k = 0; k < size3; k++){

      let x = document.createElement('tr');
      table2.appendChild(x);

       for(let l = 0; l < size4; l++){
         let y = document.createElement('td');
         let input = document.createElement('input');
         input.id='td2'+k+l;
         y.appendChild(input);
         x.appendChild(y);
       }
   }

   const processbtn = document.createElement('input');
   processbtn.className="button-primary";
   processbtn.type='button';
   processbtn.value='Generate answer ';
   processbtn.id="s13";
   matrixtable2.appendChild(processbtn);

   document.querySelector('#s13').addEventListener('click', function(){

      document.querySelector('#s13').style.display = 'none';
      let row = size1;
      let col = size2;
      let arr = new Array(row);

      for(let i = 0; i < row; i++){
         arr[i] =  new Array(col);
         
            for(let j = 0; j < col; j++) {

               if( Number.isNaN(parseInt(document.querySelector('#td1'+i+j).value))){
                  alert("Please insert valid numbers");
                  location.reload();
                     return false;  
               }

               arr[i][j] = parseFloat(document.querySelector('#td1'+i+j).value);
            }
      }

      let row2 = size3;
      let col2 = size4;
      let arr2 = new Array(col2);

      for(let i = 0; i < col2; i++) {
         arr2[i] = new Array(row2);

            for(let j = 0; j < row2; j++) {

               if(  Number.isNaN(parseInt(document.querySelector('#td2'+j+i).value))){
                  alert("Please insert valid numbers");
                  location.reload();
                     return false;  
               }

               arr2[i][j] = parseFloat(document.querySelector('#td2'+j+i).value);
            }
      }

      const arr3=[];
      let j=0;
      let k=0;
      let l=0;
      let m=0;
      let answerTally=0;
      let colCounter=1;
      let endOfRoad=false;
      let overallLoopCounter=0;
      let counterForColCounter=1;
      let SpecialCase=false;

      while(j < row){
         k=0;
         while(k < col){
            if(j <= 1)
                  SpecialCase=true;
            
            if(colCounter >= row2){
               if((endOfRoad===true && counterForColCounter >=col2) || (SpecialCase===true && counterForColCounter >=col2)){
                  answerTally+=arr[j][k]*arr2[l][m];
                  arr3.push(answerTally);
                  l=0; m=0; k=100;
                  endOfRoad=false;
                  colCounter=1;
                  counterForColCounter=1;
                  answerTally=0;
               }
               else{
                  answerTally+=arr[j][k]*arr2[l][m];
                  arr3.push(answerTally);
                  j=overallLoopCounter;
                  endOfRoad=true;
                  l++; m=0; colCounter=1; k=0;
                  answerTally=0;
                  counterForColCounter++;
               }
            }
            else{
               answerTally+=arr[j][k]*arr2[l][m];
               colCounter++;
               k++; m++;
               if(j <= 1)
                  SpecialCase=true;
            }
         }

         j++;
         overallLoopCounter++;
      }

      const answer = document.createElement('h3');
      answer.id='answer';
      answer.textContent='The resultant matrix is:';
      matrixtable2.appendChild(answer);

      const answerTable=document.createElement('table');
      answerTable.id='answertable';
      matrixtable2.appendChild(answerTable);

      let answerArrayCounter=0;

      for(let i = 0; i < row; i++){

         let x = document.createElement('tr');
         answerTable.appendChild(x);
   
          for(let j = 0; j < col2; j++){
            let y = document.createElement('td');
            let input = document.createElement('input');
            input.value=arr3[answerArrayCounter].toFixed(2);
            y.appendChild(input);
            x.appendChild(y);
            answerArrayCounter++;
          }
      }
      uiObject.clearAlert("#matrixTable");
      uiObject.colourAnswer('#answer');
   });
});

/**
 *  THIS WORKS OUT THE DETERMINANT OF A MATRIX
 */
document.querySelector('#s14').addEventListener('click', function(){

   document.querySelector('#s14').style.display = 'none';
   let matrixDimention=parseInt(document.querySelector('#i43').value);
   let determinantTable=document.querySelector('#determinanttable');

   if( Number.isNaN(matrixDimention) || matrixDimention <=0 ){
      alert("This is impossible to calculate");
      location.reload();
         return false;  
   }

   for(let i = 0; i < matrixDimention; i++){

      let x = document.createElement('tr');
      determinantTable.appendChild(x);

       for(let j = 0; j < matrixDimention; j++){
         let y = document.createElement('td');
         let input = document.createElement('input');
         input.id='td'+i+j;
         y.appendChild(input);
         x.appendChild(y);
       }
   }

   const processbtn = document.createElement('input');
   processbtn.className="button-primary";
   processbtn.type='button';
   processbtn.value='Generate answer ';
   processbtn.id="s15";
   determinantTable.appendChild(processbtn);

   document.querySelector('#s15').addEventListener('click', function(){

      document.querySelector('#s15').style.display = 'none';
      let arr = new Array(matrixDimention);
      for(let i = 0; i < matrixDimention; i++)
         arr[i] = new Array(matrixDimention);

      for(let x=0; x<matrixDimention; x++){
         for(y=0; y<matrixDimention; y++){

            if(  Number.isNaN(parseInt(document.querySelector('#td'+x+y).value))){
               alert("Please insert valid numbers");
               location.reload();
                  return false;  
            }

             arr[x][y]=parseFloat(document.querySelector('#td'+x+y).value);
         }
      }

      let determinent=determinantOfMatrix(arr, matrixDimention);
      const answer = document.createElement('h3');
      answer.id='answer';
      answer.textContent=`The determinant of the matrix is: `;
      determinantTable.appendChild(answer);
   
      for(let i = 0; i < 1; i++){

         let x = document.createElement('tr');
         determinantTable.appendChild(x);
   
          for(let j = 0; j < 1; j++){
            let y = document.createElement('td');
            let input = document.createElement('input');
            input.value=determinent.toFixed(2);
            y.appendChild(input);
            x.appendChild(y);
          }
      }

      uiObject.clearAlert('#determinanttable');
      uiObject.colourAnswer('#answer');
   });
});

/**
 *  RECURSIVE FUNCTION USED FOR THE DETERMINANT
 */
function co_FactorOfMatrix(mat, temp, p, q, size){

   let i = 0, j = 0;
   for (let row = 0; row < size; row++)
   {
       for (let col = 0; col < size; col++)
       {
           if (row != p && col != q)
           {
               temp[i][j++] = mat[row][col];
               if (j == size- 1)
               {
                   j = 0;
                   i++;
               }
          }
      }
   }
}

/**
 *  RECURSIVE FUNCTIONS USED FOR THE DETERMINANT
 */
function determinantOfMatrix(matrix, size){

   let result=0;

      if(size === 1)
         return matrix[0][0];

   let tempArr=new Array(size);

      for(let i = 0; i < size; i++)
         tempArr[i] = new Array(size);

   let sign = 1;

      for (let z = 0; z < size; z++){
         co_FactorOfMatrix(matrix, tempArr, 0, z, size);
         result += sign * matrix[0][z]* determinantOfMatrix(tempArr, size - 1);
         sign = -sign;
      }
      
   return result;
}

/**
 *  FUNCTIONS USED TO DETERMINE WHETHER THE ENEMY IS INFRONT OR BEHIND THE CHARACTER
 */
document.querySelector('#s120').addEventListener('click', function(){

   document.querySelector('#s120').style.display = 'none';
   const p1 = parseFloat(document.querySelector('#pv1').value);
   const p2 = parseFloat(document.querySelector('#pv2').value);
   const p3 = parseFloat(document.querySelector('#pv3').value);
   const d1 = parseFloat(document.querySelector('#dv1').value);
   const d2 = parseFloat(document.querySelector('#dv2').value);
   const d3 = parseFloat(document.querySelector('#dv3').value);
   const e1 = parseFloat(document.querySelector('#ev1').value);
   const e2 = parseFloat(document.querySelector('#ev2').value);
   const e3 = parseFloat(document.querySelector('#ev3').value);
   const position = document.querySelector('#position');

   if(  Number.isNaN(p1) || Number.isNaN(p2) || Number.isNaN(p3) || Number.isNaN(d1) || Number.isNaN(d2) || Number.isNaN(d3) || Number.isNaN(e1) || Number.isNaN(e2) || Number.isNaN(e3) ){
      alert("Please insert valid numbers");
      location.reload();
         return false;  
   }

   let dotProduct = 0;

   const nv1 = e1-p1;
   const nv2 = e2-p2;
   const nv3 = e3-p3;

   dotProduct+= (nv1*d1)+(nv2*d2)+(nv3*d3);

   if( dotProduct > 0 )
      position.innerHTML = 'The enemy is infront of the character';

   else if( dotProduct === 0 )
      position.innerHTML = 'The enemy is neither infront or behind. The enemy is directly to the left or the right of the character';

   else
      position.innerHTML = 'The enemy is behind of the character';

   uiObject.clearAlert('#position');
   uiObject.colourAnswer('#position');

});

/**
 *  FUNCTIONS USED TO DETERMINE WHETHER THE ENEMY IS TO THE LEFT OR TO THE RIGHT OF THE CHARACTER
 */
document.querySelector('#s121').addEventListener('click', function(){

   document.querySelector('#s121').style.display = 'none';
   const p1 = parseFloat(document.querySelector('#pv11').value);
   const p2 = parseFloat(document.querySelector('#pv22').value);
   const p3 = parseFloat(document.querySelector('#pv33').value);
   const d1 = parseFloat(document.querySelector('#dv11').value);
   const d2 = parseFloat(document.querySelector('#dv22').value);
   const d3 = parseFloat(document.querySelector('#dv33').value);
   const e1 = parseFloat(document.querySelector('#ev11').value);
   const e2 = parseFloat(document.querySelector('#ev22').value);
   const e3 = parseFloat(document.querySelector('#ev33').value);
   const u1 = parseFloat(document.querySelector('#uv11').value);
   const u2 = parseFloat(document.querySelector('#uv22').value);
   const u3 = parseFloat(document.querySelector('#uv33').value);
   const position = document.querySelector('#position2');

   let leftSystem = document.querySelector('#left').checked;
   let rightSystem = document.querySelector('#right').checked;

   if(  Number.isNaN(p1) || Number.isNaN(p2) || Number.isNaN(p3) || Number.isNaN(d1) || Number.isNaN(d2) || Number.isNaN(d3) || Number.isNaN(e1) || Number.isNaN(e2) || Number.isNaN(e3) || Number.isNaN(u1) || Number.isNaN(u2) || Number.isNaN(u3) ){
      alert("Please insert valid numbers");
      location.reload();
         return false;  
   }

   if( rightSystem === true || ( leftSystem === false && rightSystem === false ) ){

      const nv1 = (u2*d3)-(u3*d2);
      const nv2 = (u3*d1)-(u1*d3);
      const nv3 = (u1*d2)-(u2*d1);
   
      const posVec1 = e1-p1;
      const posVec2 = e2-p2;
      const posVec3 = e3-p3;

      let dotProduct = 0;

      dotProduct += (nv1*posVec1)+(nv2*posVec2)+(nv3*posVec3);
   
      if( dotProduct > 0 )
         position.innerHTML = 'The enemy is to the left of the character';
   
      else if( dotProduct === 0 )
         position.innerHTML = 'The enemy is neither to the left or to the right. The enemy is in line (directly infront or behind) with the character';
   
      else
         position.innerHTML = 'The enemy is to the right of the character';

   }

   else {

      const nv1 = (u3*d2)-(u2*d3);
      const nv2 = (u1*d3)-(u3*d1);
      const nv3 = (u2*d1)-(u1*d2);
   
      const posVec1 = e1-p1;
      const posVec2 = e2-p2;
      const posVec3 = e3-p3;

      let dotProduct = 0;

      dotProduct += (nv1*posVec1)+(nv2*posVec2)+(nv3*posVec3);
   
      if( dotProduct > 0 )
         position.innerHTML = 'The enemy is to the left of the character';
   
      else if( dotProduct === 0 )
         position.innerHTML = 'The enemy is neither to the left or to the right. The enemy is in line (directly infront or behind) with the character';
   
      else
         position.innerHTML = 'The enemy is to the right of the character';
   }


   uiObject.clearAlert('#position2');
   uiObject.colourAnswer('#position2');

});

/**
 *  FUNCTIONS USED TO DETERMINE GAUSS ELIMINATION
 */

document.querySelector('#s300').addEventListener('click', function(){

   document.querySelector('#s300').style.display = 'none';
   let matrixRow=parseInt(document.querySelector('#i300').value);
   let matrixCol=parseInt(document.querySelector('#i301').value);
   let gaussTable=document.querySelector('#gausstable');
   let numberOfSolutions=parseInt(document.querySelector('#i302').value);
   let solutionsTable=document.querySelector('#solutionstable');

   if( Number.isNaN(matrixRow) || matrixRow <=0 || Number.isNaN(matrixCol) || matrixCol <=0  || Number.isNaN(numberOfSolutions) || numberOfSolutions !== matrixCol ){
      alert("This is impossible to calculate");
      location.reload();
         return false;  
   }

   for(let i = 0; i < matrixRow; i++){

      let x = document.createElement('tr');
      gaussTable.appendChild(x);

       for(let j = 0; j < matrixCol; j++){
         let y = document.createElement('td');
         let input = document.createElement('input');
         input.id='td1'+i+j;
         y.appendChild(input);
         x.appendChild(y);
       }
   }

   for(let i = 0; i < matrixRow; i++){

      let x = document.createElement('tr');
      solutionsTable.appendChild(x);

       for(let j = 0; j < 1; j++){
         let y = document.createElement('td');
         let input = document.createElement('input');
         input.id='td2'+i+j;
         y.appendChild(input);
         x.appendChild(y);
       }
   }

   const processbtn = document.createElement('input');
   processbtn.className="button-primary";
   processbtn.type='button';
   processbtn.value='Generate answer ';
   processbtn.id="s301";
   solutionsTable.appendChild(processbtn);

   document.querySelector('#s301').addEventListener('click', function(){

      document.querySelector('#s301').style.display = 'none';

      var solutionsArray = new Array(numberOfSolutions);
      
      var matrixArray = new Array(matrixRow);            
      for (let i = 0; i < matrixRow; i++) {
         matrixArray[i] = new Array(matrixCol);        
      }

      for( let i = 0; i < matrixRow; i++){
         
         for(let j = 0; j < matrixCol; j++)
         {
            matrixArray[i][j] = parseFloat(document.querySelector('#td1'+i+j).value);
         }
      }

      for( let i = 0; i < matrixRow; i++ ){

         for(let j = 0; j < 1; j++)
         solutionsArray[i] = parseFloat(document.querySelector('#td2'+i+j).value);
      }

      let matrixArrayLength = solutionsArray.length;

      for( let k = 0; k < matrixArrayLength; k++){

         let max = k;

         for (let i = k + 1; i < matrixArrayLength; i++) 
                if (Math.abs(matrixArray[i][k]) > Math.abs(matrixArray[max][k])) 
                    max = i;

         let temp = matrixArray[k]; 
         matrixArray[k] = matrixArray[max]; 
         matrixArray[max] = temp;

         let t = solutionsArray[k]; 
         solutionsArray[k] = solutionsArray[max]; 
         solutionsArray[max] = t;

         for (let i = k + 1; i < matrixArrayLength; i++) 
         {
             let factor = matrixArray[i][k] / matrixArray[k][k];
             solutionsArray[i] -= factor * solutionsArray[k];
             for (let j = k; j < matrixArrayLength ; j++) 
                 matrixArray[i][j] -= factor * matrixArray[k][j];
         }

      }

      const solution = new Array(numberOfSolutions);
      for (let i = numberOfSolutions - 1; i >= 0; i--) 
      {
          let sum = 0.0;
          for (let j = i + 1; j < numberOfSolutions; j++) 
              sum += matrixArray[i][j] * solution[j];
          solution[i] = (solutionsArray[i] - sum) / matrixArray[i][i];
      }        

      const answer = document.createElement('h3');
      answer.id='answer';
      answer.textContent=`The solution to the system of equations is: `;
      solutionsTable.appendChild(answer);

      
         for(let i = 0; i < matrixRow; i++){

            let x = document.createElement('tr');
            solutionsTable.appendChild(x);
      
             for(let j = 0; j < 1; j++){
               let y = document.createElement('td');
               let input = document.createElement('input');
               if(solution[i] === Number.POSITIVE_INFINITY ||solution[i] === Number.NEGATIVE_INFINITY || Number.isNaN(solution[i]) )
                  input.value=`X${i}= NO SOLUTION`;
               else
                  input.value=`X${i}= `+solution[i];
               y.appendChild(input);
               x.appendChild(y);
             }
         }
   
         uiObject.clearAlert('#solutionstable');
         uiObject.colourAnswer('#answer');

   });
   
});