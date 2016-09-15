$(function(){
	var password = $('#newPassword');
	var reInput = $('#reNewPassword');
	var oldPassword = $('#oldPassword');
	var strExp=new RegExp("^[0-9A-Za-z]{3,12}$");

	// 表单验证
	password.blur(function(){
		if(!strExp.test(password.val())){
			alert("密码只能为3到12位数字或英文字母!");
			password.val('');
			return false;
		}
	});
	reInput.blur(function(){
		if($(this).val() != password.val()){
			alert("请输入相同的新密码!");
			$(this).val('');
		}
	});
	$('#protectAnswer').blur(function(){
		if($(this).val() == ''){
			alert("答案不能为空！");
		}
	})


   //关闭按钮
	$('.protectClose').mouseover(function(){
		$(this).css('background', 'url('+'./img/panel_tools2.png'+') no-repeat -16px 1px');
	}).mouseout(function(){
		$(this).css('background', 'url('+'./img/panel_tools1.png'+') no-repeat -16px 1px');
	});;

	//提交按钮
	$('#passwordSubmit').click(function(){
		var oldPasswordValue = oldPassword.val();
		var questionIndex = $('#questionChoose').val()
		var newPassword = password.val();
		var questionAwer = $('#protectAnswer').val();
		var data = {
			"questionIndex":questionIndex,
			"oldPassword":oldPasswordValue,
			"newPassword":newPassword,
			"answer":questionAwer
		};
		if(!strExp.test(password.val())){
			alert("密码只能为3到12位数字或英文字母!");
			password.val('');
			return false;
		}
		if(reInput.val() != password.val()){
			alert("请输入相同的新密码!");
			reInput.val('');
			return false;
		}
		if($('#protectAnswer').val() == ''){
			alert("答案不能为空！");
			return false;
		}
		$.ajax({
			url: '',
			type: 'POST',
			dataType: 'json',
			data: data,
			success:function(d){
				if (d) {
					alert("旧密码输入错误！");
					//清空输入的密码
					oldPassword.val("");
					password.val("");
					reInput.val("");
				}else{
					alert("修改成功！");
				}
			}
		});
	});
})