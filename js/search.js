// Mobile nav
function closeMobileNav(){
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('iconMenu').style.display='block';
  document.getElementById('iconClose').style.display='none';
  document.getElementById('menuBtn').setAttribute('aria-expanded','false');
}

document.getElementById('menuBtn').addEventListener('click',function(){
  const nav=document.getElementById('mobileNav');
  const open=nav.classList.toggle('open');
  document.getElementById('iconMenu').style.display=open?'none':'block';
  document.getElementById('iconClose').style.display=open?'block':'none';
  this.setAttribute('aria-expanded',open);
});


// Products image slider
const images=[
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

const TOTAL=images.length;
let cur=0;

function updateImg(){
  document.getElementById('mainDisplay').innerHTML=
    `<img src="${images[cur]}" alt="ソクラテツ">`;

  document.querySelectorAll('.thumb-btn')
    .forEach((b,i)=>b.classList.toggle('active',i===cur));
}

function prevImg(){
  cur = cur===0 ? TOTAL-1 : cur-1;
  updateImg();
}

function nextImg(){
  cur = cur===TOTAL-1 ? 0 : cur+1;
  updateImg();
}

const thumbs=document.getElementById('thumbs');

for(let r=0;r<2;r++){
  const row=document.createElement('div');
  row.className='thumb-row';

  for(let c=0;c<5;c++){
    const i=r*5+c;

    const b=document.createElement('button');
    b.className='thumb-btn'+(i===0?' active':'');

    b.innerHTML=
      `<img class="thumb-inner" src="${images[i]}" alt="">`;

    b.onclick=(()=>{const idx=i;return()=>{cur=idx;updateImg();}})();

    row.appendChild(b);
  }

  thumbs.appendChild(row);
}

updateImg();


// Step scroll animations
const stepImgs=document.querySelectorAll('.step-img-r,.step-img-l');

document.querySelectorAll('.step-text').forEach((el,i)=>{
  new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting && stepImgs[i]){
        stepImgs[i].classList.add('visible');
      }
    });
  },{threshold:0.3}).observe(el);
});
