<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 获取POST提交的内容，并去除其中的换行符
    $content = str_replace(array("\r\n", "\r", "\n"), '', $_POST['content']);

    // 检查提交的内容是否为空
    if (empty($content)) {
        // 如果内容为空，则输出带有样式的消息
        echo '<div class="textarea">上条内容已发表成功哦！请不要发表空内容，谢谢！</div>';
        exit; // 退出脚本
    }


    // 添加时间戳
    $timestamp = ' ' . date('y.m.d') . ' ';

    // 检查内容中是否有分隔符
    if (strpos($content, '|') !== false) {
        // 分离分隔符前的内容和分隔符后的内容
        $beforeSeparator = substr($content, 0, strpos($content, '|'));
        $afterSeparator = substr($content, strpos($content, '|') + 1);

        // 构造最终内容
        $finalContent = $beforeSeparator . ' | ' . $timestamp . ' | ' . $afterSeparator;
    } else {
        $finalContent = $content . ' | ' . $timestamp;
    }

    // 读取当前文件内容
    $currentContent = file_get_contents('../quotesWithAuthorsAndDates2.txt');
    $currentLines = explode("\n", $currentContent);
    $newContentLines = array();

    // 插入新内容到第二行
    $newContentLines[] = $currentLines[0]; // 保留第一行
    $newContentLines[] = $finalContent;    // 将新内容插入第二行
    if (count($currentLines) > 1) {
        for ($i = 1; $i < count($currentLines); $i++) {
            $newContentLines[] = $currentLines[$i]; // 保留其余行
        }
    }

    // 合并数组为字符串并写入文件
    $newContentString = implode("\n", $newContentLines);
    file_put_contents('../quotesWithAuthorsAndDates2.txt', $newContentString);
}
?>

<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=yes" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
<head>
    
    
    
  
  <script>
    function goHome() {
      window.location.href = 'http://ni.bizihu.com/'; // 当点击按钮时，跳转到首页
    }
  </script>
</head>
<body>
  <form method="post">
    <textarea name="content"></textarea>
    <!-- 添加返回首页按钮 -->
    <input type="button" value="返回首页" onclick="goHome()" >
    <input type="submit" value="确认发表">
  </form>
  <style>
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    textarea {
      background-color: #ebf2ed;
    width: 100%;
    border: 0px;
    height: 3300px;
    font-size: 2rem;
    color: #124a41;
    }
    
    .textarea {
      background-color: #ebf2ed;
    width: 100%;
    border: 0px;
    height: 3300px;
    font-size: 2rem;
    color: #124a41;
    }

    input[type="submit"] {
     position: fixed; /* 将按钮固定 */
  bottom: 0px; /* 与底部的距离 */
  left: 50%; /* 水平居中 */
  transform: translateX(-50%); /* 使按钮水平居中 */
  height: 4rem;
  width: 100%;font-size: 2rem;background-color: #d0dada;color: #124a41;
    border:0px}
  
    input[type="button"] {
     position: fixed; /* 将按钮固定 */
  bottom: 5rem; /* 与底部的距离 */
  left: 50%; /* 水平居中 */
  transform: translateX(-50%); /* 使按钮水平居中 */
  height: 4rem;
  width: 100%;font-size: 2rem;background-color: #d0dada;color: #757575;
    border:0px}
  
    
  </style>
  
</body>
</html>
