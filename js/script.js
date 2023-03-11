const colorPicker = document.querySelector('.color-picker');

function colorCreation() {
  const variableColor = document.createElement('div');
  variableColor.classList.add('colors');
  colorPicker.appendChild(variableColor);
}



// create 10 color elements
for (let i = 0; i < 10000; i++) {
  colorCreation();
}
function changeColor() {
  const variableColor = document.querySelectorAll('.colors');
  let red = 0;
  let green = 0;
  let blue = 0;

  variableColor.forEach((element) => {
    element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    element.innerText=`rgb(${red}, ${green}, ${blue})`;
    // console.log(`rgb(${red}, ${green}, ${blue})`);
    if (blue != 255) {
      blue += 1;
    } else {
      blue = 255;
      // blue-=25;
      if (green != 255) {
        green += 1;
      } else {

        green = 255;
        // green-=25;
        if (red != 255) {
          red += 1;
        } else {
          // red-=25;
          red = 255;
        }
      }
    }
    if(blue==255 && green ==255 && red==255 ){
      blue=0;
      green=0;
      red=0;
    }

  });
}

changeColor();
