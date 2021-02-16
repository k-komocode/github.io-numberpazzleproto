let panel = ["panel0","panel1","panel2","panel3","panel4","panel5","panel6","panel7","panel8"]

var flg1 = 0
var flg2 = 0


document.getElementById("success").style.visibility = "hidden"  //「正解」を隠す。

//下は問題＝初期値
document.getElementById(panel[0]).innerHTML=2
document.getElementById(panel[1]).innerHTML=6
document.getElementById(panel[2]).innerHTML=2
document.getElementById(panel[3]).innerHTML=3
document.getElementById(panel[4]).innerHTML=4
document.getElementById(panel[5]).innerHTML=1
document.getElementById(panel[6]).innerHTML=5
document.getElementById(panel[7]).innerHTML=8
document.getElementById(panel[8]).innerHTML=7


//document.getElementById(panel[2+1]).innerHTML=100;
                                    //この一文によって、4枚目のパネルに100が入った
                                    //txtによるidの配列でも番号(数字)で宣言可能。それが数式でもOK。
 //function pushed1(){
 //   document.getElementById(panel[1]).innerHTML = Number(panel[0]).innerHTML + Number(panel[1]).innerHTML
    //上では上手くいかない。panel[0]はあくまで"panel0"なる文字列だからである。
 // var ab = Number(document.getElementById(panel[0]).innerHTML)+ Number(document.getElementById(panel[1]).innerHTML);
 //   document.getElementById(panel[1]).innerHTML = String(ab)
    //上の書き方でやっとこさ「左上のボタンを押すとその横に数字が足される」という動きが可能となった。
    
    /*ポイント  documentなんだからStr型(文字列のこと)しか受け付けない
                文字列のままでは足しても文字の横に文字を置くことにしかならない(10+10=1010)
                一旦文字列を数字型に直し、足し算し、また文字列に治す、という手順を踏む必要がある
    */
 //   document.getElementById(panel[0]).innerHTML=0


 //}
 /*
 function pushed1(){
 
   var subpanel = [document.getElementById(panel[1]).innerHTML, document.getElementById(panel[3]).innerHTML, document.getElementById(panel[4]).innerHTML]  
   var de = [panel[1], panel[3], panel[4]]  
   for (i=0; i < subpanel.length ;i++){
      var ab = Number(subpanel[i])+ Number(document.getElementById(panel[0]).innerHTML)
      subpanel[i]= String(ab)

   }
   //document.getElementById(panel[1]).innerHTML = subpanel[0]
   //document.getElementById(panel[3]).innerHTML = subpanel[1]
   //document.getElementById(panel[4]).innerHTML = subpanel[2]
   
    for (i=0; i < subpanel.length ;i++){
      document.getElementById(de[i]).innerHTML= subpanel[i]
    }
    document.getElementById(panel[0]).innerHTML=0;
    
  
    
   
  }*/
  //上記のように関数(function pushed1())を書けば、左上から三方向に数字を足せる

  function pushed(id){
    var panelnumber = id.replace(/[^0-9]/g, '');  //idから数字の要素だけ抜く。panelnumberは押したパネルの場所
    var subpanel = []                             //パネルの表示している要素を入れる配列(この時点では空)
    var de = []                                   //パネルidそのものを入れる配列
    
    if([1,3,4].includes(Number(panelnumber))){                //1を推したときに反応する奴
      subpanel.push(document.getElementById(panel[0]).innerHTML)
      de.push(panel[0])
      
    }
    if([0,2,3,4,5].includes(Number(panelnumber))){            //2を推したときに反応する奴
      subpanel.push(document.getElementById(panel[1]).innerHTML)
      de.push(panel[1])
      
    }
    if([1,4,5].includes(Number(panelnumber))){                //3を推したときに反応する奴
      subpanel.push(document.getElementById(panel[2]).innerHTML)
      de.push(panel[2])
      
    }
    if([0,1,4,6,7].includes(Number(panelnumber))){            //4を推したときに反応する奴
      subpanel.push(document.getElementById(panel[3]).innerHTML)
      de.push(panel[3])
      
    }
    if([0,1,2,3,5,6,7,8].includes(Number(panelnumber))){      //5を推したときに反応する奴
      subpanel.push(document.getElementById(panel[4]).innerHTML)
      de.push(panel[4])
      
    }
    if([1,2,4,7,8,].includes(Number(panelnumber))){           //6を推したときに反応する奴
      subpanel.push(document.getElementById(panel[5]).innerHTML)
      de.push(panel[5])
      
    }
    if([3,4,7].includes(Number(panelnumber))){                //7を推したときに反応する奴
      subpanel.push(document.getElementById(panel[6]).innerHTML)
      de.push(panel[6])
      
    }
    if([3,4,5,6,8].includes(Number(panelnumber))){            //8を推したときに反応する奴
      subpanel.push(document.getElementById(panel[7]).innerHTML)
      de.push(panel[7])
      
    }
    if([4,5,7].includes(Number(panelnumber))){                //9を推したときに反応する奴
      subpanel.push(document.getElementById(panel[8]).innerHTML)
      de.push(panel[8])
      
    }

    for (i=0; i < subpanel.length ;i++){
       var ab = Number(subpanel[i])+ Number(document.getElementById(panel[panelnumber]).innerHTML)
       ab = String(ab)
       subpanel[i] = ab.substring(ab.length-1)//ab.lengthはabの長さ。二桁なら2になる。
                                              //substringは前の変数(この場合はab)を文字列に変え、
                                              //かつそのn番目以降を返す関数
    }

    for (i=0; i < subpanel.length ;i++){
      document.getElementById(de[i]).innerHTML= subpanel[i]   //panelのidに直接代入したかったが押したパネルによって
                                                              //影響するパネルは変わり、かつそれらは不連続なので
                                                              //for文でかけなかった。
                                                              //de[]という配列に、その時その時に影響するpanelのidを入れ、
                                                              //それらを使ってfor文でsubpanelに待機させた
                                                              //計算結果を代入していく。
      
    }
     document.getElementById(panel[panelnumber]).innerHTML=0;//押したパネルは0に
     

     //ここから下は正解判定。
     //いちいち押すごとにトリガーするのもかったるいが、常に作動させる方法が思いつかなかった。
     flg2 = 0
     for (l=0; l < panel.length ;l++){
      
      flg1 = Number(document.getElementById(panel[l]).innerHTML)
      flg2 = flg2 + flg1
      //document.getElementById("kakunin").innerHTML = String(flg2)   デバッグ部分
    }
    if (flg2 == 0){
      document.getElementById("success").style.visibility = "visible"
      
    }

    
  }


function reset(){
  document.getElementById(panel[0]).innerHTML=2
  document.getElementById(panel[1]).innerHTML=6
  document.getElementById(panel[2]).innerHTML=2
  document.getElementById(panel[3]).innerHTML=3
  document.getElementById(panel[4]).innerHTML=4
  document.getElementById(panel[5]).innerHTML=1
  document.getElementById(panel[6]).innerHTML=5
  document.getElementById(panel[7]).innerHTML=8
  document.getElementById(panel[8]).innerHTML=7
  document.getElementById("success").style.visibility = "hidden"
}




