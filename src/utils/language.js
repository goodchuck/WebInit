// base
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

//i18 - 다국어 메뉴명
const resources = {
  en: {
    translation: {
      dashboard: 'Dashboard',
      notice: 'Notice & Announcement',
      pjt: 'PJT Information',
      company: 'Company Management',
      user: 'User Management',
      smart: 'Smart Safety Passport',
      ptw: 'M-PTW',
      weather: 'Weather & Air Quality',
      cctv: 'CCTV',
      system: 'System Setting'
    }
  },
  ar: {
    translation: {
      dashboard: 'لوحة القيادة',
      notice: 'يلاحظ',
      pjt: 'PJT معلومة',
      company: 'إدارة الشركة',
      user: 'إدارةالمستخدم',
      smart: 'جواز السفر الذكي',
      ptw: 'M-PTW',
      weather: 'جودة الطقس والجو',
      cctv: 'كاميرات مراقبة',
      system: 'اعدادات النظام'
    }
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: 'en', // 기본 언어 설정 (영어)
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    //ar : 아랍어
    direction: i18n.language === 'ar' ? 'rtl' : 'ltr'
  });

export default i18n;
