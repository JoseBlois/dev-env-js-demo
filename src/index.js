import './index.css';
import {getUsers} from './api/userApi';
import {delUser} from './api/userApi';

console.log('ESTO ESTÁ BUNDLEADO') //eslint-disable-line no-console
getUsers().then(result => {
    let table = document.getElementById('tbody');
    console.log(result)//eslint-disable-line no-console
    let tableBody='';
    result.forEach(user => {
        tableBody += `<tr><td><a href="#" class="deleteUser" data-id=\"${user.id}\">Delete</a></td>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
        </tr>`
    })
    table.innerHTML=tableBody;
    const deleteLinks = window.document.querySelectorAll('.deleteUser');
    Array.from(deleteLinks, link => {
        link.addEventListener('click',function(e){
            let element = e.target;
            e.preventDefault();
            //WE HAVE YET TO DELETE THE ITEM FROM THE DATABASE
            //code goes here...
            delUser(element.attributes['data-id'].value);
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        },false)
    })
})


