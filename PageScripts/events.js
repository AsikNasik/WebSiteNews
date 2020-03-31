function readMore(i) {
  let dots = document.getElementById("dots" + i);
  let more = document.getElementById("more" + i);
  let btn = document.getElementById("btn" + i);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "Continue reading";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Hide";
    more.style.display = "inline";
  }
}

function readMore1(i) {
  let btn = document.getElementById("btn" + i);

  if (!document.getElementById("dots" + i).classList.contains("showHide")) {
    document.getElementById("dots" + i).classList.add("showHide");
    btn.innerHTML = "Continue reading";
    document.getElementById("more" + i).classList.remove("showHide");
  } else {
    document.getElementById("dots" + i).classList.remove("showHide");
    btn.innerHTML = "Hide";
    document.getElementById("more" + i).classList.add("showHide");
  }
}

let modal = document.getElementById("modal");
let btn = document.getElementById("addContactPerson");
let span = document.getElementsByClassName("close")[0];
let spanE = document.getElementsByClassName("closeE")[0];
let bgLayer = document.getElementById("bg_layer");

/////////////
if (btn === null || span === undefined || spanE === undefined) {
  btn = 0;
  span = 0;
  spanE = 0;
}
btn.onclick = function() {
  modal.style.display = "block";
  bgLayer.style.display = "block";
};
/////////////
span.onclick = function() {
  modal.style.display = "none";
  bgLayer.style.display = "none";
};

let regGmail = new RegExp(/[A-Za-z0-9]+@[a-z]+\.[a-z]+/);
//let regName = new RegExp(/f/);

function addition() {
  giveAttributes();

  let countRows = document.getElementById("tableID").rows.length;

  if (countRows - 1 >= 5) {
    alert("There are 5 people here! You can not add more people!");
    modal.style.display = "none";
    bgLayer.style.display = "none";
    return;
  }

  let name = document.getElementById("name").value;
  let gmail = document.getElementById("gmail").value;
  let skype = document.getElementById("skype").value;
  let telegram = document.getElementById("telegram").value;
  let instagram = document.getElementById("instagram").value;
  let addButton = document.getElementById("add");

  if (!regGmail.test(gmail)) {
    return;
  }

  let tbody = document.getElementsByClassName("table");
  tbody = document.getElementsByTagName("TBODY")[0];

  let row = document.createElement("TR");
  tbody.appendChild(row);

  let td1 = document.createElement("TD");
  let td2 = document.createElement("TD");
  let td3 = document.createElement("TD");
  let td4 = document.createElement("TD");
  let td5 = document.createElement("TD");
  let td6 = document.createElement("TD");
  let td7 = document.createElement("TD");

  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);
  row.appendChild(td5);
  row.appendChild(td6);
  row.appendChild(td7);

  let editButton = document.createElement("button");
  editButton.type = "button";
  editButton.classList.add("editF");
  editButton.setAttribute("onclick", "edit(" + "this.id" + ")");
  editButton.textContent = "E";

  let delButton = document.createElement("button");
  delButton.type = "button";
  delButton.classList.add("delF");
  delButton.setAttribute("onclick", "delte(" + "this.id" + ")");
  delButton.textContent = "D";

  td1.appendChild(editButton);
  td2.appendChild(delButton);
  td3.innerHTML = name;
  td4.innerHTML = gmail;
  td5.innerHTML = skype;
  td6.innerHTML = telegram;
  td7.innerHTML = instagram;

  document.getElementById("name").value = "";
  document.getElementById("gmail").value = "";
  document.getElementById("skype").value = "";
  document.getElementById("telegram").value = "";
  document.getElementById("instagram").value = "";

  giveAttributes();

  modal.style.display = "none";
  bgLayer.style.display = "none";
}

function delte(id) {
  let strID = id.slice(-1);
  let table = document.getElementById("tableID");

  giveAttributes();

  if (confirm("Are you sure, that you want to delete this person?")) {
    table.deleteRow(strID);
  } else {
    return;
  }

  giveAttributes();
}

function giveAttributes() {
  let countRows = document.getElementById("tableID").rows.length;
  let butID;
  let tmp2 = 0;
  let tmp3 = 0;
  let tmpCounter = 0;

  for (let i = 0; i < (countRows - 1) * 2; i++) {
    if (i % 2 == 0) {
      tmp3 = document.getElementsByTagName("button")[i];
      butID += tmp3.setAttribute("id", "edit" + (tmpCounter + 1));
      tmpCounter++;
    } else {
      tmp2 = document.getElementsByTagName("button")[i];
      butID += tmp2.setAttribute("id", "delete" + tmpCounter);
    }
  }
}

let modalE = document.getElementById("modalE");
let bgLayerE = document.getElementById("bg_layerE");


let editId = 0;
function edit(id) {
  modalE.style.display = "block";
  bgLayerE.style.display = "block";

  let strID = id.slice(-1);
  editId = strID;
  let table = document.getElementById("tableID");
  let tbody = document.getElementsByClassName("table");
  tbody = document.getElementsByTagName("TBODY")[0];

  let row = document.getElementsByTagName("TR")[strID];

  let td1 = row.getElementsByTagName("td")[2];
  let td2 = row.getElementsByTagName("td")[3];
  let td3 = row.getElementsByTagName("td")[4];
  let td4 = row.getElementsByTagName("td")[5];
  let td5 = row.getElementsByTagName("td")[6];

  let nameE = document.getElementById("nameE");
  let gmailE = document.getElementById("gmailE");
  let skypeE = document.getElementById("skypeE");
  let telegramE = document.getElementById("telegramE");
  let instagramE = document.getElementById("instagramE");

  nameE.value = td1.innerText;
  gmailE.value = td2.innerText;
  skypeE.value = td3.innerText;
  telegramE.value = td4.innerText;
  instagramE.value = td5.innerText;
}

/////////////
spanE.onclick = function() {
  modalE.style.display = "none";
  bgLayerE.style.display = "none";
};

function save() {

  let row = document.getElementsByTagName("TR")[editId];

  let td1 = row.getElementsByTagName("td")[2];
  let td2 = row.getElementsByTagName("td")[3];
  let td3 = row.getElementsByTagName("td")[4];
  let td4 = row.getElementsByTagName("td")[5];
  let td5 = row.getElementsByTagName("td")[6];

  let nameE = document.getElementById("nameE");
  let gmailE = document.getElementById("gmailE");
  let skypeE = document.getElementById("skypeE");
  let telegramE = document.getElementById("telegramE");
  let instagramE = document.getElementById("instagramE");

  td1.innerHTML = nameE.value;
  td2.innerHTML = gmailE.value;
  td3.innerHTML = skypeE.value;
  td4.innerHTML = telegramE.value;
  td5.innerHTML = instagramE.value;

  giveAttributes();

  modalE.style.display = "none";
  bgLayerE.style.display = "none";
}

let catR = document.getElementById("myImgRight");
let catL = document.getElementById("myImgLeft");
let mode = false;
let createMode = false;
let X = document.documentElement.clientWidth;
let Y = document.documentElement.clientHeight;

function moveAt(e) {
  let legs = document.getElementsByClassName("legs");
  if (e.pageX > X) {
    catL.style.display = "none";
    catR.style.display = "inline";
    catR.style.left = e.pageX + 10 + "px";
    catR.style.top = e.pageY - catR.offsetHeight / 2 + "px";

    X = e.pageX;
    Y = e.pageY;
  } else if (e.pageX < X) {
    catR.style.display = "none";
    catL.style.display = "inline";
    catL.style.left = e.pageX + 10 + "px";
    catL.style.top = e.pageY - catL.offsetHeight / 2 + "px";

    X = e.pageX;
    Y = e.pageY;
  }
}

window.addEventListener("click", showSteps);

let currX = 0;
let currY = 0;

let finished = false;

async function showSteps(key) 
{
  if (createMode === true)
   {
    if (!finished) 
    {
      finished = true;
      const legsarr = [];

      const step = 10;

      let left = true;

      while (!(Math.abs(currX - X) < step && Math.abs(currY - Y) < step)) 
      {
        const legs = createImage("Pictures/greenLegs2.png");
        legsarr.push(legs);
        document.body.append(legs);
        showImage(legs);
        legs.style.top = currY + "px";
        legs.style.left = currX + "px";

        const cathetX = X - currX;
        const cathetY = Y - currY;

        const h = Math.sqrt(Math.pow(cathetX, 2) + Math.pow(cathetY, 2));

        const sin = cathetY / h;
        const cos = cathetX / h;

        const angle = (sin * 180) / Math.PI;
        const rotateAngle = X < currX ? 90 - angle : 270 + angle;

        legs.style.transform = `rotate(${rotateAngle}deg) translateX(${
          left ? 10 : -10
        }px)`;
        left = !left;

        const newCathetX = step * cos;
        const newCathetY = step * sin;

        currX += newCathetX;
        currY += newCathetY;

        await new Promise(r => setTimeout(r, 200));
      }
      finished = false;
    }
  }
  else 
  {
    return;
  }
}

document.onmousemove = function(e) {
  if (mode === true) 
  {
    moveAt(e);
  }
};

window.addEventListener("keypress", checkKeyPress, false);

function checkKeyPress(key) {
  let header = document.querySelector("a");
  let legs = document.getElementsByClassName("legs");

  if (key.keyCode === 83) 
  {
    mode = true;
    header.style.color = "rgb(14,128,114)";

    createMode = true;
  } 
  else if (key.keyCode === 90) 
  {
    mode = false;
    catL.style.display = "none";
    catR.style.display = "none";
    header.style.color = "white";

    createMode = false;

    Array.from(legs).forEach(leg => hideImage(leg));
  }
}

function createImage(src) {
  if (createMode === true) 
  {
    const img = document.createElement("img");
    img.className = "legs";
    img.style.position = "absolute";
    document.body.appendChild(img);
    img.setAttribute("src", src);
    return img;
  } else {
    return;
  }
}

function showImage(img) {
  img.style.display = "inline";
}

function hideImage(img) {
  img.remove();
}
