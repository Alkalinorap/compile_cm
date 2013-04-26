function google_ad_request_done(google_ads){var s='';var i;if(google_ads.length==0)
{return;}
if(typeof tn_ad_insert == 'undefined') {return;}
if(google_ads[0].type!="image"){document.write(tn_ad_insert.tn_ad_upper);document.write(google_info.feedback_url+tn_ad_insert.tn_ad_middle);for(i=0;i<google_ads.length;++i) {
s+="";s+='<a href="'+google_ads[i].url+'" target="_blank" rel="nofollow" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to '+google_ads[i].visible_url+'\'" style="text-decoration: none;' + tn_ad_insert.tn_main_link_style + '">';s+=google_ads[i].line1;s+='</a>'+tn_ad_insert.tn_main_link_break;s+=google_ads[i].line2+' '+google_ads[i].line3;s+=' <a href="'+google_ads[i].url+'" target="_blank" rel="nofollow" style="text-decoration: none;">'+google_ads[i].visible_url+'</a>';
if(i != (google_ads.length-1)) {
s+="<br /><br />";
}
}
document.write(s);document.write(tn_ad_insert.tn_ad_lower);}return;}

var tn_ad_insert={tn_ad_upper:'',tn_ad_lower:'',tn_ad_middle:'',tn_main_link_style:'',tn_main_link_break:'<br/>',
tn_place_ad_top:function() {
  this.tn_ad_upper = '<div align="center"><div class="page" style="width:100%; text-align:left"><div style="padding:0px 0px 0px 0px" align="left"><div style="padding:0px 0px 6px 0px"><table class="tborder" cellspacing="0"><tr><td class="posterInfoHead"><div class="posterIcon online">&nbsp;</div><a class="posterName">advertisement</a></td><td class="postContentHead" ><div class="postDate" style="margin-left: 3px;"><A HREF="';
this.tn_ad_lower = '</div></td></tr><tr><td class="posterInfoFoot" style="height: 30px;"></td><td class="postContentFoot" style="height: 30px;"></td></tr></table></div></div></div></div>';
this.tn_ad_middle = '" target="_blank" style="color: #000; text-decoration: none;">Ads by Google</A></div></td></tr><tr><td class="posterInfo"><div class="basicUserInfo"><strong>xda-developers</strong></td><td class="alt1 postContent"><div style="padding-bottom: 40px;">';
google_ad_client = "pub-6851619822978950";
google_ad_channel = "9500647352";
google_language = "en";
google_color_border = "FFFFFF";
google_color_bg = "FFFFFF";
google_color_link = "#1378E5";
google_color_text = "#3A286F";
google_color_url = "#1390F0";
google_ad_output = "js";
google_feedback = "on";
google_ad_type = "text";
google_max_num_ads = "1";
  document.write('<scr'+'ipt type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"><\/scr'+'ipt>');
},
tn_place_ad_bottom:function() {
  this.tn_ad_upper = '<div align="center"><div class="page" style="width:100%; text-align:left"><div style="padding:0px 0px 0px 0px" align="left"><div style="padding:0px 0px 6px 0px"><table class="tborder" cellspacing="0"><tr><td class="posterInfoHead"><div class="posterIcon online">&nbsp;</div><a class="posterName">advertisement</a></td><td class="postContentHead" ><div class="postDate" style="margin-left: 3px;"><A HREF="';
this.tn_ad_lower = '</div></td></tr><tr><td class="posterInfoFoot" style="height: 30px;"></td><td class="postContentFoot" style="height: 30px;"></td></tr></table></div></div></div></div>';
this.tn_ad_middle = '" target="_blank" style="color: #000; text-decoration: none;">Ads by Google</A></div></td></tr><tr><td class="posterInfo"><div class="basicUserInfo"><strong>xda-developers</strong></td><td class="alt1 postContent"><div style="padding-bottom: 40px;">';
google_ad_client = "pub-6851619822978950";
google_ad_channel = "3312438231";
google_language = "en";
google_color_border = "FFFFFF";
google_color_bg = "FFFFFF";
google_color_link = "#1378E5";
google_color_text = "#3A286F";
google_color_url = "#1390F0";
google_ad_output = "js";
google_feedback = "on";
google_ad_type = "text";
google_max_num_ads = "1";
google_skip=1;
  document.write('<scr'+'ipt type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"><\/scr'+'ipt>');
},
tn_place_ad_top_m:function() {
  this.tn_ad_upper = '<div align="center"><div class="page" style="width:100%; text-align:left"><div style="padding:0px 0px 0px 0px" align="left"><div style="padding:0px 0px 6px 0px"><table class="tborder" cellspacing="0"><tr><td class="posterInfoHead"><div class="posterIcon online">&nbsp;</div><a class="posterName">advertisement</a></td><td class="postContentHead" ><div class="postDate" style="margin-left: 3px;"><A HREF="';
this.tn_ad_lower = '</div></td></tr><tr><td class="posterInfoFoot" style="height: 30px;"></td><td class="postContentFoot" style="height: 30px;"></td></tr></table></div></div></div></div>';
this.tn_ad_middle = '" target="_blank" style="color: #000; text-decoration: none;">Ads by Google</A></div></td></tr><tr><td class="posterInfo"><div class="basicUserInfo"><strong>xda-developers</strong></td><td class="alt1 postContent"><div style="padding-bottom: 40px;">';
google_ad_client = "pub-6851619822978950";
google_ad_channel = "7967342939";
google_language = "en";
google_color_border = "FFFFFF";
google_color_bg = "FFFFFF";
google_color_link = "#1378E5";
google_color_text = "#3A286F";
google_color_url = "#1390F0";
google_ad_output = "js";
google_feedback = "on";
google_ad_type = "text";
google_max_num_ads = "1";
  document.write('<scr'+'ipt type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"><\/scr'+'ipt>');
},
tn_place_ad_bottom_m:function() {
  this.tn_ad_upper = '<div align="center"><div class="page" style="width:100%; text-align:left"><div style="padding:0px 0px 0px 0px" align="left"><div style="padding:0px 0px 6px 0px"><table class="tborder" cellspacing="0"><tr><td class="posterInfoHead"><div class="posterIcon online">&nbsp;</div><a class="posterName">advertisement</a></td><td class="postContentHead" ><div class="postDate" style="margin-left: 3px;"><A HREF="';
this.tn_ad_lower = '</div></td></tr><tr><td class="posterInfoFoot" style="height: 30px;"></td><td class="postContentFoot" style="height: 30px;"></td></tr></table></div></div></div></div>';
this.tn_ad_middle = '" target="_blank" style="color: #000; text-decoration: none;">Ads by Google</A></div></td></tr><tr><td class="posterInfo"><div class="basicUserInfo"><strong>xda-developers</strong></td><td class="alt1 postContent"><div style="padding-bottom: 40px;">';
google_ad_client = "pub-6851619822978950";
google_ad_channel = "2237963642";
google_language = "en";
google_color_border = "FFFFFF";
google_color_bg = "FFFFFF";
google_color_link = "#1378E5";
google_color_text = "#3A286F";
google_color_url = "#1390F0";
google_ad_output = "js";
google_feedback = "on";
google_ad_type = "text";
google_max_num_ads = "1";
google_skip=1;
  document.write('<scr'+'ipt type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"><\/scr'+'ipt>');
},
tn_place_ad_thread_top:function() {
  this.tn_ad_upper = '<tr bgcolor="#F5F5F5"><td>&nbsp;</td><td colspan="2"><A HREF="';
this.tn_ad_lower = '</td><td class="forumstats"><div class="smallfont"><div style="float: left;">Advertisement</div><div class="lastpostGoIcon" style="margin-top: 4px;">&nbsp;</div><div style="clear: both;"></div></div></td><td class="statsColumn"></td></tr>';
this.tn_ad_middle = '"  target="_blank" class="threadTitle" color: #df6602">Ads by Google</a><br />';
this.tn_main_link_style = ' font-weight: bold;';
this.tn_main_link_break = ' ';
google_ad_client = "pub-6851619822978950";
google_ad_channel = "5561764299";
google_language = "en";
google_color_border = "FFFFFF";
google_color_bg = "FFFFFF";
google_color_link = "#1378E5";
google_color_text = "#3A286F";
google_color_url = "#1390F0";
google_ad_output = "js";
google_feedback = "on";
google_ad_type = "text";
google_max_num_ads = "1";
  document.write('<scr'+'ipt type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"><\/scr'+'ipt>');
},
tn_place_ad_thread_bottom:function() {
  this.tn_ad_upper = '<tr bgcolor="#F5F5F5"><td>&nbsp;</td><td colspan="2"><A HREF="';
this.tn_ad_lower = '</td><td class="forumstats"><div class="smallfont"><div style="float: left;">Advertisement</div><div class="lastpostGoIcon" style="margin-top: 4px;">&nbsp;</div><div style="clear: both;"></div></div></td><td class="statsColumn"></td></tr>';
this.tn_ad_middle = '"  target="_blank" class="threadTitle" color: #df6602">Ads by Google</a><br />';
this.tn_main_link_style = ' font-weight: bold;';
this.tn_main_link_break = ' ';
google_ad_client = "pub-6851619822978950";
google_ad_channel = "9322482693";
google_language = "en";
google_color_border = "FFFFFF";
google_color_bg = "FFFFFF";
google_color_link = "#1378E5";
google_color_text = "#3A286F";
google_color_url = "#1390F0";
google_ad_output = "js";
google_feedback = "on";
google_ad_type = "text";
google_max_num_ads = "1";
google_skip=1;
  document.write('<scr'+'ipt type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"><\/scr'+'ipt>');
}};