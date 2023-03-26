# Parallax Scroll

패럴랙스 스크롤링(parallax scrolling)이란, 웹 브라우저에서 사용자가 웹페이지를 스크롤할 때 배경 이미지가 포그라운드 이미지나 콘텐츠보다 느리게 스크롤되어 3차원적인 입체감을 주는 인터랙티브 기법을 말합니다. 사용자가 페이지를 아래로 스크롤할수록 배경 이미지는 위쪽으로 스크롤되어 포그라운드 요소들 사이에 입체감을 생성시킵니다.

이 기법은 사용자의 호기심과 흥미를 유지시키고 웹페이지에 대한 몰입감을 높이는 데 매우 효과적입니다. 특히 모바일 디바이스에서의 사용성을 높이기 위해  패럴랙스 스크롤링은 매우 유용한 기법이 되고 있습니다.

패럴랙스 스크롤링을 구현하려면 HTML 마크업에서 <img> 태그를 사용하여 배경 이미지를 추가하고, CSS 스타일시트에서 배경 이미지의 스크롤 속도를 조정할 수 있습니다. 자바스크립트를 사용하면 더욱 복잡한  패럴랙스 스크롤링 에펙트를 구현할 수 있습니다.

## js로 하는법

스크롤 이벤트 리스너에서 scrollY를 감지해서, 특정 element의 style을 바꿔준다

