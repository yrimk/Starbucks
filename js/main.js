const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();//포커스 강제 적용
});

searchInputEl.addEventListener('focus', function () { //포커스 됬을 때
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () { //포커스 해제
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 스크롤이 일정값으로 내려가면 뱃지 사라짐
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if(window.scrollY > 500){
    // 뱃지 숨김
    // badgeEl.style.display = 'none';
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'
    });
  }
  else{
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });
  }
},300));
// _.throttle(함수, 시간) 

// gsap.to(요소,지속시간,옵션{객체(문자객체의 속성은 ''사용)})