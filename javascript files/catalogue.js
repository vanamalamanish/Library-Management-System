const books = [
  {
    id: 1,
    Branch: "CSE",
    Image: "https://images-na.ssl-images-amazon.com/images/I/71kBRLo8ZtL.jpg",
    Author: "Uttam K.Roy",
    Publisher: "Tata",
    Price: "$50",
  },
  {
    id: 2,
    Branch: "CSE",
    Image: "https://m.media-amazon.com/images/I/418ow0JdGSL.jpg",
    Author: "Herbert Scildt",
    Publisher: "Tata",
    Price: "$60",
  },
  {
    id: 3,
    Branch: "CSE",
    Image: "https://images-na.ssl-images-amazon.com/images/I/81eF-RxjuaL.jpg",
    Author: "Mark Lutz",
    Publisher: "Tata",
    Price: "$55",
  },
  {
    id: 4,
    Branch: "ECE",
    Image: "https://images-na.ssl-images-amazon.com/images/I/516fDalhC8L.jpg",
    Author: "A Vallavaraj<",
    Publisher: "Ravi",
    Price: "$70",
  },
  {
    id: 5,
    Branch: "ECE",
    Image:
      "https://images-na.ssl-images-amazon.com/images/I/51OrRiKbXUL._SX375_BO1,204,203,200_.jpg",
    Author: "M.Gopal",
    Publisher: "Ravi",
    Price: "$45",
  },
  {
    id: 6,
    Branch: "ECE",
    Image: "https://images-na.ssl-images-amazon.com/images/I/71W+tIorkPL.jpg",
    Author: "Vladimir V.Mithin",
    Publisher: "Ravi",
    Price: "$30",
  },
  {
    id: 7,
    Branch: "IT",
    Image:
      "https://images-na.ssl-images-amazon.com/images/I/413R29u0XrL._SX379_BO1,204,203,200_.jpg",
    Author: "Raj Kamal",
    Publisher: "Raghava",
    Price: "$35",
  },
  {
    id: 8,
    Branch: "IT",
    Image: "https://images-na.ssl-images-amazon.com/images/I/81iXn5LPFiL.jpg",
    Author: "Ivan Marsic",
    Publisher: "Raghava",
    Price: "$42",
  },
  {
    id: 9,
    Branch: "IT",
    Image: "https://images-na.ssl-images-amazon.com/images/I/7171UX9IK9L.jpg",
    Author: "Kevin Mitnick",
    Publisher: "Raghava",
    Price: "$60",
  },
];
function addToCart(no) {
  console.log("clicked");
  let addedBooks = document.querySelector(".addedBooks");
  let template = "";
  template += `
    <tr>
    <td>${books[no].Branch}</td>
    <td><img src=${books[no].Image} alt="DS" width="40" height="40"</td>
    <td>${books[no].Author}</td>
    <td>${books[no].Publisher}</td>
    <td>${books[no].Price}</td>
    `;
  addedBooks.innerHTML = template;
}
window.addEventListener("DOMContentLoaded", () => {
  let template = "";
  template += `
    <table>
    <tr>
        <th>Branch</th>
        <th>Image</th>
        <th>Author</th>
        <th>Publisher</th>
        <th>Price</th>
        <th>Add to Cart</th>    
    </tr>
    `;
  for (var i = 0; i < books.length; i++) {
    template += `
        <tr>
        <td>${books[i].Branch}</td>
        <td><img src=${books[i].Image} alt="DS" width="40" height="40"</td>
        <td>${books[i].Author}</td>
        <td>${books[i].Publisher}</td>
        <td>${books[i].Price}</td>
        <td><form><input type="button" value="Add to Cart" onclick="sendBookInfo(${i})"></form></td>
    </tr> 
        `;
  }
  template += "</table>";
  let box = document.querySelector(".box");
  box.innerHTML = template;
});
function sendBookInfo(no) {
  if(localStorage.getItem('id')==null){
    localStorage.setItem('id',no);
  }
  else{
    var items = localStorage.getItem('id');
    var flag=0;
    for(i in items){
      if(i==no){
        alert("This book is already added into the cart...");
        flag=1;
        break;
      }
    }
    if(flag==0)
      items+=no;
    localStorage.setItem('id',items);
  }
}
