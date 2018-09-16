export function toTime(date){
  var yy = date.getFullYear();      //年
  var mm = date.getMonth() + 1;     //月
  var dd = date.getDate();          //日
  var hh = date.getHours();         //时
  var ii = date.getMinutes();       //分
  var ss = date.getSeconds();       //秒
  var clock = yy + "-";
  if(mm < 10) clock += "0";
  clock += mm + "-";
  if(dd < 10) clock += "0";
  clock += dd + " ";
  if(hh < 10) clock += "0";
  clock += hh + ":";
  if (ii < 10) clock += '0'; s
  clock += ii + ":";
  if (ss < 10) clock += '0'; 
  clock += ss;
  return clock;
}

export class Vaildation {
  constructor(){
    this.isCheck = false;
    this.vaild_item;
    this.vaild = [];
  }
  rules(){
    /* 表单配置规定第一个配置必须是idDefine的配置，可以不填，但填写的话必须放第一位*/
    return {
      mix: (vaild) => {
        for(let i = 0; i < vaild.rules.length; i++){
          if(vaild.rules[i] == "mix" || vaild.rules[i].name == "mix"){
            if(vaild.rules[i].check){
              if(!vaild.rules[i].newRules){
                return new RegExp(/^[a-zA-Z0-9]*([a-zA-Z][0-9]|[0-9][a-zA-Z])[a-zA-Z0-9]*$/).test(vaild.value); 
              }else{
                return new RegExp(vaild.rules[i].newRules).test(vaild.value);
              }
            }else{
              return true;
            }
          }
        }
      },
      limit: (vaild) => {
        let min;
        let max;
        vaild.rules.forEach((item) => {
          if(item == "limit" || item.name == "limit"){
            min = item.min || 6;
            max = item.max || 16;
          }
        })
        if(vaild.value.length < min || vaild.value.length > max){
          return false;
        }else{
          return true;
        }
      },
      isDefine: (vaild) => {
        return !!vaild.value.trim();
      },
    }
  }

  error(){
    return {
      mix: (vaild)=>{
        return vaild.type + "必须为字母和数字组合";
      },
      limit: (vaild) => {
        let min;
        let max;
        vaild.rules.forEach((item) => {
          if(item == "limit" || item.name == "limit"){
            min = item.min || 6;
            max = item.max || 16;
          }
        })
        return vaild.type + "位数为" + min + "-" + max + "位";
      },
      define: (vaild) => {
        return vaild.type + "不能为空";
      }
    }
  }

  check_result(check, type = null){
    return {
      check: check,
      type: type,
    }
  }

  check(){
    for(let i = 0; i < this.vaild_item.length; i++){
      let vaild = this.vaild_item[i].rules.findIndex(function(val){
        return val === "isDefine";
      });
      if(vaild > -1){
        let rules_arr = this.vaild_item[i].rules;
        rules_arr.splice(vaild,1);
        if(rules_arr.length > 0){
          for(let j = 0; j < rules_arr.length; j++){
            for(let o in this.rules()){
              if(rules_arr[j]['name'] == o && !this.rules()[rules_arr[j]['name']].call(this,this.vaild_item[i])){
                this.vaild = this.check_result(false,this.error()[rules_arr[j]['name']].call(this,this.vaild_item[i]));
                this.isCheck = false;
                return this.vaild;
              }else{
                this.isCheck = true;
                this.vaild = this.check_result(true);
              }
            }
          }
        }
      }else{
        if(this.vaild_item[i].rules.length > 0 && !!this.vaild_item[i].value){
          let rules_arr = this.vaild_item[i].rules;
          for(let j = 0; j < rules_arr.length; j++){
            for(let o in this.rules()){
              if(rules_arr[j]['name'] == o && !this.rules()[rules_arr[j]['name']].call(this,this.vaild_item[i])){
                this.vaild = this.check_result(false,this.error()[rules_arr[j]['name']].call(this,this.vaild_item[i]));
                this.isCheck = false;
                return this.vaild;
              }else{
                this.isCheck = true;
                this.vaild = this.check_result(true);
              }
            }
          }
        }
      }
    }
    return this.vaild;
  }
}

export function throttle(fun,delay){
  let last,timer;
  return function (){
    let that = this;
    let arg = arguments;
    let now = +new Date();
    console.log(now);
    console.log(last);
    if(last && now < last + delay){
      clearTimeout(timer);
      timer = setTimeout(function(){
        last = now;
        fun.apply(that, arg);
      },delay);
    }else{
      last = now;
      fun.apply(that,arg);
    }
  }
}