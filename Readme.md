ACAS Lab 웹사이트 프로젝트 개요
이 프로젝트는 ACAS 연구실의 웹사이트를 관리하기 위한 저장소입니다.

1. 브랜치 관리 전략
main 브랜치: 이 브랜치는 웹사이트의 안정화된 버전을 담고 있습니다. 실제 웹사이트에 배포되어 사용자에게 제공되는 최종 버전입니다. 따라서 이 브랜치의 코드는 신뢰할 수 있으며, 버그나 오류가 없는 상태로 유지됩니다.

research 브랜치: 이 브랜치는 main 브랜치에서 분기하여 새로운 기능 추가, 실험, 디자인 변경 등을 위한 개발 공간입니다. 연구실 구성원들이 자유롭게 코드를 수정하고 테스트하는 용도로 사용됩니다. 모든 새로운 작업은 research 브랜치에서 진행되며, 충분히 검증된 후에 main 브랜치로 병합됩니다.

2. 파일 및 페이지 구조
각 .html 파일은 웹사이트의 특정 페이지를 나타냅니다. 페이지 내용은 해당 파일을 수정하여 변경할 수 있습니다.

index.html: 홈페이지를 의미합니다.

news.html: 연구실의 소식 페이지입니다.

members.html: 구성원 페이지입니다.

research.html: 연구실의 연구 분야 페이지입니다.

publications.html: 연구 성과 페이지입니다.

memories.html: 연구실 활동 기록 페이지입니다.

assets/css/style.css: 웹사이트의 전반적인 **스타일(디자인)**을 담당하는 파일입니다.

assets/js/main.js: 웹사이트의 **동작(JavaScript)**을 담당하는 파일입니다.

3. 스타일(CSS) 우선순위
style.css: 대부분의 디자인은 assets/css/style.css 파일에 정의되어 있습니다. 이 파일은 웹사이트 전체에 일관된 스타일을 적용합니다. 예를 들어, 헤더, 푸터, 본문 글꼴, 색상, 레이아웃 등 기본적인 스타일을 여기서 정의합니다.

HTML 파일 내 <style> 태그: 개별 html 파일 안에 <style> 태그를 사용하여 작성된 CSS 코드는 style.css 파일의 내용을 덮어쓰고 우선적으로 적용됩니다. 이는 특정 페이지에만 적용하고 싶은 특별한 디자인이 있을 때 유용합니다. 예를 들어 publications.html 파일에는 다른 페이지와 다른 출판물 목록 디자인을 위해 자체적인 <style> 블록이 포함되어 있습니다.

4. 경로 설정 (파일 참조)
HTML 파일에서 이미지, CSS, JavaScript 파일 등을 참조할 때는 경로를 정확하게 지정해야 합니다.

link rel="stylesheet" href="assets/css/style.css": 현재 위치한 폴더(예: index.html) 기준으로 assets 폴더 안의 css 폴더, 그 안의 style.css 파일을 참조합니다.

link rel="stylesheet" href="../assets/css/style.css": 만약 members.html 페이지에서 members/cheolho-choi.html과 같은 하위 폴더의 파일을 참조할 경우, ..을 사용하여 상위 폴더로 이동한 후 경로를 지정해야 오류가 발생하지 않습니다.