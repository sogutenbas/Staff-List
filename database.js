const personelList= [
    { 
        personelName: "Alex King", 
        personelDistance:"President and ceo",
        personelImage: "https://i.imgur.com/Ctwf8HA.png", 
    },
    { 
        personelName: "Brad Mondo", 
        personelDistance:"President and ceo",
        personelImage: "https://i.imgur.com/2Necikc.png", 
    },
    { 
        personelName: "Meagan July",
        personelDistance:"President and ceo", 
        personelImage: "https://i.imgur.com/2pGPLrl.png", 
    },
    { 
        personelName: "John Bolton",
        personelDistance:"President and ceo", 
        personelImage: "https://i.imgur.com/A1Fjq0d.png", 
    },
    { 
        personelName: "Alisa Cha", 
        personelDistance:"President and ceo",
        personelImage: "https://i.imgur.com/JzUIF4o.png", 
    }
]

let databaseinclude=personelList.map((personel)=>{
return` <div class="container">
<ul>
  <li class="item_wrap male online">
    <div class="item">
      <div class="item_left">
        <div class="img">
          <img src="${personel.personelImage}" alt="">
        </div>
        <div class="data">
          <p class="name">${personel.personelName}</p>
          <p class="distance">${personel.personelDistance}</p>
        </div>
      </div>
    </div>
  </li>
  <li class="item_wrap male online">
</div>`
}).join("")
document.querySelector("#databaseinclude").innerHTML=databaseinclude;
