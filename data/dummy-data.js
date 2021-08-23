import Product from "../models/products";
import Category from "../models/category";
import Question from "../models/question";

export const QUESTIONS = [
  new Question(
    "q1",
    "우리동네질문",
    "안녕하",
    "흥해읍",
    "포항 리플러스마트 포항사랑카드 사용 가능한가요??",
    "3일 전"
  ),
  new Question(
    "q2",
    "우리동네질문",
    "랄라",
    "용흥동",
    "하이로손 파는 약국이 있을까요??",
    "4일 전"
  ),
  new Question(
    "q3",
    "우리동네질문",
    "동네",
    "장량동",
    "장량동에 인터넷 설치 문의는 어디로 해야하나요?",
    "3일 전"
  ),
  new Question(
    "q4",
    "동네사건사고",
    "최강나가자",
    "창포동",
    "창포동 지갑 주우신 분??",
    "3일 전"
  ),
  new Question(
    "q5",
    "둥네맛집",
    "고기",
    "흥해읍",
    "뒷고기 맛집 추천해주세요!!",
    "4일 전"
  ),
  new Question(
    "q6",
    "동네소식",
    "빨강머리",
    "장량동",
    "혹시 초곡에 전자랜드 있을까요 정보 부탁드립니다.",
    "3일 전"
  ),

  new Question(
    "q7",
    "분실/실종센터",
    "헤헤",
    "연일읍",
    "포항도서관에서 에어팟 보신 분 있나요??",
    "4일 전"
  ),

  new Question(
    "q8",
    "일상",
    "예삐",
    "학산동",
    "포항에 코로나 자가진단 키트 파는 곳 있나요??",
    "5일 전"
  ),
  new Question(
    "q9",
    "해주세요",
    "베스트",
    "흥해읍",
    "치킨집별 베스트추천 메뉴 부탁드려요",
    "6일 전"
  ),
  new Question(
    "q10",
    "취미생활",
    "사랑",
    "우현동",
    "첼로 배울 곳 아시는 분 추천 해주세요!!",
    "1주 전"
  ),
  
];

export const CATEGORIES = [
  new Category("c1", "디지털기기", "tv-outline"),
  new Category("c2", "인기매물", "star-outline"),
  new Category("c3", "생활가전", "home-outline"),
  new Category("c4", "가구/인테리어", "bed-outline"),
  new Category("c5", "유아동", "happy-outline"),
  new Category("c6", "생활/가공식품", "cafe-outline"),
  new Category("c7", "유아도서", "book-outline"),
  new Category("c8", "스포츠/레저", "baseball-outline"),
  new Category("c9", "여성잡화", "basket-outline"),
  new Category("c10", "여성의류", "woman-outline"),
  new Category("c11", "남성패션/잡화", "man-outline"),
  new Category("c12", "게임/취미", "game-controller-outline"),
  new Category("c13", "뷰티/이용", "heart-outline"),
  new Category("c14", "반려동물용품", "paw-outline"),
  new Category("c15", "도서/티켓/음반", "library-outline"),
  new Category("c16", "식물", "flower-outline"),
  new Category("c17", "기타 중고물품", "briefcase-outline"),
  new Category("c18", "삽니다", "megaphone-outline"),
];

const PRODUCTS = [
  new Product(
    "p1",
    "생생당근통",
    "1시간 전",
    "아이폰 케이스",
    "디지털기기",
    "https://dnvefa72aowie.cloudfront.net/origin/article/202108/3B980CA8283A041FE4D576A9FEF0EA0848BE0CD91401D1BE7D40BFA6C094F4F4.jpg?q=95&s=1440x1440&t=inside",
    "러블리덕 아이폰 케이스\n사놓고 보관만 했습니다\n\n7,8,se2 호환가능요!!",
    "5,500원"
  ),
  new Product(
    "p2",
    "망구",
    "8분 전",
    "아기 식탁의자",
    "유아동",
    "https://thumbnail9.coupangcdn.com/thumbnails/remote/700x700ex/image/vendor_inventory/images/2015/12/24/10/3/f0497f1a-af27-4c11-a069-fb5d47c5485b.jpg",
    "사용감있음\n13만원에 구입",
    "40,000원"
  ),
  new Product(
    "p3",
    "당근나라",
    "1일 전",
    "도마",
    "생활가전",
    "https://dnvefa72aowie.cloudfront.net/origin/article/202107/458318174a14107c06b7bb52dcd9b25fb0b07cc86dcedde10f6c7b1cc102309c.webp?q=95&s=1440x1440&t=inside",
    "도마 여러가지 있어요\n크기도 다양하구요",
    "30,000원"
  ),
  new Product(
    "p4",
    "꾸륵",
    "6일 전",
    "캠핑 인디언 텐트 1회 사용",
    "기타 중고물품",
    "https://dnvefa72aowie.cloudfront.net/origin/article/202107/C9E260C5C5E5EB51FE01CACAD3ED4F9E67992EB6FF05D97392D1A73B156AEA9A.jpg?q=95&s=1440x1440&t=inside",
    "연락주세욧😊",
    "150,000원"
  ),
  new Product(
    "p5",
    "뽀로로",
    "5시간 전",
    "캠핑장에서 두 번 사용한 4단 우드쉘프",
    "기타 중고물품",
    "https://dnvefa72aowie.cloudfront.net/origin/article/202108/56BA59597313D088B2EE9DC3E1009379A23CB59D18E3653E1E165BB8D5BBD579.jpg?q=95&s=1440x1440&t=inside",
    "옆으로 2단으로 사용 가능하고요 위로 4단으로 가능한\n상품입니다~따로 가방은 없고요.\n인터넷 마켓비에서 구매했습니다~쳇 주세요",
    "15,000원"
  ),
  new Product(
    "p6",
    "아이올리",
    "3시간 전",
    "3인소파",
    "가구/인테리어",
    "https://dnvefa72aowie.cloudfront.net/origin/article/202108/21AA3BCC122F02506A6A36AFAB8E454BEF3F68E3D5F8B201D6F7B5866EF14E84.jpg?q=95&s=1440x1440&t=inside",
    "완전 저렴하게 올려요\n상태 완전 깨끗하고 소파 꺼짐 전혀 없어요\n급하게 이사를 가는데 집이 좁아서 둘때가 없어요..\n가지고 가셔야 합니다😅😊",
    "50,000원"
  ),
  new Product(
    "p7",
    "바우",
    "2시간 전",
    "2-4인 원형테이블",
    "가구/인테리어",
    "https://dnvefa72aowie.cloudfront.net/origin/article/202108/D7C2B20CBC1A83EAA19C991154475B0789C76F1ECCE0B9B97058750E926FD3AB.jpg?q=95&s=1440x1440&t=inside",
    "오늘의집에서 15만원 이상 주고 샀어요!\n다른 테이블 얻게 되서 싸게 팝니다\n깨끗해요!!",
    "30,000원"
  ),
  new Product(
    "p8",
    "다다",
    "4시간 전",
    "이케아 선반 / 서랍장 팝니다",
    "가구/인테리어",
    "https://dnvefa72aowie.cloudfront.net/origin/article/202108/76A83D5DEDB2728C7294636E2FDEE96045971CC6518D33C5D10970E515FE8B85.jpg?q=95&s=1440x1440&t=inside",
    "1. 이케아 서랍장\n바퀴 없고 손잡이 약간 변색 있는데 사용에 지장 없습니다! 내부는 깨끗합니다! 5000원에 팔게요 직거래 선호합니다\n2. 이케아 선반\n변색 전혀 없고 휘거나 굽어진 부분도 없습니다! 10000원에 팔게요! 직거래 선호합니다\n두 개 다 사시면 13000원에 드립니다",
    "10,000원"
  ),
  new Product(
    "p9",
    "도치",
    "41분 전",
    "여름 가방 모자",
    "여성잡화",
    "https://dnvefa72aowie.cloudfront.net/origin/article/202108/F761EFA71DAAB086DFCD97C785736A42ED4296A077E73B7825B4A92F95CD56A1.jpg?q=95&s=1440x1440&t=inside",
    "일괄입니다.\n가방 한번 들었어요.",
    "10,000원"
  ),
  new Product(
    "p10",
    "토끼",
    "1시간 전",
    "zara 선글라스",
    "여성잡화",
    "https://dnvefa72aowie.cloudfront.net/origin/article/202106/AEBDF6E047B496FAF3B8ABC5554EF4FF45F4610C069E70786C35F27ACE43EF53.jpg?q=95&s=1440x1440&t=inside",
    "1회 착용\n깨끗합니다\n구매 원하시는 분 연락 주세요",
    "30,000원"
  ),
];

export default PRODUCTS;
