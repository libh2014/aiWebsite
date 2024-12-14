// 案例数据
const portfolioData = [
  {
    title: "电商小程序",
    description: "为某品牌开发的全功能电商小程序",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  },
  {
    title: "企业管理系统",
    description: "定制化的企业资源管理解决方案",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  },
  {
    title: "医疗预约App",
    description: "便捷的医疗预约和问诊平台",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  },
  {
    title: "在线教育平台",
    description: "智能化在线学习解决方案",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  },
  {
    title: "智慧社区系统",
    description: "现代化社区管理与服务平台",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  },
  {
    title: "餐饮外卖平台",
    description: "一站式餐饮解决方案",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  },
];

// 团队成员数据
const teamData = [
  {
    name: "张志远",
    position: "技术总监",
    description: "前微软高级工程师，15年研发管理经验",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
  },
  {
    name: "李明",
    position: "架构总监",
    description: "前阿里P8架构师，主导过多个千万级用户项目",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
  },
  {
    name: "王静",
    position: "产品总监",
    description: "原腾讯产品专家，8年产品规划与设计经验",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
  },
  {
    name: "刘伟",
    position: "前端技术专家",
    description: "React核心贡献者，主导多个开源项目",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
  },
  {
    name: "陈晓华",
    position: "后端技术专家",
    description: "分布式系统专家，精通高并发架构",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
  },
  {
    name: "赵琳",
    position: "UI/UX设计总监",
    description: "获得红点设计大奖，10年用户体验设计经验",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
  },
];

// 加载案例展示
function loadPortfolio() {
  const portfolioGrid = document.querySelector(".portfolio-grid");
  portfolioData.forEach((item) => {
    const portfolioItem = document.createElement("div");
    portfolioItem.className = "portfolio-item";
    portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
    portfolioGrid.appendChild(portfolioItem);
  });
}

// 加载团队成员
function loadTeamMembers() {
  const teamMembers = document.querySelector(".team-members");
  teamData.forEach((member) => {
    const memberCard = document.createElement("div");
    memberCard.className = "team-member";
    memberCard.innerHTML = `
      <div class="member-image">
        <img src="${member.image}" alt="${member.name}">
      </div>
      <div class="member-info">
        <h3>${member.name}</h3>
        <h4>${member.position}</h4>
        <p>${member.description}</p>
      </div>
    `;
    teamMembers.appendChild(memberCard);
  });
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// 导航栏滚动效果
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.8)";
    navbar.style.boxShadow = "none";
  }
});

// 页面加载完成后执行
document.addEventListener("DOMContentLoaded", () => {
  loadPortfolio();
  loadTeamMembers();
});

// 添加立即咨询按钮的点击事件
document.querySelectorAll(".cta-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView({
      behavior: "smooth",
    });
  });
});
