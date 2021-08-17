import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import  "metismenu";
import "simplebar";
import 'simplebar/dist/simplebar.css';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
	  console.log("test")
	  console.log(document.querySelector('.header-message-list'))
    new PerfectScrollbar(".header-message-list"), new PerfectScrollbar(".header-notifications-list");
    $(function() {
		$("#menu").metisMenu()
	})

  $(".mobile-search-icon").on("click", function() {
		$(".search-bar").addClass("full-search-bar")
	}), $(".search-close").on("click", function() {
		$(".search-bar").removeClass("full-search-bar")
	}), $(".mobile-toggle-menu").on("click", function() {
		$(".wrapper").addClass("toggled")
	}), $(".toggle-icon").click(function() {
		$(".wrapper").hasClass("toggled") ? ($(".wrapper").removeClass("toggled"), $(".sidebar-wrapper").unbind("hover")) : ($(".wrapper").addClass("toggled"), $(".sidebar-wrapper").hover(function() {
			$(".wrapper").addClass("sidebar-hovered")
		}, function() {
			$(".wrapper").removeClass("sidebar-hovered")
		}))
	})

  $(".switcher-btn").on("click", function() {
		$(".switcher-wrapper").toggleClass("switcher-toggled")
	}), $(".close-switcher").on("click", function() {
		$(".switcher-wrapper").removeClass("switcher-toggled")
	})

  $("#lightmode").on("click", function() {
		$("html").attr("class", "light-theme")
	}), $("#darkmode").on("click", function() {
		$("html").attr("class", "dark-theme")
	}), $("#semidark").on("click", function() {
		$("html").attr("class", "semi-dark")
	}), $("#minimaltheme").on("click", function() {
		$("html").attr("class", "minimal-theme")
	}), $("#headercolor1").on("click", function() {
		$("html").addClass("color-header headercolor1"), $("html").removeClass("headercolor2 headercolor3 headercolor4 headercolor5 headercolor6 headercolor7 headercolor8")
	}), $("#headercolor2").on("click", function() {
		$("html").addClass("color-header headercolor2"), $("html").removeClass("headercolor1 headercolor3 headercolor4 headercolor5 headercolor6 headercolor7 headercolor8")
	}), $("#headercolor3").on("click", function() {
		$("html").addClass("color-header headercolor3"), $("html").removeClass("headercolor1 headercolor2 headercolor4 headercolor5 headercolor6 headercolor7 headercolor8")
	}), $("#headercolor4").on("click", function() {
		$("html").addClass("color-header headercolor4"), $("html").removeClass("headercolor1 headercolor2 headercolor3 headercolor5 headercolor6 headercolor7 headercolor8")
	}), $("#headercolor5").on("click", function() {
		$("html").addClass("color-header headercolor5"), $("html").removeClass("headercolor1 headercolor2 headercolor4 headercolor3 headercolor6 headercolor7 headercolor8")
	}), $("#headercolor6").on("click", function() {
		$("html").addClass("color-header headercolor6"), $("html").removeClass("headercolor1 headercolor2 headercolor4 headercolor5 headercolor3 headercolor7 headercolor8")
	}), $("#headercolor7").on("click", function() {
		$("html").addClass("color-header headercolor7"), $("html").removeClass("headercolor1 headercolor2 headercolor4 headercolor5 headercolor6 headercolor3 headercolor8")
	}), $("#headercolor8").on("click", function() {
		$("html").addClass("color-header headercolor8"), $("html").removeClass("headercolor1 headercolor2 headercolor4 headercolor5 headercolor6 headercolor7 headercolor3")
	})

  $('#sidebarcolor1').click(this.theme1);
  $('#sidebarcolor2').click(this.theme2);
  $('#sidebarcolor3').click(this.theme3);
  $('#sidebarcolor4').click(this.theme4);
  $('#sidebarcolor5').click(this.theme5);
  $('#sidebarcolor6').click(this.theme6);
  $('#sidebarcolor7').click(this.theme7);
  $('#sidebarcolor8').click(this.theme8);
  }

  theme1(){
    $('html').attr('class', 'color-sidebar sidebarcolor1');
  }

   theme2() {
    $('html').attr('class', 'color-sidebar sidebarcolor2');
  }

   theme3() {
    $('html').attr('class', 'color-sidebar sidebarcolor3');
  }

   theme4() {
    $('html').attr('class', 'color-sidebar sidebarcolor4');
  }

 theme5() {
    $('html').attr('class', 'color-sidebar sidebarcolor5');
  }

 theme6() {
    $('html').attr('class', 'color-sidebar sidebarcolor6');
  }

   theme7() {
    $('html').attr('class', 'color-sidebar sidebarcolor7');
  }

   theme8() {
    $('html').attr('class', 'color-sidebar sidebarcolor8');
  }
  

}
