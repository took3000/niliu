window.addEventListener('load', () => {
    // 使用 Fetch API 读取语录文件
fetch('quotesWithAuthorsAndDates2.txt?_=' + new Date().getTime())
.then(response => response.text())
.then(quotes => {
    const quoteArray = quotes.split('\n'); // 将语录文件内容按行分割成数组

    quoteArray.forEach(quote => {
      const parts = quote.split(' | '); // 使用特定分隔符 " | " 将每行内容分割成部分
      const text = parts[0]; // 获取语录文本
      const author = parts[2]; // 获取作者
      const date = parts[1];
      const div = document.createElement('div'); // 创建一个新的元素
      div.classList.add('quote'); // 为元素添加类名

      // 如果作者不为空
      if (author) {
        div.innerHTML = `
        <div id="post-1041" class="loop_content p_item moment_item uk-animation-slide-bottom-small post-1041 type-moment status-publish hentry moments-richang">
            <div class="p_item_inner">
                    <div class="list_user_meta">
                <div class="avatar"><img src="https://gd-hbimg.huaban.com/717c6fab374a41299f466f46d90aaa8c50abd9f027e1f0-god2I4_fw240g" referrerPolicy="no-referrer"></div>
                <div class="name" >
                    某匿流用户                <time itemprop="datePublished">发表于 ${date || '很久很久以前'}</time>
                </div>
            </div>

            <div class="blog_content">
                <div class="entry-content">
                    <div class="t_content">    
                    <span id="sentence" style="">${text}</span>
                    </div>
                    
             
                <div class="entry-footer">
                    <div class="post_footer_meta">
                        <div class="left">
                            <a class="up_like " data-action="up" data-id="1041" href="${author}" target="_blank">
                <i class="ri-wechat-line"></i>
                <span>${author}</span>
             </a>                    
                        
                        
                    </div>       
               
                    
                </div>`; // 构建有作者信息的元素内容
      } else {
        div.innerHTML = `
        <div id="post-1041" class="loop_content p_item moment_item uk-animation-slide-bottom-small post-1041 type-moment status-publish hentry moments-richang">
            <div class="p_item_inner">
                    <div class="list_user_meta">
                <div class="avatar"><img src="https://bizihu.com/ni199?2${text}" referrerPolicy="no-referrer"></div>
                <div class="name" >
                    某匿流用户                <time itemprop="datePublished">发表于 ${date || '很久很久以前'}</time>
                </div>
            </div>

            <div class="blog_content">
                <div class="entry-content">
                    <div class="t_content">    
                    <span id="sentence" style="">${text}</span>
                    </div>
                </div>
            </div>`; // 构建没有作者信息时的元素内容
      }

      document.getElementById('quotes').appendChild(div); // 将元素添加到指定容器
    });
  })
.catch(error => console.error('读取语录文件时发生错误:', error)); // 处理错误情况

});