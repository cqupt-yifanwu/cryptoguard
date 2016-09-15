$(function(){
	var password = $('#newPassword');
	var reInput = $('#reNewPassword');
	var oldPassword = $('#oldPassword');
	var strExp=new RegExp("^[0-9A-Za-z]{3,12}$");

	// ����֤
	password.blur(function(){
		if(!strExp.test(password.val())){
			alert("����ֻ��Ϊ3��12λ���ֻ�Ӣ����ĸ!");
			password.val('');
			return false;
		}
	});
	reInput.blur(function(){
		if($(this).val() != password.val()){
			alert("��������ͬ��������!");
			$(this).val('');
		}
	});
	$('#protectAnswer').blur(function(){
		if($(this).val() == ''){
			alert("�𰸲���Ϊ�գ�");
		}
	})


   //�رհ�ť
	$('.protectClose').mouseover(function(){
		$(this).css('background', 'url('+'./img/panel_tools2.png'+') no-repeat -16px 1px');
	}).mouseout(function(){
		$(this).css('background', 'url('+'./img/panel_tools1.png'+') no-repeat -16px 1px');
	});;

	//�ύ��ť
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
			alert("����ֻ��Ϊ3��12λ���ֻ�Ӣ����ĸ!");
			password.val('');
			return false;
		}
		if(reInput.val() != password.val()){
			alert("��������ͬ��������!");
			reInput.val('');
			return false;
		}
		if($('#protectAnswer').val() == ''){
			alert("�𰸲���Ϊ�գ�");
			return false;
		}
		$.ajax({
			url: '',
			type: 'POST',
			dataType: 'json',
			data: data,
			success:function(d){
				if (d) {
					alert("�������������");
					//������������
					oldPassword.val("");
					password.val("");
					reInput.val("");
				}else{
					alert("�޸ĳɹ���");
				}
			}
		});
	});
})