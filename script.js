// 获取导航链接和各个部分
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('.section');

// 当点击导航项时，显示相应的内容
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        
        // 隐藏所有内容区域
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // 获取目标部分的ID