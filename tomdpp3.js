// 使用 Fetch API 读取语录文件
fetch('quotesWithAuthorsAndDates2.txt')
.then(response => response.text())
.then(quotes => {
    const quoteArray = quotes.split('\n'); // 将语录文件内容分割成数组

    quoteArray.forEach(quote => {
      const parts = quote.split(' | '); // 按特定分隔符分割每行
      const text = parts[0]; // 获取语录文本
      const author = parts[1]; // 获取作者
      const date = parts[2]; // 获取日期
      const div = document.createElement('div'); // 创建元素
      div.classList.add('quote'); // 添加类名

      // 如果作者存在
      if (author) {
        // 如果日期也存在
        if (date) {
          div.innerHTML = `<div id="post-1041" class="loop_content p_item moment_item uk-animation-slide-bottom-small post-1041 type-moment status-publish hentry moments-richang">
            <div class="p_item_inner">
                    <div class="list_user_meta">
                <div class="avatar"><img src="https://pic1.zhimg.com/v2-ab395044bb7ea9d81731714dd716250d_xl.jpg?source=32738c0c"></div>
                <div class="name">
                    字湖                <time itemprop="datePublished">发表于 ${date}</time>
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
                            <a class="up_like " data-action="up" data-id="1041">
                <i class="ri-wechat-line"></i>
                <span>来源 ${author}</span>
             </a>                    
                    </div>
                </div>`; // 设置特定内容
        } else { // 如果日期不存在
          div.innerHTML = `<div id="post-1041" class="loop_content p_item moment_item uk-animation-slide-bottom-small post-1041 type-moment status-publish hentry moments-richang">
            <div class="p_item_inner">
                    <div class="list_user_meta">
                <div class="avatar"><img src="https://pic1.zhimg.com/v2-ab395044bb7ea9d81731714dd716250d_xl.jpg?source=32738c0c"></div>
                <div class="name">
                    字湖                <time itemprop="datePublished">发表于 很久很久以前</time>
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
                            <a class="up_like " data-action="up" data-id="1041">
                <i class="ri-wechat-line"></i>
                <span>来源 ${author}</span>
             </a>                    
                    </div>
                </div>`; // 设置特定内容
        }
      } else if (date) { // 如果只有日期存在
        div.innerHTML = `<div id="post-1041" class="loop_content p_item moment_item uk-animation-slide-bottom-small post-1041 type-moment status-publish hentry moments-richang">
            <div class="p_item_inner">
                    <div class="list_user_meta">
                <div class="avatar"><img src="https://pic1.zhimg.com/v2-ab395044bb7ea9d81731714dd716250d_xl.jpg?source=32738c0c"></div>
                <div class="name">
                    字湖                <time itemprop="datePublished">发表于 ${date}</time>
                </div>
            </div>

            <div class="blog_content">
                <div class="entry-content">
                    <div class="t_content">    
                    <span id="sentence" style="">${text}</span>
                    </div>
                </div>
            </div>`; // 设置特定内容
      } else if (!author &&!date) { // 如果日期和作者都不存在
        div.innerHTML = `<div id="post-1041" class="loop_content p_item moment_item uk-animation-slide-bottom-small post-1041 type-moment status-publish hentry moments-richang">
            <div class="p_item_inner">
                    <div class="list_user_meta">
                <div class="avatar"><img src="https://pic1.zhimg.com/v2-ab395044bb7ea9d81731714dd716250d_xl.jpg?source=32738c0c"></div>
                <div class="name">
                    字湖                <time itemprop="datePublished">发表于 很久很久以前</time>
                </div>
            </div>

            <div class="blog_content">
                <div class="entry-content">
                    <div class="t_content">    
                    <span id="sentence" style="">${text}</span>
                    </div>
                </div>
            </div>`; // 设置特定内容
      } else {
        div.innerHTML = `<div id="post-1041" class="loop_content p_item moment_item uk-animation-slide-bottom-small post-1041 type-moment status-publish hentry moments-richang">
            <div class="p_item_inner">
                    <div class="list_user_meta">
                <div class="avatar"><img src="https://pic1.zhimg.com/v2-ab395044bb7ea9d81731714dd716250d_xl.jpg?source=32738c0c"></div>
                <div class="name">
                    字湖                <time itemprop="datePublished">发表于 很久很久以前</time>
                </div>
            </div>

            <div class="blog_content">
                <div class="entry-content">
                    <div class="t_content">    
                    <span id="sentence" style="">${text}</span>
                    </div>
                </div>
            </div>`; // 兜底情况
      }

      document.getElementById('quotes').appendChild(div); // 将元素添加到指定容器
    });
  })
.catch(error => console.error('读取语录文件时出错:', error)); // 处理错误情况