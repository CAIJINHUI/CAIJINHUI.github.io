function login(form){ 
		
			if(form.u.value=="webdesign") {
				if(form.p.value=="123456") {
					console.log(1111);
					return true;
				}
			}
			window.alert("用户名或者密码错误,登陆失败！");//弹窗打印重要参数
			
			return false;//一切OK返回true提交表单
		}