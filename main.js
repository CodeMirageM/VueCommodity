var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'LOGO雙面設計',
            imgUrl:'images/000001_1610027033.jpg',
            price:'500',
            count:'2'
          },
          {
            id:'2',
            itemName:'LOGO圓弧文字印刷短T',
            imgUrl:'images/000001_1619965255.jpg',
            price:'790',
            count:'3'
          },
          {
            id:'3',
            itemName:'黑色LOGO刺繡素面短T',
            imgUrl:'images/000001_1654197265.jpg',
            price:'1200',
            count:'1'
          },
          {
            id:'4',
            itemName:'文字印刷現代設計短袖T恤',
            imgUrl:'images/000001_1655983358.jpg',
            price:'2300',
            count:'1'
          },
          {
            id:'5',
            itemName:'抗污抗靜電Polar加厚絨毛衝鋒衣',
            imgUrl:'images/000001_1640585378.jpg',
            price:'1099',
            count:'1'
          },
          {
            id:'6',
            itemName:'素色耐污休閒短袖',
            imgUrl:'images/000001_1600655702.jpg',
            price:'400',
            count:'1'
          },
    ]},
    methods:{
        itemDataPlus: function(item){
            item.count++;
        },
        itemDataSub: function(item){
            if(item.count>1){
            	item.count--;
            }
        },
        itemDatadelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        },
        post:function(){

			//傳送 post 請求
			this.$http.post('/postlog.php',{name:"token",code:"325fw34342352"},{emulateJSON:true}).then(function(res){
				document.write(res.body);
			},function(res){
				console.log(res.status);
			});
        }
    },



    computed:{

    }
})