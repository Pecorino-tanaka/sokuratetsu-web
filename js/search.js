const images = [
  "images/sokuratetsu-use-image.png",
  "images/sokuratetsu-00.png",
  "images/image-01.png",
  "images/image-04.png",
  "images/image-05.png",
  "images/image-06.png",
  "images/image-07.png",
  "images/image-08.png",
  "images/image-09.png",
  "images/package-images.png"
];

let cur = 0;

function updateImg(){

  document.getElementById('mainDisplay').innerHTML =
    `<img src="${images[cur]}" alt="ソクラテツ">`;

  document.querySelectorAll('.thumb-btn').forEach((b,i)=>{
    b.classList.toggle('active', i === cur);
  });
}


function prevImg(){
  cur = cur === 0 ? images.length - 1 : cur - 1;
  updateImg();
}


function nextImg(){
  cur = cur === images.length - 1 ? 0 : cur + 1;
  updateImg();
}


// サムネイル作成
const thumbs = document.getElementById('thumbs');

for(let r = 0; r < 2; r++){

  const row = document.createElement('div');
  row.className = 'thumb-row';

  for(let c = 0; c < 5; c++){

    const i = r * 5 + c;

    const b = document.createElement('button');

    b.className = 'thumb-btn' + (i === 0 ? ' active' : '');

    b.innerHTML =
      `<img class="thumb-inner" src="${images[i]}" alt="">`;

    b.onclick = ()=>{
      cur = i;
      updateImg();
    };

    row.appendChild(b);
  }

  thumbs.appendChild(row);
}


// 初期表示
updateImg();


// スクロールアニメーション
const stepImgs=document.querySelectorAll('.step-img-r,.step-img-l');

document.querySelectorAll('.step-text').forEach((el,i)=>{
  new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting&&stepImgs[i]){
        stepImgs[i].classList.add('visible');
      }
    });
  },{threshold:0.5}).observe(el);
});
