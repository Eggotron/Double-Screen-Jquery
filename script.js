	$(document).ready(function() {
		$("#return").hide();
		$("#return2").hide();
		$("#inside").hide();
		$("#inside2").hide();
		
		$("#left").click(function(){
			$("#leftupper").animate({
				width: "80%",
			}, 500)
			
			$("#left").animate({
				left:"685px",
			}, 500)
			
			$("#right").css("z-index","-1");
			
			$("#return").show(500);	
			
			$("#inside").fadeIn(500);	
		});
		
		$("#right").click(function(){
			$("#rightupper").animate({
				width: "80%",
			}, 500)
			
			$("#right").animate({
				right:"685px",
			}, 500)
			
			$("#left").css("z-index","-1");
			
			$("#return2").show(500);
			
			$("#inside2").fadeIn(500);
		});
		
		$("#return").click(function(){
			$("#leftupper").animate({
				width: "0px",
			}, 500)
			
			$("#left").animate({
				left:"0px",
			}, 500)
			
			$("#right").css("z-index","2");
			
			$("#left").css("z-index","3");
			
			$("#return").hide(500);
			
			$("#inside").fadeOut(500);
		});
		
		$("#return2").click(function(){
			$("#rightupper").animate({
				width: "0px",
			}, 500)
			
			$("#right").animate({
				right:"0px",
			}, 500)
			
			$("#left").css("z-index","2");
			
			$("#right").css("z-index","3");
			
			$("#return2").hide(500);
			
			$("#inside2").fadeOut(500);
			
		});
    });
