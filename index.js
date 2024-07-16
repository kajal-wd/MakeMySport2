let lists = document.querySelectorAll('.dropdown-nav ul');
listOpenUserData =()=>{
    let list_dropdown = lists[0];
    console.log(list_dropdown);
    list_dropdown.classList.toggle('d-none');
}

listOpenpayment =()=>{
    let list_dropdown = lists[1];
    console.log(list_dropdown);
    list_dropdown.classList.toggle('d-none');
}

modalopen =()=>{
    let modal_box = document.querySelector('#exampleModal');
    modal_box.style.display = 'block';
    let role_box = modal_box.getAttribute("role");
    role_box="dialog";
    console.log(role_box);
    console.log(modal_box);
}

buttonable=()=>{
   let btn_div = document.querySelector('.making-able button');
   btn_div.classList.remove('disabled');
   let mycheck = document.querySelector('#athele-checkbox');
   mycheck.checked = true;
}

buttondiasble=()=>{
    let mycheck = document.querySelector('#athele-checkbox');
    let btn_div = document.querySelector('.making-able button');
    
    if(mycheck.checked == true)
    {
        mycheck.checked = false;
        btn_div.classList.add('disabled')
    }
}