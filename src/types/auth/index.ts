export interface ILogin {
    id: string;
    password: string;
    remember: boolean;
}

export interface IUserInfo {
    password: string;
    id: string; // 고유 식별자 (예: 데이터베이스의 기본 키)
    username: string; // 사용자 이름 또는 별명
    email: string; // 사용자 이메일 주소
    fullName: string; // 사용자의 전체 이름
    profilePicture: string; // 프로필 사진 URL
    phoneNumber: string; // 전화번호
    address: string; // 주소 정보
    accountStatus: string; // 계정 상태 (예: 활성화/비활성화)
    emailVerified: boolean; // 이메일 인증 여부
    phoneVerified: boolean; // 전화번호 인증 여부
    accountCreatedDate: string; // 계정 생성 일자
    lastLogin: string; // 마지막 로그인 시간
    loginAttempts: number; // 로그인 시도 횟수
    lastActivity: string; // 마지막 활동 시간
    recentActivities: string[]; // 최근 활동 기록 (예: 최근 주문, 최근 댓글)
    loginHistory: { ip: string; date: string }[]; // 로그인 기록 (IP 주소, 로그인 시간 등)
    role: string; // 사용자 역할 (예: 사용자, 관리자, 슈퍼 관리자)
    permissions: string[]; // 사용자 권한 (특정 기능에 대한 접근 권한)
    settings: { [key: string]: any }; // 사용자 설정 (예: 알림 설정, 언어 설정)
    subscriptions: { plan: string; startDate: string; endDate: string }[]; // 구독 정보 (예: 구독 플랜, 구독 시작일, 만료일)
    paymentMethods: { type: string; lastFour: string; expiry: string }[]; // 결제 수단 (예: 카드 정보, 결제 기록)
    orderHistory: { orderId: string; status: string; date: string }[]; // 주문 기록 (예: 주문 번호, 주문 상태, 주문 일자)
    supportTickets: { ticketId: string; status: string; createdDate: string }[]; // 지원 티켓 (예: 티켓 번호, 상태, 생성 일자)
}

export interface IResponseLogin {
    ACCESS_TOKEN: string;
    REFRESH_TOKEN: string;
    userId: string;
    temporaryPaswdStatus: boolean;
    userInfo: IUserInfo;
}
