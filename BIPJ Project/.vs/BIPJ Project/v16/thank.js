var products = [
  {
    id: "1",
    name: "Exomon",
    lastName: "Exodonkey",
    user: "PolychainMonstersSol",
    description:
      "Polychain Monsters meet Solana. Exomon is an exclusive 10,000 collection with extraordinary utility in out P&E game and our collector (NFT-)staking program. ",
    description1:
      "Incredibly popular with young children, it's common to find Exodonkey around schools and homes of young families. Their naturally careful disposition allows them to operate safely around vulnerable populations and can offer aid to their caretakers.",
    items: "10.0K",
    owner: "3.1K",
    floorPrice: "1.35",
    totalVolumn: "6.7K",
    image: "img/Profile1Square.jpg",
    profile: "img/Profile1Header.jpg",
    createdAt: "27 May 2022",
  },
  {
    id: "2",
    name: "Fidneza by tyler Hobbs",
    lastName: "Exodonkey",
    user: "ArtBlocks_admin",
    description: "Fidneza by tyler Hobbs ArtBlocks_admin ",
    description1:
      "Incredibly popular with young children, it's common to find Exodonkey around schools and homes of young families. Their naturally careful disposition allows them to operate safely around vulnerable populations and can offer aid to their caretakers.",
    items: "10.0K",
    owner: "3.1K",
    floorPrice: "1.35",
    totalVolumn: "6.7K",
    createdAt: "27 May 2022",
  },
  {
    id: "3",
    name: "Ringers by Dmitri Cher...",
    lastName: "Dmitri",
    user: "ArtBlocks_admin",
    description: "Ringers by Dmitri Cher...ArtBlocks_admin ",
    description1:
      "Incredibly popular with young children, it's common to find Exodonkey around schools and homes of young families. Their naturally careful disposition allows them to operate safely around vulnerable populations and can offer aid to their caretakers.",
    items: "10.0K",
    owner: "3.1K",
    floorPrice: "1.35",
    totalVolumn: "6.7K",
    createdAt: "27 May 2022",
  },
];

var pullBuy = JSON.parse(localStorage.getItem("payment_Details"));
var pullCreate = JSON.parse(localStorage.getItem("payment_create"));
console.log(pullCreate);

if (pullBuy) {
  const id = pullBuy[0].id; // get id in storage
  const Username = pullBuy[0].cardHolder;
  console.log(Username);
  const getProd = products.find((e) => e.id == id); // get product from array

  document.getElementById("imgProd").src = getProd.image; // set img
  document.getElementById("Username").innerHTML = Username; // username
  document.getElementById("Price").innerHTML = getProd.floorPrice; // set price

  console.log(getProd);
} else {
    document.getElementById("Username").innerHTML = pullCreate[0].artNetwork; // username
    document.getElementById("imgProd").src = pullCreate[0].image; // set img
    document.getElementById("Price").innerHTML = pullCreate[0].price; // set price
}
