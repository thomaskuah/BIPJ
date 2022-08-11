
const data = [{
    "1":{
        "id":"1",
        "name":"Exomon",
        "lastName":"Exodonkey",
        "user":"PolychainMonstersSol",
        "description":"Polychain Monsters meet Solana. Exomon is an exclusive 10,000 collection with extraordinary utility in out P&E game and our collector (NFT-)staking program. ",
        "description1":"Incredibly popular with young children, it's common to find Exodonkey around schools and homes of young families. Their naturally careful disposition allows them to operate safely around vulnerable populations and can offer aid to their caretakers.",
        "items":"10.0K",
        "owner":"3.1K",
        "floorPrice":"1.35",
        "totalVolumn":"6.7K",
        "image":"img/Profile1Header.jpg",
        "profile":"img/Profile1Square.jpg",
        "createdAt":"27 May 2022"

    },
    "2":{
        "id":"2",
        "name":"Fidneza by tyler Hobbs",
        "lastName":"Hobbs",
        "user":"ArtBlocks_admin",
        "description":"Fidneza by tyler Hobbs ArtBlocks_admin ",
        "description1":"Incredibly popular with young children, it's common to find Exodonkey around schools and homes of young families. Their naturally careful disposition allows them to operate safely around vulnerable populations and can offer aid to their caretakers.",
        "items":"10.0K",
        "owner":"3.1K",
        "floorPrice":"1.35",
        "totalVolumn":"6.7K",
        "image":"img/Profile1Header.jpg",
        "profile":"img/Profile1Square.jpg",
        "createdAt":"27 May 2022"

    },
    "3":{
        "id":"3",
        "name":"Ringers by Dmitri Cher...",
        "lastName":"Dmitri",
        "user":"ArtBlocks_admin",
        "description":"Ringers by Dmitri Cher...ArtBlocks_admin ",
        "description1":"Incredibly popular with young children, it's common to find Exodonkey around schools and homes of young families. Their naturally careful disposition allows them to operate safely around vulnerable populations and can offer aid to their caretakers.",
        "items":"10.0K",
        "owner":"3.1K",
        "floorPrice":"1.35",
        "totalVolumn":"6.7K",
        "image":"img/Profile1Header.jpg",
        "profile":"img/Profile1Square.jpg",
        "createdAt":"27 May 2022"

    }
}
]


window.onload = function(){
    
    let url = window.location.href;
    let id = url.split("id=")[1];

    if(data[0][1].id == id){
        document.getElementById('name').innerHTML = data[0][1].name;
        document.getElementById('description').innerHTML = data[0][1].description;
        document.getElementById('description1').innerHTML = data[0][1].description1;
        document.getElementById('user').innerHTML = data[0][1].user;
        document.getElementById('lastName').innerHTML = data[0][1].lastName;
        document.getElementById('items').innerHTML = data[0][1].items;
        document.getElementById('owner').innerHTML = data[0][1].owner;
        document.getElementById('floorPrice').innerHTML = data[0][1].floorPrice;
        document.getElementById('totalVolumn').innerHTML = data[0][1].totalVolumn;
        document.getElementById('createdAt').innerHTML = data[0][1].createdAt;
        let img = document.getElementById("img"); 
        img.src =  data[0][1].image;
        let profileImg = document.getElementById("profile"); 
        profileImg.src =  data[0][1].profile;
        let payment = document.getElementById("pay"); 
        payment.src =  data[0][1].id;
        var out = "";
            out += '<a href="MastercardPayment.html?id=' + data[0][1].id + '">'+'<img class="metamask" src="img/Mastercard.png">';
            document.getElementById("pay").innerHTML = out;
    }
    else if(data[0][2].id == id){
        document.getElementById('name').innerHTML = data[0][2].name;
        document.getElementById('description').innerHTML = data[0][2].description;
        document.getElementById('description1').innerHTML = data[0][2].description1;
        document.getElementById('user').innerHTML = data[0][2].user;
        document.getElementById('lastName').innerHTML = data[0][2].lastName;
        document.getElementById('items').innerHTML = data[0][2].items;
        document.getElementById('owner').innerHTML = data[0][2].owner;
        document.getElementById('floorPrice').innerHTML = data[0][2].floorPrice;
        document.getElementById('totalVolumn').innerHTML = data[0][2].totalVolumn;
        document.getElementById('createdAt').innerHTML = data[0][2].createdAt;
        let img = document.getElementById("img"); 
        img.src =  data[0][2].image;
        let profileImg = document.getElementById("profile"); 
        profileImg.src =  data[0][2].profile;
        var out = "";
            out += '<a href="MastercardPayment.html?id=' + data[0][2].id + '">'+'<img class="metamask" src="img/Mastercard.png">';
            document.getElementById("pay").innerHTML = out;
    }else{
        document.getElementById('name').innerHTML = data[0][3].name;
        document.getElementById('description').innerHTML = data[0][3].description;
        document.getElementById('description1').innerHTML = data[0][3].description1;
        document.getElementById('user').innerHTML = data[0][3].user;
        document.getElementById('lastName').innerHTML = data[0][3].lastName;
        document.getElementById('items').innerHTML = data[0][3].items;
        document.getElementById('owner').innerHTML = data[0][3].owner;
        document.getElementById('floorPrice').innerHTML = data[0][3].floorPrice;
        document.getElementById('totalVolumn').innerHTML = data[0][3].totalVolumn;
        document.getElementById('createdAt').innerHTML = data[0][3].createdAt;
        let img = document.getElementById("img"); 
        img.src =  data[0][3].image;
        let profileImg = document.getElementById("profile"); 
        profileImg.src =  data[0][3].profile;
        let payment = document.getElementById("pay"); 
        payment.onclick =  data[0][3].id;
        var out = "";
            out += '<a href="MastercardPayment.html?id=' + data[0][3].id + '">'+'<img class="metamask" src="img/Mastercard.png">';
            document.getElementById("pay").innerHTML = out;
    }
}