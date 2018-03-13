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

if (currentFatherID === undefined){
  backButton.className += ' hidden';
  leftArrow.className += ' hidden';
  rightArrow.className += ' hidden';
}

childCounter = function(){
  var childCount = 0;
  for (let i = 0; i < array.length - 1; i++){
      if (currentFatherID == array[i].parent){
        childCount++;
      }
    }
  return childCount;
}

childArray = function(){
  childArray = new Array(childCounter(currentFatherID));
  var j = 0;
  for (let i = 0; i < array.length - 1; i++){
    if(array[i].parent == currentFatherID){
      childArray[j] = {
        id: array[i].id,
        name: array[i].name,
        post: array[i].post,
        image: array[i].image,
        parent: array[i].parent
      }
      j++;
    }
  }
  return childArray;
}

getFatherParams =  function() {
  for (let i = 0; i < array.length; i++){
    if (array[i].id == currentFatherID){
      return {
        name: array[i].name,
        post: array[i].post,
        image: array[i].image
      }
    }else if (currentFatherID == undefined){
      return {
        name: 'Galactic Empire',
        post: 'Imperial military',
        image: 'empire.png'
      }
    }
  }
}

function showFather() {
  currentFatherAvatar[0].style.backgroundImage = "url('" + avatarFolder + getFatherParams().image + "')";
  currentFatherName[0].innerHTML = getFatherParams().name;
  currentFatherPost[0].innerHTML = getFatherParams().post;
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
  var list = document.getElementsByClassName('childs')[0];

  console.log(array);

  if (array == null){
    list.remove();
  }

  for(let i = 0; i < childCounter(); i++){
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


showFather();
createChilds(childArray());
var currentChild = document.getElementsByClassName('currentChild');


for(let i = 0; i < childCounter(); i++){
  currentChild[i].onclick = function(){
    console.log('click ' + i);
  }
}


// getChildID = function(childArray){
//   for(let i = 0; i < childArray.length - 1; i++){
    
//     return childArray[i].id;
//   }
// }

// console.log(getChildID(childArray));

// currentFatherID = getChildID(childArray);

// console.log(currentFatherID);
