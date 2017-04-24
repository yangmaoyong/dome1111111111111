var lis = document.getElementsByClassName("bj");
		var bths = document.getElementsByClassName("bth_li")
		var index = 0;
		var mid;
		var flag;
			//初始化
		hideAll(lis);//先隐藏全部
		lis[0].style.opacity = "1";//显示索引对应的li
		bths[0].style.background = "red";
		mid = setInterval(show,2000);
		function mUp(){
			clearInterval(mid);
			if(flag){
				--index;
				flag=false;
			}
			//先让index减1
			--index;
			if(index==-2){
				index=2;
			}
			if(index < 0){
				index = 3;
			}
			//清除定时器
			hideAll(lis);//先隐藏全部
			lis[index].style.opacity = "1";//显示索引对应的li
			bths[index].style.background = "red";
			//修改完后 启动定时器
			mid = setInterval(show,2000);
		}
		
		function mDown(){
			if(flag){
				--index;
				flag=false;
			}
			//先让index减1
			++index;
			if(index > 3){
				index = 0;
			}
			//清除定时器
			clearInterval(mid);
			hideAll(lis);//先隐藏全部
			lis[index].style.opacity = "1";//显示索引对应的li
			bths[index].style.background = "red";
			//修改完后 启动定时器
			mid = setInterval(show,2000);
		}
		
		function anNiu(indx){
			//清除定时器
			clearInterval(mid);
			hideAll(lis);//先隐藏全部
			lis[indx].style.opacity = "1";//显示索引对应的li
			bths[indx].style.background = "red";
			//修改index的值
			
			//修改完后 启动定时器
			mid = setInterval(show,2000);
		}
		
		function show(){
			flag=true;
			hideAll(lis);
			lis[index].style.opacity="1";
			bths[index].style.background="red";
			index++;
			if(index>lis.length-1){
				index=0;
			}
		}
		
		function hideAll(arr){
			for (var i=0;i<arr.length;i++) {
				arr[i].style.opacity="0"
			}
			for(var i=0; i<bths.length;i++){
				bths[i].style.background="rgba(0,0,0,.5)"
			}
		}