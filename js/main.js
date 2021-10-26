const handleClick = () => {
  const buttons = document.querySelectorAll(".button");
  for (const button of buttons) {
    button.addEventListener("click", (e)=>{
      console.log(e.target.innerText);
      //console.log(button.innerText);
    })
  }
};