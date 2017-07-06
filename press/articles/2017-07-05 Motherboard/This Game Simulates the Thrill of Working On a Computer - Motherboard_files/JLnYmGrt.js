



/* ControlTag Loader for VICE faf02c4a-1799-4d79-a1ff-c13b51ae2d53 */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.24.5","schema_version":3},"confid":"JLnYmGrt","context_terms":[],"publisher":{"name":"VICE","active":true,"uuid":"faf02c4a-1799-4d79-a1ff-c13b51ae2d53","version_bucket":"stable","id":1888},"params":{"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"max_segments":200,"control_tag_pixel_throttle":100,"fingerprint":false,"user_data_timing":"load","use_central_usermatch":true,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","first_party_uid":false,"link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":false,"context_terms":false,"dfp_premium":true},"prioritized_segments":["rx2nnbn7k","rx2n74zz8","osfnj58g5","osn5wkhzp","rp1waw1fx","rp1wcv7gx","rp1wgc8mt","rsc5dgh2x","rsi2w224j","rvfezdq3c","opclyhp5o","oxxgge1yg","ox1e8gplj","ox1f9t562","ox1zt6scr","oy8zjmmxh","oy9cp7l9s","oy9nwsitl","oy9omyzr0","ozg06iecp","oz0mkcjta","oz0mr2l13","oz0mwi6ke","oz0z0y1db","oz1maeja2","oz1me5nha","oz1mpjdtn","o3b9l9atk","q071zu69m","q2vi0ri4k","oz86el251","rsi3crzir","o9enxvelu","pqc627k4n","rtqrf0k06","pq90ienuu","pq5gfn8dv","pq1idb8z2","pqhyus5pv","pqd42if8b","pqha1nfd4","pqdvs047e","pqdlxe0sv","pqc68hb62","pqdgkd9qc","qgtrgdnis","provr8dyt","o9it8cuxt","o9eof0k8q","qlgo8yc5z","pk3rgc8z2","qr7eyymls","qr7ocjik4","rp1weg00u","qsfb56p5s","qsfcedplh","qsfhd6ekk","oz839j94r","phrplo7sj","pado2e77z","phrpqhss5","owiauz6se","o0dhours8","pkutyhe8b","pfb5cqz7q","pfos3zz0i","qsfjk9ny0","qsy46gitz","qtir8vr5v","oxox3lli3","o8muxnw47","pg3xit71u","pg3wtsgiv","o0w2hf1tn","qu5ir7879","rsi2ma1a1","qvag4ovgo","qvij1xwtx","qvij3s7qi","qv2b7x7rs","qv6e0dtgx","qx8x1iw1r","qr7o2mj08","qs2ckj90s","qsbmp0557","rsf7f5h2h","qwpnddsju","qsfin0qqh","rtbnjtk88","qsyx7zmvt","qupxjd7hm","q75psboc7","rsjw70g6d","qwpk1hspa","rmxxy0zdu","q083l9cad","rsi2uvt3w","rbgq61kp7","rbgrpfnen","rta7cs8i9","rbgryvtd7","rbgr25gzk","qsfe3zuor","rbgwtgc97","rbgw2nta0","oxox32xid","oxox3wi2g","rb4s8cirk","rb4vajt36","rc1ppi5ce","rc1qijeh2","oz02sgyz1","rsi2pwfsq","qwo1l2zji","rfkkatkuf","oz03cd2zo","qg9m1606k","rgw06us5l","rhg3k05pc","rsjwz9xda","qwpacqgwc","rp1wk0cif","ozgqlbpl8","rf3kihgo6","q6bav94m2","rim8ja8i6","ri6i92ttb","rf7w6ehkf","rj3f8sxn2","rkmrr69bm","rkp7k7xdm","pt5aisb96","osfpywqec","osfqh7t93","osfqs3y8e","osfnwhvol","osfrgbwnw","osfrpi3s5","osfruqcdo","osfrz4q1u","qg9mt1sjt","o9emms7l1","pblc2vebe","pblj9rbt9","pblkbdu04","rkue1a9zb","rkujf37gr","rkunji7kx","rld7mz3dy","rmsg15x9c","rmuyx28n7","rmuy6sv37","rmuzmlr7q","rmuzr92ul","rmuz8u3yg","rmw4r13hu","rmw44sl8c","rmw5dlj3f","rmw5mg29i","rmxkw8o26","rmxo00zlk","rmxor3msa","rmxokmcj2","rmxoce7t2","rmxpzobtn","rmxpe3bzm","rmxqb970g","rmxqoab2e","rmxq8mqxa","rmxrjbox2","rmxskv19w","rmxtpy6md","rmxtyn2wi","rmxt5o5y2","rmxudgux4","rmxuposig","rmxuxm9os","rmxwnughv","rmxwv81y6","rmxw1gatx","rmxw73zum","rmxxfgrd6","rmxxkzzjo","rmxxpt4wf","rmxx6kwlh","rmxzhhqxx","rmxzt41s2","rmxz2r0po","rmxz79zz2","rmx0f2kfa","rmx0lkj5k","rmx002ycq","rmx07gxh3","rmx1bxabp","rmuzepart","rmyb9c4nk","rmyc2nwog","rmyd66mhc","rm0ua2dav","rmtkdfob2","rmydfc0nq","roihtw9rn","roihwkl8f","rwj4juill","rn1doocsk","rsf8gom0r","rnszxzevr","rodi7dr4f","ro5eoxat4","ro8y13ryb","rpkj5nqbv","rpkoxff09","rpkp5xmkh","rplcg0nkp","rp04f38h7","rq8ld4tzr","rq8lgres6","rp9gdpqn6","oxox21bdy","rqvmuwd6m","rqb2nj9ws","rqb1759bo","rqb1idbhq","rqvpmedbr","rqvpx8fno","rqvp2pko2","rqvqm3v1w","rqv5tntm8","oxox3ggq2","rqv5fj5ym","rqv5nn67e","rqwt5ncxo","rqwzfrn4v","rscdwqwty","rscef5bb7","rscenvs5h","rsce3w8no","rse5e5c2b","rsf8c5wxo","rsf8lhnfk","rsf8s1pui","rsf8z8k0t","rsf9q5cpz","rlg77ikxl","rtqq81y2k","rmtmgzosd","rlhjct4nk","rs24bnzsm","rs3axnvkq","rs498svfa","ozdqj8zwk","pq90b1cx6","pqdf2jv1f","rnpjzj2io","pqcwrg0ln","qv4bx2n9o","quqaugr9t","rrwiqcosm","qn7ir1g5r","qx9i9o0ga","pqhyrblbu","qv6cy97f5","rtbgp73g5","rtbnaqy5p","rtbnfmqzy","rtbug15n9","pk6vt2o9u","rtqraxl7s","rtb29yqtq","rtqq7mze9","rtb3ukiv1","pqc6ssmee","rtewl53rx","rtew1m4vz","rtexfmkif","rtexpqoni","rtex8n1b5","rteyas3t6","rteyegah6","rteyf47d8","rteyhp3ew","rteyqwtqs","rteytcv72","rteywpuo6","rtey7s6d0","rtezatuea","rtezdf1i8","rtezf2k7y","rtezime51","rtezkue10","rtfjg5gbn","rtfj5hdz0","rtfn0l7at","rtfoqbsf5","qsfdl6igz","qsuw18q88","qsbe6er8z","rhnnqarm2","rtqqdvvms","rtqqjj115","rtqurcmsi","rtqu0n7st","rtqvezndr","rtqvi0kla","rtr9wbq1o","rtuzy0ovr","rtu0et2um","rtu1al40v","rtu2u2tj9","rtu2w0m5l","rtu2y1nq5","rt4xpuras","rui51f8lf","rujheg0zg","ruzik8vuh","phr05njpl","rvfd9dsv8","rvfgl6c37","rvfh9833m","rvkak3jw1","rvmbog8ss","rvmhzofh7","ruz6ico3n","rvn0zl7ch","rqcd89io2","rqcadl8i6","rwao3p0ve","rw7h22kt9","rxm8xbi8l","rxnfjzrvz","rxtxyfat0","rxtxwb1gi","rxtxtjry5","rxtx3nk37","rxtx5egz8","rxtx76z69","rxtyaogpf","rxtydgfnh","rx2ni490r","roixgpvel","roixepp7w","roixb6xac","rypha7deb","oz0yvd9ch"],"realtime_segments":[],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"//connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"//apiservices.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"//link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"//apiservices.krxd.net/um","click":"//apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","is_optout":"//beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","set_optin":"//apiservices.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"site":{"name":"Motherboard - VICE O&O","cap":255,"id":584982,"organization_id":1888,"uid":"JLnYmGrt"},"tags":[{"id":18466,"name":"Facebook Custom Audience - US Unified Pixel","content":"<!-- Facebook Pixel Code -->\n<script>\n!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;\nn.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,\ndocument,'script','//connect.facebook.net/en_US/fbevents.js');\n// Insert Your Facebook Pixel ID below. \nfbq('init', '782589578427709');\nfbq('track', 'PageView');\n</script>\n<noscript><img height=\"1\" width=\"1\" style=\"display:none\"\nsrc=\"https://www.facebook.com/tr?id=782589578427709&ev=PageView&noscript=1\"\n/></noscript>\n<!-- End Facebook Pixel Code -->","target":"head","target_action":"append","timing":"asap","method":"document","priority":null,"template_replacement":false,"internal":false,"criteria":[]},{"id":22116,"name":"Google Remarketing Pixel - US Only","content":"<!-- Google Code for Remarketing Tag -->\n<!--------------------------------------------------\nRemarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. See more information and instructions on how to setup the tag on: http://google.com/ads/remarketingsetup\n--------------------------------------------------->\n<script type=\"text/javascript\">\n/* <![CDATA[ */\nvar google_conversion_id = 989381424;\nvar google_custom_params = window.google_tag_params;\nvar google_remarketing_only = true;\n/* ]]> */\n</script>\n<script type=\"text/javascript\" src=\"//www.googleadservices.com/pagead/conversion.js\">\n</script>\n<noscript>\n<div style=\"display:inline;\">\n<img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"//googleads.g.doubleclick.net/pagead/viewthroughconversion/989381424/?value=0&amp;guid=ON&amp;script=0\"/>\n</div>\n</noscript>","target":"head","target_action":"append","timing":"asap","method":"document","priority":null,"template_replacement":false,"internal":false,"criteria":["and",["and",["and",["intersects","$geolocation",["US"]]]]]},{"id":22874,"name":"MOAT Content Analytics (AU)","content":"<!-- Start New MOAT Script -->\n\n<script>\n(function(){function t(){for(var a=[8],e=1;2>=e;e++)a.push(8+e),a.push(8-e);a=a[Math.floor(Math.random()*a.length)];return{b:a,a:0==Math.floor(Math.random()*a)}}function k(a){var e=a=a.replace(\":\",\"\");try{for(var b=0;100>b&&(a=decodeURIComponent(a),e!=a)&&!a.match(/^http(s)?\\:/);b++)e=a}catch(c){}return a.replace(/(^\\s+|\\s+$)/g,\"\")}try{if(!location||!location.hostname||!location.pathname)return!1;var c=document.location.hostname.replace(/^www\\./,\"\"),u=function(){for(var a,b=document.getElementsByTagName(\"meta\"),\nc,d=0,f=b.length;d<f;d++)if(c=b[d],\"og:title\"===c.getAttribute(\"property\")){a=c.getAttribute(\"content\");break}a||(a=document.title||\"Untitled\");return a}(),b={},b=function(a,b,c){a.l1=b;a.l2=c;a.l3=\"__page__\";a.l4=\"-\";return a}(b,c,u),l=(new Date).getTime(),m=Math.floor(Math.random()*Math.pow(10,12)),d,f;f=t();f.a?d=f.b:d=0;b.zmoatab_cm=d;b.t=l;b.de=m;b.zMoatAB_SNPT=!0;var g;d?g=d:g=1;var n;n=f?f.a?!0:!1:!0;var c=[],p=[k(b.l1),k(b.l2),k(b.l3),k(b.l4)].join(\":\"),v=\"https://w77avr6go21i-a.akamaihd.net/z.gif?e=17&d=\"+\nencodeURIComponent(p)+\"&de=\"+m+\"&t=\"+l+\"&i=VICEAUSTRALIACONTENT1&cm=\"+g+\"&mp=1&ac=1&pl=1&bq=10&vc=2&cs=0\",w=\"https://px.moatads.com/pixel.gif?e=17&d=\"+encodeURIComponent(p)+\"&de=\"+m+\"&t=\"+l+\"&i=VICEAUSTRALIACONTENT1&cm=\"+g+\"&mp=0&ac=1&pl=1&bq=10&ad_type=img&vc=2&cs=0\",x=\"https://px.moatads.com/pixel.gif?e=17&d=\"+encodeURIComponent(p)+\"&de=\"+m+\"&t=\"+l+\"&i=VICEAUSTRALIACONTENT1&cm=\"+g+\"&ku=1&ac=1&pl=1&bq=10&ad_type=img&vc=2&cs=0\";n&&((new Image).src=v,(new Image).src=w);for(var q in b)c.push(q+\"=\"+\nencodeURIComponent(b[q]));var c=c.join(\"&\"),c=c+\"&vc=2\",h=document.createElement(\"script\");h.type=\"text/javascript\";h.async=!0;n&&(h.onerror=function(){(new Image).src=x});var r=document.getElementsByTagName(\"script\")[0];r.parentNode.insertBefore(h,r);h.src=\"https://z.moatads.com/viceaustraliacontent8748900321/moatcontent.js#\"+c}catch(a){try{var y=\"//pixel.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=MOATCONTENTABSNIPPET1&vc=2&ac=1&k=\"+encodeURIComponent(a)+\"&j=\"+encodeURIComponent(document.referrer)+\n\"&cs=\"+(new Date).getTime();(new Image).src=y}catch(e){}}})();\n</script>\n\n<!-- End New MOAT Script -->","target":"head","target_action":"append","timing":"asap","method":"document","priority":null,"template_replacement":true,"internal":false,"criteria":["and",["and",["and",["intersects","$geolocation",["AU","NZ"]]]]]},{"id":18370,"name":"Technographic Data provider tag","content":"<script>\r\n// this tag is intentionally blank\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":18371,"name":"Krux Geographic Data provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":18373,"name":"Krux Track Social","content":"<script type=\"text/javascript\">Krux('social.init');</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":18374,"name":"AdAdvisor S2S provider tag","content":"<script>\r\n(function() {\r\n  // adadvisor redirects to http://logger... so it's not https safe\r\n  if (location.protocol == \"http:\") {\r\n     var u = \"https://aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e\";\r\n     (new Image()).src = u;\r\n   }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":18379,"name":" Vice Data Transfer Code","content":"<script>\n    (function() {\n        // Using Meta keywords to produce page attribute keywords for all sites\n        Krux('scrape', {\n            'page_attr_all_keywords': {\n                meta_name: 'keywords'\n            }\n        });\n      \n        // for loop to define subdomain\n        if (window._sf_async_config) {\n            var cb = _sf_async_config;\n        }\n        var a = [\"broadly\",\"fightland\", \"i-d\", \"motherboard\", \"munchies\", \"news\", \"noisey\", \"sports\", \"thecreatorsproject\", \"thump\", \"video\", \"waypoint\",\"www\"];\n        var s;\n\n        for (var i = 0; i < a.length; i++) {\n            // a[i] is the first object found\n            if (window.location.host.split('.')[0] == a[i]) {\n                s = a[i];\n                break;\n\t\t\tif(s === 'www' && window.location.host.split('.')[1] === 'viceland') {\n\t\t\t\ts = 'viceland'}\n            }\n        }\n\t\t// Viceland \n\t\tif(window.location.host.split('.')[1] == 'viceland') {\n\t\t\t\ts = 'viceland'}\n         \n        s = \"www\" === s ? \"vice\" : s;\n\n        // Defining cleanTag of \"keywords\" - Only used on Noisey and Thump\n        if (s == \"noisey\" || \"thump\") {\n            var tags = document.getElementsByClassName(\"tag\");\n            var cleanTag = [];\n            for (i = 0; i < tags.length; i++) {\n                cleanTag[i] = tags[i].getElementsByTagName(\"a\")[0].innerHTML;\n            }\n        }\n\n        // Allows for domain to be dynamically placed in DTC\n        var scrape = function(key, desc) {\n            var conf = {};\n            conf[key] = desc;\n            Krux('scrape', conf);\n        };\n        if (window.cb) {\n            // Using subdomain to dynamically scrape page attribute Chartbeat section\n            Krux('set', 'page_attr_' + s + '_section', cb.sections);\n\n            // Using subdomain to dynamically scrape page attribute Chartbeat author\n            Krux('set', 'page_attr_' + s + '_author', cb.authors);\n        }\n\n        if (s == \"thump\" || \"noisey\") {\n            // Using subdomain to dynamically scrape page attribute cleanTag \n            Krux('set', 'page_attr_' + s + '_cleanTag', cleanTag);\n        }\n\n        // Using subdomain to dynamically scrape page attribute keywords\n        scrape('page_attr_' + s + '_keywords', {\n            meta_name: 'keywords'\n        });\n\n        // Using subdomain to dynamically scrape page attribute article:section\n        scrape('page_attr_' + s + '_meta-section', {\n            meta_property: 'og:article:section'\n        });\n\n        // Using subdomain to dynamically scrape page attribute article:author\n        scrape('page_attr_' + s + '_meta-author', {\n            meta_property: 'og:article:author'\n        });\n\n        if (s == \"vice\") {\n            Krux('scrape', {\n                'page_attr_vice_adunit1': {\n                    meta_property: 'kxadunit1'\n                },\n\n                'page_attr_vice_adunit2': {\n                    meta_property: 'kxadunit2'\n                }\n            });\n        }\n\n        //Data Transfer Code for All Vice Sites\n\n        // Using ChartBeat sections to produce page attribute sections, authors and title for all sites\n        if (window.cb) {\n            Krux('set', {\n                page_attr_all_sections: cb.sections,\n                page_attr_all_authors: cb.authors,\n                page_attr_all_title: cb.title\n            });\n        }\n\n        // Using Meta og:article:section to produce page attribute meta_section for all sites\n        Krux('scrape', {\n            'page_attr_all_meta_section': {\n                meta_property: 'og:article:section'\n            }\n        });\n\n        // Using URL Param to produce page attribute Advertising utm\n        Krux('scrape', {\n            'page_attr_utmSource': {\n                url_param: 'utm_source'\n            }\n        });\n\n        // Using UrlPath 1 to produce user attribute url_path_1\n        Krux('scrape', {\n            'page_attr_url_path_1': {\n                url_path: '1'\n            },\n        // Using UrlPath 2 to produce user attribute url_path_2\n            'page_attr_url_path_2': {\n                url_path: '2'\n            },\n        // Using UrlPath 3 to produce user attribute url_path_3\n            'page_attr_url_path_3': {\n                url_path: '3'\n            }\n        });\n        // Using \"show\" Variable and SuperTag to define show. \n        if (window.show) {\n            Krux('set', 'page_attr_show', show);\n        }\n    })();\n</script>\n","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":18380,"name":"Liveramp User Match","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\r\n      var i = new Image();\r\n      i.src = liveramp_url;      \r\n  }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":18383,"name":"Visual DNA () provider tag","content":"<script>new Image().src = 'https://usermatch.krxd.net/um/v2?partner=vdna';</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":18411,"name":"Webbula provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":18420,"name":"Facebook Remarketing Pixel - GERMANY","content":"<script>(function() {\r\n  var _fbq = window._fbq || (window._fbq = []);\r\n  if (!_fbq.loaded) {\r\n    var fbds = document.createElement('script');\r\n    fbds.async = true;\r\n    fbds.src = '//connect.facebook.net/en_US/fbds.js';\r\n    var s = document.getElementsByTagName('script')[0];\r\n    s.parentNode.insertBefore(fbds, s);\r\n    _fbq.loaded = true;\r\n  }\r\n  _fbq.push(['addPixelId', '986057011428389']);\r\n})();\r\nwindow._fbq = window._fbq || [];\r\nwindow._fbq.push(['track', 'PixelInitialized', {}]);\r\n</script>\r\n<noscript><img height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https://www.facebook.com/tr?id=986057011428389&amp;ev=PixelInitialized\" /></noscript>","target":"head","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":false,"internal":false,"criteria":["and",["and",["and",["intersects","$geolocation",["DE"]]]]]},{"id":18422,"name":"Facebook Remarketing Pixel - UK (en_uk)","content":"<script>(function() {\r\nvar _fbq = window._fbq || (window._fbq = []);\r\nif (!_fbq.loaded) {\r\nvar fbds = document.createElement('script');\r\nfbds.async = true;\r\nfbds.src = '//connect.facebook.net/en_US/fbds.js';\r\nvar s = document.getElementsByTagName('script')[0];\r\ns.parentNode.insertBefore(fbds, s);\r\n_fbq.loaded = true;\r\n}\r\n_fbq.push(['addPixelId', '908877559135443']);\r\n})();\r\nwindow._fbq = window._fbq || [];\r\nwindow._fbq.push(['track', 'PixelInitialized', {}]);\r\n</script>\r\n<noscript><img height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https://www.facebook.com/tr?id=908877559135443&ev=PixelInitialized\" /></noscript>","target":"head","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":false,"internal":false,"criteria":["and",["and",["and",["contains","$url","en_uk"]]]]},{"id":18424,"name":"Nielsen - Precision Marketing (via Exelate) provid","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":18425,"name":"Nielsen Consumer Activation (via Exelate) provider","content":"<script>\r\n// Blank\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":18433,"name":"Google User Matching","content":"<script>\r\n(function() {\r\n  if (Krux('get', 'user') != null) {\r\n      new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\r\n  }\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":18458,"name":"Neustar Custom Connect","content":"<script type=\"text/javascript\">\r\n(function() {\r\n    (new Image()).src = '//aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e';\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":18467,"name":"Facebook Audience - Mindset | Connect: Culture","content":"<script>\r\n(function(){\r\nif(window.fbq){\r\nfbq('track', 'ViewContent', { segment_id: \"connect_culture\"});\r\n}\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":false,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["pqdvs047e"]]]]]},{"id":18468,"name":"Facebook Audience - Mindset | Connect: Games","content":"<script>\r\n(function(){\r\nif(window.fbq){\r\nfbq('track', 'ViewContent', { segment_id: \"connect_games\"});\r\n}\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":false,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["pqc68hb62"]]]]]},{"id":18469,"name":"Facebook Audience - Mindset | Connect: Sports","content":"<script>\r\n(function(){\r\nif(window.fbq){\r\nfbq('track', 'ViewContent', { segment_id: \"connect_sports\"});\r\n}\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":false,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["pqhyus5pv"]]]]]},{"id":18470,"name":"Facebook Audience - Mindset | Explore: Food","content":"<script>\r\n(function(){\r\nif(window.fbq){\r\nfbq('track', 'ViewContent', { segment_id: \"explore_food\"});\r\n}\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":false,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["pqc627k4n"]]]]]},{"id":18471,"name":"Facebook Audience - Mindset | Explore: Media","content":"<script>\r\n(function(){\r\nif(window.fbq){\r\nfbq('track', 'ViewContent', { segment_id: \"explore_media\"});\r\n}\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":false,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["pq5gfn8dv"]]]]]},{"id":18472,"name":"Facebook Audience - Mindset | Explore: World","content":"<script>\r\n(function(){\r\nif(window.fbq){\r\nfbq('track', 'ViewContent', { segment_id: \"explore_world\"});\r\n}\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":false,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["pqd42if8b"]]]]]},{"id":18473,"name":"Facebook Audience - Mindset | Express: Create","content":"<script>\r\n(function(){\r\nif(window.fbq){\r\nfbq('track', 'ViewContent', { segment_id: \"express_create\"});\r\n}\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":false,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["pq90ienuu"]]]]]},{"id":18474,"name":"Facebook Audience - Mindset | Express: Luxury","content":"<script>\r\n(function(){\r\nif(window.fbq){\r\nfbq('track', 'ViewContent', { segment_id: \"express_luxury\"});\r\n}\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":false,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["pqha1nfd4"]]]]]},{"id":18475,"name":"Facebook Audience - Mindset | Express: Style","content":"<script>\r\n(function(){\r\nif(window.fbq){\r\nfbq('track', 'ViewContent', { segment_id: \"express_style\"});\r\n}\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":false,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["pqdgkd9qc"]]]]]},{"id":18476,"name":"Facebook Audience - Mindset | Lead: Business","content":"<script>\r\n(function(){\r\nif(window.fbq){\r\nfbq('track', 'ViewContent', { segment_id: \"lead_business\"});\r\n}\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":false,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["pq1idb8z2"]]]]]},{"id":18477,"name":"Facebook Audience - Mindset | Lead: Technology","content":"<script>\r\n(function(){\r\nif(window.fbq){\r\nfbq('track', 'ViewContent', { segment_id: \"lead_technology\"});\r\n}\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":false,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["pqdlxe0sv"]]]]]},{"id":18478,"name":"Facebook Audience - Mindset | Lead: Social Res.","content":"<script>\r\n(function(){\r\nif(window.fbq){\r\nfbq('track', 'ViewContent', { segment_id: \"lead_social\"});\r\n}\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":false,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["provr8dyt"]]]]]},{"id":18514,"name":"Facebook Audience - Mindset | Connect: Music","content":"<script>\r\n(function(){\r\nif(window.fbq){\r\nfbq('track', 'ViewContent', { segment_id: \"connect_music\"});\r\n}\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":false,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["o9eof0k8q"]]]]]},{"id":26834,"name":"Testing Keyword Budlightnfl","content":"<script>\n  console.log('Budlightnfl');\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["or",["contains","$page_attr_all_keywords:, ",["Budlightnfl"]]],["and",["afterTag",18379],["contains","$url","kxvicetest"]]]]},{"id":28167,"name":"GS Channels DTC","content":"<script>\n(function(){\nKrux('scrape', {\n      'page_attr_gs_channels': {\n        js_global: \"gs_channels\"\n      }\n    });\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":29554,"name":"Facebook Audience - AU | Client: Vodafone","content":"<script>\n(function(){\nif(window.fbq){\nfbq('track', 'ViewContent', { segment_id: \"au_vodaphone\"});\n}\n})();\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":false,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["rmtkdfob2"]],["intersects","$geolocation",["AU"]]]]]}],"usermatch_tags":[{"id":6,"name":"Google User Match","content":"<script>\n(function() {\n  if (Krux('get', 'user') != null) {\n      new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":10,"name":"Rubicon User Match","content":"<script>\n(function(){\n  if (window.Krux) {\n    var kuid = window.Krux('get', 'user');\n    if (kuid && typeof kuid != 'undefined') {\n       var rubicon_url = '//tap.rubiconproject.com/oz/feeds/krux/tokens?afu=' + kuid;\n       var i = new Image();\n       i.src = rubicon_url;\n    }\n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":67,"name":"Nielsen Usermatch","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n        if (kuid) {\n           var url = prefix + '//secure-us.imrworldwide.com/cgi-bin/m?ci=ent599834&c1=kxkuid,' + kuid;\n           (new Image()).src = url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":7,"name":"OpenX User Match","content":"<script>\n\n(function(){\n    var prefix = location.protocol == 'https:' ? 'https:' : 'http:' ;\n    var match_pixel = prefix + '//u.openx.net/w/1.0/cm?id=b53b3de0-a5e8-47e3-a78f-ca218d037abe&r=' + prefix + '//beacon.krxd.net/usermatch.gif?partner=openx&partner_uid=';\n    (new Image()).src = match_pixel;\n})();\n\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[]},{"id":34,"name":"Comscore Data Tag","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  var cbust = Math.round(new Date().getTime() / 1000);\n  var prefix = location.protocol == 'https:' ? \"https:\" :\"http:\";\n  var url = prefix == 'https:' ? '//sb.scorecardresearch.com/p' : '//b.scorecardresearch.com/p';\n  if (kuid) {\n    Krux('require:http').pixel({\n      url: url,\n      data: {\n          c1: '9',\n          c2: '8188709',\n          cs_xi: kuid,\n          rn: cbust\n      }});\n  }\n  })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[]},{"id":54,"name":"Survata User Match","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n        if (kuid) {\n           var url = prefix + '//px.surveywall-api.survata.com/k';\n           (new Image()).src = url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[]},{"id":25,"name":"eXelate Media","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n    Krux('require:http').pixel({\n      url: \"//loadm.exelator.com/load\",\n      data: {\n          _kdpid: 'e4942ff0-4070-4896-a7ef-e6a5a30ce9f9',\n          buid: kuid,\n          p: '204',\n          g: '270',\n          j: '0'\n      }});\n  }\n  })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":27,"name":"Visual DNA","content":"<script>\nnew Image().src = 'https://usermatch.krxd.net/um/v2?partner=vdna';\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":51,"name":"Eyeota User Match","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n\n        if (kuid) {\n           var url = prefix + '//ps.eyeota.net/match?bid=i0r4o4v&uid=' + kuid;\n           (new Image()).src = url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":65,"name":"Weborama User Match","content":"<script>\n(function(){\n\n   var kuid = Krux('get', 'user');\n   var krux_url = encodeURIComponent('://beacon.krxd.net/usermatch.gif?partner=weborama&partner_uid=');\n   if (kuid) {\n      new Image().src = 'https://dx.bigsea.weborama.com/collect?r=https' + krux_url + '{UUID}';\n   }\n\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":71,"name":"AppNexus Connect","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl = prefix + '//beacon.krxd.net/usermatch.gif?adnxs_uid=$UID';\n            var appnexus_url = '//ib.adnxs.com/getuid?' + kurl\n            var i = new Image();\n            i.src = appnexus_url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":73,"name":"DataLogix Custom User Sync","content":"<script>\n    (function() {\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=d7158cb7-a851-4e3c-b7ab-cc9e815b2399&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gwjn34gwjnh86&ru=' + kurl;\n            var i = new Image();\n            i.src = dlx_url;\n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":76,"name":"LiveRamp User Matching","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;     \n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":81,"name":"Bombora","content":"<script>\n\n(function () {\n_ml = window._ml || {};\n_ml.pub = '748';\n_ml.redirect = '//beacon.krxd.net/usermatch.gif?partner=madisonlogic&partner_uid=[PersonID]';\nvar s = document.getElementsByTagName('script')[0], cd = new Date(), mltag = document.createElement('script');\nmltag.type = 'text/javascript'; mltag.async = true;\nmltag.src = '//ml314.com/tag.aspx?' + cd.getDate() + cd.getMonth() + cd.getFullYear();\ns.parentNode.insertBefore(mltag, s);\n})();\n\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":82,"name":"DataLogix","content":"<script>\n    (function() {\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=2dd640a6-6ebd-4d4f-af30-af8baa441a0d&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gpwn29rvapq62&ru=' + kurl;\n            var i = new Image();\n            i.src = dlx_url;\n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":85,"name":"IXI Digital Open Market","content":"<script>\n(function(){\n    var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n    new Image().src = prefix + '//kr.ixiaa.com/C726AB29-0470-440B-B8D2-D552CED3A3DC/a.gif';\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.c3a35cae6beb84887ab6a83973d97fa9', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());
