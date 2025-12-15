tailwind.config = {
  theme: {
    extend: {
      colors: {
        'brand-black': '#2C1616',
        'brand-dark': '#340000',
        'brand-red': '#760002',
        'brand-bg': '#FFFAEC',

    },
    fontFamily: {
        title: ['Kanit', 'sans-serif'],
        body: ['Lora', 'serif'],
        alt: ['Poppins', 'sans-serif']
      }
    }
  }
}


// untuk mematikan akses ke inspect elemen
// document.addEventListener("contextmenu", function(e){
//   e.preventDefault();
// }, false);

// document.addEventListener("keydown", function(e){
//   if (e.ctrlKey || e.keyCode==123) {
//     e.stopPropagation();
//     e.preventDefault();
//   }
// });