// 新增折叠功能脚本
// 优化折叠动画逻辑
document.querySelectorAll('.collapsible').forEach(header => {
    header.addEventListener('click', () => {
        const list = header.nextElementSibling;
        const arrow = header.querySelector('.arrow');
        list.style.transition = 'none'; // 禁用初始动画
        
        // 强制重绘获取实际高度
        const fullHeight = list.scrollHeight + 'px';
        
        // 设置过渡动画
        requestAnimationFrame(() => {
            list.style.transition = 'all 0.3s ease-out';
            list.style.maxHeight = list.classList.contains('collapsed') ? fullHeight : '0';
            list.classList.toggle('collapsed');
            arrow.classList.toggle('collapsed');
        });
    });
});