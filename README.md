# WEEK3 CHECK LIST

### Mini Carousel
- [x] 캐로셀 정방향으로 3초마다 자동 슬라이딩 (캐로셀이 무한 반복)
- [x] 카드는 클릭할 수 있고, 클릭하면 해당 컨텐츠의 페이지로 이동
- [x] 화살표를 클릭하면 화살표 반대 방향으로 한 번 슬라이딩
- [x] 제목, 내용, 다른 페이지로 이동하는 링크 구성
- [x] 링크는 bold로 표현, 마우스 hover 하면 밑줄이 생김


### Main Card Carousel

#### top
- [x] 5개 카드를 일정한 간격을 두고 좌우로 배치
- [x] 카드 클릭하면 선택된 카드가 확대됨(직사각형 범위 내 어느 곳 클릭해도 똑같이 적용)
- [x] 선택된 카드 외의 다른 카드는 원래 크기로 돌아감
- [x] 첫 번째 카드가 확대된 모습이 디폴트 상태
- [x] 카드가 확대되면 이미지도 함께 확대, 카테고리 제목은 확대되지 않는다.
- [x] 카드를 클릭해서 카드가 확대되면 옆에 있는 카드와 약간 겹쳐진다.
- [ ] 카드가 확대되면 확대된 카드를 기준으로 그림자가 생김(겹쳐진 카드 위에 그림자) -> 다시 축소되면 그림자 사라짐
- [x] 카드마다 포함된 컨텐츠만큼 원형 모양의 버튼(클릭 가능)
- [x] 클릭한 버튼은 밝은색, 나머지 버튼은 보다 옅은 색으로 구분된다.

#### bottom
- [x] 가로로 긴 직사각형 형태의 카드 여러 개가 무한으로 돌아가는 캐로셀
- [x] 카드 왼쪽은 컨텐츠와 관련된 이미지가 위치
- [x] 화살표를 클릭하면 화살표 반대 방향으로 한 번 슬라이딩
    (예> 왼쪽 화살표를 클릭하면 오른쪽으로 슬라이딩 되면서 왼쪽에 숨어있던 컨텐츠가 나타남.)
- [x] 카드 오른쪽 영역 상단에 컨텐츠 대표 키워드가 적당히 위치함.
- [x] 대표 키워드 배경색은 컨텐츠 카테고리에 따라 다른 색상을 가진다. 배경색은 캐로셀5 상단 카드의 색상을 따른다. (하늘색,빨간색,핑크색 ...)
- [x] 대표 키워드 아래에 적당한 간격을 두고 컨텐츠 제목이 위치함
- [x] 제목은 내용과 구분되는 적당한 크기로 표현함
- [x] 제목 아래 적당한 간격을 두고 내용이 위치함
- [x] 내용은 제목과 구분되는 적당한 크기로 표현함
- [x] 내용 아래 적당한 간격을 두고 해당 캐로셀의 컨텐츠 세부 페이지로 이동되는 링크가 걸린 텍스트가 위치함 (bold,마우스 hover 하면 밑줄생김)

#### top+bottom
- [ ] 버튼을 클릭하면 클릭한 버튼에 해당하는 컨텐츠로 하단 캐로셀이 빠르게 슬라이딩 된다.
- [ ] 다른 카드를 클릭할 시 슬라이딩 방향은 현재 위치에서 이동하려는 위치가 더 가까운 방향으로 움직인다.
- [x] 원형 버튼을 클릭하면 해당 캐로셀 컨텐츠에 맞춰서 상단 카드 내부 원형 버튼이 밝은색으로 활성화된다.
- [x] 다른 카드를 누르면 이 전에 눌렀던 카드를 작아지며 원형 버튼은 사라진다.
