const modal=document.getElementById('modal')
const parameterBtn=document.querySelector('#Parametre')
const closeBtn = document.getElementById('closeBtn')


parameterBtn.addEventListener('click',(e)=>{
modal.showModal()
})
closeBtn.addEventListener('click',(e)=>{
    modal.close()
})
// $('#closeBtn').on('click',function(){
//     $('modal').modal('hide');
// });
