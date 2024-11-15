// 使用 Fetch API 读取语录文件
    fetch('quotesWithAuthorsAndDates2.txt')
 .then(response => response.text())
 .then(quotes => {
        // 将语录分割成数组
        const quoteArray = quotes.split('\n');

        // 在页面上添加语录、作者和日期
        quoteArray.forEach(quote => {
          const parts = quote.split(' | '); // 使用特定分隔符 " | "
          const text = parts[0];
          const author = parts[1];
          const date = parts[2];
          const div = document.createElement('div');
          div.classList.add('quote');
          div.innerHTML = `
<div id="post-1041" class="loop_content p_item moment_item uk-animation-slide-bottom-small post-1041 type-moment status-publish hentry moments-richang">
	<div class="p_item_inner">
				<div class="list_user_meta">
			<div class="avatar"><img src="https://pic1.zhimg.com/v2-ab395044bb7ea9d81731714dd716250d_xl.jpg?source=32738c0c"></div>
			<div class="name">
				字湖				<time itemprop="datePublished">发表于 ${date}</time>
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

				
			</div>`;
          document.getElementById('quotes').appendChild(div);
        });
      })
 .catch(error => console.error('读取语录文件时发生错误:', error));