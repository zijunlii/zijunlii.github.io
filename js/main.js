var time = document.getElementById('time')

var today = new Date();

var t = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
time.append(t)

const getValueInput = () =>{

    let inpt = document.getElementById('code').value;
    let reg = /^[A-Za-z]\d[A-Za-z][\s-]?\d[A-Za-z]\d$/;
    if (reg.test(inpt)) document.getElementById('valueInput').innerHTML = '';
    else document.getElementById('valueInput').innerHTML = 'Check your inputs and try again';
    // document.getElementById('valueInput').innerHTML = inpt

    let phone = document.getElementById('phone').value;
    let r = /^((\(\d{3}\))|(\d{3}))\s?\d{3}[\s-]?\d{4}$/;
    if (r.test(phone)) document.getElementById('value2Input').innerHTML = '';
    else document.getElementById('value2Input').innerHTML = 'Check your inputs and try again'
}

// const box = document.getElementById('active')

// function handleClick(){

//     var chk = document.getElementById('hiring');
//     var active = document.getElementById('active');

//     let html= ```
//     <label for="rate">Hourly Rate</label>
//     <input type="text" name="rate">```

//     if(chk.checked){
//         // active.append(html)
//         console.log('clicked')

//     }
    // if (document.getElementById('hiring').checked){
    //     box.classList.to= 'active';
    // }
    // else{
    //     box.style.display = 'none';
    // }
// }

function showInput(){
    let rate = document.getElementById('active');
    let u = document.getElementById('u')
    let v = document.getElementById('v')
    rate.style.visibility = 'visible'
    u.style.visibility = 'hidden'
    v.style.visibility = 'hidden'
}