const array = [
  {
    id: 1,
    name: "Darth Vader",
    post: "Supreme Commander",
    image: "darthvader.png",
  },
  {
    id: 2,
    name: "Wilhuf Tarkin",
    post: "Grand Moff",
    image: "wilhuftarkin.png",
    parent: 1
  },
  {
    id: 3,
    name: "Olson Krennic",
    post: "Director",
    image: "olsonkrennic.png",
    parent: 1
  },
  {
    id: 4,
    name: "Esmin Kesig",
    post: "Admiral",
    image: "esminkesig.png",
    parent: 1
  },
  {
    id: 5,
    name: "Phasma",
    post: "Captain",
    image: "phasma.png",
    parent: 2
  },
  {
    id: 6,
    name: "Will Shepard",
    post: "Commander",
    image: "willshepard.png",
    parent: 2
  },
  {
    id: 7,
    name: "Allin Prohq",
    post: "Ensign",
    image: "allinprohq.png",
    parent: 2
  },
  {
    id: 8,
    name: "Jah Batut",
    post: "Admiral",
    image: "jahbatut.png",
    parent: 2
  },
  {
    id: 9,
    name: "FN-23",
    post: "Soldier",
    image: "stromtrooper.png",
    parent: 2
  },
  {
    id: 10,
    name: "FN-24",
    post: "Soldier",
    image: "stromtrooper.png",
    parent: 2
  },
  {
    id: 11,
    name: "FN-25",
    post: "Soldier",
    image: "stromtrooper.png",
    parent: 2
  },
  {
    id: 12,
    name: "FN-26",
    post: "Soldier",
    image: "stromtrooper.png",
    parent: 2
  },
  {
    id: 13,
    name: "RN-46",
    post: "Soldier",
    image: "stromtrooper2.png",
    parent: 2
  },
  {
    id: 14,
    name: "RN-36",
    post: "Soldier",
    image: "stromtrooper2.png",
    parent: 2
  },
  {
    id: 15,
    name: "Darh Sidius",
    post: "Galactic Emperor",
    image: "darthsidius.png",
  },
  {
    id: 16,
    name: "PN-65",
    post: "Soldier",
    image: "stromtrooper2.png",
    parent: 3
  },
  {
    id: 17,
    name: "PN-66",
    post: "Soldier",
    image: "stromtrooper2.png",
    parent: 3
  },
  {
    id: 18,
    name: "PN-67",
    post: "Soldier",
    image: "stromtrooper2.png",
    parent: 3
  },
  {
    id: 19,
    name: "TN-11",
    post: "Soldier",
    image: "stromtrooper2.png",
    parent: 3
  },
  {
    id: 20,
    name: "TN-12",
    post: "Soldier",
    image: "stromtrooper.png",
    parent: 3
  },
  {
    id: 21,
    name: "TN-13",
    post: "Soldier",
    image: "stromtrooper.png",
    parent: 3
  },
  {
    id: 22,
    name: "TN-14",
    post: "Soldier",
    image: "stromtrooper.png",
    parent: 3
  },
  {
    id: 23,
    name: "WN-23",
    post: "Soldier",
    image: "stromtrooper2.png",
    parent: 3
  },
  {
    id: 24,
    name: "WN-24",
    post: "Soldier",
    image: "stromtrooper2.png",
    parent: 3
  },
  {
    id: 25,
    name: "WN-25",
    post: "Soldier",
    image: "stromtrooper2.png",
    parent: 3
  },
  {
    id: 26,
    name: "WN-26",
    post: "Soldier",
    image: "stromtrooper2.png",
    parent: 3
  },
  {
    id: 27,
    name: "KN-19",
    post: "Soldier",
    image: "stromtrooper.png",
    parent: 4
  },
  {
    id: 28,
    name: "KN-20",
    post: "Soldier",
    image: "stromtrooper.png",
    parent: 4
  },
  {
    id: 29,
    name: "KN-21",
    post: "Soldier",
    image: "stromtrooper.png",
    parent: 4
  },
  {
    id: 30,
    name: "KN-22",
    post: "Soldier",
    image: "stromtrooper.png",
    parent: 4
  }
]

var currentFatherID = undefined;
var avatarFolder = 'starwars/assets/avatars/';
var backButton = document.getElementsByClassName('back')[0];
var leftArrow = document.getElementsByClassName('arrows__left')[0];
var rightArrow = document.getElementsByClassName('arrows__right')[0];
var currentFather = document.getElementsByClassName('father');
var currentFatherAvatar = document.getElementsByClassName('father__avatar');
var currentFatherName = document.getElementsByClassName('father__name');
var currentFatherPost = document.getElementsByClassName('father__post');

function getElementParams(elem) {
  return {
    id: elem.id,
    name: elem.name,
    post: elem.post,
    image: elem.image,
    parent: elem.parent
  }
}

parentCounter = function(){
  var parentCount = 0;
  for (let i = 1; i < array.length; i++){
    if(array[i].parent != array[i - 1].parent){
      parentCount++;
    }
  }
  return parentCount;
}

childCounter = function(fatherID){
  var childCount = 0;
  for (let i = 0; i < array.length; i++){
      if (fatherID == 0){
        childCount = 2;
      } else if (fatherID == array[i].parent){
        childCount++;
      }
    }
  return childCount;
}

var subArray = [];
var fatherID = undefined;
for (let i = 0; i < parentCounter(); i++){
  subArray[i] = [];
    for (let j = 0; j < childCounter(i);){
      for(let k = 0; k < array.length; k++){
        if(array[k].parent == fatherID){
          subArray[i][j] = getElementParams(array[k]);
          j++;
        }
      }
    }
  fatherID = i + 1;
}

console.log(subArray);

function showFather(elem) {
  if (elem == null){
    currentFatherAvatar[0].style.backgroundImage = "url('" + avatarFolder + "empire.png" + "')";
    currentFatherName[0].innerHTML = 'Galactic Empire';
    currentFatherPost[0].innerHTML = 'Imperial military';
  } else{
    currentFatherAvatar[0].style.backgroundImage = "url('" + avatarFolder + getElementParams(elem).image + "')";
    currentFatherName[0].innerHTML = getElementParams(elem).name;
    currentFatherPost[0].innerHTML = getElementParams(elem).post;
  }
}

function hiddenCheck() {
  if (currentFatherID == 0){
    backButton.className += ' hidden';
    leftArrow.className += ' hidden';
    rightArrow.className += ' hidden';
    return false;
  } else {
    backButton.className = 'back';
    leftArrow.className = 'arrows__left';
    rightArrow.className = 'arrows__right';
    return true;
  }
}

subChildsCount = function(fatherID){
  var subChildsCount = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i].parent == fatherID){
      subChildsCount++;
    }
  }
  return subChildsCount;
}

function createChilds(array){
  console.log(array.length);
  var list = document.querySelector('.childs');
  if (array == undefined){
    list.remove();
  } else {
    for(let i = 0; i < array.length; i++){
      var li = document.createElement('li');
      var avatar = document.createElement('div');
      var name = document.createElement('h2');
      var post = document.createElement('p');

      li.className = 'currentChild'
      list.appendChild(li);

      avatar.className = 'avatar'
      avatar.style.backgroundImage = "url('" + avatarFolder + array[i].image + "')";
      li.appendChild(avatar);

      if (subChildsCount(array[i].id) !== 0){
        var subChildCount = document.createElement('div');
        subChildCount.className = 'subChildCount'
        subChildCount.innerHTML = `${subChildsCount(array[i].id)}`;
        li.appendChild(subChildCount);
      }

      name.className = 'name'
      name.innerHTML = `${array[i].name}`;
      li.appendChild(name);
      post.className = 'post'
      post.innerHTML = `${array[i].post}`;
      li.appendChild(post);
    }
  }
}



function starwars(){
  var fatherIndex = 0;
  currentFatherID = 0;
  hiddenCheck();
  showFather();
  createChilds(subArray[currentFatherID]);
  var previosFatherID;
  var currentChild = document.getElementsByClassName('currentChild');
  for (let i = 0; i < currentChild.length; i++){
    currentChild[i].onclick = function(){
      showFather(subArray[currentFatherID][i]);
      previosFatherID = currentFatherID;
      currentFatherID = subArray[currentFatherID][0].id;
      hiddenCheck();
      // createChilds(subArray[currentFatherID]);
      // currentChild = document.getElementsByClassName('currentChild');
    }
  }
  backButton.onclick = function(){
    currentFatherID = previosFatherID;
    if (currentFatherID == 0){
      showFather();
      // createChilds(subArray[currentFatherID]);
    } else {
      showFather(subArray[currentFatherID][fatherIndex]);
      // createChilds(subArray[currentFatherID]);
    }
    hiddenCheck();
  }
  rightArrow.onclick = function(){
    if (fatherIndex == currentChild.length - 1){
      fatherIndex = 0;
      showFather(subArray[previosFatherID][fatherIndex]);
    } else {
      fatherIndex++;
      showFather(subArray[previosFatherID][fatherIndex]);
    }
  }
  leftArrow.onclick = function() {
    if (fatherIndex == 0){
      fatherIndex = currentChild.length - 1;
      showFather(subArray[previosFatherID][fatherIndex]);
    } else {
      fatherIndex--;
      showFather(subArray[previosFatherID][fatherIndex]);
    }
  }
}

starwars();
