from flask import Flask, request

app = Flask(__name__)

# 假设 TXT 文件路径
txt_file_path = 'quotesWithAuthorsAndDates2.txt'

@app.route('/modify_txt', methods=['POST'])
def modify_txt():
    # 获取请求中提交的新内容
    new_content = request.form['content']
    with open(txt_file_path, 'w') as f:
        f.write(new_content)
    return 'TXT 文件修改成功'

if __name__ == '__main__':
    app.run(debug=True)