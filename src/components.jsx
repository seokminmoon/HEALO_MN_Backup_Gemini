// src/components.jsx (전체 코드 복구 버전)
import React, { useEffect, useRef, useState } from 'react';
import {
  Search,
  MapPin,
  Globe,
  Menu,
  Star,
  Zap,
  ChevronDown,
  CheckCircle,
  MessageCircle,
  X,
  ArrowRight,
  UserCircle,
  Stethoscope,
  Building2,
  Sparkles
} from 'lucide-react';

/**
 * 유틸: 바깥 클릭 시 닫기
 */
const useOutsideClose = (isOpen, onClose) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!isOpen) return;

    const handler = (e) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) onClose();
    };

    window.addEventListener('mousedown', handler);
    return () => window.removeEventListener('mousedown', handler);
  }, [isOpen, onClose]);

  return ref;
};

// --- 1. 헤더 (상단 햄버거 제거 & 로그인 아이콘 추가 & 데스크탑 메뉴 복구) ---
export const Header = ({ setView, view, handleGlobalInquiry, isMobileMenuOpen, setIsMobileMenuOpen, onNavClick }) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ENG');

  return (
    <>
      <header className="bg-teal-600 text-white sticky top-0 z-50 shadow-sm border-b border-teal-500">
        <div className="max-w-6xl mx-auto px-4 h-14 md:h-16 relative flex items-center justify-between">
          
          {/* 1. 좌측: 로고 */}
          <div className="flex items-center cursor-pointer gap-3 z-20" onClick={() => onNavClick('home')}>
            <span className="text-xl md:text-2xl font-extrabold tracking-tight">HEALO</span>
            <span className="hidden lg:block text-xs text-teal-100 font-light uppercase tracking-widest border-l border-teal-400/60 pl-3">
              AI Medical Concierge
            </span>
          </div>

          {/* ✅ 2. [복구 완료] 중앙 CTA (데스크탑 전용 - 화면 정중앙 고정) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block z-30 pointer-events-auto">
            <button
              onClick={handleGlobalInquiry}
              className="flex items-center gap-2 text-sm font-extrabold bg-white text-teal-700 px-6 py-2 rounded-full hover:bg-teal-50 transition shadow-md"
            >
              <Zap size={16} className="text-teal-600 fill-teal-600" />
              Get Free Treatment Plan
            </button>
          </div>

          {/* 3. 우측: 데스크탑 메뉴 (CTA 피해서 우측 정렬) */}
          <div className="ml-auto hidden md:flex items-center z-20">
            <div className="flex items-center gap-4 pl-6">
              <nav className="flex items-center gap-5">
                <button onClick={() => onNavClick('list_treatment')} className={`text-sm font-bold transition ${String(view).includes('treatment') ? 'text-white' : 'text-white/85 hover:text-white'}`}>Treatments</button>
                <button onClick={() => onNavClick('list_hospital')} className={`text-sm font-bold transition ${String(view).includes('hospital') ? 'text-white' : 'text-white/85 hover:text-white'}`}>Hospitals</button>
              </nav>

              <div className="w-px h-5 bg-white/20" />

              <div className="flex items-center gap-4">
                <button onClick={() => setView('login')} className="text-sm font-bold text-white/80 hover:text-white transition">Log In</button>
                <button onClick={() => setView('signup')} className="text-sm font-bold text-white/80 hover:text-white transition">Sign Up</button>
              </div>

              <div className="w-px h-5 bg-white/20" />

              {/* 언어 선택 */}
              <div className="relative">
                <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-1 text-white/80 hover:text-white text-sm font-bold transition">
                  <Globe size={16} className="opacity-90" />
                  <span>{currentLang}</span>
                  <ChevronDown size={14} className={`opacity-80 transition ${isLangOpen ? 'rotate-180' : ''}`} />
                </button>

                {isLangOpen && (
                  <>
                    <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 py-1 text-gray-800">
                      {['ENG', 'JPN', 'CHN', 'KOR'].map((lang) => (
                        <button key={lang} onClick={() => { setCurrentLang(lang); setIsLangOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex justify-between items-center">
                          {lang} {currentLang === lang && <CheckCircle size={12} className="text-teal-600" />}
                        </button>
                      ))}
                    </div>
                    <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsLangOpen(false)} />
                  </>
                )}
              </div>
            </div>
          </div>

          {/* 4. 모바일 전용: 로그인 아이콘 (우측 상단) */}
          <div className="md:hidden flex items-center gap-3 z-20">
            <button onClick={() => setView('login')} className="flex items-center gap-1 text-white/90 hover:text-white">
                <UserCircle size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* 모바일 사이드 메뉴 (Drawer) - 버튼은 없앴지만 코드는 유지 (혹시 모를 호출 대비) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
           <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in" onClick={() => setIsMobileMenuOpen(false)}></div>
           
           <div className="relative w-[80%] max-w-[300px] h-full bg-white shadow-2xl p-6 flex flex-col animate-in slide-in-from-right duration-300">
              <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                 <span className="text-xl font-extrabold text-teal-600">HEALO</span>
                 <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200">
                    <X size={20}/>
                 </button>
              </div>

              <nav className="flex flex-col gap-4 text-lg font-bold text-gray-800">
                 <button onClick={() => onNavClick('list_treatment')} className="text-left py-2 flex items-center justify-between">Treatments <ArrowRight size={16} className="text-gray-300"/></button>
                 <button onClick={() => onNavClick('list_hospital')} className="text-left py-2 flex items-center justify-between">Hospitals <ArrowRight size={16} className="text-gray-300"/></button>
                 <hr className="border-gray-100 my-2"/>
                 <button onClick={() => { setView('login'); setIsMobileMenuOpen(false); }} className="text-left py-2 text-gray-500 hover:text-teal-600">Log In</button>
                 <button onClick={() => { setView('signup'); setIsMobileMenuOpen(false); }} className="text-left py-2 text-gray-500 hover:text-teal-600">Sign Up</button>
              </nav>

              <div className="mt-auto">
                 <button onClick={() => { handleGlobalInquiry(); setIsMobileMenuOpen(false); }} className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2">
                    <Zap size={18}/> Get Free Plan
                 </button>
              </div>
           </div>
        </div>
      )}
    </>
  );
};

// --- 2. 히어로 섹션 ---
export const HeroSection = ({ setView, searchTerm, setSearchTerm }) => (
  <section className="relative mb-4">
    <div className="relative bg-teal-500 pt-10 pb-20 md:pt-16 md:pb-24 text-center overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Find the Best Hospital<br className="md:hidden"/> in Korea
          <br className="hidden md:block" />
          <span className="text-teal-100 block mt-1 md:inline md:mt-0"> in 30 Seconds.</span>
        </h1>
        <p className="text-teal-50 text-base md:text-lg max-w-2xl mx-auto px-4">
          AI compares treatments, doctors, and prices so you don't have to.
        </p>
      </div>
    </div>

    <div className="relative z-20 max-w-2xl mx-auto px-4 -mt-7 md:-mt-9">
      <div className="bg-white p-2 rounded-full shadow-xl flex items-center border border-gray-100">
        <Search className="text-teal-500 ml-3 md:ml-4 shrink-0" size={20} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Try searching for 'Stem Cell'..."
          className="flex-1 p-3 md:p-4 text-gray-700 placeholder-gray-400 outline-none bg-transparent text-sm md:text-base min-w-0"
          onKeyDown={(e) => e.key === 'Enter' && setView('list_treatment')}
        />
        <button
          onClick={() => setView('list_treatment')}
          className="bg-teal-600 text-white px-5 md:px-8 py-2.5 md:py-3 rounded-full font-bold text-sm md:text-base hover:bg-teal-700 transition shadow-md shrink-0"
        >
          Search
        </button>
      </div>
    </div>
  </section>
);

// --- 3. 카드 리스트 섹션 (모바일 최적화 버전) ---
export const CardListSection = ({ title, items, onCardClick, type }) => (
  <section className="max-w-6xl mx-auto px-4 py-8">
    <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-6">{title}</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onCardClick(item.id)}
          className="bg-white border border-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-500 transition-all duration-300 cursor-pointer group flex flex-row h-36 md:h-56"
        >
          {/* 이미지 영역: w-40으로 확대 */}
          <div className="w-40 md:w-auto md:h-full md:aspect-square relative bg-gray-200 overflow-hidden shrink-0">
            <img
              src={type === 'hospital' ? item.images?.[0] : item.images?.[0]} 
              onError={(e) => e.target.src = `https://placehold.co/600x600?text=${type}`}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              alt="img"
            />
          </div>

          {/* 텍스트 영역 */}
          <div className="flex-1 p-3 md:p-5 flex flex-col justify-between min-w-0">
            <div>
              {type === 'hospital' ? (
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-extrabold text-sm md:text-lg text-gray-900 line-clamp-1 group-hover:text-teal-600 transition">
                    {item.name}
                  </h3>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-start mb-0.5">
                    <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider truncate">
                      {item.hospital}
                    </p>
                  </div>
                  <h3 className="font-extrabold text-base md:text-lg text-gray-900 mb-1 line-clamp-2 md:line-clamp-1 leading-snug group-hover:text-teal-600 transition">
                    {item.title}
                  </h3>
                </>
              )}

              {item.tags && (
                <div className="flex flex-wrap gap-1 mb-1 md:mb-3">
                  {item.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="text-[9px] md:text-[10px] bg-teal-50 text-teal-700 px-1.5 py-0.5 rounded font-extrabold">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="hidden md:block text-xs text-gray-500 line-clamp-2 leading-relaxed">
                {type === 'hospital' ? item.description : item.desc}
              </div>
            </div>

            <div className="pt-2 mt-auto border-t border-gray-50 flex items-end justify-between">
              {type === 'treatment' ? (
                <div>
                  <p className="hidden md:block text-[10px] text-gray-400 uppercase font-extrabold">Est. Price</p>
                  <p className="text-teal-700 font-black text-sm md:text-sm">{item.price}</p>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-[10px] md:text-xs text-gray-500 truncate mr-2">
                  <MapPin size={10} className="md:w-3 md:h-3" /> <span className="truncate">{item.location}</span>
                </div>
              )}
              
              <div className="flex items-center gap-1 text-xs font-extrabold text-gray-900 shrink-0">
                <Star size={10} className="md:w-3 md:h-3 text-yellow-400 fill-yellow-400" /> {item.rating}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- 4. 전역 플로팅 문의 버튼 ---
export const FloatingInquiryBtn = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group cursor-pointer" onClick={onClick}>
      <div className="bg-white text-gray-800 text-xs font-extrabold px-3 py-2 rounded-xl shadow-md border border-gray-100 mb-1 animate-bounce">
        Need Help? 💬
      </div>

      <button className="w-14 h-14 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform transform hover:scale-110 active:scale-95 relative">
        <MessageCircle size={28} fill="currentColor" className="text-teal-100" />
        <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
      </button>
    </div>
  );
};

// --- Personal Concierge CTA ---
export const PersonalConciergeCTA = ({
  title = "Find the right treatment for you.",
  subtitle = "Get a free, personalized treatment plan — tailored to your goals and budget.",
  badge = "PERSONAL CONCIERGE",
  buttonText = "Get My Free Plan",
  onClick,
  className = "",
}) => {
  return (
    <section className={`max-w-6xl mx-auto px-4 ${className}`}>
      <div className="rounded-3xl border border-teal-100 bg-teal-50/50 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
        <div className="min-w-0">
          <div className="flex items-center justify-center md:justify-start gap-2 text-teal-700 text-xs font-extrabold tracking-widest">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-teal-100">
              ✨
            </span>
            <span>{badge}</span>
          </div>

          <h3 className="mt-3 text-2xl md:text-3xl font-extrabold text-gray-900">
            {title}
          </h3>
          
          {/* ✅ [수정됨] text-balance 추가: 문장이 자동으로 균형 있게 두 줄로 나뉩니다 */}
          <p className="mt-2 text-gray-700 text-sm md:text-base text-balance leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="shrink-0 mt-2 md:mt-0">
          <button
            onClick={onClick}
            className="w-full md:w-auto px-8 py-4 rounded-full bg-teal-600 text-white font-extrabold shadow-lg hover:bg-teal-700 transition"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

// --- [NEW] 모바일 하단 네비게이션 (3단 탭 / 중앙 Inquiry / 검색 초기화 적용) ---
export const MobileBottomNav = ({ setView, view, onInquiry, onNavClick }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[80] bg-white border-t border-gray-200 pb-safe-area shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
      
      <div className="grid grid-cols-3 h-16 items-center relative">
        
        {/* 1. Treatments (왼쪽) */}
        <button 
            onClick={() => onNavClick('list_treatment')} 
            className={`flex flex-col items-center justify-center gap-1 h-full w-full active:scale-95 transition ${String(view).includes('treatment') ? 'text-teal-600' : 'text-gray-400 hover:text-gray-600'}`}
        >
            <Stethoscope size={24} strokeWidth={String(view).includes('treatment') ? 2.5 : 2} />
            <span className="text-[10px] font-bold">Treatments</span>
        </button>

        {/* 2. Center CTA (Inquiry) - 깔끔하게 변경 */}
        <div className="relative flex justify-center h-full pointer-events-none"> 
           <button 
              onClick={onInquiry} 
              className="pointer-events-auto absolute -top-5 flex flex-col items-center group"
           >
              <div className="w-14 h-14 rounded-full bg-teal-600 shadow-lg shadow-teal-100 flex items-center justify-center text-white mb-1 transform group-active:scale-95 transition border-[3px] border-white">
                  <MessageCircle size={24} fill="currentColor" className="text-white" />
              </div>
              <span className="text-[10px] font-bold text-teal-700">Inquiry</span>
           </button>
        </div>

        {/* 3. Hospitals (오른쪽) */}
        <button 
            onClick={() => onNavClick('list_hospital')} 
            className={`flex flex-col items-center justify-center gap-1 h-full w-full active:scale-95 transition ${String(view).includes('hospital') ? 'text-teal-600' : 'text-gray-400 hover:text-gray-600'}`}
        >
            <Building2 size={24} strokeWidth={String(view).includes('hospital') ? 2.5 : 2} />
            <span className="text-[10px] font-bold">Hospitals</span>
        </button>

      </div>
    </div>
  );
};