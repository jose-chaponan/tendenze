let _callServices = () =>{
  fetch('../json/services.json')
  .then(response => response.json())
  .then(data => {

    console.log(data);
  })
}

_callServices();
// window.onload = () => {
//   _callServices();
// }