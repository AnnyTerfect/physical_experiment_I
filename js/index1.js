;$(function(){
    "use strict";
    $(window).on("load",function()
    {
        var i;
        for(i=3;i<=8;i++)
        {
            $("#exp"+i).css({display:"none"});
        }
    });
    $("#banner_left").on("click",function()
    {
        $("#menu_cont").css({left:"0px"});
        $("#mask").fadeIn();
    });
    function out()
    {
        $("#menu_cont").css({left:-$("#menu_cont").width()});
        $("#mask").fadeOut();
    }
    $("#mask").on("click",function()
    {
        out();
    });
  /*  $(window).on("scroll",function()
    {
        $("#bg_pic").css("opacity",1-2*Math.pow(($(window).scrollTop()/$(window).height()-0.5),2));
    });*/
/*    $("#menu_li1").on("click",function()
    {
        out();
        setTimeout(function(){$("body").animate({scrollTop:12},1000)},800);
    });
    $("#menu_li2").on("click",function()
    {
        out();
        setTimeout(function(){$("body").animate({scrollTop:12*2+$("#exp1").height()},1000)},800);
    });
    $("#menu_li3").on("click",function()
    {
        out();
        var i,sum=12;
        for(i=1;i<3;i++)
        {
            sum+=12;
            sum+=$("#exp"+i).height();
        }
        setTimeout(function(){$("body").animate({scrollTop:sum},1000)},800);
    });
        $("#menu_li4").on("click",function()
    {
        out();
        var i,sum=12;
        for(i=1;i<4;i++)
        {
            sum+=12;
            sum+=$("#exp"+i).height();
        }
        setTimeout(function(){$("body").animate({scrollTop:sum},1000)},800);
    });
            $("#menu_li5").on("click",function()
    {
        out();
        var i,sum=12;
        for(i=1;i<5;i++)
        {
            sum+=12;
            sum+=$("#exp"+i).height();
        }
        setTimeout(function(){$("body").animate({scrollTop:sum},1000)},800);
    });
            $("#menu_li6").on("click",function()
    {
        out();
        var i,sum=12;
        for(i=1;i<6;i++)
        {
            sum+=12;
            sum+=$("#exp"+i).height();
        }
        setTimeout(function(){$("body").animate({scrollTop:sum},1000)},800);
    });
            $("#menu_li7").on("click",function()
    {
        out();
        var i,sum=12;
        for(i=1;i<7;i++)
        {
            sum+=12;
            sum+=$("#exp"+i).height();
        }
        setTimeout(function(){$("body").animate({scrollTop:sum},1000)},800);
    });
            $("#menu_li8").on("click",function()
    {
        out();
        var i,sum=12;
        for(i=1;i<8;i++)
        {
            sum+=12;
            sum+=$("#exp"+i).height();
        }
        setTimeout(function(){$("body").animate({scrollTop:sum},1000)},800);
    });*/
/*    var i;
    for(i=1;i<=8;i++)
    {
        $("#menu_li"+i).on("click",function(i)
        {
            var n;
            for(n=1;n<=8;n++)
            {
                $("#exp"+n).css({display:"none"});
            }
            alert(i);
            $("#exp"+i).css({display:"block"});
        });
    }*/
    $("#menu_li1").on("click",function()
    {
        var i;
        for(i=1;i<=8;i++)
        {
            $("#exp"+i).css({display:"none"});
        }
        $("#exp1").css({display:"block"});
    });
    $("#menu_li2").on("click",function()
    {
        var i;
        for(i=1;i<=8;i++)
        {
            $("#exp"+i).css({display:"none"});
        }
        $("#exp2").css({display:"block"});
    });
    $("#menu_li3").on("click",function()
    {
        var i;
        for(i=1;i<=8;i++)
        {
            $("#exp"+i).css({display:"none"});
        }
        $("#exp3").css({display:"block"});
    });
    $("#menu_li4").on("click",function()
    {
        var i;
        for(i=1;i<=8;i++)
        {
            $("#exp"+i).css({display:"none"});
        }
        $("#exp4").css({display:"block"});
    });
    $("#menu_li5").on("click",function()
    {
        var i;
        for(i=1;i<=8;i++)
        {
            $("#exp"+i).css({display:"none"});
        }
        $("#exp5").css({display:"block"});
    });
    $("#menu_li6").on("click",function()
    {
        var i;
        for(i=1;i<=8;i++)
        {
            $("#exp"+i).css({display:"none"});
        }
        $("#exp6").css({display:"block"});
    });
    $("#menu_li7").on("click",function()
    {
        var i;
        for(i=1;i<=8;i++)
        {
            $("#exp"+i).css({display:"none"});
        }
        $("#exp7").css({display:"block"});
    });
    $("#menu_li8").on("click",function()
    {
        var i;
        for(i=1;i<=8;i++)
        {
            $("#exp"+i).css({display:"none"});
        }
        $("#exp8").css({display:"block"});
    });
    var i;
    for(i=1;i<=8;i++)
    {
        $("#menu_li"+i).on("click",function()
        {
            out();
        });
    }
    $("#exp1_swiper1_div").css("height",$("#exp_fgj_row1").height() + "px");
    $("#exp3_swiper1_div").css("height",$("#exp_dgn_row1").height() + "px");
	$("#exp3_swiper2_div").css("height",$("#exp_dgn_row2").height() + "px");
	$("#exp3_swiper3_div").css("height",$("#exp_dgn_row2").height() + "px");
    $("#exp2_swiper1_div").css("height",$("#exp_zldq_row1").height() + "px");
    $("#exp4_swiper1_div").css("height",$("#exp_fatx_row1").height() + "px");
    $("#exp4_swiper2_div").css("height",$("#exp_ejg_row1").height() + "px");
    $("#exp4_swiper3_div").css("height",$("#exp_fatx_row3").height() + "px");
    $("#exp5_swiper1_div").css("height",$("#exp_hexy_row1").height() + "px");
    $("#exp5_swiper1_div").css("height",$("#exp_hexy_row1").height() + "px");
    $("#exp5_swiper2_div").css("height",$("#exp_hexy_row2").height() + "px");
    $("#exp6_swiper1_div").css("height",$("#exp_mlgyd_row").height() + "px");
    $("#exp7_swiper1_div").css("height",$("#exp_sscl_row1").height() + "px");
    $("#exp7_swiper2_div").css("height",$("#exp_sscl_row2").height() + "px");

    function I(id)
    {
        return document.getElementById(id);
    }
    function It(id)
    {
        return document.getElementById(id).value;
    }
    function pfIt(id)
    {
        parseFloat(document.getElementById(id).value);
    }
    function pf(s)
    {
        return parseFloat(s);
    }
    function hdxs(f)
    {
        return pf(parseInt(f*1000+0.5)/1000);
    }
    function hdxsn(f,n)
    {
        return pf(parseInt(f*Math.pow(10,n)+0.5)/Math.pow(10,n));
    }
    function huigui(x,y,n,q)
    {
        var i,xb=0,yb=0,fz=0,fm=0,k,a;
        for(i=1;i<=n;i++)
        {
            xb+=x[i];
            yb+=y[i];
        }
        xb/=n;
        yb/=n;
        for(i=1;i<=n;i++)
        {
            fz+=(x[i]-xb)*(y[i]-yb);
            fm+=(x[i]-xb)*(x[i]-xb);
        }
        k=fz/(fm*1.0);
        a=yb-k*xb;
        k=k.toFixed(q);
        a=a.toFixed(q);
        var ans = new Array();
        ans[0]=k;
        ans[1]=a;
        return ans;
    }
    function rune1()
    {
        var i,dmin=0,cmin=new Array,t=0;
        for(i=1;i<=5;i++)
        {
            var ai=pf(I("e1a"+i+"1").value)+pf(I("e1a"+i+"2").value)/60,
                bi=pf(I("e1b"+i+"1").value)+pf(I("e1b"+i+"2").value)/60,
                ci=pf(I("e1c"+i+"1").value)+pf(I("e1c"+i+"2").value)/60,
                di=pf(I("e1d"+i+"1").value)+pf(I("e1d"+i+"2").value)/60,
                tdmin=0.5*(Math.abs(ai-ci))+0.5*(Math.abs(bi-di));
                I("e1e"+i+"1").innerText=parseInt(tdmin);
                I("e1e"+i+"2").innerText=parseInt((tdmin-parseInt(tdmin))*60);
                cmin[i]=tdmin;
                dmin+=tdmin;
        }
        dmin/=5;
        for(i=1;i<=5;i++)
            t+=Math.pow(cmin[i]-dmin,2);

        var A=pf(I("e1f").value);
        I("e1ans1").innerText=dmin;
        I("e1ans2").innerText=(Math.sqrt(t/20)).toFixed(5);
        I("e1ans3").innerText=(4/1.73205).toFixed(4);
        I("e1ans4").innerText=Math.sqrt(Math.pow(pf(I("e1ans2").value),2)+Math.pow(pf(I("e1ans2").value),2));
        I("e1ans5").innerText=Math.sqrt(0.25*Math.pow((1/Math.tan((dmin+A)/2))-1/Math.tan(A),2)*4+0.25*Math.pow(1/Math.tan((dmin+A)*0.5),2)*Math.pow(pf(I("e1ans4").value),2));
        //sin((A+dmin)/2)/sin(A/2)
    }
    $("#e1btn").on("click",function()
    {
        rune1();
    });
    function rune2()
    {
        var ar1=pf(I("ar1").value),
            ar2=pf(I("ar2").value);
            //cu0=pf(I("bu0").value);
        var i=1;
        for(i=1;i<=10;i++)
        {
            I("arx"+i).innerText=hdxs(ar1/ar2*pf(I("ar3"+i).value));
        }
        for(i=2;i<=10;i++)
        {
            I("brx"+i).innerText=hdxs(4.0/1000*pf(I("bu0"+i).value)*pf(I("brx1").value)/pf(I("bus").value)+pf(I("brx1").value));
            var r3=pf(I("crx1").value),r1=100,u0=pf(I("cu0"+i).value),us=pf(I("cus").value);
            I("crx"+i).innerText=hdxs(Math.pow(r3+r1,2)*u0/1000/(r1*us-u0/1000*(r1+r3))+r3);
        }
        var sx=new Array(),sy=new Array();
        for(i=1;i<=10;i++)
        {
            sx[i]=pf(I("at"+i).value);
            sy[i]=pf(I("arx"+i).innerText);
        }
        var ansf;
        ansf=huigui(sx,sy,10,4);
        I("e2ans1").innerText="R(t)="+ansf[0]+"t+"+ansf[1];
        for(i=1;i<=10;i++)
        {
            sx[i]=pf(I("bt"+i).value);
            sy[i]=pf(I("brx"+i).innerText);
        }
        sy[1]=Math.log(pf(I("brx1").value))
        ansf=huigui(sx,sy,10,4);
        I("e2ans2").innerText="R(t)="+ansf[0]+"t+"+ansf[1];
        for(i=1;i<=10;i++)
        {
            sx[i]=1.0/pf(I("ct"+i).value);
            sy[i]=Math.log(pf(I("crx"+i).innerText));
        }
        sy[1]=Math.log(pf(I("crx1").value))
        ansf=huigui(sx,sy,10,4);
        I("e2ans3").innerText="ln(Rx)="+ansf[0]+"/T+"+ansf[1];

    }
    $("#e2btn").on("click",function()
    {
        rune2();
    });
    function rune31()
    {
        var i,ab=0,bb=0,cb=0,db=0,eb=0,sqa=0,sqb=0,sqc=0,sqd=0,sqe=0;
        for(i=1;i<=5;i++)
        {
            I("e3d"+i).innerText=hdxs(4*Math.pow(3.1415926,2)*(pf(I("e3a"+i).value)/100+pf(I("e3b"+i).value)/200)/Math.pow(pf(I("e3c"+i).value)/60,2));
            I("e3e"+i).innerText=hdxs((pf(I("e3a"+i).value)*10+pf(I("e3b"+i).value)*5)/10);
            ab+=pf(I("e3a"+i).value);
            bb+=pf(I("e3b"+i).value);
            cb+=pf(I("e3c"+i).value);
            db+=pf(I("e3d"+i).innerText);
            eb+=pf(I("e3e"+i).innerText);
        }
        ab/=5;
        bb/=5;
        cb/=5;
        db/=5;
        eb/=5;
        I("e3a6").innerText=hdxs(ab);
        I("e3b6").innerText=hdxs(bb);
        I("e3c6").innerText=hdxs(cb);
        I("e3d6").innerText=hdxs(db);
        I("e3e6").innerText=hdxs(eb);
        for(i=1;i<=5;i++)
        {
            sqa+=Math.pow(pf(I("e3a"+i).value)-ab,2);
            sqb+=Math.pow(pf(I("e3b"+i).value)-bb,2);
            sqc+=Math.pow(pf(I("e3c"+i).value)-cb,2);
            sqd+=Math.pow(pf(I("e3d"+i).innerText)-db,2);
            sqe+=Math.pow(pf(I("e3e"+i).innerText)-eb,2);
        }
        I("e3a7").innerText=hdxs(Math.sqrt(sqa/5)/2);
        I("e3b7").innerText=hdxs(Math.sqrt(sqb/5)/2);
        I("e3c7").innerText=hdxs(Math.sqrt(sqc/5)/2);
        I("e3d7").innerText=hdxs(Math.sqrt(sqd/5)/2);
        I("e3e7").innerText=hdxs(Math.sqrt(sqe/5)/2);
        I("e3a8").innerText=(3*0.001/Math.sqrt(3)).toFixed(4);
        I("e3b8").innerText=(3*0.0001/Math.sqrt(3)).toFixed(5);
        I("e3c8").innerText=(3*0.01/Math.sqrt(3)).toFixed(3);
        I("e3e8").innerText=(3*0.001/Math.sqrt(3)).toFixed(4);
        I("e3a9").innerText=Math.sqrt(Math.pow(pf(I("e3a7").innerText),2)+Math.pow(pf(I("e3a8").innerText),2)).toFixed(4);
        I("e3b9").innerText=Math.sqrt(Math.pow(pf(I("e3b7").innerText),2)+Math.pow(pf(I("e3b8").innerText),2)+0.04).toFixed(5);
        I("e3c9").innerText=Math.sqrt(Math.pow(pf(I("e3c7").innerText),2)+Math.pow(pf(I("e3c8").innerText),2)).toFixed(3);
        I("e3d9").innerText=I("e3d7").innerText;
        I("e3e9").innerText=Math.sqrt(Math.pow(pf(I("e3e7").innerText),2)+Math.pow(pf(I("e3e8").innerText),2)).toFixed(4);
        /*I("e3b9").innerText=pf(Math.pow(pf(I("e3b7").value),2)+Math.pow(pf(I("e3b8").value),2));
        I("e3c9").innerText=pf(Math.pow(pf(I("e3c7").value),2)+Math.pow(pf(I("e3c8").value),2));
        I("e3d9").innerText=pf(Math.pow(pf(I("e3d7").value),2)+Math.pow(pf(I("e3d8").value),2));
        I("e3e9").innerText=pf(Math.pow(pf(I("e3e7").value),2)+Math.pow(pf(I("e3e8").value),2));*/
    }
    function rune32()
    {
        var af=0,ag=0,ah=0,ai=0,aj=0,ak=0,al=0,i;
        for(i=1;i<=5;i++)
        {
            af+=pf(I("e3f"+i).value);
            ag+=pf(I("e3g"+i).value);
            ah+=pf(I("e3h"+i).value);
            ai+=pf(I("e3i"+i).value);
            aj+=pf(I("e3j"+i).value);
            ak+=pf(I("e3k"+i).value);
            al+=pf(I("e3l"+i).value);
        }
        I("e3f6").innerText=(af/5).toFixed(4);
        I("e3g6").innerText=(ag/5).toFixed(4);
        I("e3h6").innerText=(ah/5).toFixed(4);
        I("e3i6").innerText=(ai/5).toFixed(3);
        I("e3j6").innerText=(aj/5).toFixed(3);
        I("e3k6").innerText=(ak/5).toFixed(3);
        I("e3l6").innerText=(al/5).toFixed(3);
        var m1=pf(I("e3m1").value),
            m2=pf(I("e3m2").value),
            f6=pf(I("e3f6").innerText),
            g6=pf(I("e3g6").innerText),
            h6=pf(I("e3h6").innerText),
            i6=pf(I("e3i6").innerText),
            j6=pf(I("e3j6").innerText),
            k6=pf(I("e3k6").innerText),
            l6=pf(I("e3l6").innerText);
        I("e3n1").innerText=(128*3.1415926*m1*m2/1000/Math.pow(i6,4)/(Math.pow(f6,2)-Math.pow(g6,2))*(Math.pow(j6,2)-Math.pow(k6,2))/4*2500).toFixed(0);
        I("e3n2").innerText=(128*3.1415926*m1*m2/1000/Math.pow(i6,4)/(Math.pow(h6,2)-Math.pow(f6,2))*(Math.pow(l6,2)-Math.pow(j6,2))/4*2500).toFixed(0);
        I("e3n3").innerText=(128*3.1415926*m1*m2/1000/Math.pow(i6,4)/(Math.pow(h6,2)-Math.pow(g6,2))*(Math.pow(l6,2)-Math.pow(k6,2))/4*2500).toFixed(0);
        I("e3n4").innerText=((pf(I("e3n1").innerText)+pf(I("e3n2").innerText)+pf(I("e3n3").innerText))/3).toFixed(0);

    }
    $("#e3btn1").on("click",function()
    {
        rune31();
    });
    $("#e3btn2").on("click",function()
    {
        rune32();
    });
    function rune41()
    {
        var i;
        for(i=1;i<=10;i++)
        {
            I("e4"+String.fromCharCode(96+i)+5).innerText=(pf(I("e4"+String.fromCharCode(96+i)+1).value)/100*pf(I("e4lcv1").value)).toFixed(4);
            I("e4"+String.fromCharCode(96+i)+6).innerText=(pf(I("e4"+String.fromCharCode(96+i)+2).value)/150*pf(I("e4lca1").value)).toFixed(4);
            I("e4"+String.fromCharCode(96+i)+7).innerText=(pf(I("e4"+String.fromCharCode(96+i)+3).value)/100*pf(I("e4lcv1").value)).toFixed(4);
            I("e4"+String.fromCharCode(96+i)+8).innerText=(pf(I("e4"+String.fromCharCode(96+i)+4).value)/150*pf(I("e4lca1").value)).toFixed(4);

        }
    }
    $("#e4btn1").on("click",function()
    {
        rune41();
    });
    function rune42()
    {
        var i;
        for(i=1;i<=10;i++)
        {
            I("e4"+String.fromCharCode(96+10+i)+5).innerText=(pf(I("e4"+String.fromCharCode(96+10+i)+1).value)/100*pf(I("e4lcv2").value)).toFixed(4);
            I("e4"+String.fromCharCode(96+10+i)+6).innerText=(pf(I("e4"+String.fromCharCode(96+10+i)+2).value)/150*pf(I("e4lca2").value)).toFixed(4);
            I("e4"+String.fromCharCode(96+10+i)+7).innerText=(pf(I("e4"+String.fromCharCode(96+10+i)+3).value)/100*pf(I("e4lcv3").value)).toFixed(4);
            I("e4"+String.fromCharCode(96+10+i)+8).innerText=(pf(I("e4"+String.fromCharCode(96+10+i)+4).value)/150*pf(I("e4lca3").value)).toFixed(4);

        }
    }
    $("#e4btn2").on("click",function()
    {
        rune42();
    });
    function rune43()
    {
        var i;
        for(i=1;i<=10;i++)
        {
            I("e4_"+String.fromCharCode(96+i)+7).innerText=(pf(I("e4_"+String.fromCharCode(96+i)+1).value)/100*pf(I("e4lcv4").value)).toFixed(4);
            I("e4_"+String.fromCharCode(96+i)+8).innerText=(pf(I("e4_"+String.fromCharCode(96+i)+2).value)/150*pf(I("e4lca4").value)).toFixed(4);
            I("e4_"+String.fromCharCode(96+i)+9).innerText=(pf(I("e4_"+String.fromCharCode(96+i)+3).value)/100*pf(I("e4lcv5").value)).toFixed(4);
            I("e4_"+String.fromCharCode(96+i)+10).innerText=(pf(I("e4_"+String.fromCharCode(96+i)+4).value)/150*pf(I("e4lca5").value)).toFixed(4);
            I("e4_"+String.fromCharCode(96+i)+11).innerText=(pf(I("e4_"+String.fromCharCode(96+i)+5).value)/100*pf(I("e4lcv6").value)).toFixed(4);
            I("e4_"+String.fromCharCode(96+i)+12).innerText=(pf(I("e4_"+String.fromCharCode(96+i)+6).value)/150*pf(I("e4lca6").value)).toFixed(4);
        }
    }
    $("#e4btn3").on("click",function()
    {
        rune43();
    });
    function rune51()
    {
        var i;
        for(i=1;i<=8;i++)
        {
            I("e5e"+i).innerText=((Math.abs(pf(I("e5a"+i).value))+Math.abs(pf(I("e5b"+i).value))
            +Math.abs(pf(I("e5c"+i).value))+Math.abs(pf(I("e5d"+i).value)))/4).toFixed(3);
        }
        var sx=new Array(),sy=new Array();
        for(i=1;i<=8;i++)
        {
            sx[i]=0.5+i*0.5;
            sy[i]=pf(I("e5e"+i).innerText);
        }
        I("e5ans1").innerText=huigui(sx,sy,8,5)[0];
        I("e5ans2").innerText=(pf(I("e5ans1").innerText)*5/0.45/pf(I("e5kb").value)).toFixed(5);
        I("e5ans3").innerText=(100/pf(I("e5ans2").innerText)/1.6).toFixed(5);
    }
    function rune52()
    {
        var i;
        for(i=1;i<=8;i++)
        {
            I("e5j"+i).innerText=(Math.abs((pf(I("e5f"+i).value))+Math.abs(pf(I("e5g"+i).value))
            +Math.abs(pf(I("e5h"+i).value))+Math.abs(pf(I("e5i"+i).value)))/4).toFixed(3);
        }
        var sx=new Array(),sy=new Array();
        for(i=1;i<=8;i++)
        {
            sx[i]=0.05+i*0.05;
            sy[i]=pf(I("e5j"+i).innerText);
        }
        I("e5ans7").innerText=huigui(sx,sy,8,5)[0];
        I("e5ans8").innerText=(100*pf(I("e5ans7").innerText)*5/0.45/pf(I("e5kb").value)).toFixed(5);
        I("e5rh").value=I("e5ans8").innerText;
        I("e5ans9").innerText=(1/pf(I("e5ans8").innerText)/1.6*1000).toFixed(5);
    }
    function rune53()
    {
        var i;
        var sx=new Array(),sy=new Array();

        for(i=1;i<=10;i++)
        {
            sx[i]=0.1*i;
            sy[i]=pf(I("e5k"+i).value);
        }
        I("e5ans12").innerText=huigui(sx,sy,10,5)[0];
        I("e5ans13").innerText=(100/pf(I("e5ans12").innerText)*3/2).toFixed(5);
        I("e5ans16").innerText=(pf(I("e5rh").value)*pf(I("e5ans13").innerText)).toFixed(5);
    }
    $("#e5btn1").on("click",function()
    {
        rune51();
    });
    $("#e5btn2").on("click",function()
    {
        rune52();
    });
    $("#e5btn3").on("click",function()
    {
        rune53();
    });
    function rune6()
    {
        var i;
        var u,t;
        var sx=new Array(),sy=new Array;
        for(i=1;i<=10;i++)
        {
            I("e6g"+i).innerText=((pf(I("e6b"+i).value)+pf(I("e6c"+i).value)+pf(I("e6d"+i).value)+pf(I("e6e"+i).value)+pf(I("e6f"+i).value))/5).toFixed(3);
            u=pf(I("e6a"+i).value);
            t=pf(I("e6g"+i).innerText);
            I("e6h"+i).innerText=(18*3.1415926/Math.sqrt(2*981*9.8)*Math.pow(1.83*1.5/t,1.5)*5/u*1000).toFixed(3);
            I("e6i"+i).innerText=(pf(I("e6h"+i).innerText)*100/16).toFixed(0);
        }
        for(i=1;i<=10;i++)
        {
            sx[i]=pf(I("e6i"+i).innerText);
            sy[i]=pf(I("e6h"+i).innerText)*10;
        }
        I("e6ans").innerText=huigui(sx,sy,10,7)[0];
    }
    $("#e6btn").on("click",function()
    {
        rune6();
    });
    function rune7()
    {
        I("e7f1").innerText=(pf(I("e7a1").value)+pf(I("e7b1").value)+pf(I("e7c1").value)+pf(I("e7d1").value)+pf(I("e7e1").value))/5;
        I("e7f2").innerText=(pf(I("e7a2").value)+pf(I("e7b2").value)+pf(I("e7c2").value)+pf(I("e7d2").value)+pf(I("e7e2").value))/5;
        I("e7_m1").innerText=I("e7f1").innerText;
        I("e7_m2").innerText=I("e7f2").innerText;
        I("e7__a1").innerText=(pf(I("e7_g1").value)/6-pf(I("e7_a1").value)/6).toFixed(2);
        I("e7__b1").innerText=(pf(I("e7_h1").value)/6-pf(I("e7_b1").value)/6).toFixed(2);
        I("e7__c1").innerText=(pf(I("e7_i1").value)/6-pf(I("e7_c1").value)/6).toFixed(2);
        I("e7__d1").innerText=(pf(I("e7_j1").value)/6-pf(I("e7_d1").value)/6).toFixed(2);
        I("e7__e1").innerText=(pf(I("e7_k1").value)/6-pf(I("e7_e1").value)/6).toFixed(2);
        I("e7__f1").innerText=(pf(I("e7_l1").value)/6-pf(I("e7_f1").value)/6).toFixed(2);
        I("e7__a2").innerText=(pf(I("e7_g2").value)/6-pf(I("e7_a2").value)/6).toFixed(2);
        I("e7__b2").innerText=(pf(I("e7_h2").value)/6-pf(I("e7_b2").value)/6).toFixed(2);
        I("e7__c2").innerText=(pf(I("e7_i2").value)/6-pf(I("e7_c2").value)/6).toFixed(2);
        I("e7__d2").innerText=(pf(I("e7_j2").value)/6-pf(I("e7_d2").value)/6).toFixed(2);
        I("e7__e2").innerText=(pf(I("e7_k2").value)/6-pf(I("e7_e2").value)/6).toFixed(2);
        I("e7__f2").innerText=(pf(I("e7_l2").value)/6-pf(I("e7_f2").value)/6).toFixed(2);
        I("e7__g1").innerText=((pf(I("e7__a1").innerText)+pf(I("e7__b1").innerText)+pf(I("e7__c1").innerText)+pf(I("e7__d1").innerText)+pf(I("e7__e1").innerText))/5).toFixed(2);
        I("e7__g2").innerText=((pf(I("e7__a2").innerText)+pf(I("e7__b2").innerText)+pf(I("e7__c2").innerText)+pf(I("e7__d2").innerText)+pf(I("e7__e2").innerText))/5).toFixed(2);
        I("e7ans1").innerText=(pf(I("e7_m1").innerText)*pf(I("e7__g1").innerText)*2/1000).toFixed(3);
        I("e7ans2").innerText=(331.45*Math.sqrt(1+pf(I("e7_m3").value)/273.16)).toFixed(2);
        I("e7ans3").innerText=(Math.abs(pf(I("e7ans1").innerText)-pf(I("e7ans2").innerText))/pf(I("e7ans2").innerText)).toFixed(5);
        I("e7ans4").innerText=(pf(I("e7_m2").innerText)*pf(I("e7__g2").innerText)*2/1000).toFixed(4);
        var fz=0;
        fz+=Math.pow(pf(I("e7__a2").innerText)-pf(I("e7__g2").innerText),2);
        fz+=Math.pow(pf(I("e7__b2").innerText)-pf(I("e7__g2").innerText),2);
        fz+=Math.pow(pf(I("e7__c2").innerText)-pf(I("e7__g2").innerText),2);
        fz+=Math.pow(pf(I("e7__d2").innerText)-pf(I("e7__g2").innerText),2);
        fz+=Math.pow(pf(I("e7__e2").innerText)-pf(I("e7__g2").innerText),2);
        fz+=Math.pow(pf(I("e7__f2").innerText)-pf(I("e7__g2").innerText),2);
        I("e7ans5").innerText=(Math.sqrt(fz/30)/100).toFixed(4);
        fz=Math.pow(pf(I("e7a2").value)-pf(I("e7f2").innerText),2);
        fz+=Math.pow(pf(I("e7b2").value)-pf(I("e7f2").innerText),2);
        fz+=Math.pow(pf(I("e7c2").value)-pf(I("e7f2").innerText),2);
        fz+=Math.pow(pf(I("e7d2").value)-pf(I("e7f2").innerText),2);
        fz+=Math.pow(pf(I("e7e2").value)-pf(I("e7f2").innerText),2);
        I("e7ans6").innerText=(Math.sqrt(fz/20)).toFixed(4);
        I("e7ans7").innerText=(pf(I("e7ans4").innerText)*Math.sqrt(Math.pow(pf(I("e7ans5").innerText)/pf(I("e7__g2").innerText),2)+Math.pow(pf(I("e7ans6").innerText)/pf(I("e7_m2").innerText),2))).toFixed(5);
    }
    $("#e7btn").on("click",function()
    {
        rune7();
    });
});
