function zhuce(){
	var form = document.getElementById("form");
			if(form.username.value=="") {
				alert("用户名不能为空！");
				return false;//只要return了函数就此结束并返回false，不再往下执行。
			}
			if(form.username.value.length>10) {
				alert("用户名不能够超过10个字符！");
				return false;
			}
			if(form.pwd.value=="") {
				alert("密码不能为空！");
				return false;
			}
			if(form.pwd.value.length<6) {
				alert("密码至少为6位，请重新输入！");
				return false;
			}
			if(form.password.value != form.pwd.value) {
				alert("你两次输入的密码不一致，请重新输入！");
				return false;
			}
			if(form.email.value=="") {
				alert("邮箱不能为空！");
				return false;
			}
			//以上五个if判断语句只要有一个运行，都不执行以下代码
			var data="用户名:" + form.username.value + "\n密码:" + form.password.value + "\n邮箱:" + form.email.value;
			window.alert(data);//弹窗打印重要参数
			
			return true;//一切OK返回true提交表单
		}