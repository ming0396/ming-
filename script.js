document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单提交的默认行为
    var searchQuery = document.getElementById('searchInput').value; // 获取搜索输入框的值
    var searchUrl = 'https://www.google.com/search?q=' + searchQuery; // 假设使用 Google 搜索
    window.open(searchUrl, '_blank'); // 在新标签页打开搜索结果
});