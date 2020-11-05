// 페이지 로드 이벤트 잡기
window.onload = Page_Load;
function Page_Load() {
    // 이미지만 검색
    for (var i = 0; i < document.images.length; i++) {
        // 부모가 'A'인 이미지만 필터링
        if (document.images[i].parentNode.tagName == "A") {
            // 롤오버 기능 구현
            SetImgRollover(document.images[i]);
        }
    }
}
function SetImgRollover(img) {
    // 마우스 오버
    img.MouseOverImg = new Image(); // 이미지 개체 생성
    img.MouseOverImg.src = "Icons/" + img.id + "_over.gif"; 
    img.onmouseover = MouseOverHandler;

    // 마우스 아웃
    img.MouseOutImg = new Image(); // 이미지 개체 생성
    img.MouseOutImg.src = img.src;
    img.onmouseout = function () { this.src = this.MouseOutImg.src; }; // 무명 함수(메서드)

    // 마우스 클릭
    img.MouseClickImg = new Image(); // 이미지 개체 생성
    img.MouseClickImg.src = "Icons/sendicon.gif";
    img.onmousedown = function () { this.src = this.MouseClickImg.src; };
}
// 이벤트 처리기
function MouseOverHandler() {
    this.src = this.MouseOverImg.src; 
}