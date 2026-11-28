const header=document.getElementById('header');
const menuToggle=document.getElementById('menuToggle');
const mainNav=document.getElementById('mainNav');

if(header){window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>35));}
if(menuToggle&&mainNav){
  menuToggle.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
  mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mainNav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));
}

const slides=[...document.querySelectorAll('.hero-slide')];
const dots=[...document.querySelectorAll('.dot')];
if(slides.length&&dots.length){
  let current=0,auto;
  function showSlide(n){current=(n+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle('active',i===current));dots.forEach((d,i)=>d.classList.toggle('active',i===current));}
  function restartAuto(){clearInterval(auto);auto=setInterval(()=>showSlide(current+1),6500);}
  document.querySelector('.hero-arrow.prev')?.addEventListener('click',()=>{showSlide(current-1);restartAuto();});
  document.querySelector('.hero-arrow.next')?.addEventListener('click',()=>{showSlide(current+1);restartAuto();});
  dots.forEach((d,i)=>d.addEventListener('click',()=>{showSlide(i);restartAuto();}));
}
const year=document.getElementById('year');
if(year)year.textContent=new Date().getFullYear();
const enquiryForm=document.getElementById('enquiryForm');
if(enquiryForm){
  enquiryForm.addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(e.currentTarget);
    const msg=['Hello Grace Photography! I would like to enquire about a photoshoot/event.',`Name: ${data.get('name')}`,`Phone: ${data.get('phone')}`,`Event / Wedding Date: ${data.get('event_date')||'Not specified'}`,`Message: ${data.get('message')||'—'}`].join('\\n');
    window.open('https://wa.me/919841484476?text='+encodeURIComponent(msg),'_blank','noopener');
  });
}


// Asset placeholders: remove failed image requests and activate video files on click.
document.querySelectorAll('img[data-asset-fallback]').forEach(img=>{
  img.addEventListener('error',()=>img.remove(),{once:true});
});
document.querySelectorAll('.cinematic-video-frame[data-video-src]').forEach(frame=>{
  const activate=()=>{
    if(frame.classList.contains('is-playing')) return;
    const video=document.createElement('video');
    video.className='cinematic-video-player';
    video.controls=true;
    video.playsInline=true;
    video.preload='metadata';
    const poster=frame.dataset.videoPoster;
    if(poster) video.poster=poster;
    const source=document.createElement('source');
    source.src=frame.dataset.videoSrc;
    source.type='video/mp4';
    video.appendChild(source);
    video.appendChild(document.createTextNode('Your browser does not support video playback.'));
    frame.classList.add('is-playing');
    frame.appendChild(video);
    video.play().catch(()=>{});
  };
  frame.addEventListener('click',activate);
  frame.addEventListener('keydown',event=>{
    if(event.key==='Enter'||event.key===' '){event.preventDefault();activate();}
  });
});
