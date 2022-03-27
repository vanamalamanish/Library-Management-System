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
    Author: "A Vallavaraj",
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

window.addEventListener("DOMContentLoaded", () => {
  let items = localStorage.getItem("id");
  let template = "";
  template += `
  <table>
            <tr>
                <th>Branch</th>
                <th>Image</th>
                <th>Author</th>
                <th>Publisher</th>
                <th>Price</th> 
            </tr>
  `;
  let total=0;
  if(items!=null){
  
  for (item in items.split("")) {
    template += `
      <tr>
      <td>${books[item].Branch}</td>
      <td><img src=${books[item].Image} alt="DS" width="40" height="40"</td>
      <td>${books[item].Author}</td>
      <td>${books[item].Publisher}</td>
      <td>${books[item].Price}</td>
      </tr> 
      `;
      total+=parseInt(books[item].Price.substring(1));
  }
}
  template+=`
  <tr>
  <td colspan="4" style="padding-left:315px"> Total</td>
  <td>$${total}</td>
  </tr>
  </table>`;
  let box = document.querySelector(".box");
  box.innerHTML = template;
});
