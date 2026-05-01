// 之後要更新履歷內容，主要改這個檔案即可。
// 新增技能、經歷、專案時，複製同一段格式後改文字。
window.resumeData = {
  profile: {
    name: "劉敦桐",
    title: "C# / ASP.NET Core / SQL Server",
    roleLabel: "Backend Developer / System Engineer",
    photo: "Personal.jpg",
    email: "zse811022@gmail.com",
    phone: "xxxx",
    githubName: "qsc811022",
    githubUrl: "https://github.com/qsc811022",
    summary:
      "具備 Web 後端開發與伺服器系統驗證、維運經驗，熟悉 C#、ASP.NET Core MVC、SQL Server、Dapper 與 Entity Framework。能從需求拆解、資料庫設計、API 串接到部署維護完整參與，重視程式可維護性、系統穩定性與問題追蹤效率。",
    contactMessage:
      "如果你正在尋找具備後端開發、資料庫與系統維運背景的工程師，可以透過 Email 或 GitHub 與我聯絡。",
  },

  highlights: [
    { value: "3+ 年", label: "系統工程與驗證經驗" },
    { value: "ASP.NET", label: "後端與資料庫開發" },
    { value: "DevOps", label: "Linux、Docker、Git" },
  ],

  sections: {
    skills: {
      eyebrow: "Technical Stack",
      title: "核心技能",
      description:
        "以後端開發、資料庫操作與系統維運為主軸，能支援產品從開發到部署後維護。",
    },
    experience: {
      eyebrow: "Work Experience",
      title: "工作經歷",
      description:
        "累積後端開發、伺服器驗證與系統維運經驗，能在開發與基礎架構之間有效溝通。",
    },
    projects: {
      eyebrow: "Selected Projects",
      title: "精選專案",
      description: "以下專案呈現 Web 開發、資料串接與 UI 實作能力。",
    },
    contact: {
      eyebrow: "Contact",
      title: "歡迎與我聯繫",
    },
  },

  skills: [
    {
      title: "程式語言",
      items: ["C#", "JavaScript", "Python", "Shell Script"],
    },
    {
      title: "後端開發",
      items: [
        "ASP.NET Core MVC",
        "RESTful API",
        "Entity Framework",
        "Dapper / ADO.NET",
      ],
    },
    {
      title: "資料庫與工具",
      items: ["SQL Server", "MySQL", "Git / GitHub", "Docker"],
    },
    {
      title: "系統維運",
      items: [
        "Linux / Windows Server",
        "Nagios 監控",
        "VMware",
        "問題排查與紀錄",
      ],
    },
    {
      title: "前端協作",
      items: ["React", "Vue", "Tailwind CSS", "Responsive Web Design"],
    },
    {
      title: "AI 工具應用",
      items: [
        "ChatGPT",
        "Prompt Engineering",
        "文件整理與程式輔助",
        "需求拆解與除錯支援",
      ],
    },
  ],

  experience: [
    {
      period: "2025/12 - 在職中",
      company: "PCHOME Online",
      title: "資深系統工程師",
      bullets: [
        "負責公司內部 IT 基礎架構與使用者端技術支援（硬體 / 軟體 / 帳號 / 網路），提供電話、Teams 與遠端工具的一線技術支援，確保日常營運穩定",
        "管理 Windows / macOS 使用環境，包含系統設定、軟體部署與更新、常見問題排除及效能基本檢測",
        "維運辦公室 IT 設備與會議系統（印表機、掃描設備、Teams / Zoom 會議設備），確保設備運作穩定並快速排除異常。",
        "管理 企業帳號與權限系統（AD、Email、VPN、檔案分享與群組權限），依公司資安流程進行帳號建立、權限控管與異動管理。",
        "負責 人員到離職 IT 作業流程，包含設備交付、帳號開通 / 停用、權限回收與設備盤點。",
      ],
      tags: ["React", "Node.js", "Tailwind"],
    },
    {
      period: "2025/07 - 2025/11",
      company: "前端實戰培訓",
      title: "JavaScript 與 Web 應用開發",
      bullets: [
        "使用 React、Next.js、Node.js 建立 Web 介面與 RESTful API。",
        "熟悉元件化開發、路由設計、前後端資料串接與基本部署流程。",
        "搭配 Tailwind CSS、Git、MySQL 完成可展示的產品功能。",
      ],
      tags: ["React", "Node.js", "Tailwind"],
    },
    {
      period: "2022/04 - 2025/06",
      company: "和碩聯合科技",
      title: "Server System Validation Engineer",
      bullets: [
        "負責伺服器平台驗證，協助追蹤 BIOS、韌體與系統相容性問題。",
        "使用 Bash / Python 輔助測試流程，提升重複性檢查與紀錄效率。",
        "整理測試結果與異常紀錄，協助跨部門釐清問題範圍與復現條件。",
      ],
      tags: ["Bash", "Python", "BIOS"],
    },
    {
      period: "2019/01 - 2022/04",
      company: "優必達",
      title: "系統工程師",
      bullets: [
        "維護 Linux / Windows Server 環境，處理日常系統監控、帳號與服務管理。",
        "使用 Nagios 建立監控項目，協助掌握系統狀態與異常告警。",
        "以 Shell / Python 撰寫簡易自動化腳本，減少重複性維運工作。",
      ],
      tags: ["Linux", "Nagios", "Shell Script"],
    },
    {
      period: "2017/09 - 2017/12",
      company: "康和證券",
      title: "系統維運工程師",
      bullets: [
        "協助 Linux / Windows 環境基礎維護與問題排除。",
        "支援使用者端設定、軟體安裝與基礎網路檢查。",
        "建立簡易維護紀錄，協助後續問題追蹤。",
      ],
      tags: ["Linux", "Windows"],
    },
  ],

  projects: [
    {
      subtitle: "React + TypeScript / 2025",
      title: "歷史時間軸展示網站",
      description:
        "以 React 與 TypeScript 建立互動式時間軸頁面，整理歷史事件資料，支援清楚的分類瀏覽與響應式版面。",
      tags: ["React", "TypeScript", "Vite"],
      links: [
        { label: "Demo", url: "https://history-timeline-demo.vercel.app" },
        {
          label: "GitHub",
          url: "https://github.com/qsc811022/history-timeline-demo",
        },
      ],
    },
    {
      subtitle: "ASP.NET Core MVC + Dapper",
      title: "補習班網站",
      description:
        "使用 ASP.NET Core MVC 建立資料管理功能，搭配 Dapper 與 SQL Server 處理資料查詢、顯示與基礎維護流程。",
      tags: ["ASP.NET Core", "Dapper", "SQL Server"],
      links: [
        { label: "GitHub", url: "https://github.com/qsc811022/WebApp0618" },
      ],
    },
  ],
};
