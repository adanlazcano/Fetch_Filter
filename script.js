const input = document.querySelector('#searchInput');
const ol = document.querySelector('#users');
let users = []


const loadUsers = async () => {
  const response = await fetch('https://fakerapi.it/api/v1/users?_quantity=100')
  return await response.json();

}
const renderUsers = users => {
  ol.innerHTML = ''
  users.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `${item.firstname} ${item.lastname}`
    ol.append(li)
  })

}

window.addEventListener('DOMContentLoaded', async _ => {

  ol.innerHTML = "<h1>Loading...</h1>"
  const data = await loadUsers();
  users = data.data;

  renderUsers(users)
})

input.addEventListener('keyup', _ => {
  const filterUsers = users.filter(user => `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()}`.includes(input.value.toLowerCase()))
  renderUsers(filterUsers)
})
