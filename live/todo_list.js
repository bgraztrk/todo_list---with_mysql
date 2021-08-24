const form = document.querySelector(".deneme");
const input = document.querySelector("#input");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const list = document.querySelector("#list");
const select = document.querySelector(".clsoption");
const userInput = document.querySelector("#user-id");

loadItems();
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addNewItem);
  btnDeleteAll.addEventListener("click", deleteAllItems);
  $('.delete').on('click', deleteItem);
  $('.edit').on('click', editItem);
}

function loadItems() {
  userInput.value = window.localStorage.getItem('user_name');
  $('#list').html("");
  let items = getItemFromDB();
  items?.forEach((item) => {
    createItems(item.title, item.id, item.isCompleted, item.category, item.user_id);
  });
}

function getItemFromDB(){
  let a = {};
 $.ajax({
  url: "http://localhost/live/db_conn.php",
  method: "GET",
  async:false,
  data: {
   "user_id": window.localStorage.getItem("user_id"),
   },success: function(data){
    a = data;
  }
});
return a;
}

var editinput ;
var selectinput ; 

function createItems(title, id, isCompleted = false, category) {
  const li = document.createElement("li");
  li.className = 'list-item';
  editinput = document.createElement("input");
  editinput.className = 'edit-input';
  li.id = id;
  selectinput = document.createElement("input")
  selectinput.className = 'select-input';
  selectinput.id = 'sinput';
  editinput.value = title
  selectinput.value = category
  const a = document.createElement("a");
  const b = document.createElement("a");
  a.className = "delete";
  b.className = "edit";
  a.setAttribute("href","#");
  a.setAttribute("data-id",id);
  b.setAttribute("href","#");
  a.innerHTML = '<i class="fas fa-times"></i>';
  b.innerHTML = '<i class="fas fa-edit"></i>';
  li.appendChild(editinput);
  li.appendChild(selectinput);
  li.appendChild(a);
  li.appendChild(b);
  list.appendChild(li);
}

function addNewItem(e) {

  if (input.value == "") {
    alert("list is empty , please add new item...");
  } else {
    $.ajax({
      url: "http://localhost/live/db_conn.php",
      method: "POST",
      data: {
        "isCompleted":false,
        "title":input.value.trim(),
        "category":select.value,
        "user_id":window.localStorage.getItem("user_id"),
        "type":'add',

      },success: function(response) {
       // setItemToLS(input.value, response);
       data?.forEach((item) => {
         createItems(item.title, item.id, item.isCompleted, item.category, item.user_id);
       });
      }
    }).done(function() {
      $( this ).addClass( "done" );
    });
    input.value = "";
    alert("Urun basarıyla eklenmistir...");
  }
  loadItems();
}

function editItem(e){
  
  const parent = $(this).parent()
  const idName = parent.attr('id')
  const input = parent.find('input').val()
  const sinput = parent.find('#sinput').val()

    $.ajax({
      url: "http://localhost/live/db_conn.php",
      method: "POST",
      data: {
        "title":input,
        "id": idName,
        "category": sinput,
        "type": 'update',
      }
    }).done(function() {
      $( this ).addClass( "done" );
    });

  
}

function deleteItem(e) {

  const idName = $(this).data('id');

    $(this).closest('.list-item').remove();

    $.ajax({
      url: "http://localhost/live/db_conn.php",
      method: "POST",
      data: {
        "id": idName,
        "type": 'del',
      }
    }).done(function() {
      $( this ).addClass( "done" );
    });
}

function deleteAllItems(e) {
  list.innerHTML = "";
  $.ajax({
    url: "http://localhost/live/db_conn.php",
    method: "POST",
    data: {
      "isCompleted":false,
      "title":input.value,
      "user_id":window.localStorage.getItem('user_id'),
      "type": 'delAll',
    }
  }).done(function() {
    $( this ).addClass( "done" );
  });
  
}


