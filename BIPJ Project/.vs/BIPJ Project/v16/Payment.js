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
        "owner":"4.1K",
        "floorPrice":"2.35",
        "totalVolumn":"3.7K",
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
        document.getElementById('items').innerHTML = data[0][1].items;
        document.getElementById('floorPrice').innerHTML = data[0][1].floorPrice;
        document.getElementById('totalPrice').innerHTML = "$"+data[0][1].floorPrice;
        let profileImg = document.getElementById("img"); 
        profileImg.src =  data[0][1].profile;
    }
    else if(data[0][2].id == id){
        document.getElementById('items').innerHTML = data[0][2].items;
        document.getElementById('floorPrice').innerHTML = data[0][2].floorPrice;
        document.getElementById('totalPrice').innerHTML = "$"+data[0][2].floorPrice;
        let profileImg = document.getElementById("img"); 
        profileImg.src =  data[0][2].profile;
    }
    if(data[0][3].id == id){
        document.getElementById('items').innerHTML = data[0][3].items;
        document.getElementById('floorPrice').innerHTML = data[0][3].floorPrice;
        document.getElementById('totalPrice').innerHTML = "$"+data[0][3].floorPrice;
        let profileImg = document.getElementById("img"); 
        profileImg.src =  data[0][3].profile;
    }
}

function saveText(text, filename){
  
    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(text));
    a.setAttribute('download', filename);
    a.click()
  }


    let payment_Details = [];
   
    const addMovie = (ev)=>{
        const queryString = window.location.search;

        const urlParams = new URLSearchParams(queryString);
        const od = urlParams.get('id')
    

        console.log(ev)
        let url = window.location.href;
        let id = url.split("id=")[1];

        if(data[0][1].id == id){
            
        ev.preventDefault();  //to stop the form submitting
        let pay = {
            id: od,
            items: data[0][1].items,
            totalPrice: data[0][1].floorPrice,
            Image: data[0][1].profile,
            cardNumber : document.getElementById('cardNumber').value,
            cardHolder : document.getElementById('cardHolder').value,
            expMonth : document.getElementById('expMonth').value,
            expYear : document.getElementById('expYear').value,
            cvv : document.getElementById('cvv').value,
        }
            payment_Details.push(pay);
            //saving to localStorage
            localStorage.setItem('payment_Details', JSON.stringify(payment_Details) );
            var getAll = localStorage.getItem("payment_Details");

            saveText( getAll, "payment_details.json" );
            location.href = "thanks.html"

        }
        
        else if(data[0][2].id == id){
            ev.preventDefault();  //to stop the form submitting
        let pay = {
            items: data[0][2].items,
            totalPrice: data[0][2].floorPrice,
            Image: data[0][2].profile,
            cardNumber : document.getElementById('cardNumber').value,
            cardHolder : document.getElementById('cardHolder').value,
            expMonth : document.getElementById('expMonth').value,
            expYear : document.getElementById('expYear').value,
            cvv : document.getElementById('cvv').value,
        }
            payment_Details.push(pay);
            //saving to localStorage
            localStorage.setItem('payment_Details', JSON.stringify(payment_Details) );
            var getAll = localStorage.getItem("payment_Details");

            saveText( getAll, "payment_details.json" );
            location.href = "thanks.html"
        }
        if(data[0][3].id == id){
            ev.preventDefault();  //to stop the form submitting
            let pay = {
                items: data[0][3].items,
                totalPrice: data[0][3].floorPrice,
                Image: data[0][3].profile,
                cardNumber : document.getElementById('cardNumber').value,
                cardHolder : document.getElementById('cardHolder').value,
                expMonth : document.getElementById('expMonth').value,
                expYear : document.getElementById('expYear').value,
                cvv : document.getElementById('cvv').value,
            }
                payment_Details.push(pay);
                // saving to localStorage
                localStorage.setItem('payment_Details', JSON.stringify(payment_Details) );
                var getAll = localStorage.getItem("payment_Details");
    
                saveText( getAll, "payment_details.json" );
                location.href = "thanks.html"
        }
    }
    



    //     ev.preventDefault();  //to stop the form submitting
    //     let pay = {
    //         cardNumber : document.getElementById('cardNumber').value,
    //         cardHolder : document.getElementById('cardHolder').value,
    //         expMonth : document.getElementById('expMonth').value,
    //         expYear : document.getElementById('expYear').value,
    //         cvv : document.getElementById('cvv').value,
    //     }
    //     payment_Details.push(pay);

    //     //saving to localStorage
    //     localStorage.setItem('payment_Details', JSON.stringify(payment_Details) );
    //     var getAll = localStorage.getItem("payment_Details");

    //     saveText( getAll, "payment_details.json" );
    //     location.href = "thanks.html"
    // }
        // document.getElementById("myForm").addEventListener("submit", myFunction);



    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('myForm').addEventListener('submit', addMovie);

});

     function myFunction() {
        console.log("lets GOO")
            let x = document.forms["myForm"]["cardNo"].value;
            console.log(x)
            // addMovie(
        }



      

