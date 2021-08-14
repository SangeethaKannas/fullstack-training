Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
              <ul>
                <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }" :id="tab.$el.id">
                    <a :id="tab.name" @click="selectTab(tab);vm.onChangetab($event.target)">{{ tab.name }}</a>
                </li>
              </ul>
            </div>

            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,
    
    data() {
        return {tabs: [] };
    },
    
    created() {
        
        this.tabs = this.$children;
    },
   methods: {

    selectTab(selectedTab) {
        $(".tabs").find('ul').find('li').removeClass("is-active")
      
        this.tabs.forEach(tab => {
         
         if(tab.name == selectedTab.name)
         {
           $("#"+tab.$el.id).addClass("is-active");  //  tab.isActive = true
          }
         else{
            $("#"+tab.$el.id).removeClass("is-active");  //  tab.isActive = true
         }
        });
    }

    }
});
   

Vue.component('tab', {
    
    template: `

        <div v-show="isActive"><slot></slot></div>

    `,
    
    props: {
        name: { required: true },
        selected: { default: false}
    },
    
    data() {
        
        return {
            isActive: false
        };
        
    },
    
    computed: {
        
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },
    
    mounted() {
        
        this.isActive = this.selected;
        
    }
});

var vm = new Vue({
    el: '#top',

    //--------DATA------------
    data:{
        checker: 'Tender Analysis',//FOR RENDERING OF SIDE FILTERS
        title: 'No. Of Tenders Published - Overall',//FOR TITLE PURPOSES
        basicURL: gOptions.basic_URL,//main port for ajax call
        selected: 'EPROCURE|Government of India|Central Public Procurement Portal Dashboard',//combobox value
        options: '',//options of combobox
        thirdStringval:[],//options of state combobox
        head: 'Government of India',//title of current state
        num: '',//number tenders card
        year:'',//year - card
        val:'',//val - card
        bids:'',//bids - card
        pe:'',//participating - card
        reg:'',//registere users - card,
        dep:'',
        code: 'EPROCURE',
        Statesel: 'CPPP',
        id: "num1",//code commonly used everywhere,
        drill: false,
        year1: new Date().getFullYear(),    
        year2: new Date().getFullYear(),   
        montharrlist : ["April", "May", "June", "July", "August", "September", "October", "November", "December","January", "February", "March"],
        monthlistcrt : ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"],
        curmonthsel: '',  // For Month Creation
        curmonth:"",
        premonth: "",
        msryrsel: (new Date().getFullYear())-1,
        minyear: '',       
        // type: '',
        tabid: 'TendersbyNo',
        classbid:'',
        selectedtab:'StatusOfBidders',
        selectedtabid:'StateWiseBidder',
        tabliid: 'TendersNo',
        choice: [2015,2021],
        dbtopic : 'Cancelled',
        corrigentype :'Date',
        indexvalyr1 : 0,
        indexvalyr2 : 0,
        finyear: "",
    finyeartop: '2020',
    biddryr: '2020',
    biddryr1: '2020',
    bidname : 'Bidder',
        data1: "",
        categdropdown: '',
        slide: false,
        selectbox1: '2015',
        selectbox2: "2021",
        dscbox1: '2015',
        dscbox2: "2021",
        checkselect: '',
        montharr: ["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar"],
        selchoice2:'',
 },
    
    components: {
      'vueSlider': window[ 'vue-slider-component' ]
    },
   
   //-------METHODS-----------

    methods:{

  isMobile: function() {
            var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
        },
       
  createCharts: function(){
            // console.log("checker "+this.checker)
          //console.log(this.tabid+"-"+this.id)
           
   switch(this.tabid+"-"+this.id){
      
    //Tender Analysis - By Nos
    case 'TendersbyNo-num1':                         
          this.title = "TR1. Number of Tenders Published"     
          url = this.basicURL+"Tenders/NoValueOfTendersNoOfBidsInFinancialYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
          var r1 = this.ajaxCall(url)                    
          r1.then(function(k){      
            vm.createtn(k.eProc,'#new','bar','No of Tenders',true,"",'secondString','thirdString', '&#8377; Tenders (Rs. in Crores)',vm.choice)
         })      
     break;

     case 'NumberofTenderYOY-yoy':                         
     this.title = "Y1. Number of Tenders Published - Year Over Year"  
    var fromyr = this.finyeartop 
    var toyr = this.finyeartop-1

        if(document.getElementById('yrsingle') != null){
            var dropdown1 = document.getElementById('yrsingle')
        if( fromyr != 2020 && (dropdown1.length)-1 == dropdown1.options[dropdown1.selectedIndex].index){
            alert("No Datat is Avaliable for the Selected Year !!")
            fromyr = parseInt(fromyr)+1;
            toyr = toyr+1
            fromyr = fromyr.toString()
        }
    }
     url = this.basicURL+"Tenders/TenderNoValueNoBidsMonthWiseWithInc?financeYear="+fromyr+"&siteCode="+(this.code=="ALL"?"":this.code) 
     url1 = this.basicURL+"Tenders/TenderNoValueNoBidsMonthWiseWithInc?financeYear="+toyr+"&siteCode="+(this.code=="ALL"?"":this.code)
          var r1 = this.ajaxCall(url)     
          var r2 = this.ajaxCall(url1)               
          r1.then(function(k){   
            r2.then(function(k1){                   
              vm.createyoy(k.eProc,k1.eProc,'#new','bar','thirdString',fromyr,toyr)     
               })
    })      
break;

case 'LastFiveYears-yoy':                         
this.title = "Y2. Number of Tenders Published - Last 5 Years"   
//var fromyr = document.getElementById("yearsel1").value
//var toyr = document.getElementById("yearsel2").value  
url = this.basicURL+"Tenders/YOYMonthwise?siteCode="+(this.code=="ALL"?"":this.code)+"&fromYear="+this.choice[0]+"&toYear="+this.choice[1]
var r1 = this.ajaxCall(url)                    
r1.then(function(k){     
    vm.createlast(k.eProc,'#new','line')     
})      
break;

     case 'TenderCategorybyNo-num1':
        this.title = "TR2. Number of Tenders Published - By Tender Category" 
          url = this.basicURL+"Tenders/NoValueTenderNoBidsCategoryWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
          var r1 = this.ajaxCall(url)
          r1.then(function(k){                      
            vm.createcn(k.eProc,'#new','bar','No of Tenders Published','Financial Year','Tender Category',false,'','secondString','thirdString','No. Of Tenders','Value of Tenders(Rs. in Crores)',vm.choice);
        })
        break;

        case 'TenderTypebyNo-num1':
                
            this.title = "TR3. Number of Tenders Published - By Tender Type" 
              url = this.basicURL+"Tenders/NoValueTenderNoBidsTenderTypeWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
              var r1 = this.ajaxCall(url)
              r1.then(function(k){                      
                vm.createcn(k.eProc,'#new','bar','No of Tenders Published','Financial Year','Tender Type',false,'','secondString','thirdString','No. Of Tenders','Value of Tenders(Rs. in Crores)',vm.choice);
            })
            break;

             //Tender Analysis - By Value
        case 'TendersbyValue-val1':
            this.title = "TR4. Value of Tenders Published" 
            url = this.basicURL+"Tenders/NoValueOfTendersNoOfBidsInFinancialYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
            var r1 = this.ajaxCall(url)
            r1.then(function(k){                      
                vm.createtn(k.eProc,'#new','bar','Value of Tenders (Rs. in Crores)',true,"",'thirdString','secondString', '# Tenders',vm.choice)
          })
          break;

          case 'TenderCategorybyValue-val1':
            this.title = "TR5. Value of Tenders Published - By Tender Category" 
            url = this.basicURL+"Tenders/NoValueTenderNoBidsCategoryWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
          var r1 = this.ajaxCall(url)
          r1.then(function(k){                      
            vm.createcn(k.eProc,'#new','bar','Value of Tenders (Rs. in Crores)','Financial Year','Tender Category',false,'','thirdString','secondString','Value of Tenders(Rs. in Crores)','No. Of Tenders',vm.choice);
        })
          break;

          case 'TenderTypebyValue-val1':
            this.title = "TR6. Value of Tenders Published - By Tender Type" 
            url = this.basicURL+"Tenders/NoValueTenderNoBidsTenderTypeWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
          var r1 = this.ajaxCall(url)
          r1.then(function(k){                      
            vm.createcn(k.eProc,'#new','bar','Value of Tenders ( Rs. in Crores )','Financial Year','Tender Type',false,'','thirdString','secondString','Value of Tenders(Rs. in Crores)','No. Of Tenders',vm.choice);
        })
          break;

          //Tender Analysis - Both

          case 'TendersbyNoValue-both':                         
          this.title = "TR7. Number/Value of Tenders Published"        
          url= this.basicURL+"Tenders/NoValueOfTendersNoOfBidsInFinancialYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
          var r1 = this.ajaxCall(url)                    
          r1.then(function(k){                     
              vm.createtn(k.eProc,'#new','bar','No of Tenders',false,"",'secondString','thirdString', '&#8377; Tenders (Rs. in Crores)',vm.choice)
          })
         var url1 = this.basicURL+"Tenders/NoValueOfTendersNoOfBidsInFinancialYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
          var r2 = this.ajaxCall(url1)
          r2.then(function(k){                      
              vm.createtn(k.eProc,'#new1','bar','Value of Tenders (Rs. in Crores)',false,"",'thirdString','secondString', '# Tenders',vm.choice)
        })
            break;
        
         case 'TenderCategorybyNoValue-both':
            this.title = "TR8. Number/Value of Tenders Published - By Tender Category" 
            url = this.basicURL+"Tenders/NoValueTenderNoBidsCategoryWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
            var r1 = this.ajaxCall(url)
            r1.then(function(k){                      
              vm.createcn(k.eProc,'#new','bar','No of Tenders Published','Financial Year','Tender Category',false,'','secondString','thirdString','No. Of Tenders','Value of Tenders(Rs. in Crores)',vm.choice);
          })
         var url1 = this.basicURL+"Tenders/NoValueTenderNoBidsCategoryWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
        var r2 = this.ajaxCall(url1)
        r2.then(function(k){                      
          vm.createcn(k.eProc,'#new1','bar','Value of Tenders (Rs. in Crores)','Financial Year','Tender Category',false,'','thirdString','secondString','Value of Tenders(Rs. in Crores)','No. Of Tenders',vm.choice);
        })
                break;
       
        case 'TenderTypebyNoValue-both':
                this.title = "TR9. Number/Value of Tenders Published - By Tender Type" 
                url = this.basicURL+"Tenders/NoValueTenderNoBidsTenderTypeWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
                var r1 = this.ajaxCall(url)
                r1.then(function(k){                      
                  vm.createcn(k.eProc,'#new','bar','No of Tenders Published','Financial Year','Tender Type',false,'','secondString','thirdString','No. Of Tenders','Value of Tenders(Rs. in Crores)',vm.choice);
              })
           var url1 = this.basicURL+"Tenders/NoValueTenderNoBidsTenderTypeWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
            var r2 = this.ajaxCall(url1)
            r2.then(function(k){                      
              vm.createcn(k.eProc,'#new1','bar','Value of Tenders ( Rs. in Crores )','Financial Year','Tender Type',false,'','thirdString','secondString','Value of Tenders(Rs. in Crores)','No. Of Tenders',vm.choice);
          })
          break;

   //Drill Down  - Tender Analysis - By No       
          case 'TendersbyNodrill-num1':
                    this.title = "TR1.1. Number of Tenders Published -Overall - Fin. Year - "+this.finyear+" - "+(parseInt(this.finyear)+1).toString().slice(2)                         
                    url = this.basicURL+"Tenders/TenderNoValueNoBidsMonthWiseWithInc?financeYear="+this.finyear+"&siteCode="+(this.code=="ALL"?"":this.code)                        
                  var r1 = this.ajaxCall(url)
                  r1.then(function(k){                    
                    vm.createtnm(k, "No of Tenders",'#new','dashbdtenderdrilldownno','No.of Tenders',true,vm.finyear+" - "+(parseInt(vm.finyear)+1).toString().slice(2),'bar',"thirdString","fourthString","Value of Tenders(Rs. in Crores)");
                })
            break;

          case 'TenderCategorybyNodrill-num1':
               this.title = "TR2.1. Number of Tenders Published - By Tender Category - Fin. Year  - "+this.finyear+" - "+(parseInt(this.finyear)+1).toString().slice(2)
                  url = this.basicURL+"Tenders/TenderNoValueNoBidsCategorywiseMonthWiseWithInc?financeYear="+this.finyear+"&siteCode="+(this.code=="ALL"?"":this.code)
                  var r1 = this.ajaxCall(url)
                  r1.then(function(k){                      
                    vm.createcnm(k,'#new','bar','No of Tenders Published','Months','thirdString','fourthString',"No. Of Tenders","Value of Tenders(Rs. in Crores)",10,vm.finyear+" - "+(parseInt(vm.finyear)+1).toString().slice(2));
                })
                break;
             
               case 'TenderTypebyNodrill-num1':
                   this.title = "TR3.1. Number of Tenders Published - By Tender Type - Fin. Year  - "+this.finyear+" - "+(parseInt(this.finyear)+1).toString().slice(2)
                      url = this.basicURL+"Tenders/TenderNoValueNoBidsTypewiseMonthWiseWithInc?financeYear="+this.finyear+"&siteCode="+(this.code=="ALL"?"":this.code)
                      var r1 = this.ajaxCall(url)
                      r1.then(function(k){                      
                        vm.createcnm(k,'#new','bar','No of Tenders Published','Months','thirdString','fourthString',"No. Of Tenders","Value of Tenders(Rs. in Crores)",10,vm.finyear+" - "+(parseInt(vm.finyear)+1).toString().slice(2));
                    })
                    break;

               //Drill Down - Tender Analysis - By Val     
            case 'TendersbyValuedrill-val1':
                    this.title = "TR4.1. Value of Tenders Published -Overall - Fin. Year  - "+this.finyear+" - "+(parseInt(this.finyear)+1).toString().slice(2)                      
                    url = this.basicURL+"Tenders/TenderNoValueNoBidsMonthWiseWithInc?financeYear="+this.finyear+"&siteCode="+(this.code=="ALL"?"":this.code)
                  var r1 = this.ajaxCall(url)
                  r1.then(function(k){                      
                    vm.createtnm(k, 'Value of Tenders(Rs. in Crores)','#new','dashbdtenderdrilldownvalue','Value of Tenders ( Rs. in Crores)',true,vm.finyear+" - "+(parseInt(vm.finyear)+1).toString().slice(2),'bar',"fourthString","thirdString","No Of Tenders");
                })
                  break;
      
            case 'TenderCategorybyValuedrill-val1':
                    this.title = "TR5.1. Value of Tenders Published -By Tender Category-  Fin. Year  - "+this.finyear+" - "+(parseInt(this.finyear)+1).toString().slice(2)
                    url = this.basicURL+"Tenders/TenderNoValueNoBidsCategorywiseMonthWiseWithInc?financeYear="+this.finyear+"&siteCode="+(this.code=="ALL"?"":this.code)
                  var r1 = this.ajaxCall(url)
                  r1.then(function(k){                      
                    vm.createcnm(k,'#new','bar','Value of Tenders(Rs. in Crores)','Months','fourthString','thirdString',"Value of Tenders(Rs. in Crores)","No. Of Tenders",10,vm.finyear+" - "+(parseInt(vm.finyear)+1).toString().slice(2));
                })
                  break;
           
             case 'TenderTypebyValuedrill-val1':
                    this.title = "TR6.1. Value of Tenders Published - By Tender Type - Fin. Year - "+this.finyear+" - "+(parseInt(this.finyear)+1).toString().slice(2)
                    url = this.basicURL+"Tenders/TenderNoValueNoBidsTypewiseMonthWiseWithInc?financeYear="+this.finyear+"&siteCode="+(this.code=="ALL"?"":this.code)                              
                  var r1 = this.ajaxCall(url)
                  r1.then(function(k){                      
                    vm.createcnm(k,'#new','bar','Value of Tenders(Rs. in Crores)','Months','fourthString','thirdString',"Value of Tenders(Rs. in Crores)","No. Of Tenders",10,vm.finyear+" - "+(parseInt(vm.finyear)+1).toString().slice(2));
                })
                  break;
         
        //Drill Down - Tender Analysis - Both
          case 'TendersbyNoValuedrill-both':
                this.title = "TR7.1. Number/Value of Tenders Published - Fin. Year  - "+this.finyear+" - "+(parseInt(this.finyear)+1).toString().slice(2)
                url = this.basicURL+"Tenders/TenderNoValueNoBidsMonthWiseWithInc?financeYear="+this.finyear+"&siteCode="+(this.code=="ALL"?"":this.code)                        
                var r1 = this.ajaxCall(url)
                r1.then(function(k){                      
                    vm.createtnm(k, "No of Tenders",'#new','dashbdtenderdrilldownno','No.of Tenders',true,vm.finyear+" - "+(parseInt(vm.finyear)+1).toString().slice(2),'bar',"thirdString","fourthString","Value of Tenders(Rs. in Crores)");
              })
              var url1 = this.basicURL+"Tenders/TenderNoValueNoBidsMonthWiseWithInc?financeYear="+this.finyear+"&siteCode="+(this.code=="ALL"?"":this.code)
            var r2 = this.ajaxCall(url1)
            r2.then(function(k){                      
               vm.createtnm(k, 'Value of Tenders(Rs. in Crores)','#new1','dashbdtenderdrilldownvalue','Value of Tenders ( Rs. in Crores)',true,vm.finyear+" - "+(parseInt(vm.finyear)+1).toString().slice(2),'bar',"fourthString","thirdString","No Of Tenders");
          })
          break;
        
        case 'TenderCategorybyNoValuedrill-both':
                        this.title = "TR8.1. Number/Value of Tenders Published -By Tender Category-  Fin. Year  - "+this.finyear+" - "+(parseInt(this.finyear)+1).toString().slice(2)
                        url = this.basicURL+"Tenders/TenderNoValueNoBidsCategorywiseMonthWiseWithInc?financeYear="+this.finyear+"&siteCode="+(this.code=="ALL"?"":this.code)
                        var r1 = this.ajaxCall(url)
                        r1.then(function(k){                      
                            vm.createcnm(k,'#new','bar','No of Tenders Published','Months','thirdString','fourthString',"No. Of Tenders","Value of Tenders(Rs. in Crores)",5,vm.finyear+" - "+(parseInt(vm.finyear)+1).toString().slice(2));
                      })
                    var url1 = this.basicURL+"Tenders/TenderNoValueNoBidsCategorywiseMonthWiseWithInc?financeYear="+this.finyear+"&siteCode="+(this.code=="ALL"?"":this.code)
                    var r2 = this.ajaxCall(url1)
                    r2.then(function(k){                      
                        vm.createcnm(k,'#new1','bar','Value of Tenders(Rs. in Crores)','Months','fourthString','thirdString',"Value of Tenders(Rs. in Crores)","No. Of Tenders",5,vm.finyear+" - "+(parseInt(vm.finyear)+1).toString().slice(2));
                  })
                          break;
          
         case 'TenderTypebyNoValuedrill-both':
                this.title = "TR9.1. Number/Value of Tenders Published -By Tender Type-  Fin. Year  - "+this.finyear+" - "+(parseInt(this.finyear)+1).toString().slice(2)
                url = this.basicURL+"Tenders/TenderNoValueNoBidsTypewiseMonthWiseWithInc?financeYear="+this.finyear+"&siteCode="+(this.code=="ALL"?"":this.code)
                var r1 = this.ajaxCall(url)
                  r1.then(function(k){                      
                    vm.createcnm(k,'#new','bar','No of Tenders Published','Months','thirdString','fourthString',"No. Of Tenders","Value of Tenders(Rs. in Crores)",5,vm.finyear+" - "+(parseInt(vm.finyear)+1).toString().slice(2));
                    })
                var url1 = this.basicURL+"Tenders/TenderNoValueNoBidsTypewiseMonthWiseWithInc?financeYear="+this.finyear+"&siteCode="+(this.code=="ALL"?"":this.code)                              
                var r2 = this.ajaxCall(url1)
                 r2.then(function(k){                      
                     vm.createcnm(k,'#new1','bar','Value of Tenders(Rs. in Crores)','Months','fourthString','thirdString',"Value of Tenders(Rs. in Crores)","No. Of Tenders",5,vm.finyear+" - "+(parseInt(vm.finyear)+1).toString().slice(2));
                      })
                break;

                //Bidder Analysis

                case 'DSCRegisteredvsMSMEBidders-Bidder':
                    this.title = "BI1. No. of DSC Registered Bidders and MSME Bidders - Since inception"
                   // url = this.basicURL+"Top10/NofRegisteredUserTypeFinYearWise?siteCode="+(this.code=="ALL"?"":this.code)
                   url = "https://eauction.gov.in/rrs/ParticipatingEntities"
                    var r1 = this.ajaxCall1(url)
                    r1.then(function(k){  
                   vm.bidderstatus(k,'#new','pie')
                  })
                  break;

                //Bids Analysis
               case 'BidsReceived-yearwise':                        
                    this.title = "B1. Number of Bids Received - Year Wise"        
                    url = this.basicURL+"Tenders/NoValueOfTendersNoOfBidsInFinancialYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
                    var r1 = this.ajaxCall(url)                    
                    r1.then(function(k){      
                         vm.createbids(k.eProc,'#new','line','No of Bids','fourthString','secondString',true,vm.choice)
                    })
                break;
        
                case 'BidsReceivedGoods-yearwise':
            this.title = "B2. Number of Bids Received Under Goods" 
              url = this.basicURL+"Tenders/NoValueTenderNoBidsCategoryWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
              var r1 = this.ajaxCall(url)
              r1.then(function(k){                      
                vm.createcn1(k.eProc,'#new','bar','No of Tenders Published','Years','Category','Goods','secondString','fourthString','No. of Tenders','Value of Tenders(Rs. in Crores)',vm.choice);
            })
            break;
        
            case 'BidsReceivedServices-yearwise':
                this.title = "B3. Number of Bids Received Under Services" 
                  url = this.basicURL+"Tenders/NoValueTenderNoBidsCategoryWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
                  var r1 = this.ajaxCall(url)
                  r1.then(function(k){                      
                    vm.createcn1(k.eProc,'#new','bar','No of Tenders Published','Years','Category','Services','secondString','fourthString','No. of Tenders','Value of Tenders(Rs. in Crores)',vm.choice);
                })
                break;
        
            case 'BidsReceivedWorks-yearwise':
                this.title = "B4. Number of Bids Received Under Works" 
                  url = this.basicURL+"Tenders/NoValueTenderNoBidsCategoryWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
                  var r1 = this.ajaxCall(url)
                  r1.then(function(k){                      
                    vm.createcn1(k.eProc,'#new','bar','No. Of Tenders Published','Years','Category','Works','secondString','fourthString','No. of Tenders','Value of Tenders(Rs. in Crores)',vm.choice);
                })
                break;
   
                //Drill Down - Bids Analysis
          case 'BidsReceiveddrill-yearwise':  
                        this.title = "B1.1. Number of Bids Submitted - Month wise - Fin. Year - "+this.finyear+" - "+(parseInt(this.finyear)+1).toString().slice(2)                       
                        url = this.basicURL+"Bids/MonthWiseNoBidsByFinanceYear?financeYear="+this.finyear+"&siteCode="+(this.code=="ALL"?"":this.code)
                      var r1 = this.ajaxCall(url)
                      r1.then(function(k){                      
                        vm.createbidsdrill(k.eProc,'#new',vm.finyear+" - "+(parseInt(vm.finyear)+1).toString().slice(2) ,'Month','bar');
                    })
                      break;

        //Top wise Analysis - By No
              case 'OrganizationWiseByNo-By No':                      
                    this.title = "T1. Top 10 Organizations - by No. of Tenders - Fin. Year - "+this.finyeartop+" - "+(parseInt(this.finyeartop)+1).toString().slice(2)
                    url = this.basicURL+"Top10/Top10orgbynobyvalueyearwise?siteCode="+(this.code=="ALL"?"":this.code)+"&financeYear="+this.finyeartop+"&responseType="+this.id
                    var r1 = this.ajaxCall(url)                    
                    r1.then(function(k){  
                        vm.createorgnum(k.eProc,'#new','No. of Tenders',350,'outer-top','-235','Organizations')
                    })
                break;

             case 'ProductCategoriesWiseByNo-By No':                        
                this.title = "T2. Top 10 Tender Awarded Product Categories - By No. Of Tenders - Fin. Year - "+this.finyeartop+" - "+(parseInt(this.finyeartop)+1).toString().slice(2)  
                url = this.basicURL+"Tenders/Top10prdcatyrwisetenderawarded_bynobyvaluewise?financeYear="+this.finyeartop+"&siteCode="+(this.code=="ALL"?"":this.code)+"&responseType="+this.id
                var r1 = this.ajaxCall(url) 
                r1.then(function(k){   
                     vm.createorgnum(k.eProc,'#new','No. of Tenders',250,'outer-bottom','-235','Product Categories')
                })
            break;
          
         case 'ProductsWiseByNo-By No':                        
            this.title = "T3. Top 10 Products Category - By No. of Tenders - Fin. Year - "+this.finyeartop+" - "+(parseInt(this.finyeartop)+1).toString().slice(2)    
            url = this.basicURL+"Tenders/Top10ProductCategoryByNo?financeYear="+this.finyeartop+"&siteCode="+(this.code=="ALL"?"":this.code)
            var r1 = this.ajaxCall(url)                    
            r1.then(function(k){ 
                  vm.createorgnum(k.eProc,'#new','No. of Tenders',250,'outer-bottom','-235','Products')
            })
        break;
        
    //Top wise Analysis - By Value
            case 'OrganizationWiseByValue-By Value':
                this.title = "T4. Top 10 Organizations - by Value of Tenders - Fin. Year - "+this.finyeartop+" - "+(parseInt(this.finyeartop)+1).toString().slice(2)
                url = this.basicURL+"Top10/Top10orgbynobyvalueyearwise?siteCode="+(this.code=="ALL"?"":this.code)+"&financeYear="+this.finyeartop+"&responseType="+this.id
                var r1 = this.ajaxCall(url)
                r1.then(function(k){                      
                vm.createorgnum(k.eProc,'#new','Value of Tenders(Rs. in Crores)',250,'outer-top','-235','Organizations')
              })
              break;
                      
           case 'ProductCategoriesWiseByValue-By Value':
                this.title = "T5. Top 10 Tender Awarded Product Categories - by Value of Tenders - Fin. Year - "+this.finyeartop+" - "+(parseInt(this.finyeartop)+1).toString().slice(2)  
                url = this.basicURL+"Tenders/Top10prdcatyrwisetenderawarded_bynobyvaluewise?financeYear="+this.finyeartop+"&siteCode="+(this.code=="ALL"?"":this.code)+"&responseType="+this.id
                var r1 = this.ajaxCall(url)
                r1.then(function(k){                      
                     vm.createorgnum(k.eProc,'#new','Value of Tenders(Rs. in Crores)',250,'outer-bottom','-235','Product Categories')
              })
              break;
            
          case 'ProductsWiseByValue-By Value':
                this.title = "T6. Top 10 Products Category - By Value of Tenders - Fin. Year - "+this.finyeartop+" - "+(parseInt(this.finyeartop)+1).toString().slice(2)
                url = this.basicURL+"Tenders/Top10ProductCategoryByValue?financeYear="+this.finyeartop+"&siteCode="+(this.code=="ALL"?"":this.code)
                var r1 = this.ajaxCall(url)
                r1.then(function(k){                      
                vm.createorgnum(k.eProc,'#new','Value of Tenders(Rs. in Crores)',250,'outer-bottom','-235','Products')
              })
              break;
    
              //Top wise Analysis - Both
        case 'OrganizationWiseByNoValue-bothtop10':
            this.title = "T7. Top 10 Organizations - By No./Value of Tenders - Fin. Year - "+this.finyeartop+" - "+(parseInt(this.finyeartop)+1).toString().slice(2)
            url = this.basicURL+"Top10/Top10orgbynobyvalueyearwise?siteCode="+(this.code=="ALL"?"":this.code)+"&financeYear="+this.finyeartop+"&responseType=By No"
            var r1 = this.ajaxCall(url)
            r1.then(function(k){                      
            vm.createorgnum(k.eProc,'#new','No. of Tenders',250,'outer-top','-235','Organizations')
          })
         var url1 = this.basicURL+"Top10/Top10orgbynobyvalueyearwise?siteCode="+(this.code=="ALL"?"":this.code)+"&financeYear="+this.finyeartop+"&responseType=By Value"
        var r2 = this.ajaxCall(url1)
        r2.then(function(k){                      
            vm.createorgnum(k.eProc,'#new1','Value of Tenders(Rs. in Crores)',250,'outer-top','-235','Organizations')
         })
                break;
           
        case 'ProductCategoriesWiseByNoValue-bothtop10':
                this.title = "T8. Top 10 Tender Awarded Product Categories - By No./Value of Tenders - Fin. Year - "+this.finyeartop+" - "+(parseInt(this.finyeartop)+1).toString().slice(2)  
                url = this.basicURL+"Tenders/Top10prdcatyrwisetenderawarded_bynobyvaluewise?financeYear="+this.finyeartop+"&siteCode="+(this.code=="ALL"?"":this.code)+"&responseType=By No"
                var r1 = this.ajaxCall(url)
                r1.then(function(k){                      
                vm.createorgnum(k.eProc,'#new','No. of Tenders',250,'outer-bottom','-235','Product Categories')
              })
             var url1 = this.basicURL+"Tenders/Top10prdcatyrwisetenderawarded_bynobyvaluewise?financeYear="+this.finyeartop+"&siteCode="+(this.code=="ALL"?"":this.code)+"&responseType=By Value"
            var r2 = this.ajaxCall(url1)
            r2.then(function(k){                      
                vm.createorgnum(k.eProc,'#new1','Value of Tenders(Rs. in Crores)',250,'outer-bottom','-235','Product Categories')
             })
                    break;
         
            case 'ProductsWiseByNoValue-bothtop10':
                this.title = "T9. Top 10 Products Category - By No./Value of Tenders - Fin. Year - "+this.finyeartop+" - "+(parseInt(this.finyeartop)+1).toString().slice(2)
                url = this.basicURL+"Tenders/Top10ProductCategoryByNo?financeYear="+this.finyeartop+"&siteCode="+(this.code=="ALL"?"":this.code)
                var r1 = this.ajaxCall(url)
                r1.then(function(k){                      
                vm.createorgnum(k.eProc,'#new','No. of Tenders',250,'outer-bottom','-235','Products')
              })
             var url1 = this.basicURL+"Tenders/Top10ProductCategoryByValue?financeYear="+this.finyeartop+"&siteCode="+(this.code=="ALL"?"":this.code)
            var r2 = this.ajaxCall(url1)
            r2.then(function(k){                      
                vm.createorgnum(k.eProc,'#new1','Value of Tenders(Rs. in Crores)',250,'outer-bottom','-235','Products')
             })
                    break;
    
        //Kpi Case - Average days Analysis

           //Tender Published
         case 'PublishedtoTechEvaluation-groupkpi1':
                this.title = "K2. Avg.Days taken From Published to Technical Evaluation" 
                 url = this.basicURL+"KPI/AvgDaysBetweenNITPublishedAndTechEvalYearwise.json?siteCode="+(this.code=="ALL"?"":this.code)
                 var r1 = this.ajaxCall(url)
                  url1 = this.basicURL+"Tenders/NoValueTenderNoBidsTenderTypeWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
                  var r2 = this.ajaxCall(url1)
                 r2.then(function(k1){ 
                  r1.then(function(k){                      
                    vm.creavgdaysbetwnpublishandaoc(k.eProc,k1.eProc,'#new','bar',vm.categdropdown,false,'thirdString','secondString',vm.choice)
                       })
                       })
                break;
        
                case 'PublishedtoFinOpening-groupkpi1':
                    this.title = "K3. Avg days between Tenders Published and Financial Opening" 
                    url = this.basicURL+"KPI/AvgDaysBtnTenderPublishandFinancialOpeningYrwise.json?siteCode="+(this.code=="ALL"?"":this.code)
                    var r1 = this.ajaxCall(url)
                    url1 = this.basicURL+"Tenders/NoValueTenderNoBidsTenderTypeWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
                    var r2 = this.ajaxCall(url1)
                     r2.then(function(k1){ 
                    r1.then(function(k){                     
                   vm.creavgdaysbetwnpublishandaoc(k.eProc,k1.eProc,'#new','bar',vm.categdropdown,false,'thirdString','secondString',vm.choice)
                    })
                })
                    break;
        
             case 'PublishedtoFinEvaluation-groupkpi1': 
                    this.title = "K4 Avg days between Tender Published And Financial Evaluation"                       
                    url = this.basicURL+"KPI/AvgDaysBetweenTenderPublishedAndFinEvalYearwiseWithInc.json?siteCode="+(this.code=="ALL"?"":this.code)                        
                    var r1 = this.ajaxCall(url)
                    url1 = this.basicURL+"Tenders/NoValueTenderNoBidsTenderTypeWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
                    var r2 = this.ajaxCall(url1)
                     r2.then(function(k1){ 
                    r1.then(function(k){                     
                   vm.creavgdaysbetwnpublishandaoc(k.eProc,k1.eProc,'#new','bar',vm.categdropdown,false,'thirdString','secondString',vm.choice)
                })
            })
                  break;

                  case 'PublishedtoTechOpening-groupkpi1':
                    this.title = "K1. Avg days between Tender Published to Technical Opening" 
                    url = this.basicURL+"KPI/AvgDaysBtnTenderPublishandTechOpeningYrwise.json?siteCode="+(this.code=="ALL"?"":this.code)
                    var r1 = this.ajaxCall(url)
                    url1 = this.basicURL+"Tenders/NoValueTenderNoBidsTenderTypeWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
                    var r2 = this.ajaxCall(url1)
                     r2.then(function(k1){ 
                    r1.then(function(k){                     
                   vm.creavgdaysbetwnpublishandaoc(k.eProc,k1.eProc,'#new','bar',vm.categdropdown,false,'thirdString','secondString',vm.choice)
                    })
                })
                    break;

       //Bids Submission
       case 'AllowedforBidSubmissionYearWise-groupkpi2': 
       this.title = "K5. Average Days Allowed for Bid Submission - Year wise"                       
       url = this.basicURL+"KPI/AvgDaysForBidSubmissionYearwise.json?siteCode="+(this.code=="ALL"?"":this.code)                        
       var r1 = this.ajaxCall(url)
       url1 = this.basicURL+"Tenders/NoValueTenderNoBidsTenderTypeWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
       var r2 = this.ajaxCall(url1)
       r2.then(function(k1){ 
           r1.then(function(k){                       
       //vm.cretenderpublishedandfineval(k.eProc,'#new','bar',vm.choice,true)
       vm.creavgdaysbetwnpublishandaoc(k.eProc,k1.eProc,'#new','bar',vm.categdropdown,true,'thirdString','secondString',vm.choice)
       })
       })
       break;

     case 'AllowedforBidSubmissionYearWisedrill-groupkpi2': 
       this.title = "K5.1 Average Days Allowed for Bid Submission -  Month wise - Fin Year:-"+this.finyear+" - "+(parseInt(this.finyear)+1).toString().slice(2)                       
       url = this.basicURL+"KPI/AvgDaysForBidSubmissionMonthwise.json?financeYear="+this.finyear+"&siteCode="+(this.code=="ALL"?"":this.code)                                         
       var r1 = this.ajaxCall(url)
       r1.then(function(k){                      
       vm.commontypeKPIdrill(k.eProc,'#new',this.finyear);
   })
     break;

   case 'AllowedforBidSubmissionValueWise-groupkpi2': 
       this.title = "K6. Average Days Allowed for Bid Submission - Value wise" 
       url = this.basicURL+"KPI/AvgDaysForBidSubmissionOnTenderValue.json?siteCode="+(this.code=="ALL"?"":this.code)
       var r1 = this.ajaxCall(url)
       r1.then(function(k){                      
       vm.creavgbidvaliditydaysontendervalue(k.eProc,'#new','bar',vm.choice,true)
       })
       break; 

     case 'AllowedforBidSubmissionValueWisedrill-groupkpi2': 
       this.title = "K6.1. Average Days Allowed for Bid Submission - Value wise - Fin Year:-"+this.finyear+" - "+(parseInt(this.finyear)+1).toString().slice(2)                       
       url = this.basicURL+"KPI/AvgDaysForBidSubmissionOnTenderValueMonthWise.json?financeYear="+this.finyear+"&siteCode="+(this.code=="ALL"?"":this.code)                        
       var r1 = this.ajaxCall(url)
       r1.then(function(k){                      
       vm.commontypeKPIdrill(k.eProc,'#new',this.finyear);
   })
     break;

       // Technical and Financial Opening
   case 'TechOpeningtoFinOpening-groupkpi3':
        this.title = "K10. Avg.Days taken From Technical Opening to Financial Opening in 2 Packet System" 
   url = this.basicURL+"KPI/AvgDaysBetwnOpngOfTechBidsAndFinancialBidIn2PacktSystmFinYearWise.json?siteCode="+(this.code=="ALL"?"":this.code)
         var r1 = this.ajaxCall(url)
      url1 = this.basicURL+"Tenders/NoValueTenderNoBidsTenderTypeWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
    var r2 = this.ajaxCall(url1)
        r2.then(function(k1){ 
  r1.then(function(k){                     
       vm.creavgdaysbetwnpublishandaoc(k.eProc,k1.eProc,'#new','bar',vm.categdropdown,false,'secondString','thirdString',vm.choice)
           })
     })
    break;
   
     case 'FinOpeningtoFinEvaluation-groupkpi3':
      this.title = "K9. Avg.Days Taken From Financial Opening to Financial Evaluation" 
      url = this.basicURL+"KPI/AvgDaysBetweenFinDecryptionAndFinEvalYearwise.json?siteCode="+(this.code=="ALL"?"":this.code)
      var r1 = this.ajaxCall(url)
      url1 = this.basicURL+"Tenders/NoValueTenderNoBidsTenderTypeWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
      var r2 = this.ajaxCall(url1)
      r2.then(function(k1){ 
        r1.then(function(k){                     
      vm.creavgdaysbetwnpublishandaoc(k.eProc,k1.eProc,'#new','bar',vm.categdropdown,false,'secondString','thirdString',vm.choice)
      })
    })
      break;
  
case 'TechOpeningAndEvaluation-groupkpi3': 
  this.title = "K7. Average Days Technical Opening And Technical Evaluation  - Yearwise"
  url = this.basicURL+"KPI/AvgDaysBetweenTechOpenAndTechEvalYearwise.json?siteCode="+(this.code=="ALL"?"":this.code)
  var r1 = this.ajaxCall(url)
  url1 = this.basicURL+"Tenders/NoValueTenderNoBidsTenderTypeWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
  var r2 = this.ajaxCall(url1)
  r2.then(function(k1){ 
    r1.then(function(k){                       
  //vm.cretenderpublishedandfineval(k.eProc,'#new','bar',vm.choice,true)
  vm.creavgdaysbetwnpublishandaoc(k.eProc,k1.eProc,'#new','bar',vm.categdropdown,false,'secondString','thirdString',vm.choice)
  })
  })
  break;
  
  case 'TechEvaluationtoFinopening-groupkpi3':
      this.title = "K8. Avg days between Technical Evaluation and Financial opening - Year wise"                         
       url = this.basicURL+"KPI/AvgDaysTechEvalAndFinOpeningYearwise.json?siteCode="+(this.code=="ALL"?"":this.code)                  
      var r1 = this.ajaxCall(url)
      url1 = this.basicURL+"Tenders/NoValueTenderNoBidsTenderTypeWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
      var r2 = this.ajaxCall(url1)
      r2.then(function(k1){ 
        r1.then(function(k){                
          vm.creavgdaysbetwnpublishandaoc(k.eProc,k1.eProc,'#new','bar',vm.categdropdown,false,'thirdString','secondString',vm.choice)
        //  vm.cretenderpublishedandfineval(k.eProc,'#new','bar',vm.choice,false)
  })
  })
    break;

    // Bids Awarded
             case 'FromPublishingtoBidsAwarded-groupkpi4':
                    this.title = "K11. Avg.Days taken From Publishing to Bids Awarded" 
                    url = this.basicURL+"KPI/AvgDaysBetwnPublishAndAOCWithInc.json?siteCode="+(this.code=="ALL"?"":this.code)
                    var r1 = this.ajaxCall(url)
                    url1 = this.basicURL+"Tenders/NoValueTenderNoBidsTenderTypeWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
                    var r2 = this.ajaxCall(url1)
                    r2.then(function(k1){ 
                      r1.then(function(k){    
                    vm.creavgdaysbetwnpublishandaoc(k.eProc,k1.eProc,'#new','bar',vm.categdropdown,false,'secondString','thirdString',vm.choice)
                    })
                })
                    break; 
                    
                case 'FromFinancialOpeningtoBidsAwarded-groupkpi4':
                        this.title = "K12. Avg.Days Taken From Financial Opening to Bids Awarded" 
                        url = this.basicURL+"KPI/AvgDaysTakenAftrFinancialBidOpengAndAOC.json?siteCode="+(this.code=="ALL"?"":this.code)
                        var r1 = this.ajaxCall(url)
                        url1 = this.basicURL+"Tenders/NoValueTenderNoBidsTenderTypeWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
                     var r2 = this.ajaxCall(url1)
                        r2.then(function(k1){ 
                        r1.then(function(k){                     
                        vm.creavgdaysbetwnpublishandaoc(k.eProc,k1.eProc,'#new','bar',vm.categdropdown,false,'secondString','thirdString',vm.choice)
                         })
                        })
                        break;

                        case 'TechnicalOpeningtoBidsAwarded-groupkpi4':
                            this.title = "K13. Avg days between Technical Opening to Bids Awarded"                         
                             url = this.basicURL+"KPI/AvgDaysBtnTechOpeningandAOCYrwise.json?siteCode="+(this.code=="ALL"?"":this.code)                  
                            var r1 = this.ajaxCall(url)
                            url1 = this.basicURL+"Tenders/NoValueTenderNoBidsTenderTypeWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
                            var r2 = this.ajaxCall(url1)
                            r2.then(function(k1){ 
                              r1.then(function(k){               
                                vm.creavgdaysbetwnpublishandaoc(k.eProc,k1.eProc,'#new','bar',vm.categdropdown,false,'thirdString','secondString',vm.choice)
                        })
                        })
                          break;
                    
  //Bids Validity period

  case 'TendersAwardedwithinSpecifiedBidValidityPeriod-groupkpi5':
    this.title = "K14. Percentage of Tenders Awarded within Specified Bid Validity Period" 
    //url = this.basicURL+"KPI/TenderCyclePercentageOnBidValidity.json?siteCode="+(this.code=="ALL"?"":this.code)+"&category="+this.categdropdown
    url = this.basicURL+"KPI/TenderCyclePercentageOnBidValidity.json?siteCode="+(this.code=="ALL"?"":this.code)
    var r1 = this.ajaxCall(url)
    url1 = this.basicURL+"Tenders/NoValueTenderNoBidsTenderTypeWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
        var r2 = this.ajaxCall(url1)
        r2.then(function(k1){ 
          r1.then(function(k){               
    //  vm.creavgdaysbetwnbidsubmission(k.eProc,'#new','bar',vm.choice)
    vm.creavgdaysbetwnpublishandaoc(k.eProc,k1.eProc,'#new','bar',vm.categdropdown,false,'secondString','thirdString',vm.choice,'Percentage of Awarded Tenders')
    })
})
    break; 
    
    case 'TendersAwardedbeyondBidValidityPeriod-groupkpi5':
        this.title = "K15. Percentage of Tenders Awarded beyond Bid Validity Period" 
        //url = this.basicURL+"KPI/PercntgOfTendAwardHigrThanBidValPeriod.json?siteCode="+(this.code=="ALL"?"":this.code)+"&category="+this.categdropdown
        url = this.basicURL+"KPI/PercntgOfTendAwardHigrThanBidValPeriod.json?siteCode="+(this.code=="ALL"?"":this.code)
        var r1 = this.ajaxCall(url)
        url1 = this.basicURL+"Tenders/NoValueTenderNoBidsTenderTypeWiseInFinYearWiseInc?siteCode="+(this.code=="ALL"?"":this.code)
        var r2 = this.ajaxCall(url1)
        r2.then(function(k1){ 
          r1.then(function(k){                     
       // vm.creavgdaysbetweentechevalandfinbidopening(k.eProc,'#new','bar',vm.categdropdown,vm.choice,false)
       vm.creavgdaysbetwnpublishandaoc(k.eProc,k1.eProc,'#new','bar',vm.categdropdown,false,'secondString','thirdString',vm.choice,'Percentage of Awarded Tenders')
        })
    })
        break;  

        //Tender Status

        case 'TendersStatus-groupkpi6': 
                        this.title = "K16. Tenders Status - Year wise"                       
                        url= this.basicURL+"Tenders/TenderPubAOCRetenderCancelYrwise?siteCode="+(this.code=="ALL"?"":this.code)  
                        var r1 = this.ajaxCall(url)
                            r1.then(function(k){                    
                              vm.KPIreTender(k.eProc,'#new','bar',vm.choice,true)
                        })
                        break;

                 case 'TendersStatusdrill-groupkpi6': 
                        this.title = "K16.1. Tender Status -  Month wise - Fin Year:-"+this.finyear+" - "+(parseInt(this.finyear)+1).toString().slice(2)                                             
                        url= this.basicURL+"Tenders/TenderPubAOCRetenderCancelMntwise?siteCode="+(this.code=="ALL"?"":this.code) +"&financeYear="+this.finyear
                        var r1 = this.ajaxCall(url)
                            r1.then(function(k){                       
                              vm.KPItendertypedrill(k.eProc,'#new',this.finyear) 
                        })
                        break;

          case 'ValidTendersvsBidsAwarded-groupkpi6':
            this.title = "K17. Percentage of Valid Tenders Processed vs Bids Awarded - Fin Year:-"+this.finyeartop+" - "+(parseInt(this.finyeartop)+1).toString().slice(2)                        
            url = this.basicURL+"Tenders/ValidTenderPubVSAOC.json?siteCode="+(this.code=="ALL"?"":this.code) +"&financeYear="+this.finyeartop  
            var r1 = this.ajaxCall(url)
            r1.then(function(k){             
              vm.KPItendertype(k.eProc,'#new','bar',false)
             })
            break;

    
             //Last 12 Months Analysis
             case 'NoofTendersPublished-tendtrail':
                         this.title = "L1. No.Of Tenders Published" 
                         url = this.basicURL+"Tenders/TenderNoValueNoOrgStateLast12Monthwise.JSON?siteCode="+(this.code=="ALL"?"":this.code)
                         var r1 = this.ajaxCall(url)
                          r1.then(function(k){                     
                         vm.TenderNoValueNoOrgStateLast12Monthwise(k.eProc,'#new','line',"No. Of Tenders","No. Of Tenders","fourthString")
                         })
                         break;

                case 'ValueofTendersPublished-valtrail':
                            this.title = "L2. Value of Tenders Published" 
                            url = this.basicURL+"Tenders/TenderNoValueNoOrgStateLast12Monthwise.JSON?siteCode="+(this.code=="ALL"?"":this.code)
                            var r1 = this.ajaxCall(url)
                            r1.then(function(k){                      
                            vm.TenderNoValueNoOrgStateLast12Monthwise(k.eProc,'#new','spline',"Value of Tenders(Rs. in Crores)","Value of Tenders (Rs. in Crores)","fifthString")
                         })
                         break;

                case 'NoofBidsReceived-bidstrail':
                                this.title = "L3. No. of Bids Received" 
                                url = this.basicURL+"Tenders/TenderNoValueNoOrgStateLast12Monthwise.JSON?siteCode="+(this.code=="ALL"?"":this.code)
                                var r1 = this.ajaxCall(url)
                                r1.then(function(k){                      
                                vm.TenderNoValueNoOrgStateLast12Monthwise(k.eProc,'#new','spline',"No. of Bids","No. of Bids","seventhString")
                                })
                         break;

                 case 'NoofOrganizationsEntered-orgtrail':
                            this.title = "L4. No. of Organizations Entered" 
                            url = this.basicURL+"Tenders/TenderNoValueNoOrgStateLast12Monthwise.JSON?siteCode="+(this.code=="ALL"?"":this.code)
                            var r1 = this.ajaxCall(url)
                            r1.then(function(k){                      
                            vm.TenderNoValueNoOrgStateLast12Monthwise(k.eProc,'#new','line',"No. of Organizations Entered","No. of Organizations Entered","sixthString")
                            })
                        break;

              //Corrigendums Analysis
                      case 'CorrigendumsAnalysis-All':
                        //this.title = "CO1. Avg. No. of Corrigendums per Tender - Organization Wise - Fin Year:-"+vm.finyeartop+" - "+(parseInt(vm.finyeartop)+1).toString().slice(2)                         
                        this.title = "CO1. Organization Wise - Corrigendums Details - Fin Year:-"+vm.finyeartop+" - "+(parseInt(vm.finyeartop)+1).toString().slice(2)  
                            url =  this.basicURL+"Tenders/OrgCorrigendumWithFilter.JSON?siteCode="+(this.code=="ALL"?"":this.code)+"&financeYear="+this.finyeartop
                           // alert(url)
                            var r1 = this.ajaxCall(url)
                            r1.then(function(k){                  
                             vm.orgCorrigendumtable(k.eProc)
                         })
                         break;

                         case 'CorrigendumsRange-All':
                              this.title = "CO2. Corrigendums Range - Fin Year:-"+vm.finyeartop+" - "+(parseInt(vm.finyeartop)+1).toString().slice(2)                         
                              url = this.basicURL+"Tenders/CorrigendumTenderMonthwise.JSON?siteCode="+(this.code=="ALL"?"":this.code)+"&financeYear="+this.finyeartop
                              var r1 = this.ajaxCall(url)
                              r1.then(function(k){  
                                  vm.corrslab(k.eProc,'#new','bar',vm.finyeartop)
                                 // vm.creavgdaysbetwnpublishandaoc(k.eProc,null,'#new','bar',vm.categdropdown,false,'thirdString','secondString',vm.choice)
                           })
                           break;

                   case 'NoofCorrigendumsforSpecifictype-Specified':
                             var type_Corr = this.corrigentype
                             type_Corr = type_Corr.replace('Corrigendum','')
                      // this.title = "CO3. Avg. No. of "+type_Corr + " Corrigendums per Tender - Organization Wise - Fin Year:-"+this.finyeartop+" - "+(parseInt(this.finyeartop)+1).toString().slice(2)                         
                      this.title = "CO3. Organization Wise - "+type_Corr + " Details - Fin Year:-"+this.finyeartop+" - "+(parseInt(this.finyeartop)+1).toString().slice(2)
                           /* url= this.basicURL+"Tenders/CorrigendumList?siteCode="+(this.code=="ALL"?"":this.code)
                             var r = this.ajaxCall(url)
                             r.then(function(k){ 
                                vm.corrtypewtout(k.eProc) 
                             }).then(function(){ */
                                url1 = vm.basicURL+"Tenders/CorrigendumDetails.JSON?siteCode="+(this.code=="ALL"?"":this.code)+"&financeYear="+vm.finyeartop+"&ctype="+vm.corrigentype
                                var r1 = vm.ajaxCall(url1)   
                                r1.then(function(k){  
                             vm.orgCorrigendum(k.eProc)
                         })
                       // })
   
                         break;

        //Distribution Analysis - Percentage Distribution - No
                       case 'CentralOrganizationsTop20NumberofTenders-distByNo':
                            this.title = "Central Organisations (Top 20) - Number of Tenders - Fin Year "+this.finyeartop+" - "+(parseInt(this.finyeartop)+1).toString().slice(2)
                            url = this.basicURL+"Top10/consolidatednooftenderstatewisetest.json?financeYear="+this.finyeartop+"&type=central"
                            var r1 = this.ajaxCall(url)
                            r1.then(function(k){          
                            vm.createcpporgbyno(k,"fourthString",'central',"Number Of Tenders",false)
                            })
                            break;
                         
                      case 'StatesUTsNumberofTenders-distByNo':
                            this.title = "States/UTs - Number of Tenders - Fin Year "+this.finyeartop+" - "+(parseInt(this.finyeartop)+1).toString().slice(2) 
                            url = this.basicURL+"Top10/consolidatednooftenderstatewiseseven.json?financeYear="+this.finyeartop+"&type=state"
                            var r1 = this.ajaxCall(url)
                            r1.then(function(k){                      
                                vm.createcpporgbyno(k,"fourthString",'state',"Number Of Tenders",false,)
                            })
                            break; 

          //Distribution Analysis - Percentage Distribution - Val              
                 case 'CentralOrganizationsTop20ValueofTenders-distByValue':
                            this.title = "Central Organizations (Top 20) - Value of Tenders - Fin Year "+this.finyeartop+" - "+(parseInt(this.finyeartop)+1).toString().slice(2)
                            url = this.basicURL+"Top10/consolidatednooftenderstatewisetest.json?financeYear="+this.finyeartop+"&type=central"
                            var r1 = this.ajaxCall(url)
                            r1.then(function(k){                      
                                vm.createcpporgbyno(k,"firstString",'central',"Value of Tenders",false)
                            })
                            break;

                 case 'StatesUTsValueofTenders-distByValue':
                            this.title = "States/UTs - Value of Tenders - Fin Year "+this.finyeartop+" - "+(parseInt(this.finyeartop)+1).toString().slice(2) 
                            url = this.basicURL+"Top10/consolidatednooftenderstatewiseseven.json?financeYear="+this.finyeartop+"&type=state"
                            var r1 = this.ajaxCall(url)
                            r1.then(function(k){                      
                                vm.createcpporgbyno(k,"firstString",'state',"Value of Tenders",false)
                            })
                            break; 
                         
        //Distribution Analysis - Bidder Distribution
        case 'BidderDistribution-statewise':
            var state =($('#state :selected').text()).trim()
            if(state ==''){
            state = this.Statesel
             } 
             else{
           state = ($('#state :selected').text()).trim();
             this.Statesel = state
             }
            this.title = "Registered Bidders - Cumulative - "+this.Statesel
            url = this.basicURL+"Top10/NoOfUserStateWise.json?siteCode="+(this.code=="ALL"?"":this.code)
            var r1 = this.ajaxCall(url)
            r1.then(function(k){                     
                vm.createcpporgbyno(k,"secondString",'regbidder',"Number Of Tenders",false,)
            })
            break;

            //Unified Analysis - Central
              case 'CentralGraphView-central':
                 this.title = "C1. Top 50 Performers - Fin Year "+this.finyeartop+" - "+(parseInt(this.finyeartop)+1).toString().slice(2)  
                 url = this.basicURL+"Top10/consolidatednooftenderstatewisetest.json?financeYear="+this.finyeartop+"&type=central"
                  var r1 = this.ajaxCall(url)
                   r1.then(function(k){                     
                    vm.createcentralorg(k.eProc,'#new1')
                })
                  break;

                   case 'CentralGridView-central':
                            this.title = "C2. Central Government Organizations - Fin Year "+this.finyeartop+" - "+(parseInt(this.finyeartop)+1).toString().slice(2) 
                            url = this.basicURL+"Top10/consolidatednooftenderstatewisetest.json?financeYear="+this.finyeartop+"&type=central"
                            var r1 = this.ajaxCall(url)
                            r1.then(function(k){                     
                            vm.createcentraldept(k.eProc)
                            })
                            break;

          //Unified Analysis - State
             case 'StatesGraphView-stateView':
                         this.title = "S1. All States( By Value of Tenders) - Fin Year "+this.finyeartop+" - "+(parseInt(this.finyeartop)+1).toString().slice(2) 
                         url = this.basicURL+"Top10/consolidatednooftenderstatewiseseven.json?financeYear="+this.finyeartop+"&type=state"
                         var r1 = this.ajaxCall(url)
                         r1.then(function(k){                     
                         vm.createstateorg(k.eProc)
                         })
                         break;
        
            case 'StatesGridView-stateView':
                         this.title = "S2. State and PMGSY - Fin Year "+this.finyeartop+" - "+(parseInt(this.finyeartop)+1).toString().slice(2) 
                         url = this.basicURL+"Top10/consolidatednooftenderstatewiseseven.json?financeYear="+this.finyeartop+"&type=state"
                         var r1 = this.ajaxCall(url)
                         r1.then(function(k){                     
                         vm.createpmgsystate(k.eProc,this.finyeartop)
                         })
                         break;
        
         //MSR
         case 'StatesUTsPSUsDataAnalysis-msr':
            this.title = "States/UTs/PSUs Data Analysis - Fin Year "+this.finyeartop+" - "+(parseInt(this.finyeartop)+1).toString().slice(2)
          //  url = this.basicURL+"Tenders/MonthlyReport2?financeyear=2020&month="+this.curmonthsel
          url = this.basicURL+"Tenders/MonthlyStatusReportnew?financeyear=2020&month="+this.curmonthsel
            var r1 = this.ajaxCall(url)
            r1.then(function(k){                     
            vm.msrstate(k)
            })
            break;
    }
        },
 
        //Function for Tender Tab
  createtn: function(response,bindval,type,text,flag,ur,string,other,last,choice,both=false){
          
            response.sort(function(a,b){return (+a.firstString) - (+b.firstString)}) 
            var finyears = response.map(a => a.firstString+"-"+((+a.firstString)+1).toString().substring(2,4))
     
            var point1 = finyears.indexOf(choice[0]+"-"+(+choice[0]+1).toString().slice(2))
            var point2 = finyears.indexOf(choice[1]+"-"+(+choice[1]+1).toString().slice(2))
            var point2check = point2
            
                     finyears = finyears.slice(point1,point2+1)
        
           var prevfinyear = (parseInt(choice[0]))-1
     
           var prevfinyearno = []
     
              response.map(function(a){ 
                if(parseInt(a.firstString) == prevfinyear){
                  prevfinyearno = parseInt(a[string])
                 }
             }) 
     
            var yvalues = []
            var tooltipvalueArr1 =[]
            var pervalue = []
            var valTender =[]
            var perarrow1 =[]
            var perarrow =[]
            var perno =[]
            var valueArr =[]
     
            var valueArr = response.map(a =>parseInt(a[string]))
        
            var noTender = valueArr
            valueArr = valueArr.slice(point1,point2+1)            
            valueArr.unshift(text)
            yvalues.push(valueArr)
     
            valTender = response.map(a => parseInt(a[other]))  
            tooltipvalueArr1 = valTender.slice(point1,point2+1)
     
             //Value of Tender
     
        for(var i=0;i<(valTender.length)-1;i++){
            if( valTender[i] < valTender[i+1] )
              {
                 a = valTender[i+1]
                 b = valTender[i] 
                 if(+b !=0 && +a==0)
                     perarrow1.push("<i class='fas fa-arrow-alt-circle-up' style='font-size:20px;color:green;'></i>")
                 else
                 b-a == 0 ? perarrow1.push("-") : perarrow1.push(Math.abs( ( a - b ) / b  ) === Infinity ? " ":"<i class='fas fa-arrow-alt-circle-up' style='font-size:20px;color:green;'></i>")
              }
              else{
                 a = valTender[i]
                 b = valTender[i+1] 
                 b-a == 0 ? perarrow1.push("-") : perarrow1.push("<i class='fas fa-arrow-alt-circle-down' style='font-size:20px;color:red;'></i>")
                }
              var resval = 0
              if(+b !=0 && +a==0)
              resval =  100
          else
          resval = b-a == 0 ? "-": 100 * Math.abs( ( b - a ) / a ).toFixed(2)
      if(resval == Infinity)
      {
         resval = '-'
      }
         pervalue.push(resval)
    }
     
          // Number of Tender
       
        for(var i=0;i<(noTender.length)-1;i++){
         if( noTender[i] < noTender[i+1] )
         {
            a1 = noTender[i+1]
            b1 = noTender[i]
            if(+b !=0 && +a==0)
             perarrow.push("<i class='fas fa-arrow-alt-circle-up' style='font-size:20px;color:green;'></i>")
         else
         b-a == 0 ? perarrow.push("-") : perarrow.push(Math.abs( ( a1 - b1 ) / b1 ) === Infinity ? " ":"<i class='fas fa-arrow-alt-circle-up' style='font-size:20px;color:green;'></i>")
         }
         else{ 
            a1 = noTender[i]
            b1 = noTender[i+1]
            b-a == 0 ? perarrow.push("-") : perarrow.push(Math.abs( ( a1 - b1 ) / b1 ) === Infinity ? " ":"<i class='fas fa-arrow-alt-circle-down' style='font-size:20px;color:red;'></i>")
         }
         var resno = 0
         if(+b !=0 && +a==0)
         resno =  100
         else
            resno = b-a == 0 ? "-": 100 * Math.abs( ( b - a ) / a ).toFixed(2)
         if(resno == Infinity)
             {
                 resno = '-'
             }
             perno.push(resno)
       }
     
       point = ( (point1-1) == -1)? 0: (point1-1)
     
       pervalue = pervalue.slice(point,point2)
       perno = perno.slice(point,point2)
       perarrow = perarrow.slice(point,point2)
       perarrow1 = perarrow1.slice(point,point2)
        
     if(point1 == 0)
       {
          perno.unshift("-")
          pervalue.unshift("-")
          perarrow.unshift("")
          perarrow1.unshift("")
      }
      if(point2 == point2check)
      {
          perno[(perno.length)-1] = "-"
          pervalue[(pervalue.length)-1] = "-"
          perarrow[(perarrow.length)-1] = ""
          perarrow1[(perarrow1.length)-1] = ""
     }
     
             var chart = c3.generate({
               bindto: bindval,
              
               data: {
                   columns: yvalues,
                   labels:{ 
                    format: function(d){
                        return vm.commaSeparateNumber(d)
                   }  
                        },  
                    types:{
                       [yvalues[0][0]]: 'bar',
                       [yvalues[1] == undefined?'':yvalues[1][0]]: 'bar'
                    }, 
                    colors: {
                     'No. Of Tenders': '#e67e22',
                     "Value of Tenders (Rs. in Crores)" : 'green'
                 },
                   selection: {
                       enabled: true
                   },
                      onclick: function (d, element) {
                          if(true){
                          vm.drill = true
                         if(!vm.tabid.includes("drill")){
                               vm.tabid = vm.tabid+"drill" 
                         }
                         var x = chart.categories()[d.index]
                         x = x.slice(0,x.indexOf("-"))
                         vm.year1 = x;
                         vm.finyear = x;
                         vm.cardloader(vm.code)
                        vm.createCharts()
                          }
        
                      }
                   },
                   
        transition: {
        duration: 700
        },
                   legend: {
                       show: false
                   },
                  tooltip: {                           
                              
                     contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
                         
              if(!both){
                  
                         var conten = ""
                             
                         for (i = 0; i < chart.data().length; i++) {
                          
          var indexid = (d[i].id.split(" ").splice(0)[0] == 'No.') ? "# "+d[i].id.split(" ").splice(-1):"&#8377; "+d[i].id.split(" ").splice(0)[0]+" (Rs. in Crores)"
         var colorid = ( [d[i].id] == 'No. Of Tenders') ? "green":"#e67e22"
     
        if(response.findIndex(function(k){return k[string] == d[i].value}) == -1){
     
                                  
                             conten += "<tr><td><span style='background-color:#1f77b4"+
                             ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + indexid + "</td>" +
                             "<td style='text-align: right;'>" + d[i].value + "</td></tr><tr><td><span style='background-color:#1f77b4"+
                             ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>"+last+"</td>" +
                             "<td style='text-align: right;'>" +0 + "</td></tr>"
        }
        else{
                             conten += "<tr><td><span style='background-color:"+this.config.data_colors[d[i].id]+
                                 ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + indexid + "</td>" +
                                 "<td style='text-align: right;'>" + vm.commaSeparateNumber(d[i].value) + "</td>"+
                                 "<td style='text-align: right;'>"+perarrow[d[i].index]+" "+perno[d[i].index]+"</td></tr>"+
                                 "<tr><td><span style='background-color:"+colorid+";display: inline-block;width: 10px;margin-right: 6px'></span>"+last+"</td>"+
                                 "<td style='text-align: right;'>" +vm.commaSeparateNumber(parseInt(tooltipvalueArr1[d[i].index])) + "</td>"+
                                 "<td style='text-align: right;'>"+perarrow1[d[i].index]+" "+pervalue
                                 [d[i].index]+"</td></tr>"
                                 
        }		
                         }
                         
                         return ("<table class='c3-tooltip'>" +
                         " <thead><tr><th colspan='3'>Click on it for further drill down </tr></thead>" +
                            // " <thead><tr><th colspan='3' style='background:#0099CC; color:black;'>" + this.config.axis_x_categories[d[0].x] + "</tr></thead>" +
                            " <thead><tr><th colspan='3' style='background:#0099CC; color:black;'>Tenders Published during " + this.config.axis_x_categories[d[0].x] + "</tr></thead>" +
                             " <thead><tr><th style='background:skyblue; color:black;'>Categories</th>"+
                             "<th style='background:skyblue;color:black'></th><th style='background:skyblue;color:black'>Diff. over prev year</th></tr></thead>" +
                             "<tbody>" + conten +
                             "</tbody></table>"
                         )
                        }
                        else{
                        for (i = 0; i < chart.data().length; i++) {
                            conten += "<tr><td><span style='background-color:#1f77b4"+
                            ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + indexid + "</td>" +
                            "<td style='text-align: right;'>" + d[i].value + "</td></tr>"
                         }
        
                        }
        
                        return ("<table class='c3-tooltip'>" +
                        " <thead><tr><th colspan='2'>Click on it for further drill down </tr></thead>" +
                        // " <thead><tr><th colspan='2'>" + this.config.axis_x_categories[d[0].x] + "</tr></thead>" +
                        " <thead><tr><th colspan='3' style='background:#0099CC; color:black;'>Tenders Published during  " + this.config.axis_x_categories[d[0].x] + "</tr></thead>" +
                         " <thead><tr><th style='background:skyblue; color:black;'>Categories</th>"+
                             "<th style='background:skyblue;color:black'></th><th style='background:skyblue;color:black'>Diff. over prev year</th></tr></thead>" +
                        "<tbody>" + conten +
                        "</tbody></table>")
                     }
        
        
                 },
                 onrendered: function () {
                     d3.select(this.config.bindto).select(".c3-axis-y-label").attr("dy", "-78");
                 },
                 padding: {
                    top: 15,
                    bottom: 10,
                    left:100
                    },
              axis: {
                  x: {
                      type: 'category',
                      categories: finyears,
                      label: {
                             text: 'Financial Year',
                             position: 'outer-center' 
                       }
                  },y: {
                      min: 0,
                     padding:{bottom:0},
                     tick: {
                          //  count:7,
                        format: function(d){
                         
                             return parseInt(d)
                        }
        
                      },
                      label: {
                          text: text,
                          position: 'outer-middle',
                        }
                      },
                      y2:{
                          show: both,                          
                     tick: {
                        count: 7,
                        format: function(d){
                             return parseInt(d)
                        }
        
                      },
                      label: {
                          text: last,
                          position: 'outer-center',
                        }
                      }
              }
          });
        
        },
  
        //Function for Tender Categ and type tab

        createcn: function(response,bindval,type,text,text1,tex,flag,ur,string,string1,t1,t2,choice){

            let groups = new Array();
            let xval = new Array();
            let valarray = new Array();
            let prevfinyearno  = new Array();	
           
            response.forEach((i,id,arr) => {
             groups.push(i.fifthString)
               xval.push(i.firstString);
            })
         
            groups = groups.unique();
            xval = xval.unique();
         
            if(xval[0].indexOf("2") == -1){
             xAxis = xval;
            }
            else{
            xAxis = xval.map(i => i+"-"+String(parseInt(i)+1).substr(2))
            }
           
            groups.forEach(i => {
            valarray.push(new Array(i))
            })
            
            xval.forEach(item => {
            let r = response.filter(i => i.firstString == item)
            
            let temp = new Array();
            r.forEach(k => temp.push(k.fifthString))
         
            valarray.forEach(l => {
                if(temp.includes(l[0])){
                    l.push(r.find(it => it.fifthString == l[0])[string])
            }
            else{
                l.push("0")
            }
            })
            })
           
            var i1 = xAxis.indexOf(choice[0]+"-"+(+choice[0]+1).toString().slice(2))
            var i2 = xAxis.indexOf(choice[1]+"-"+(+choice[1]+1).toString().slice(2))
            xAxis = xAxis.slice(i1,i2+1)
            var i2check = i2
           
            var valarray1 = []
            valarray.map(i => {j = i[0];
                          i = i.slice(i1+1,i2+2);
                          i.unshift(j);
                        valarray1.push(i)})
         
         prevfinyearno = valarray
         
         //Removing open,limited and other from array
         for(k =0; k<3; k++)
         {
         prevfinyearno[k].shift();
         }
         
         /*let sample  = new Array();
         valarray.map(i => {//j = i[0];
             
            if(i1 != 0){
             i = i.slice(i1-1,i2+2);
             sample.push(i)
         }
         else{
             i = i.slice(i1,i2+2);
             sample.push(i)
         }
         })*/
         
         //Taking value of previous year
         var prevfinyearno1 = []
         prevfinyearno.map(i => {
                       i = i.slice(i1-1,i1);
                       prevfinyearno1.push(i)
                     })
                   
           var prevlen = prevfinyearno1.reduce((a, obj) =>  Object.keys(obj).length, 0)
           const totalProps = valarray1.reduce((a, obj) =>  Object.keys(obj).length, 0);
           var perno = []
           var temp = []
           var perarrow = []
           var temparrow = []
           var res =''
           var a,b;
           
                     for(var i=0;i<(valarray1.length);i++){
                         for(var j=1;j<(totalProps-1);j++){
                      if( parseInt(valarray1[i][j]) < parseInt(valarray1[i][j+1]) )
                         {
                             a = valarray1[i][j]
                             b =  valarray1[i][j+1]
                             if(+b !=0 && +a==0)
                                 temparrow.push("<i class='fas fa-arrow-alt-circle-up' style='font-size:20px;color:green;'></i>")
                             else
                             b-a == 0 ? temparrow.push("-") : Math.abs( ( b - a ) / a ) === Infinity ? temparrow.push("-") : temparrow.push("<i class='fas fa-arrow-alt-circle-up' style='font-size:20px;color:green;'></i>")
                         }
                         else{
                             a = valarray1[i][j+1] 
                             b =  valarray1[i][j]
                             b-a == 0 ? temparrow.push("-") : Math.abs( ( b - a ) / a ) === Infinity ? temparrow.push("-") : temparrow.push("<i class='fas fa-arrow-alt-circle-down' style='font-size:20px;color:red;'></i>")
                         }
                         var res = 0
                         if(+b !=0 && +a==0)
                             res =  100
                         else
                         res = b-a == 0 ? "-": (100 * Math.abs( ( b - a ) / a )).toFixed(2)
                         if(res == Infinity)
                         {
                             res = '-'
                         }
                             temp.push(res)
                     }
                     perarrow.push(temparrow)
                     perno.push(temp)
                     temp =[]
                     temparrow = []
                 }
                 var prevres = ''
                 const totallen = perno.reduce((a, obj) => Object.keys(obj).length, 0);
                 
                 //For previous Value
                for(var i=0;i<perno.length;i++){
             if(prevlen == 0)
             {
                   perno[i].unshift("-")
                   perarrow[i].unshift("")
             }
             else{
                 if(parseInt(prevfinyearno1[i]) < parseInt(valarray1[i][1]) )
                 {
                     a = prevfinyearno1[i]
                     b =  valarray1[i][1]
                    
                    if(+b !=0 && +a==0)
                    prevarr =  "<i class='fas fa-arrow-alt-circle-up' style='font-size:20px;color:green;'></i>"
                    else
                    prevarr =  (b-a === 0 ? '-' : Math.abs( ( b - a ) / a ) === Infinity ? " ":"<i class='fas fa-arrow-alt-circle-up' style='font-size:20px;color:green;'></i>")
                 }
                 else{
                     a =valarray1[i][1] 
                     b =  prevfinyearno1[i]
                     
                     prevarr =   (b-a === 0 ? '-' : Math.abs( ( b - a ) / a ) === Infinity ? " ":"<i class='fas fa-arrow-alt-circle-down' style='font-size:20px;color:red;'></i>")
                 }
                 if(+b !=0 && +a==0)
                 prevres =  100
                 else
                 prevres = (b-a === 0 ? "-" : (100 * Math.abs( ( b - a ) / a  )).toFixed(2) )
                 if(prevres == Infinity)
                 {
                     prevres = '-'
                 }
                 perno[i].unshift(prevres)
               perarrow[i].unshift(prevarr)       
             }
            if(i2 == i2check){
             perno[i][(totallen)] = '-'
             perarrow[i][(totallen)] = ''
            }
                }
     
        
            let $types = new Array(groups);
         
            var chart = c3.generate({
            bindto: bindval,
            data: {
               columns: valarray1,
               type: type,
               colors:{
                 'Goods' : '#05c46b',
                 'Services' : '#eb3b5a',
                 'Works' : '#2d98da',
                  'Open' :'#82589F',
                  'Limited' : '#B33771',
                  'Others' : '#3B3B98'
               },
               labels: {
                format: function (d) {
                    return vm.commaSeparateNumber(d)
                }
            },
               //groups:$types,
                 selection: {
                     enabled: true
                 },
                     onclick: function (d, element) {
                      
                       
                        vm.drill = true
                             if(!vm.tabid.includes("drill")){
                                   vm.tabid = vm.tabid+"drill" 
                             }
                             var x = chart.categories()[d.index]
                             x = x.slice(0,x.indexOf("-"))
                             vm.year1 = x;
                             vm.finyear = x;
                             vm.cardloader(vm.code)
                            vm.createCharts()
                         
                   
                     }
            },
            bar: {
                width: {
                    ratio: 0.9
                }
            },
            transition: {
               duration: 700
            },	    
            legend: {
              show: true
            },
            
            tooltip:{
                
               
            contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
         
                  let sum = 0
                  let conten = '';
                  let str = string
                  let str1 = string1
                  for(i=0;i<chart.data().length;i++){
                   
                        if(response.findIndex(function(l){return ((l[str] == d[i].value) && (l.firstString == xval[d[i].x]))}) == -1){
                      
                            conten += "<tr><td><span style='background-color:"+this.config.data_colors[d[i].id]+
                               ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>"+d[i].id+"</td>" +
                                       "<td style='text-align: right;'>"+d[i].value+"</td>"+
                                  "<td style='text-align: right;'>"+perarrow[i][d[i].index]+" "+perno[i][d[i].index]+"</td>"+
                                  "</tr>"
                                    //    "<td style='text-align: right;'>"+0+"</td></tr>"
                        }
                        else{
                            sum += +response.find(function(k){return ((k[str] == d[i].value) && (k.firstString == xval[d[i].x]))})[str1]
                           conten += "<tr><td><span style='background-color:"+this.config.data_colors[d[i].id]+
                                   ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>"+d[i].id+"</td>" +
                                           "<td style='text-align: right;'>"+d[i].value+"</td>"+
                                          "<td style='text-align: right;'>"+perarrow[i][d[i].index]+" "+perno[i][d[i].index]+"</td>"+
                                       "</tr>"
                                        //    "<td style='text-align: right;'>"+response.find(function(k){return ((k[str] == d[i].value) && (k.firstString == xval[d[i].x]))})[str1]+"</td></tr>"
                        }
                       }
                           
                             return ("<table class='c3-tooltip'>" +
                             " <thead><tr><th colspan='3'>Click on it for further drill down </tr></thead>" +
                                // " <thead><tr><th colspan='3' style='background:#0099CC; color:black;'>" + this.config.axis_x_categories[d[0].x] + "</tr></thead>" +
                                " <thead><tr><th colspan='3' style='background:#0099CC; color:black;'>Tender Published during " + this.config.axis_x_categories[d[0].x] + "</tr></thead>" +
                                 " <thead><tr><th style='background:skyblue; color:black;'>"+tex+"</th>"+
                                 "<th style='background:skyblue;color:black'>"+t1+"</th><th style='background:skyblue;color:black'>Diff. over prev year</th></tr></thead>" +
                                 "<tbody>" + conten +
                                 //  "<tr><td><b>Total</b></td><td style='text-align: right;'>"+d.reduce((s,c) => s+c.value,0)+"</td></tr>"+
                                 "</tbody></table>"
                             )
              
             }
             
              
            
            
            },
            // For moving y label 
            onrendered: function () {
             d3.select(this.config.bindto).select(".c3-axis-y-label").attr("dx","-15").attr("dy","-78");
         },
            padding: {
            top: 30,
            left:100
            },
            /*grid: {
               y: {
                   lines: [{value:0}]
               }
            }, */
            axis: {
               x: {
                   type: 'category',
                   categories: xAxis,label: {
                       text: text1,
                       position: 'outer-center',
                       
                       
                     }
               },
               y:{		        	
                   min: 0,
                     padding:{bottom:0},
                     tick: {
                        count: 10,
                        format: function(d){
                             return parseInt(d)
                        }
            
                      },
                     
                   label: {
                       text: text,
                       position: 'outer-center',   
                     }
               }
            }
            });
            
            d3.selectAll(".c3-legend-item") .attr("transform","translate(20,14)")
         
     },
        
     //Function for Drill down - Tender tab
     createtnm: function(response,valarr,bindval,ur,text,select,finYear,type,str,str1,newt){
   
        var valueArr=new Array(valarr);
        var years=new Array();
        var montharr
        var Tooltip_title=new Array();
        response=response['eProc'];
        var testers = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan","Feb","Mar"]
        
        var monthlistcrt = ['April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December','January', 'February', 'March'];
        var yearfirst = finYear.substring(0, 4);
        var yearsecond = parseInt(yearfirst) + 1
     
        for(var i in response){
           if(response[i]['firstString']!=null)
          {
                  lableString= response[i]['firstString'];
                  var value=response[i][str];
                  valueArr.push(parseInt(value));
          }
        }
        years.length = 0
     
        var tester = new Array();
        response.map(function(i,j){ 
         tester.push(i.secondString)
         })
         years = years.unique();
        
     //years.length = 0
        valueArr.length = 0
        valueArr.push(valarr)
     
        //years = this.montharr
        montharr = this.montharr
     
        //montharr = montharr.slice(0, currentDate);
     
        montharr.forEach(function(i,j){
            if(tester.includes(i)){
                var t = response[tester.indexOf(i)][str]
                var t1 = response[tester.indexOf(i)]['secondString']
                 valueArr.push(t == null?0:t)	 
                 if(i == 'Jan' || i == 'Feb' ||i == 'Mar'){
                     years.push(i+" "+yearsecond)
                     Tooltip_title .push(monthlistcrt[j]+" "+yearsecond)
                  }
                 else{
                     years.push(i+" "+yearfirst)
                     Tooltip_title .push(monthlistcrt[j]+" "+yearfirst)
                     }
            }
            
            else  {
             if( parseInt(new Date().getFullYear())-1 != yearfirst){
             if(i == 'Jan' || i == 'Feb' ||i == 'Mar'){
                 years.push(i+" "+yearsecond)
                 Tooltip_title .push(monthlistcrt[j]+" "+yearsecond)
              }
             else{
                 years.push(i+" "+yearfirst)
                 Tooltip_title .push(monthlistcrt[j]+" "+yearfirst)
                 }
                valueArr.push(0)
             }
            }
        })
        var initarray = new Array(valueArr.length-1);
        initarray.fill(0)
        initarray.unshift(valarr)
        
       
        var chart = c3.generate({
         size: {
             height: 450
             },
           bindto: bindval,
           data: {
              columns: [valueArr],
                    type: type,
                    labels: {
                        format: function (d) {
                            return vm.commaSeparateNumber(d)
                        }
                    },
                 
                 },
                 transition: {
                     duration: 700
                 }, 	        
            tooltip: {
        
               contents: function (d, defaultTitleFormat, defaultValueFormat) {
                 
                   var conten = ""
                   for (i = 0; i < chart.data().length; i++) {
                     var ind = (finYear).indexOf("-")
                     var ind1 = finYear.substring(ind+2,finYear.length)
                       if(response.findIndex(function(k){							
                           return ((k[str] == d[i].value) && (testers[d[i].x] == k.secondString))}) == -1){
                           conten += "<tr><td><span style='background-color:#007bff"+
                           ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + d[i].id + "</td>" +
                           "<td style='text-align: right;'>" + d[i].value + "</td></tr><tr><td><span style='background-color:#007bff"+
                           ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>"+newt+"</td>" +
                           "<td style='text-align: right;'>" +0+ "</td></tr>"		
                           
                           
                       }
                       
                       else{
                       
                       conten += "<tr><td><span style='background-color:#007bff"+
                           ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + d[i].id + "</td>" +
                           "<td style='text-align: right;'>" + d[i].value + "</td></tr><tr><td><span style='background-color:#007bff"+
                           ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>"+newt+"</td>" +
                           "<td style='text-align: right;'>" +response.find(function(k){return ((k[str] == d[i].value) && (testers[d[i].x] == k.secondString))})[str1] + "</td></tr>"
                       }
                   }
                   
                   return ("<table class='c3-tooltip'>" +   
                     // " <thead><tr><th colspan='2' style='color:black;'>In the month of " + this.config.axis_x_categories[d[0].x] + 
                   " <thead><tr><th colspan='2' style='color:black;'>In the month of " +Tooltip_title[d[0].x]+
                       "</tr></thead>" +
                       "<tbody>" + conten +
                       "</tbody></table>"
                   )
               }
        
        
           },
           padding: {
            bottom: 35,
            right:35,
            left:100
        },
        bar: {
         space: 0.50,
         width: {
             ratio: 1.3 // this makes bar width 50% of length between ticks
         }
     },
                 legend: {
                  show: false
              },
          axis: {
              x: {
                  
                  type: 'categorized',
                  categories:years,
                  label: {
        
                   text: 'Month',
                   position: 'outer-middle',
                 }
              },  y:{
              
                     rotate: -40,
                     tick: {
                        count: 7,
                        format: function(d){
                             return parseInt(d)
                        }
        
                      },
                label: {
                      text: text,
                      position: 'outer-center',
                      
                      
                    }
            },
              rotated: true
          },
        });
        
        d3.select(".c3-axis-y-label").attr("dy","3em")
        d3.select(".c3-axis-x-label").attr("dy","-81")
        
        },

        //Function for Tender categ and type - Drill down

        createcnm: function(response,bindval,type,text,text1,str,str1,tex,tex1,countno,finYear){
            response=response['eProc']
     
            var yearfirst = finYear.substring(0, 4);
            var yearsecond = parseInt(yearfirst) + 1
            let groups = new Array();
            let xval = new Array();	
            let xAxis = new Array();
            var Tooltip_title=new Array();
            var monthlistcrt = ['April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December','January', 'February', 'March'];
     
            response.forEach((i,id,arr) => {
            groups.push(i.sixthString)
             xval.push(i.secondString);
            })
             
            groups = groups.unique();
            xval = xval.unique();
            //xAxis = xval
         
            let valarray = new Array();
            groups.forEach(i => {
            valarray.push(new Array(i))
            })
            
            xval.forEach((item,j) => {
            let r = response.filter(i => i.secondString == item)
            let temp = new Array();
            r.forEach((k) => {
             temp.push(k.sixthString)
             var i = k.secondString
             if(i == 'Jan' || i == 'Feb' ||i == 'Mar'){
                 xAxis.push(i+" "+yearsecond)
                 Tooltip_title.push(monthlistcrt[j]+" "+yearsecond)
              }
             else{
                 xAxis.push(i+" "+yearfirst)
                 Tooltip_title.push(monthlistcrt[j]+" "+yearfirst)
                 }
               
            })
            valarray.forEach(l => {if(temp.includes(l[0])){
                  l.push(r.find(it => it.sixthString == l[0])[str])
            }
            
            else{
              l.push("0")
            }	         })
            
            
            })
            xAxis = xAxis.unique();
            Tooltip_title =  Tooltip_title.unique();
            let $types = new Array(groups);
        
            var chart = c3.generate({
            bindto: bindval,
            size: {
                height: 680
                },
            data: {
             columns: valarray,
             type: type,
             labels: {
                format: function (d) {
                    return vm.commaSeparateNumber(d)
                }
            },
             //groups: $types
            },
            bar: {
             //    space: 0.1,
                width: {
                   ratio: 0.8
               }
                 },
            transition: {
             duration: 700
            },legend: {
             position: 'bottom',
             /*inset: {
                  anchor: 'top-right',
                  x: 20,
                  y: -30
                 
              }*/
            },	     
            tooltip:{
              
             
            contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
                let sum = 0
                let conten = '';
            
                for(i=0;i<chart.data().length;i++){
                 var ind = (finYear).indexOf("-")
                 var ind1 = finYear.substring(ind+2,finYear.length)
                      if(response.findIndex(function(l){return ((l[str] == d[i].value) && (l.secondString == xval[d[i].x]))}) == -1){
                          
                          conten += "<tr><td><span style='background-color:"+this.config.data_colors[d[i].id]+
                             ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>"+d[i].id+"</td>" +
                                     "<td style='text-align: right;'>"+d[i].value+"</td>"+
                                     "<td style='text-align: right;'>"+0+"</td></tr>"
                      }
                      else{
                          sum += +response.find(function(k){return ((k[str] == d[i].value) && (k.secondString == xval[d[i].x]))})[str1]
                         conten += "<tr><td><span style='background-color:"+this.config.data_colors[d[i].id]+
                                 ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>"+d[i].id+"</td>" +
                                         "<td style='text-align: right;'>"+d[i].value+"</td>"+
                                         "<td style='text-align: right;'>"+response.find(function(k){return ((k[str] == d[i].value) && (k.secondString == xval[d[i].x]))})[str1]+"</td></tr>"
                      }
                     }
                           return  ("<table class='c3-tooltip'>" +
                                    //" <thead><tr><th colspan='3' style='color:black;'>"+ this.config.axis_x_categories[d[0].x] + 
                                    " <thead><tr><th colspan='3' style='color:black;'>In the month of "+ Tooltip_title[d[0].x] + 
                                    "</th></tr></thead>" +
                                    " <thead><tr><th style='background:skyblue; color:black;'>Tender Category</th>"+
                                    "<th style='background:skyblue; color:black;'>"+tex+"</th>"+
                                    "<th style='background:skyblue; color:black;'>"+tex1+"</th></tr></thead>" +
                                            "<tbody>" +conten+
                                            "<tr><td><b>Total</b></td><td style='text-align: right;'>"+d.reduce((s,c) => s+c.value,0)+"</td><td style='text-align: right;'> "+sum+"</td></tr></tbody></table>"
                                        )	
            
            }
            
            
            },
            padding: {
                bottom: 10,
                top:10,
                right:30
            },
            grid: {
             y: {
                 lines: [{value:0}]
             }
            }, 
            axis: {
             x: {
                 type: 'category',
                 categories: xAxis,label: {
                     text: text1,
                     position: 'outer-middle',
                     
                     
                   }
             },
             y:{		        	
                 min: 0,
                   padding:{bottom:0},
                   tick: {
                      count: countno,
                      format: function(d){
                           return parseInt(d)
                      }
            
                    },
                 label: {
                     text: text,
                     position: 'outer-bottom',
                     
                     
                   }
             },
             
             rotated: true
            }
            });
            d3.select(".c3-axis-x-label").attr("dy","-81")
            },
           

corrslab: function(response,bindval,type,finyear){     

var valueArr=new Array();
var years=new Array();
var xAxis=new Array();
var finyr2 = +(finyear)+1
var testers = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan","Feb","Mar"]
var testerscrt = ["","Jan","Feb","Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
 response.map(function(i,j){ 
i.secondString = testerscrt[i.secondString]
 })
 
  var catearray=new Array(); 

    for(var i in response){
        if(response[i]['firstString']!=null)
        { 
            catearray.push(response[i]['firstString']);
            years.push(response[i]['secondString']) 
              if(response[i]['secondString'] == 'Jan' || response[i]['secondString'] == 'Feb' ||response[i]['secondString'] == 'Mar'){
                xAxis.push(response[i]['secondString']+' '+ finyr2) 
              }
                else{
                    xAxis.push(response[i]['secondString']+' '+finyear) 
                }

            } 
    
     
  }
  //  years=montharr
   catearray=catearray.unique();
years=years.unique();
xAxis=xAxis.unique();

catearray.sort(function(a, b) {
    var firstLetter = b.substr(0, 1);
    b = firstLetter.toUpperCase() + b.substr(1);
    return a - b;
});
//catearray.unshift(catearray[3])
// delete catearray[4]

   var catvaluearr=new Array();
for(var k in catearray){  
    catvaluearr[k]=new Array();
    catvaluearr[k].push(catearray[k]);
}

for(var k in catearray){  
    for(var i in years){
     var  len=catvaluearr[k].length;
     
    
 for(var j in response){
     
     if(response[j]['secondString']==years[i] && response[j]['firstString']==catearray[k] && response[j]['secondString']!=null)
     
         {
            catvaluearr[k].push(response[j]['thirdString']/1);  
         }
   
 }

 var  len1=catvaluearr[k].length;

 if(len1==len && len<years.length ){
     catvaluearr[k].push(0);
 }
 
 }
 
} 
var chart = c3.generate({
   size:{
       height:550
   },
bindto: bindval,
data: {
   columns: 
       catvaluearr,
       type: type, 
   labels: {
       format: function (d) {
           return vm.commaSeparateNumber(d)
       }
   },
 selection: {
       enabled: false
   },
      
},
 bar: {
       width: {
           ratio: 0.7 
       }
       
   },

axis: {
   x: {
       type: 'category',
       categories: xAxis,
       label: {
              text: 'Months',
               position: 'outer-center'
           
         }
   },y: {
          label: {
              text: 'No. of Corrigendums',
              position: 'outer-middle',
              
              
            }
          },
          rotated: true
}
});
 d3.select(".c3-axis-y-label").attr("dx","5").attr("dy","2.5em")
 d3.select(".c3-axis-x-label").attr("dx","-200").attr("dy","-75")

    },
            //Function for Bidder Analysis
bidderstatus: function (response,bindval,type,finYear)
            {
        var lableString = '';
        var value = '';
        var valueArr = new Array();
        var years = new Array();
        var initarray = new Array();
        // test.push("data1");
        for (var i in response) {
    
    
            if (response[i]['entites'] != null) {
                lableString = response[i]['entites'];
                value = response[i]['count'];
                years.push(value);
                initarray.push(new Array(lableString, 0))
                bindval == "#designerChartExemp" ? valueArr.push(new Array(lableString.toUpperCase(), value / 1)) : valueArr.push(new Array(lableString, value / 1));
            }
    
        }
        var chart = c3.generate({
            bindto: bindval,
            data: {
                columns: valueArr,
                type: type,
                labels: true,
            },
            tooltip: {
                contents: function (d, secondString, count, color) {
                    return "<table style='border:1px solid #f2f2f2;'  ><tr style='font-size:14px;background-color:#f2f2f2'><td style='color:black;font-size:13px'> " + d[0].id + "</td><td style='color:black;font-size:13px'>  " + d[0].value + "</td></tr></table>";
                }
            },
    
    
         });
   
        
    },

    createbids: function(response, bindval, type,text,string1,String2,flag,choice){ 
        
        response.sort(function(a,b){return (+a.firstString) - (+b.firstString)}) 
                var finyears = response.map(a => a.firstString+"-"+((+a.firstString)+1).toString().substring(2,4))
                var point1 = finyears.indexOf(choice[0]+"-"+(+choice[0]+1).toString().slice(2))
                var point2 = finyears.indexOf(choice[1]+"-"+(+choice[1]+1).toString().slice(2))
                var point2check = point2
 
                finyears = finyears.slice(point1,point2+1)
                var valueArr = response.map(a => parseInt(a[string1]))
                var bidvalues = valueArr
                valueArr = valueArr.slice(point1,point2+1)
                valueArr.unshift(text)
 
                var initarray = response.map(a => parseInt(a[String2]))
                var Tendervalues = initarray
                initarray = initarray.slice(point1,point2+1)
                initarray.unshift("No. of Tenders")
            //    No. of Bids")
                              
                var prevfinyear = (parseInt(choice[0]))-1
      
       var prevfinyearno = []
 
          response.map(function(a){ 
            if(parseInt(a.firstString) == prevfinyear){
              prevfinyearno = parseInt(a[string1])
             }
         }) 
 
        var yvalues = []
        var pervalue = []
        var valTender =[]
        var perarrow1 =[]
        var perarrow =[]
 
 
        //For Bidder Value
    for(var i=0;i<(bidvalues.length)-1;i++){
        
     if( bidvalues[i] < bidvalues[i+1] )
     {
        a = bidvalues[i+1]
        b = bidvalues[i] 
        perarrow1.push("<i class='fas fa-arrow-alt-circle-up' style='font-size:20px;color:green;'></i>")
     }
     else{
        a = bidvalues[i]
        b = bidvalues[i+1] 
        perarrow1.push("<i class='fas fa-arrow-alt-circle-down' style='font-size:20px;color:red;'></i>")
     }
  var resval = (a-b === 0 ? 0 : 100 * Math.abs( ( a - b ) / b  ) ).toFixed(2)
 pervalue.push(resval)
   }
 
    //For Tender Value
   for(var i=0;i<(Tendervalues.length)-1;i++){
     if( Tendervalues[i] < Tendervalues[i+1] )
     {
        a = Tendervalues[i+1]
        b = Tendervalues[i] 
        perarrow.push("<i class='fas fa-arrow-alt-circle-up' style='font-size:20px;color:green;'></i>")
     }
     else{
        a = Tendervalues[i]
        b = Tendervalues[i+1] 
        perarrow.push("<i class='fas fa-arrow-alt-circle-down' style='font-size:20px;color:red;'></i>")
     }
  var restendval = (a-b === 0 ? 0 : 100 * Math.abs( ( a - b ) / b  ) ).toFixed(2)
  valTender.push(restendval)
   }
 
   point = ( (point1-1) == -1)? 0: (point1-1)
 
   //For Bidder Value
   pervalue = pervalue.slice(point,point2)
   perarrow1 = perarrow1.slice(point,point2)
 
   //For Tender Value
   valTender = valTender.slice(point,point2)
   perarrow = perarrow.slice(point,point2)
    
 if(point1 == 0)
   { 
       //For Bidder Value
      pervalue.unshift("-")
      perarrow1.unshift("")
       //For Tender Value
      valTender.unshift("-")
      perarrow.unshift("")
  }
 
 
  if(point2 == point2check)
  {
       //For Bidder Value
      pervalue[(pervalue.length)-1] = "-"
      perarrow1[(perarrow1.length)-1] = ""
       //For Tender Value
      valTender[(valTender.length)-1] = "-"
      perarrow[(perarrow.length)-1] = ""
 }
             
             var data = [valueArr, initarray];
             // var avgdata =[]
             //   for(var i =1;i<valueArr.length;i++)
             //   avgdata.push( (valueArr[i]/initarray[i]).toFixed(2) )
  
        var chart = c3.generate({
            bindto: bindval,
            data: {
                columns: data,
                type: 'bar',
                colors:
                {
                    'No. of Tenders': '#e67e22',
                    'No of Bids' : '#535c68',
                },
                labels: {
                    format: function (d) {
                        if(d == 0){}
                        else{return vm.commaSeparateNumber (d)}  
                    }
                },
            selection: {
                           enabled: flag
                       },
                          onclick: function (d, element) {
                              vm.drill = true
                             if(!vm.tabid.includes("drill")){
                                   vm.tabid = vm.tabid+"drill" 
                             }
                             var x = chart.categories()[d.index]
                             x = x.slice(0,x.indexOf("-"))
                             vm.year1 = x;
                             vm.finyear = x;
                             vm.cardloader(vm.code)
                            vm.createCharts()
    
    
                          }
    
            },
            bar: {
                
                width: {
                  
                  ratio: 0.3  
               }
                  
              },
              tooltip: {
    
    
                 contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
                     let conten = '';
            
                     for (i = 0; i < chart.data().length; i++) {
                         
                         var ch = (d[i].id == 'No. of Tenders')?  perarrow[d[i].index]+" "+valTender[d[i].index] : perarrow1[d[i].index]+" "+pervalue[d[i].index]
                         var tooltipid = (d[i].id == 'No. of Tenders')? '# Tenders': 'No. Of Bids'
 
                         conten += "<tr><td><span style='background-color:" + this.config.data_colors[d[i].id] +
                             ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + tooltipid + "</td>" +
                             "<td style='text-align: right;'>" + vm.commaSeparateNumber(d[i].value) + "</td>"+
                             "<td style='text-align: right;'>"+ch+"</td></tr>"
                     }
                     return ("<table class='c3-tooltip'>" +
                         " <thead><tr><th colspan='3'>" + this.config.axis_x_categories[d[0].x] + "</tr></thead>" +
                         "<thead><tr><th style='background:skyblue;color:black'>Categories</th>"+
                         "<th style='background:skyblue;color:black'>Value</th>"+
                         "<th style='background:skyblue;color:black'>Diff. over prev year</th></tr></thead>" +
                         "<tbody>" + conten +
                     // "<tr><td>Avg. Bids per Tender</td>"+
                      //"<td style='text-align: right;'> " + avgdata[d[0].x] +"</td>"+
                      "</tr>"+
                         "</tbody></table>"
                         // +
                         // "<tr><td><b>Total</b></td><td> " + vm.commaSeparateNumber(d.reduce((s, c) => s + c.value, 0)) +
                         // "</td></tr></tbody></table>"
                     )
                 }
     
     
             },
                padding: {
                  left:90
                },
            legend: {
                show: true
            },
            axis: {
                x: {
                    type: 'category',
                    categories: finyears,
                    label: {
                        text: 'Fin.Year',
                        position: 'outer-end'
    
                    }
                },
                y: {
                    padding: {
                        bottom: 5
                    },
                    min: 0,
                    label: {
    
                        text: 'No.of Bids',
                        position: 'outer-middle',
                    }
                }
            }
    
        });
        d3.select(".c3-axis-x-label").attr("dx","-20").attr("dy","2.6em")
        d3.select(".c3-axis-y-label").attr("dy","-78")
    }, 
    createcn1: function(response,bindval,type,text,text1,tex,ur,string,string1,t1,t2,choice){
   
        response.sort(function(a,b){return (+a.firstString) - (+b.firstString)}) 
                  var finyears = response.map(a => a.firstString+"-"+((+a.firstString)+1).toString().substring(2,4))
                    
        var bidsno = new Array();
        var tenderno = new Array();
       
      response.forEach((i,id,arr) => {
        if(ur == i.fifthString){
        bidsno.push(i.fourthString)
        tenderno.push(i.secondString)
        finyears.push(i.firstString)
        }
        })
        
        finyears = finyears.unique();
    
        var point1 = finyears.indexOf(choice[0]+"-"+(+choice[0]+1).toString().slice(2))
        var point2 = finyears.indexOf(choice[1]+"-"+(+choice[1]+1).toString().slice(2))
       
        var point2check = point2
        var bidvalues = new Array()
        var Tendervalues = new Array()
        bidvalues = bidsno
         Tendervalues = tenderno
    
        finyears = finyears.slice(point1,point2+1)
        bidsno = bidsno.slice(point1,point2+1)
        tenderno = tenderno.slice(point1,point2+1)
        bidsno.unshift("No. of Bids")
        tenderno.unshift("No. of Tenders")
    
                     
        var prevfinyear = (parseInt(choice[0]))-1
    
    
        var prevfinyearno = []
    
           response.map(function(a){ 
             if(parseInt(a.firstString) == prevfinyear){
               prevfinyearno = parseInt(a[string1])
              }
          }) 
    
         var pervalue = []
         var valTender =[]
         var perarrow1 =[]
         var perarrow =[]
    
    
         //For Bidder Value
     for(var i=0;i<(bidvalues.length)-1;i++){
         
      if( bidvalues[i] < bidvalues[i+1] )
      {
         a = bidvalues[i+1]
         b = bidvalues[i] 
         perarrow1.push("<i class='fas fa-arrow-alt-circle-up' style='font-size:20px;color:green;'></i>")
      }
      else{
         a = bidvalues[i]
         b = bidvalues[i+1] 
         perarrow1.push("<i class='fas fa-arrow-alt-circle-down' style='font-size:20px;color:red;'></i>")
      }
    var resval = (a-b === 0 ? 0 : 100 * Math.abs( ( a - b ) / b  ) ).toFixed(2)
    pervalue.push(resval)
    }
    
     //For Tender Value
    for(var i=0;i<(Tendervalues.length)-1;i++){
      if( Tendervalues[i] < Tendervalues[i+1] )
      {
         a = Tendervalues[i+1]
         b = Tendervalues[i] 
         perarrow.push("<i class='fas fa-arrow-alt-circle-up' style='font-size:20px;color:green;'></i>")
      }
      else{
         a = Tendervalues[i]
         b = Tendervalues[i+1] 
         perarrow.push("<i class='fas fa-arrow-alt-circle-down' style='font-size:20px;color:red;'></i>")
      }
    var restendval = (a-b === 0 ? 0 : 100 * Math.abs( ( a - b ) / b  ) ).toFixed(2)
    valTender.push(restendval)
    }
    
    point = ( (point1-1) == -1)? 0: (point1-1)
    
    //For Bidder Value
    pervalue = pervalue.slice(point,point2)
    perarrow1 = perarrow1.slice(point,point2)
    
    //For Tender Value
    valTender = valTender.slice(point,point2)
    perarrow = perarrow.slice(point,point2)
     
    if(point1 == 0)
    { 
        //For Bidder Value
       pervalue.unshift("-")
       perarrow1.unshift("")
        //For Tender Value
       valTender.unshift("-")
       perarrow.unshift("")
    }
    
    
    if(point2 == point2check)
    {
        //For Bidder Value
       pervalue[(pervalue.length)-1] = "-"
       perarrow1[(perarrow1.length)-1] = ""
        //For Tender Value
       valTender[(valTender.length)-1] = "-"
       perarrow[(perarrow.length)-1] = ""
    }              
         
        var data = [bidsno,tenderno]
       
        var chart = c3.generate({
        bindto: bindval,
        data: {
           columns: data,
           type: type,
           colors:
           {
            'No. of Tenders': '#e67e22',
             'No. of Bids' : '#535c68',
           },
           labels: {
            format: function (d) {
                return vm.commaSeparateNumber(d)
            }
        },
    },
           //groups:$types,
            
        bar: {
            width: {
                ratio: 0.9
            }
        },
        transition: {
           duration: 700
        },	    
        legend: {
          show: true
        },
        
        tooltip: {
       
       
            contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
                let conten = '';
       
                for (i = 0; i < chart.data().length; i++) {
                    
                   // var ch = (d[i].id == 'No. of Tenders')?  perarrow[d[i].index]+" "+valTender[d[i].index] : perarrow1[d[i].index]+" "+pervalue[d[i].index]
                    var tooltipid = (d[i].id == 'No. of Tenders')? '# Tenders': 'No. Of Bids'
                    var ch = (d[i].id == 'No. of Tenders')?  perarrow[d[i].index]+" "+valTender[d[i].index] : perarrow1[d[i].index]+" "+pervalue[d[i].index]
                    conten += "<tr><td><span style='background-color:" + this.config.data_colors[d[i].id] +
                        ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + tooltipid + "</td>" +
                        "<td style='text-align: right;'>" + vm.commaSeparateNumber(d[i].value) + "</td>"+
                       
                        "</tr>"
                }
                return ("<table class='c3-tooltip'>" +
                    " <thead><tr><th colspan='3'>" + this.config.axis_x_categories[d[0].x] + "</tr></thead>" +
                    "<thead><tr><th style='background:skyblue;color:black'>Categories</th>"+
                    "<th style='background:skyblue;color:black'>Value</th>"+
                    "</tr></thead>" +
                    "<tbody>" + conten +
                 "</tr>"+
                    "</tbody></table>"
                )
            }
    
    
        },
        onrendered: function () {
         d3.select(this.config.bindto).select(".c3-axis-y-label").attr("dx","-15").attr("dy","-78");
     },
        padding: {
        top: 30,
        left:100
        },
        /*grid: {
           y: {
               lines: [{value:0}]
           }
        }, */
        axis: {
           x: {
               type: 'category',
               categories: finyears,
               label: {
                   text: text1,
                   position: 'outer-middle',
                   
                   
                 }
           },
           y:{		        	
               min: 0,
                 padding:{bottom:0},
                 tick: {
                    count: 10,
                    format: function(d){
                         return parseInt(d)
                    }
        
                  },
                 
               label: {
                   text: text,
                   position: 'outer-center',
                   
                   
                 }
           }
        }
        });
        
        //d3.select(".c3-axis-y-label").attr("dx","-15").attr("dy","-70")
        },
       
        
    
    onChangetab: function(target){
    	$("#new").empty();
	$("#new1").empty();
	$("#new2").empty();
	$("#new3").empty();
	$("#new4").empty();
            if(this.drill){
                this.tabid = target.id.replace(/[^\w\s]/gi, "")
                this.tabid =  this.tabid.replace(/\s/g, "")+"drill" 
            }
            else{  
                     this.tabid = target.id.replace(/[^\w\s]/gi, "")
                 this.tabid =  this.tabid.replace(/\s/g, "") 
            }

            if(this.id == 'Bidderyrs'){
                this.id = 'Bidder'
             }
             
             if( (this.checker == 'Key Performance Indicators' || this.id == 'groupkpi6' || this.tabid == "LastFiveYears") 
                                            && this.tabid != 'ValidTendersvsBidsAwarded' )
                 this.twoyeardrop();
             if( (this.checker == 'Key Performance Indicators ' && this.tabid == 'ValidTendersvsBidsAwarded' ) || this.tabid =="NumberofTenderYOY")
                vm.topwisesingle();
             this.createCharts()
        },

    

   	onChangemenu: function(target){
    $("#new").empty();
    $("#spin").empty();
	$("#new1").empty();
	$("#new2").empty();
	$("#new3").empty();
    $("#new4").empty();
    $("#new5").empty();
    $("#new6").empty();

	     this.tabid = target.name.replace(/\s/g, "")  
 	     this.id = target.id
	     this.drill = false
         this.slide = true

         $('input[type="radio"]').prop('checked', false);
        $('input[type="radio"]:first').prop('checked', true);
     $(".tabs").find('ul').find('li').removeClass("is-active")
     $(".tabs").find('ul').find('li:first-child').addClass("is-active")
     
     this.finyeartop = '2020'
                        this.cardloader(this.code)
                       this.createCharts()
        },

        onChange: function(target){
               this.id = target.id
               this.createCharts()                                                                                                                                                                                                                                                   
              // alert(vm.tabid)
              $(".tabs").find('ul').find('li').removeClass("is-active")
              $(".tabs").find('ul').find('li:first-child').addClass("is-active")
        },
       
        
monthchart:function(){
    var monthlist =  ["December","January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.curmonthsel = parseInt(document.getElementById("month").value); 
 this.curmonth = monthlist[this.curmonthsel]
 this.premonth  = monthlist[(this.curmonthsel) - 1]
    this.createCharts()
},

yearchart:function(){
    this.msryrsel = parseInt(document.getElementById("currentyear").value); 
    this.changecreatemonth()
    this.createCharts()
},
changecreatemonth:function(){
    if(this.msryrsel == new Date().getFullYear()){
        this.createmonth();
    }
    else{
        
        $("#month").empty();
var monthsel = document.getElementById("month")
this.curmonthsel = (this.monthlistcrt.indexOf(this.montharrlist[(11)]))+1  // currentDate.getMonth()
this.curmonth = this.montharrlist[11]
 this.premonth  = this.montharrlist[10]

for(var i = 11; i>=0; i--){
        var option1 = document.createElement("OPTION");
        option1.value = (this.monthlistcrt.indexOf(this.montharrlist[i]))+1
         option1.innerHTML = this.montharrlist[i];
         monthsel.appendChild(option1);
    }
    }
},
createmonth:function(){

        $("#month").empty();
var monthsel = document.getElementById("month")
var currentDate = new Date();
var check = this.monthlistcrt[currentDate.getMonth()]

var arrindex = this.montharrlist.indexOf(check);
if(arrindex == 0){
arrindex=12
}
this.curmonthsel = (this.monthlistcrt.indexOf(this.montharrlist[(arrindex-1)]))  // currentDate.getMonth()
//this.curmonthsel = (this.monthlistcrt.indexOf(this.montharrlist[(arrindex-1)]))+1  // currentDate.getMonth()

//this.curmonth = this.montharrlist[(arrindex)-1]
this.curmonth = this.montharrlist[(arrindex)-2]
 //this.premonth  = this.montharrlist[(arrindex)-2]
 this.premonth  = this.montharrlist[(arrindex)-3]

 //for(var i = (arrindex-1); i>=0; i--){
for(var i = (arrindex-2); i>=0; i--){
        var option1 = document.createElement("OPTION");
        option1.value = (this.monthlistcrt.indexOf(this.montharrlist[i]))+1
      //  option1.value = i;
         option1.innerHTML = this.montharrlist[i];
        // if(option1.innerHTML == "December")
        //this.currentyear(true)  
         monthsel.appendChild(option1);
    }
    },
        currentyear:function(){
            $("#currentyear").empty();
            var currentyear = document.getElementById("currentyear")
            var year = ((new Date()).getFullYear())-1; 
            if(this.msryrsel == new Date().getFullYear()){
                $(currentyear).append('<option value="' + (year+1) + '">' + (year+1)+"-"+(year+2).toString().substring(2,4) + '</option>');
            }
            $(currentyear).append('<option value="' + year + '">' + (year)+"-"+(year+1).toString().substring(2,4) + '</option>'); 
            
        },

        onChangekpi: function(target){
            $("#new").empty();
            $("#spin").empty();
            $("#new1").empty();
            $("#new2").empty();
            $("#new3").empty();
            $("#new4").empty();
	             this.id = target.id
                 this.tabid = target.value

                 if(this.checker == 'Key Performance Indicators' && this.tabid != 'ValidTendersvsBids Awarded' )
                 this.twoyeardrop();
                //   if(this.tabid == 'NoofCorrigendumsforSpecifictype' && this.id == 'Specified')
                //   vm.corrtype();

                 this.createCharts()

                 if(this.tabid != 'StateWiseBidder'){
                 $(".tabs").find('ul').find('li').removeClass("is-active")
                 $(".tabs").find('ul').find('li:first-child').addClass("is-active")
                 }

          //   $('input[type="radio"]').prop('checked', false);
          //  $("#"+this.id).checked;
         //  $('input[type=radio]').removeAttr('checked');
         
        },

        onChangeyear: function(target){
            this.finyear = target
            this.cardloader(this.code)
            this.createCharts()
     },
      
   statecode: function(){
    var str = ''
    var index = ''
    if(window.location.href.includes("?siteCode=")){
    
         str = window.location.href;
         index = str.indexOf("=");
        var statecode = str.substr(index+1)
    this.code = statecode
  
    var resp =  this.ajaxCall(this.basicURL+"Tenders/GettingStateCode")
    resp.then(function(t){
        t.eProc.forEach(ele => {
            if( ele.thirdString  == statecode ){
                this.thirdStringval=ele.firstString.split("|")

                vm.head = this.thirdStringval[1]
                vm.selected = ele.firstString
                 }
               
         });

         })
       //  window.location.href =  window.location.href.substring(0,str.indexOf("?"));
}
   },

   twoyeardrop: function(){
    
    code = this.code;
 if(code=='ALL' || code == null){
     code = ""
}
 var resp1 = this.ajaxCall(this.basicURL+"KPI/PanelChartStatistics?financeYear=&siteCode="+code+"&org=")
 resp1.then(function(t){
              
     t = t.eProc
var selchoice = document.getElementById("yearsel1")
var selchoice1 = document.getElementById("yearsel2")

$("#yearsel1").empty(); 
$("#yearsel2").empty();

if(+t[6].secondString == 2020)
{
   this.selectbox1 = 2020;
   this.selectbox2 = 2020;
 
   var option = document.createElement("OPTION");
   option.value = "2020";
   option.innerHTML = "2020-21";
   selchoice.appendChild(option);

   var option1 = document.createElement("OPTION");
     option1.value = 2020;
     option1.innerHTML = "2020-21";
     selchoice1.appendChild(option1);

   vm.choice = [this.selectbox1 , this.selectbox2]
}
else{
      for(var yrchoice =+t[6].secondString; yrchoice <= 2019; yrchoice++){
   var option = document.createElement("OPTION");
   option.value = +yrchoice;
   option.innerHTML = +yrchoice+"-"+(parseInt(yrchoice)+1).toString().slice(2);
   selchoice.appendChild(option);
 }
if((selchoice.length-5) < 0)
{
    selchoice.selectedIndex =0;
}
else{
    selchoice.selectedIndex = selchoice.length-5;

}

var selchoiceval = document.getElementById("yearsel1").value

 for(var yrchoice1 =parseInt((selchoiceval))+1; yrchoice1 <= 2020; yrchoice1++){
     var option1 = document.createElement("OPTION");
     option1.value = +yrchoice1;
     option1.innerHTML = +yrchoice1+"-"+(parseInt(yrchoice1)+1).toString().slice(2);
     selchoice1.appendChild(option1);
   }
  
selchoice1.selectedIndex = selchoice1.length-1;

     var yrindex1 =  Math.abs(selchoice.selectedIndex);
     var yrindex2 = Math.abs(selchoice1.selectedIndex);
     this.selectbox1 = selchoice.options[yrindex1].value;
     this.selectbox2 = selchoice1.options[yrindex2].value;
    vm.choice[0] = +selchoiceval
    vm.choice[1] = +this.selectbox2
    // vm.choice = [this.selectbox1 , this.selectbox2]
}
})
 },
 
 /*corrtype: function(){
    code = this.code
    if(code=='ALL' || code == null){
        code = ""
   }
    $("#type").empty();
   
 var resp1 =  this.ajaxCall(this.basicURL+"Tenders/CorrigendumList?siteCode="+code)
 resp1.then(function(t){
   
    var typesel = document.getElementById("type")
     for(var corrchoice = 0; corrchoice < t.eProc.length; corrchoice++){
        var opt = document.createElement("OPTION");
        opt.value = t.eProc[corrchoice].firstString;
        opt.innerHTML =  t.eProc[corrchoice].firstString;
        typesel.appendChild(opt);
       }
     typesel.selectedIndex = 0;

     var typeselind =  Math.abs(typesel.selectedIndex);
      this.corrigentype = typesel.options[typeselind].value;
      vm.corrigentype = typesel.options[typeselind].value;

    })
    },*/

  /*  corrtypewtout: function(t){
        if(this.corrigentype == null){
       $("#type").empty();
  var typesel = document.getElementById("type")

        for(var corrchoice = 0; corrchoice < t.length; corrchoice++){
           var opt = document.createElement("OPTION");
           opt.value = t[corrchoice].firstString;
           opt.innerHTML =  t[corrchoice].firstString;
           typesel.appendChild(opt);
          }
        }
       },*/
   

    typechange: function () {
        $("#new").empty();
            this.corrigentype = $("#type option:selected").val()
            this.createCharts()
        },
    
 combodropdown: function(){
     
    code = this.code
    if(code=='ALL' || code == null){
        code = ""
   }
    var resp1 = this.ajaxCall(this.basicURL+"KPI/PanelChartStatistics?financeYear=&siteCode="+code+"&org=")
    resp1.then(function(t){
    var combochoice = document.getElementById("combodrop")
    var n = new Date().getFullYear();   
     $("#combodrop").empty();

     for(var comchoice = n-1; comchoice >= (n-6); comchoice--){
      var opt = document.createElement("OPTION");
      opt.value = +comchoice;
      opt.innerHTML = +comchoice+"-"+(parseInt(comchoice)+1).toString().slice(2);
      combochoice.appendChild(opt);
     }
 
     combochoice.selectedIndex = combochoice.length-6;

      var comind =  Math.abs(combochoice.selectedIndex);
      this.finyeartop = combochoice.options[comind].value;
     vm.finyeartop = this.finyeartop;
    })
  },

topwisesingle: function(){
    //this.selectedtab = this.tabid
    code = this.code
 if(code=='ALL' || code == null){
     code = ""
}
 var resp1 = this.ajaxCall(this.basicURL+"KPI/PanelChartStatistics?financeYear=&siteCode="+code+"&org=")
 resp1.then(function(t){
              
     t = t.eProc
    var selchoice2 = document.getElementById("yrsingle")
          
     $("#yrsingle").empty();

     
if(+t[6].secondString == 2020)
{
   // alert(+t[6].secondString)
   
   var option = document.createElement("OPTION");
   option.value = "2020";
   option.innerHTML = "2020-21";
   selchoice2.appendChild(option);

   this.finyeartop = "2020"
}
else{
     for(var yrchoice2 = 2020; yrchoice2 >= +t[6].secondString; yrchoice2--){
      var option2 = document.createElement("OPTION");
      option2.value = +yrchoice2;
      option2.innerHTML = +yrchoice2+"-"+(parseInt(yrchoice2)+1).toString().slice(2);
      selchoice2.appendChild(option2);
     }
 
/*if((selchoice2.length-5) < 0)
{
    selchoice2.selectedIndex =0;
}
else{ */
    selchoice2.selectedIndex = 0;
//}
      var yrindex3 =  Math.abs(selchoice2.selectedIndex);
      this.finyeartop = selchoice2.options[yrindex3].value;
     vm.finyeartop = selchoice2.options[yrindex3].value;

     //  if(vm.tabid == 'StatusOfBidders'){
         var choiceString3 = vm.finyeartop
        var y = document.getElementById("yrsingle").options;
            for(var i = 0; i < y.length; i++) {
                if(y[i].value === choiceString3) {
                   y[i].selected = true;
                    break;
             }
            }
       //  }

      if(vm.tabid == 'StateWiseBidder' && vm.id == 'Bidderyrs'){
          var choiceString4 = vm.biddryr1
             var y = document.getElementById("yrsingle").options;
                for(var i = 0; i < y.length; i++) {
                    if(y[i].value === choiceString4) {
                     y[i].selected = true;
                    break;
                }
            }
          }

        }
 })
  },

     twoyearreturn: function(){
        code = this.code;
     if(code=='ALL' || code == null){
         code = ""
    }
    var choiceString1 = this.choice[0]
    var choiceString2 = this.choice[1]
  

     var resp1 = this.ajaxCall(this.basicURL+"KPI/PanelChartStatistics?financeYear=&siteCode="+code+"&org=")
     resp1.then(function(t){
         t = t.eProc
    var selchoice = document.getElementById("yearsel1")
    var selchoice1 = document.getElementById("yearsel2")

    $("#yearsel1").empty(); 
    $("#yearsel2").empty();

    
if(+t[6].secondString == 2020)
{
   this.selectbox1 = 2020;
   this.selectbox2 = 2020;
 
   var option = document.createElement("OPTION");
   option.value = "2020";
   option.innerHTML = "2020-21";
   selchoice.appendChild(option);

   var option1 = document.createElement("OPTION");
     option1.value = 2020;
     option1.innerHTML = "2020-21";
     selchoice1.appendChild(option1);

   vm.choice = [this.selectbox1 , this.selectbox2]
}
else{
   
          for(var yrchoice =+t[6].secondString; yrchoice <= 2019; yrchoice++){
       var option = document.createElement("OPTION");
       option.value = +yrchoice;
       option.innerHTML = +yrchoice+"-"+(parseInt(yrchoice)+1).toString().slice(2);
       selchoice.appendChild(option);
     }
  // selchoice.selectedIndex =this.indexvalyr1;
  var y = document.getElementById("yearsel1").options;
    for(var i = 0; i < y.length; i++) {
        if(y[i].value == choiceString1) {
            y[i].selected = true;
            break;
        }
    }
 
   var selchoiceval = document.getElementById("yearsel1").value
 
     for(var yrchoice1 =parseInt((selchoiceval))+1; yrchoice1 <= 2020; yrchoice1++){
         var option1 = document.createElement("OPTION");
         option1.value = +yrchoice1;
         option1.innerHTML = +yrchoice1+"-"+(parseInt(yrchoice1)+1).toString().slice(2);
         selchoice1.appendChild(option1);
       }
   //selchoice1.selectedIndex = this.indexvalyr2;

   var x = document.getElementById("yearsel2").options;
   for(var i = 0; i < x.length; i++) {
       if(x[i].value === choiceString2) {
           x[i].selected = true;
           break;
       }
   }
}
 })
     },
    
     
     

kpifortwoString:function(response,bindval,type,choice){
 
    var catvaluearr1 =[]
response.sort(function(a,b){return (+a.firstString) - (+b.firstString)}) 
var finyears = response.map(a => a.firstString+"-"+((+a.firstString)+1).toString().substring(2,4))
var point1 = finyears.indexOf(choice[0]+"-"+(+choice[0]+1).toString().slice(2))
var point2 = finyears.indexOf(choice[1]+"-"+(+choice[1]+1).toString().slice(2))
       finyears = finyears.slice(point1,point2+1)

var valueArr = response.map(a => parseInt(a.secondString))
valueArr = valueArr.slice(point1,point2+1)            
valueArr.unshift("No of KPI")
catvaluearr1.push(valueArr)
//  var catvaluearr1 = []
//    catvaluearr.map(i => {j = i[0];

//                          i = i.slice(point1+1,point2+2);
//                          i.unshift(j);
//                        catvaluearr1.push(i)})
//}
           var chart = c3.generate({
                 bindto: bindval,
                data: {
                    columns: catvaluearr1,
                    type: type, 
                    labels: {
                        format: function (d) {
                            return vm.commaSeparateNumber(d)
                        }
                    },
               selection: {
                        enabled: false 
                    },
                   /* onclick: function (d, element) {
                   
                        vm.drill = true
                             if(!vm.tabid.includes("drill")){
                                   vm.tabid = vm.tabid+"drill" 
                             }
                             var x = chart.categories()[d.index]
                             x = x.slice(0,x.indexOf("-"))
                             vm.year1 = x;
                             vm.finyear = x;
                             vm.cardloader(vm.code)
                             vm.createCharts()
                     }, */
                    labels: true,  
                    bar: {
                        width: {
                            ratio: 0.4 // this makes bar width 50% of length between ticks
                        }
                    },
                    
                    
                },
                
                bar: {
                    width: {
                        ratio: 0.3 
                    }
                    
                },
                axis: {
                    x: { 
                        type: 'category',
                        categories: finyears,
                        label: {
                                text: 'Fin.Year',
                                    position: 'outer-end'
                                
                                
                              }
                    },y: {
                            label: {
                                text: 'No of Days',
                                position: 'outer-middle',
                                
                                
                              }
                            }
                }
    
            });
            d3.select(".c3-axis-x-label").attr("dx","-40").attr("dy","2.6em")
         },
msrstate:function(response){
    console.log(response)
var sec=0,thr=0,four=0,five=0,six=0,seven=0,eig=0,nine=0,ten=0,eleven=0,twelve=0,thirteen=0
 response.data.map(function(obj,ind){
              
if(obj.secondString == null && obj.thirdString ==null && obj.fourthString == null && obj.fifthString == null
  && obj.sixthString == null && obj.seventhString ==null && obj.eighthString == null && obj.ninethString ==null 
   && obj.tenthString ==null && obj.eleventhString ==null && obj.twelvethString ==null && obj.thirteenthString ==null)
              {
                 delete obj
                // response.data.splice(ind, 1)
                 response.data.splice(ind, 1)
              }
             //  delete obj.tenString
               Object.keys(obj).forEach(function(key) {
                   if(obj[key] === null) {
                       obj[key] = "0";
                   }
               })
               if(obj.firstString == "0"){
                   obj.firstString = "Anonymous entity"
               }
               if(obj.firstString == "CPPP (incl NTPC)"){
                obj.firstString = "CPPP"
         }
          
           })
         
    var table = $('#centraltablemsr').DataTable({
     
     
     dom: 'Bfrtip',
     buttons: [ {
         text: 'Excel',
         extend: 'excel',
         title: 'Monthly Statistical Report For Month Of '+this.monthlistcrt[(vm.curmonthsel)-1]+' - '+vm.finyeartop,
         header:true,
          footer: true,
          customize: function (xlsx) {
             var sheet = xlsx.xl.worksheets['sheet1.xml'];
            
function Addrow(index,data) {
 msg='<row r="'+index+'">'
 msg +='<c t="inlineStr" r="A'+index+'"><is><t/></is></c><c t="inlineStr" r="B'+index+'"><is><t>Total :- </t></is></c>'
 for(i=0;i<data.length;i++){
     var key=data[i].key;
     var value=data[i].value;
     msg += '<c r="' + key + index + '" s="65">';
    // msg += '<is>';
     msg +=  '<v>'+value+'</v>';
     //msg+=  '</is>';
     msg+='</c>'; 
 }
 msg += '</row>';
 return msg;
 
}
var indexlen = sheet.childNodes[0].childNodes[1].childElementCount

//insert
var r1 = Addrow(indexlen, [ { key: 'C', value: sec },{ key: 'D', value: (thr).toFixed(2)  }, { key: 'E', value: four },
{ key: 'F', value: (five).toFixed(2) }, { key: 'G', value: ten}, { key: 'H', value: eleven },{ key: 'I', value: six },
 { key: 'J', value: (seven).toFixed(2)},{ key: 'K', value: twelve},{ key: 'L', value: thirteen }, 
{ key: 'M', value: eig }, { key: 'N', value: (nine).toFixed(2) }]);

sheet.childNodes[0].childNodes[1].innerHTML = sheet.childNodes[0].childNodes[1].innerHTML + r1;
   
         },
         autoFilter: true,
         sheetName: 'MSR Report Data',
         exportOptions: {
             columns: ':visible',
             modifier: { order: 'index' },
             
          },
     },
     {
         text: 'PDF',
         extend: 'pdf',
         orientation: 'landscape',
         pageSize: 'LEGAL',
         title: 'Monthly Statistical Report For Month Of '+this.monthlistcrt[(vm.curmonthsel)-1]+' - '+vm.finyeartop,
         header:true,
         footer: true,
         download: 'download',
         
         customize: function (pdfDocument) {
             var rowCount = pdfDocument.content[1].table.body.length;
           //  var j =2;
                 for (i = 0; i < rowCount-1; i++) {
                    for(j = 2; j <=13; j++) {
                     pdfDocument.content[1].table.body[i][j].alignment = 'right';
                    }
                   //  j++
                 };
             pdfDocument.content.forEach(function(item) {
                 if(item.table != undefined){
                     var len = (item.table.body.length)-1
                 item.table.body[len][1].text = "Total :-"
                 item.table.body[len][2].text = vm.commaSeparateNumber(sec)
                 item.table.body[len][3].text = vm.commaSeparateNumber((thr).toFixed(2))
                 item.table.body[len][4].text = vm.commaSeparateNumber(four)
                 item.table.body[len][5].text = vm.commaSeparateNumber((five).toFixed(2))
                 item.table.body[len][6].text = vm.commaSeparateNumber(ten)
                 item.table.body[len][7].text = vm.commaSeparateNumber((eleven).toFixed(2));
                 item.table.body[len][8].text = vm.commaSeparateNumber(six)
                 item.table.body[len][9].text = vm.commaSeparateNumber((seven).toFixed(2))

                 item.table.body[len][10].text = vm.commaSeparateNumber(twelve)
                 item.table.body[len][11].text = vm.commaSeparateNumber((thirteen).toFixed(2));
                 item.table.body[len][12].text = vm.commaSeparateNumber(eig)
                 item.table.body[len][13].text = vm.commaSeparateNumber((nine).toFixed(2))
                 }
             });
             pdfDocument.content[1].table.headerRows = 2;
             var firstHeaderRow = [];
             $('#centraltablemsr').find("thead>tr:first-child>th").each(
               function(index, element) {
                 var colSpan = element.getAttribute("colSpan");
                 if(index <2){
                 firstHeaderRow.push({
                     text:  " ",
                     style: "tableHeader",
                     colSpan: colSpan
                   });
                 }
               else{
                 firstHeaderRow.push({
                   text: element.innerHTML,
                   style: "tableHeader",
                   colSpan: colSpan
                 });
             }
                 for (var i = 0; i < colSpan - 1; i++) {
                   firstHeaderRow.push({});
                 }
               });
             pdfDocument.content[1].table.body.unshift(firstHeaderRow);
            },
         autoFilter: true,
         sheetName: 'MSR Report Data',
         exportOptions: {
             columns: ':visible',
             modifier: { order: 'index' },
          },
     },
     {
         text: 'Print',
         extend: 'print',
         title: 'Monthly Statistical Report For Month Of '+this.monthlistcrt[(vm.curmonthsel)-1]+' - '+vm.finyeartop,
         header:true,
         footer: true,
         
         customize: function ( win ) {

           //For Total to be shown in footer
             $(win.document.body).find('tfoot').find('th')[0].innerHTML = '' ;
             $(win.document.body).find('tfoot').find('th')[1].innerHTML = 'Total :-' ;   
             $(win.document.body).find('tfoot').find('th')[2].innerHTML = sec ;
             $(win.document.body).find('tfoot').find('th')[3].innerHTML = (thr).toFixed(2) ;
             $(win.document.body).find('tfoot').find('th')[4].innerHTML = four ;
             $(win.document.body).find('tfoot').find('th')[5].innerHTML = (five).toFixed(2) ;
             $(win.document.body).find('tfoot').find('th')[6].innerHTML = ten ;
             $(win.document.body).find('tfoot').find('th')[7].innerHTML = (eleven).toFixed(2) ;
             $(win.document.body).find('tfoot').find('th')[8].innerHTML = six ;
             $(win.document.body).find('tfoot').find('th')[9].innerHTML = (seven).toFixed(2) ;
             $(win.document.body).find('tfoot').find('th')[10].innerHTML = twelve ;
             $(win.document.body).find('tfoot').find('th')[11].innerHTML = (thirteen).toFixed(2) ;
             $(win.document.body).find('tfoot').find('th')[12].innerHTML = eig ;
             $(win.document.body).find('tfoot').find('th')[13].innerHTML = (nine).toFixed(2) ;
            

             // For Showing two header on printing the datatable
                var node =  $(win.document.body).find('thead').find('tr')[0]; 
             
                 node.removeChild(node.childNodes[3]);
                 node.removeChild(node.childNodes[4]);
                node.removeChild(node.childNodes[5]);
                 node.removeChild(node.childNodes[6]);
                 node.removeChild(node.childNodes[7]);

                 var i;
                 for(i = 2; i <=7; i++) {
            $(win.document.body).find('thead').find('tr')[0].childNodes[i].colSpan = 2
            $(win.document.body).find('thead').find('tr')[0].childNodes[i].classList = "text-center"
             }
       
            win.print();
         },
         autoFilter: true,
         sheetName: 'MSR Report Data',
         exportOptions: {
             columns: ':visible',
             modifier: { order: 'index' },   
          },
     }
     ],
         colReorder: true,                
               "bDestroy": true,
               aaSorting : [],
              // stateSave: true,			  
          "language": {
                   "emptyTable": "No records to display",
                   "zeroRecords": "No records to display"
                 },
                 "bDeferRender": true,
               searching: true,
               info: false,
               paging: true,
                 "footerCallback": function ( row, data, start, end, display ) {
                       var totalSecond=0,totalThird=0,totalFourth=0,totalFifth=0,totalsixth=0,totalSeventh=0,totalEighth=0;
                       var totalNinth=0,totalten=0,totaleleven=0,totaltwelve=0,totalthirteen=0;
                    
                     for (var i = 0; i < data.length; i++) {
                         totalSecond += (data[i]['secondString']) ? parseInt(data[i]['secondString']) : 0;
                         sec = totalSecond
                         totalThird += (data[i]['thirdString']) ? parseFloat(data[i]['thirdString']) : 0;
                         thr = totalThird
                         totalFourth += (data[i]['fourthString']) ? parseInt(data[i]['fourthString']) : 0;
                         four = totalFourth
                         totalFifth += (data[i]['fifthString']) ? parseFloat(data[i]['fifthString']) : 0;
                         five = totalFifth
                         totalsixth += (data[i]['sixthString']) ? parseInt(data[i]['sixthString']) : 0;
                         six = totalsixth
                         totalSeventh += (data[i]['seventhString']) ? parseFloat(data[i]['seventhString']) : 0;
                         seven = totalSeventh
                         totalEighth += (data[i]['eighthString']) ? parseInt(data[i]['eighthString']) : 0;
                         eig = totalEighth
                         totalNinth += (data[i]['ninethString']) ? parseFloat(data[i]['ninethString']) : 0;
                         nine =totalNinth
                         totalten += (data[i]['tenthString']) ? parseInt(data[i]['tenthString']) : 0;
                         ten = totalten
                         totaleleven += (data[i]['eleventhString']) ? parseFloat(data[i]['eleventhString']) : 0;
                         eleven =totaleleven
                         totaltwelve  += (data[i]['twelvethString']) ? parseInt(data[i]['twelvethString']) : 0;
                         twelve  = totaltwelve
                         totalthirteen += (data[i]['thirteenthString']) ? parseFloat(data[i]['thirteenthString']) : 0;
                         thirteen =totalthirteen

                     } 
                     var api = this.api();
          
                     // Update footer
                      if(end == data.length){  
                         
                     $(api.column(1).footer()).html("Total :-");   
                     $(api.column(2).footer()).html(totalSecond); 
                     $(api.column(3).footer()).html((totalThird).toFixed(2)); 
                     $(api.column(4).footer()).html(totalFourth);
                     $(api.column(5).footer()).html((totalFifth).toFixed(2));
                     $(api.column(6).footer()).html(totalten);
                     $(api.column(7).footer()).html((totaleleven).toFixed(2));
                     $(api.column(8).footer()).html(totalsixth);
                     $(api.column(9).footer()).html((totalSeventh).toFixed(2));
                     $(api.column(10).footer()).html(totaltwelve);
                     $(api.column(11).footer()).html((totalthirteen).toFixed(2));
                     $(api.column(12).footer()).html(totalEighth);
                     $(api.column(13).footer()).html((totalNinth).toFixed(2)); 

                      }
                     else {
                         for(i =1;i<row.childElementCount;i++)
                         $(api.column(i).footer()).html('');  
                       }
                 },
               responsive: true,
               "data": response.data,
              
             columns: [
                   {
                        render: function (data, type, row, meta) {
                            return meta.row+1;
                        }
                   },
                   
                   {
                        //title: "Organisation Name", 
                      render: function (data, type, row, meta) {
                         return row.firstString;
                       }
                   },
                   {
                        //title: "Number Of Tenders", 
                       render: function (data, type, row, meta) {
                           if(row.secondString != null)
                         return vm.commaSeparateNumber(row.secondString);
                         else
                         return 0
                       }
                   },
                   {
                        //title: "Value Of Tenders(in Crores)", 
                       render: function (data, type, row, meta) {
                          // return (parseInt(row.thirdString)/100000).toFixed(2); 
                          if(row.thirdString != null)
                          return vm.commaSeparateNumber(row.thirdString);
                          else
                          return 0
                       }
                   },
                   {
                        //title: "Tender No. Details", 
                       render: function (data, type, row, meta) {
                         if(row.fourthString != null)
                         return vm.commaSeparateNumber(row.fourthString);
                         else
                         return 0
                        }
               
                   },
                   {
                        //title: "Tender Value Details", 
                       render: function (data, type, row, meta) {
                         if(row.fifthString != null)
                          return vm.commaSeparateNumber(row.fifthString); 
                          else
                          return 0
                       }
               
                   },
                   {
                       //Up to the month 2020 - Number
                    render: function (data, type, row, meta) {
                     if(row.tenthString != null)
                       return parseInt(row.tenthString).toFixed(2);  
                       else
                       return 0
                    }
            
                },
                {
                     //Up to the month 2020 - Value
                    render: function (data, type, row, meta) {
                     if(row.eleventhString != null)
                      return parseInt(row.eleventhString).toFixed(2); 
                      else
                      return 0 
                    }
            
                },
               {
                 //title: Financial Year onwards, 
                render: function (data, type, row, meta) {
                 if(row.twelvethString != null)
                   return  vm.commaSeparateNumber(row.sixthString); 
                   else
                   return 0 
                }
        
            },
                   {
                        //title: "Tender Value Details", 
                       render: function (data, type, row, meta) {
                         if(row.thirteenthString != null)
                         return vm.commaSeparateNumber(row.seventhString);
                         else
                         return 0 
                       }
               
                   },
                   
                {
                 //title: Financial Year onwards, 
                render: function (data, type, row, meta) {
                 if(row.sixthString != null)
                  return vm.commaSeparateNumber(row.twelvethString);  
                  else
                  return 0 
                }
        
            },
                   {
                        //title: "Tender Value Details", 
                       render: function (data, type, row, meta) {
                         if(row.seventhString != null)
                         return vm.commaSeparateNumber(row.thirteenthString);
                         else
                         return 0    
                       }
               
                   },
                   {
                        //title: "Tender Value Details", 
                       render: function (data, type, row, meta) {
                         if(row.eighthString != null)
                         return vm.commaSeparateNumber(row.eighthString); 
                         else
                         return 0  
                       }
               
                   },
                   {
                        //title: "Tender Value Details", 
                       render: function (data, type, row, meta) {
                         // return (parseInt(row.ninethString)).toFixed(2);
                         if(row.ninethString != null)
                          return  vm.commaSeparateNumber(row.ninethString);
                          else
                         return 0    
                       }
               
                   }
                   
               ],
               "columnDefs": [
                   { className: "text-right", "targets": [0,2,3,4,5,6,7,8,9,10,11] },
                   { className: "text-left", "targets": [1] }
                 
                 ],
                 "order": [[ 0, 'asc' ]]
                 
           });

},


createpmgsystate:function(response,sinfinyear){

 var indices = [];
               res = response.filter(function (item) {
                    if (!~indices.indexOf(item.secondString)) {
                        indices.push(item.secondString);
                        return item;
                    }
                })
        
 var table = $('#statetable').DataTable({
                  
            
                  aaSorting : [],
                //  stateSave: true,			  
                  "language": {
                      "emptyTable": "Waiting for Records...",
                      "zeroRecords": "No records to display"
                    },		   
                    "bDeferRender": true,
                    "bDestroy": true,
                    "data": res,
                  
                  'searching': true,
                  'responsive': true,
                  'columns': [
                      {
                    render: function (data, type, row, meta) {
                          return meta.row+1;
                      }
                    },
                    {
                        'className': 'details-control',
                        'data': null,
                        'defaultContent': ''
                    },
                    
                      {'data': 'secondString'},
                      {'data': 'thirdString'},
                
                      {
                          /* title: "Organisation Name", */
                          render: function (data, type, row, meta) {
                              return vm.commaSeparateNumber(row.fourthString);
                          }
                      },{
                          /* title: "Organisation Name", */
                          render: function (data, type, row, meta) {
                              return vm.commaSeparateNumber(row.firstString);
                          }
                      }

                  ],
                  "columnDefs": [
                    { className: "text-right", "targets": [0,3,4,5] },
                    { className: "text-left", "targets": [1,2] },
                  ],
                  "order": [[ 0, 'asc' ]]
                  
              });

              function format(d) {
                return new Promise(function (resolve, reject) {
                url = vm.basicURL+"Top10/consolidatednooftenderstatewiseseven.json?financeYear="+vm.finyeartop+"&type=state"
             //   alert(url)
                var r1 = vm.ajaxCall(url)
                r1.then(function(resp){       
                    var i = 0;
                    var expand = new Array();
                    $.each(resp.eProc, function (k, v) {
                        if (v.secondString === d.secondString)
                        {
                            expand[i] = new Object();
                            expand[i].orgname = v.fifthString;
                            expand[i].count = v.sixthString;
                            expand[i].noorg = v.seventhString;
                            i++;
                        } else
                        {
                            i = 0;
                            return true;
                        }
                    });
                    
                    var div = $('<div><table  id=\'child-table\' class=\'table-striped table-bordered\' width="90%"><caption><b>'+d.secondString+'</b></caption><thead><tr style=\'background-color: cadetblue;color: white;text-align:center\'><th style=\' width: 15px \'>S.No</th><th style=\' width: 275px \'>Organisation Name </th><th style=\' width: 70px \'>No. of Tenders </th><th style=\' width: 200px \'>Value of Tenders </br>(Rs. in Crores)</th></tr></thead></table></div>' );

                    var childTable = $('table', div).DataTable({
                        colReorder: true,
                        searching: true,
                        info: false,
                        paging: true,
                        responsive: true,
                        data: expand,
                      //  stateSave: true,			  
                        "language": {
                            "emptyTable": "Waiting for Records...",
                            "zeroRecords": "No records to display"
                          },		   
                          "bDeferRender": true,
                          
                        columns: [{
                                render: function (data, type, row, meta) {
                                      return meta.row+1;
                                  }
                            },
                            {
                                /* title: "Organisation Name", */
                                render: function (data, type, row, meta) {
                                    return row.orgname;
                                }
                            },
                            {
                                /* title: "Number Of counts", */
                                render: function (data, type, row, meta) {
                                    return row.count;
                                }
                            },
                            {
                                /* title: "Number Of counts", */
                                render: function (data, type, row, meta) {
                                    return vm.commaSeparateNumber(row.noorg);
                                }
                            },
                        ],
                        "columnDefs": [
                            { className: "text-center", "targets": [0] },
                            { className: "text-right", "targets": [2,3] },
                            { className: "text-left", "targets": [1] }
                          ],
                          "order": [[ 0, 'asc' ]]
                    });
                    resolve(div);
                })
            });
            }
              
              $('#statetable tbody').on('click', 'td.details-control', function () {
                var tr = $(this).closest('tr');
                var row = table.row(tr);

                if (row.child.isShown()) {
                    // This row is already open - close it
                    row.child.hide();
                    tr.removeClass('shown');
                } else {
                    format(row.data()).then(function (resultno) {
                        row.child(resultno).show();
                    });
                    tr.addClass('shown');
                }
            });
          

},
createstateorg:function(response){

$("#new3").empty();
$('#new3').jQCloud('destroy');

response.forEach(i => {
                      
    if(+i.firstString >= 100000){//1
        i.weight = 35
    }
    else if(+i.firstString < 100000 && +i.firstString >= 50000){//2
        i.weight = 30;
    }
    else if(+i.firstString < 50000 && +i.firstString >= 20000 ){//3
        i.weight = 29;
    }
    
    else if(+i.firstString < 20000 && +i.firstString >= 10000 ){//4
        i.weight = 28;
    }
    
    else if(+i.firstString < 10000 && +i.firstString >= 9000){//5
        i.weight = 26;
    }
    else if(+i.firstString < 9000 && +i.firstString >= 8000){//6
        i.weight = 24;
    }
    
    else if(+i.firstString < 8000 && +i.firstString >= 7000){//7
        i.weight = 22;
    }
    else if(+i.firstString < 7000 && +i.firstString >= 6000){//8
        i.weight = 20;
    }
    else if(+i.firstString < 6000 && +i.firstString >= 5000){//9
        i.weight = 18;
    }
    else if(+i.firstString < 5000 && +i.firstString >= 4000){//10
        i.weight = 16;
    }
    else if(+i.firstString < 4000 && +i.firstString >= 3000){//11
        i.weight = 14;
    }
    else if(+i.firstString < 3000 && +i.firstString >= 2000){//12
        i.weight = 12;
    }
    else if(+i.firstString < 2000 && +i.firstString >= 1000){//13
        i.weight = 10;
    }
    else if(+i.firstString < 1000 && +i.firstString >= 800){//14
        i.weight = 8;
    }
    else if(+i.firstString < 800 && +i.firstString >= 500){//15
        i.weight = 6;
    }
    else if(+i.firstString < 500 && +i.firstString >= 300){//16
        i.weight = 4;
    }
    else if(+i.firstString < 300 && +i.firstString >= 0){//17
        i.weight = 3;
    }

})
            let words = new Array();
            response.map(i => ({text: i.secondString, weight: + i.weight, html: {"data-tooltip": "Value of Tenders(Rs. in Crores): "+ i.firstString}})).forEach((i,j,arr) => {
              let k = j;
               
               ((j < arr.length - 1) && (i.text == arr[++k].text))?arr:words.push(i)  
          
          
          })
    words = words.filter( el => el.text !== "Pradhan Mantri Gram Sadak Yojana");
            
          let config = {
                autoResize: true,
                height: 500,
                delay: 10,				
                shape: 'elliptic',				
                colors: ['#EE2524','#EE224A','#f05561',"EE573D","#F05123","#FEE851","#22AF4B","#91c13e","#35b997","#08b9a5","#f0e995"]
                }
       let bindval = "#new3"
           $(bindval).jQCloud(words,config)  
           
},

createcentralorg:function(response,bindval){
    $("#new1").empty();
    $('#new1').jQCloud('destroy');

//$(bindval).empty();
 response.forEach(i => {
                      
                   if(+i.fourthString >= 100000){//1
                       i.weight = 35
                   }
                   else if(+i.fourthString < 100000 && +i.fourthString >= 50000){//2
                       i.weight = 30;
                   }
                   else if(+i.fourthString < 50000 && +i.fourthString >= 20000 ){//3
                       i.weight = 29;
                   }
                   
                   else if(+i.fourthString < 20000 && +i.fourthString >= 10000 ){//4
                       i.weight = 28;
                   }
                   
                   else if(+i.fourthString < 10000 && +i.fourthString >= 9000){//5
                       i.weight = 26;
                   }
                   else if(+i.fourthString < 9000 && +i.fourthString >= 8000){//6
                       i.weight = 24;
                   }
                   
                   else if(+i.fourthString < 8000 && +i.fourthString >= 7000){//7
                       i.weight = 22;
                   }
                   else if(+i.fourthString < 7000 && +i.fourthString >= 6000){//8
                       i.weight = 20;
                   }
                   else if(+i.fourthString < 6000 && +i.fourthString >= 5000){//9
                       i.weight = 18;
                   }
                   else if(+i.fourthString < 5000 && +i.fourthString >= 4000){//10
                       i.weight = 16;
                   }
                   else if(+i.fourthString < 4000 && +i.fourthString >= 3000){//11
                       i.weight = 14;
                   }
                   else if(+i.fourthString < 3000 && +i.fourthString >= 2000){//12
                       i.weight = 12;
                   }
                   else if(+i.fourthString < 2000 && +i.fourthString >= 1000){//13
                       i.weight = 10;
                   }
                   else if(+i.fourthString < 1000 && +i.fourthString >= 800){//14
                       i.weight = 8;
                   }
                   else if(+i.fourthString < 800 && +i.fourthString >= 500){//15
                       i.weight = 6;
                   }
                   else if(+i.fourthString < 500 && +i.fourthString >= 300){//16
                       i.weight = 4;
                   }
                   else if(+i.fourthString < 300 && +i.fourthString >= 0){//17
                       i.weight = 3;
                   }
            
               })
               
       let words = response.map(i => (
           {text: i.thirdString, weight: +i.weight, html: {"data-tooltip": "Value of Tenders(Rs. in Crores): "+ i.fourthString}}
           ))

               let config = {
            autoResize: true,
            height: 500,
            delay: 10,	
            shape: 'elliptic',				
            colors: ['#EE2524','#EE224A','#f05561',"EE573D","#F05123","#FEE851","#22AF4B","#91c13e","#35b997","#08b9a5","#f0e995"]
                  }
             //  let bindval = "#new"
             //document.getElementById(bindval).innerHTML = $(bindval).jQCloud(words,config)
         
            $("#new1").jQCloud(words,config) 	

},

orgCorrigendumtable:function(response){

 response.forEach(function(i,j){
     if(i.fourthString != null && i.secondString != null){
         if(i.fourthString !=0 && (i.secondString !=0)){
  i.thirdString = parseFloat(i.fourthString/i.secondString).toFixed(2)
         }
    else
    i.thirdString = 0;
        }
        else
        i.thirdString = 0;
 })

 response = response.sort(function(a,b){
     return  b.secondString - a.secondString;
     }
 );
 var table = $('#OrgCorrigendumtable').DataTable({
            aaSorting : [],
          //  stateSave: true,			  
            "language": {
                "emptyTable": "Waiting for Records...",
                "zeroRecords": "No records to display"
              },		   
              "bDeferRender": true,
              "bDestroy": true,
               "data": response,
            'responsive': true,
            
            'searching': true,

            'columns': [
               {
              render: function (data, type, row, meta) {
                  return meta.row+1;
              }
           },
                {'data': 'firstString'},
             {
                    /* Number of Tender */
                    render: function (data, type, row, meta) {
                        return vm.commaSeparateNumber(row.secondString);
                    }
                },
                {
                    /* Corrigendum Total*/
                    render: function (data, type, row, meta) {
                        if(row.fourthString != null)
                   return vm.commaSeparateNumber(row.fourthString);
                   else
                     return 0
                       
                    }
                },
                {
                 /* Without Corrigendum Total*/
                 render: function (data, type, row, meta) {
                     if(row.fifthString != null)
                return vm.commaSeparateNumber(row.fifthString);
                else
                  return 0
                    
                 }
             },
                {
                 /* Avg Corrigendum Total*/
                 render: function (data, type, row, meta) {
                     if(row.thirdString != null)
                return parseFloat(row.thirdString).toFixed(2);
                else
                  return 0
                    
                 }
             },
             {
                 /* Max Corrigendum per Tender*/
                 render: function (data, type, row, meta) {
                     if(row.sixthString != null)
                return vm.commaSeparateNumber(row.sixthString);
                else
                  return 0
                    
                 }
             },
             // {
             //     /* Cancelled Total*/
             //     render: function (data, type, row, meta) {
             //         if(row.sixthString != null)
             //    return vm.commaSeparateNumber(row.sixthString);
             //    else
             //      return 0
                    
             //     }
             // },
             // {
             //     /* Date Total*/
             //     render: function (data, type, row, meta) {
             //         if(row.seventhString != null)
             //    return vm.commaSeparateNumber(row.seventhString);
             //    else
             //      return 0
                    
             //     }
             // },
             // {
             //     /* Other Total*/
             //     render: function (data, type, row, meta) {
             //         if(row.seventhString != null)
             //    return vm.commaSeparateNumber(row.eighthString);
             //    else
             //      return 0
                    
             //     }
             // },

            ],
            "columnDefs": [
                { className: "text-right", "targets": [2,3,4,5,6] },
                { className: "text-center", "targets": [0] },
                { className: "text-left", "targets": [1] }
              
              ],
              "order": [[ 0, 'asc' ]]
        });
        
   //  yearcode= this.finyeartop
      $("#centraltable caption").html("<b>Financial Year: "+this.finyeartop+"-"+(parseInt(this.finyeartop)+1).toString().substring(2)+"</b>")
              
},
orgCorrigendum:function(response){
 response.forEach(function(i,j){
     if(i.fourthString != null)
  i.fourthString = parseFloat(i.thirdString/i.secondString).toFixed(2)
    else
    return 0;
 })

 response = response.sort(function(a,b){
     return  b.fourthString - a.fourthString;
     }
 );
 // /this.dbtopic = text
 var table = $('#OrgCorrigendum').DataTable({
            aaSorting : [],
          //  stateSave: true,			  
            "language": {
                "emptyTable": "Waiting for Records...",
                "zeroRecords": "No records to display"
              },		   
              "bDeferRender": true,
              "bDestroy": true,
               "data": response,
            'responsive': true,
            
            'searching': true,
           

            'columns': [
               {
              render: function (data, type, row, meta) {
                  return meta.row+1;
              }
           },
           /* title: "Organisation Name", */
                {'data': 'firstString'},
             {
                    /* No. Of Tender */
                    render: function (data, type, row, meta) {
                     if(row.secondString != null)
                        return vm.commaSeparateNumber(row.secondString);
                        else
                        return 0
                    }
                },
                {
                    /* No.Of Corrigendum */
                    render: function (data, type, row, meta) {
                        if(row.thirdString != null)
                   return vm.commaSeparateNumber(row.thirdString);
                   else
                     return 0
                       
                    }
                },
                {
                 /* Avg No.Of Corrigendum */
                 render: function (data, type, row, meta) {
                     if(row.fourthString != null)
                return row.fourthString;
                else
                  return 0
                    
                 }
             },

            ],
            "columnDefs": [
                { className: "text-right", "targets": [2,3,4] },
                { className: "text-center", "targets": [0] },
                { className: "text-left", "targets": [1] }
              
              ],
              "order": [[ 0, 'asc' ]]
        });
        
   //  yearcode= this.finyeartop
      $("#centraltable caption").html("<b>Financial Year: "+this.finyeartop+"-"+(parseInt(this.finyeartop)+1).toString().substring(2)+"</b>")
              
},
createcentraldept:function(response){

   var table = $('#centraltable').DataTable({
              aaSorting : [],
            //  stateSave: true,			  
              "language": {
                  "emptyTable": "Waiting for Records...",
                  "zeroRecords": "No records to display"
                },		   
                "bDeferRender": true,
                "bDestroy": true,
                 "data": response,
              'responsive': true,
              
              'searching': true,
             

              'columns': [
                 {
                render: function (data, type, row, meta) {
                    return meta.row+1;
                }
             },
                  {'data': 'thirdString'},
                                   {
                      /* title: "Organisation Name", */
                      render: function (data, type, row, meta) {
                          return vm.commaSeparateNumber(row.fourthString);
                      }
                  },
                  {
                      /* title: "Organisation Name", */
                      render: function (data, type, row, meta) {
                     return vm.commaSeparateNumber(row.firstString);
                         
                      }
                  },

              ],
              "columnDefs": [
                  { className: "text-right", "targets": [2,3] },
                  { className: "text-center", "targets": [0] },
                  { className: "text-left", "targets": [1] }
                
                ],
                "order": [[ 0, 'asc' ]]
          });
          
     //  yearcode= this.finyeartop
        $("#centraltable caption").html("<b>Financial Year: "+this.finyeartop+"-"+(parseInt(this.finyeartop)+1).toString().substring(2)+"</b>")
                
},

commaSeparateNumber:function (val){
    if(val != null){
    var x=val;
    var y = '';
    var n1=0;
   x=x.toString();
   if(x.includes("."))
  {
     y = x.toString();
      n1 = x.indexOf(".");
      x = x.substring(0,n1)
  }
   var lastThree = x.substring(x.length-3);
   var otherNumbers = x.substring(0,x.length-3);
   
   if(otherNumbers != '' )
       lastThree = ',' + lastThree;
   var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
   if(y.includes(".")){
     var n2 = y.substring(n1,y.length)
     n2=n2.toString();
     return res+n2; 
   }
   else{
       return res;
     }
 }   
     },
     SeparateWords:function (a){
         if(a !=undefined)
        {
        //var res = a.split(/((?:\w+ ){4})/g).filter(Boolean).join("\n");
       var value =  a.replace(/,|\.|-/g, ' ');   // a.replace(/-/g, ' ')
        var res = value.split(/((?:\w+ ){4})/g).filter(Boolean);
        if( (res[1] !=undefined) )
        {
      if( (res[1].split(" ").length) < 5)
      {
         res = value.split(/((?:\w+ ){4})/g).filter(Boolean);
      }
     }
 return res;
     }
       
          },
TenderNoValueNoOrgStateLast12Monthwise:function(response,bindval,type,text,valarr,string)
     {	  
            var lableString="";
            var value="";
              response=response.reverse();
             var finyears=new Array();
            var valueArr=new Array(valarr);
            var initarray = new Array(valarr);
             var years=new Array();
              
             // test.push("data1");
              var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
              for(var i in response){
                  if(+(response[i]['firstString']))
                  {
                     
                      
                           finyears.push(months[+(response[i].secondString) - 1]+"-"+((response[i]['firstString'].substring(2,4)/1)));
                           valueArr.push(+(response[i][string]));
                           initarray.push(0)
                 
                  }
             }
              
             if(bindval.includes("2")||bindval.includes("4"))
             {
                 valueArr = valueArr.reverse()
                 valueArr.unshift(valueArr.pop());
                 finyears = finyears.reverse();
                 
                 
                     
             }
             else
                 {""}
                         var chart = c3.generate({
                              bindto: bindval,
                              data: {
                                 columns: [valueArr],
                                     type: type,
                                     colors: {
                                         'No. Of Tenders': '#e67e22',
                                         "Value of Tenders (Rs. in Crores)" : 'green',
                                         'No. Of Bids' : '#535c68'
                                     },
                                     labels: {
                                        format: function (d) {
                                            return vm.commaSeparateNumber(d)
                                        }
                                  },
                                },
                                  legend: {
                                      show: false
                                  },
                                  tooltip: {


                                     contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
                                         let conten = '';
                                        
                                        

                                         for (i = 0; i < chart.data().length; i++) {
                             if( (d[i].id == 'No. Of Tenders') || (d[i].id == 'Value of Tenders (Rs. in Crores)') )
                             {

                    var indexid = (d[i].id == 'No. Of Tenders') ? "# Tenders":"&#8377; Tenders (Rs. in Crores)"
                         var colorid = ( [d[i].id] == 'No. Of Tenders') ? "#e67e22" : "green"

                                  conten += "<tr><td><span style='background-color:" + colorid +
                                      ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + indexid + "</td>" +
                                      "<td style='text-align: right;'>" + vm.commaSeparateNumber(d[i].value) + "</td></tr>"
                              
                             }
                             else
                             {
                                     
                                      conten += "<tr><td><span style='background-color:" + this.config.data_colors[d[i].id] +
                                          ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + d[i].id + "</td>" +
                                          "<td style='text-align: right;'>" + vm.commaSeparateNumber(d[i].value) + "</td></tr>"
                                  
                             }
                                }
                                       return ("<table class='c3-tooltip'>" +
                                             " <thead><tr><th colspan='2'>" + this.config.axis_x_categories[d[0].x] + "</tr></thead>" +
                                             "<tbody>" + conten +
                                             "</tbody></table>"
                                         )
                                     }
                         
                         
                                 },
                             axis: {
                                 x: {
                                     
                                    
                                     type: 'category',
                                     categories: finyears,label: {
                                            text: 'Year and Months',
                                            position: 'outer-center' 
                                      }
                                 },y: {	
                                      
                                     padding: {bottom: 0},
                                       min: 0,
                                     label: {
                                         text: text,
                                         position: 'outer-middle',
                                       }
                                       
                                     }
                             }
                         });
                         d3.select(".c3-axis-x-label").attr("dx","0").attr("dy","2.8em")
},
commonyearKPIdrill:function(response,bindval,pyear){
    
pyear=parseInt(this.finyear);
toyear=pyear+parseInt(1);

var valueArr=new Array("No. of Days");
var years=new Array();
 for(var i in response){
     if(response[i]['firstString']!=null)
        {
        lableString= response[i]['firstString'];
        value=response[i]['secondString'];
        valueArr.push(parseInt(value));
        years.push(lableString) 
        }
}

    var tester = response.map(function(i,j){ return i.firstString})
      years.length = 0
      valueArr.length = 0
      valueArr.push(" No. of Days ")
      years = montharr	  
         montharr.forEach(function(i,j){
             if(tester.includes(i)){
                 var t = response[tester.indexOf(i)]['secondString']
                  valueArr.push(t == null?0:t)	 
             }
             
             else
                 valueArr.push(0)
         })

 var chart = c3.generate({
     bindto: bindval,
     data: {
              columns: [valueArr],
              type: type,
              labels: {
                format: function (d) {
                    return vm.commaSeparateNumber(d)
                }
            },
              colors: color,
           }, legend: {
               show: false
           },
    axis: {
        x: {
            label: {
                   text: 'Month',
                   position: 'outer-middle',
                   
                   
                 },
            type: 'categorized',
            categories:years
        },
        y: {min:0,
            max:100,
            padding:{bottom:0},
            label: {
                   text: 'No of days',
                   position: 'outer-center',
                   
                   
                 },
           
        },
        rotated: true
    },
});
           
},
commontypeKPIdrill:function(response,bindval,pyear,str='thirdString',str1='secondString'){

            pyear=parseInt(this.finyear);
            toyear=pyear+parseInt(1);
            var years=new Array();
            
             var keyarray=new Array(); 
             var montharr=new Array();
             var catearray=new Array(); 
               for(var i in response){
                   if(response[i]['firstString']!=null)
                   { 
        years.push(response[i]['firstString']) } 
                catearray.push(response[i][str1]);
                
             }
             //  years=montharr
              catearray=catearray.unique();
          years=years.unique();
          
              var catvaluearr=new Array();
           for(var k in catearray){  
               catvaluearr[k]=new Array();
               catvaluearr[k].push(catearray[k]);
           }

           for(var k in catearray){
                  var res = response.filter(function(i,j){
                      if(str1 == 'secondString'){
                    return i.secondString == catearray[k]
                      }
                      else{
                         return i.thirdString == catearray[k] 
                      }
                     })
                  var tester = res.map( (i,j) => i.firstString )
                    years.forEach(function(i,j){
                        if(tester.includes(i)){
                            catvaluearr[k].push(res[tester.indexOf(i)][str]);
                        }
                        else{
                            catvaluearr[k].push(0)
                        }
                    })
               }  
            var chart = c3.generate({
                 bindto: bindval,
                data: {
                    columns: 
                        catvaluearr,
                        type: 'bar', 
                        colors:
                        {
                          'Open' :'#82589F',
                          'Limited' : '#B33771',
                          'Others' : '#3B3B98',
                           'Single': '#ED4C67'
                        },
                        labels: {
                            format: function (d) {
                                return vm.commaSeparateNumber(d)
                            }
                        },
                }, 
                bar: {
                   width: {
                       ratio: 0.8// this makes bar width 50% of length between ticks
                   }
                },
               axis: {
               x: {
                   type: 'categorized',
                   categories:years,
                   label:{
                       text:'Month',
                       position:'outer-middle'
                   }
            
                   
               }, y:{
              padding: {bottom:0},
             label: {
                 text: 'No.of Days',
                 position: 'outer-middle',         
               }
               },
               rotated: false
           },         
            });
        },
       
cretenderpublishedandfineval:function(response,bindval,type,choice,enable)
{
    //response=response['eProc']
    var years=new Array();
    var finyears=new Array();
     var keyarray=new Array(); 
     var catearray=new Array(); 
     //var valarray=new Array();
       for(var i in response){
           
           if(response[i]['firstString']!=null)
           {
               years.push(response[i]['firstString']/1) ;
               finyears.push(response[i]['firstString']/1+'-'+((response[i]['firstString'].substring(2,4)/1)+1)) ;   
            } 
        //keyarray.push(response[i]['firstString']);
        catearray.push(response[i]['secondString']);
        
      }
       years=years.unique();
       finyears=finyears.unique();

         var point1 = finyears.indexOf(choice[0]+"-"+(+choice[0]+1).toString().slice(2))
            var point2 = finyears.indexOf(choice[1]+"-"+(+choice[1]+1).toString().slice(2))
           
            finyears = finyears.slice(point1,point2+1)
     
          catearray=catearray.unique();
   
       var catvaluearr=new Array();
    for(var k in catearray){  
        catvaluearr[k]=new Array();
        catvaluearr[k].push(catearray[k]);
    }

           
           for(var k in catearray){  
              for(var i in years){
               var  len=catvaluearr[k].length;
               
              
           for(var j in response){
               
               if(response[j]['firstString']==years[i] && response[j]['secondString']==catearray[k] && response[j]['firstString']!=null)
               
                   {
                      catvaluearr[k].push(response[j]['thirdString']/1);
                   }
           }
         
           var  len1=catvaluearr[k].length;
          
           if(len1==len && len<years.length ){
               catvaluearr[k].push(0);
           }
           
           }
           
       }

var catvaluearr1 = []
catvaluearr.map(i => {j = i[0];
i = i.slice(point1+1,point2+2);
                      i.unshift(j);
                    catvaluearr1.push(i)})

     var chart = c3.generate({
         bindto: bindval,
        data: {
            columns: 
                catvaluearr1
            ,type: type, 
            colors:
            {
              'Open' :'#82589F',
              'Limited' : '#B33771',
              'Others' : '#3B3B98',
               'Single': '#ED4C67'
            },
            labels: {
                format: function (d) {
                    return vm.commaSeparateNumber(d)
                }
            },
          selection: {
                enabled: true
            },
                onclick: function (d, element) {
               //  if(enable){
                   vm.drill = true
                        if(!vm.tabid.includes("drill")){
                              vm.tabid = vm.tabid+"drill" 
                        }
                        var x = chart.categories()[d.index]
                        x = x.slice(0,x.indexOf("-"))
                        vm.year1 = x;
                        vm.finyear = x;
                        vm.cardloader(vm.code)
                       vm.createCharts()
                    //} 
                }
        },
          bar: {
                width: {
                    ratio: 0.3 
                }
                
            },
        
     
       /* color: {	
             pattern: ['#80bdab','#0a97b0','#ff9595']
           },
        legend: {
            position: 'inset',
           inset: {
                anchor: 'top-right',
                x: 50,
                y: -5
               
            }
        },*/
        axis: {
            x: {
                type: 'category',
                categories: finyears,label: {
                       text: 'Fin.Year',
                        position: 'outer-end'
                    
                  }
            },y: {
                   label: {
                       text: 'No of Days',
                       position: 'outer-middle',
                       
                       
                     }
                   }
        }
    });
    d3.select(".c3-axis-x-label").attr("dx","-40").attr("dy","2.6em")
    },

    createkpiavebid:function(response,bindval,type,choice,flag){
 
    response.sort(function(a,b){return (+a.firstString) - (+b.firstString)}) 
    var finyears = response.map(a => a.firstString+"-"+((+a.firstString)+1).toString().substring(2,4))
    var point1 = finyears.indexOf(choice[0]+"-"+(+choice[0]+1).toString().slice(2))
    var point2 = finyears.indexOf(choice[1]+"-"+(+choice[1]+1).toString().slice(2))
  
    finyears = finyears.slice(point1,point2+1)

var tenderpub = new Array();
response.map(a => {
if(a.secondString != undefined){
    tenderpub.push(a.secondString)
} else{
    tenderpub.push(0)
}
})
tenderpub = tenderpub.slice(point1,point2+1)
tenderpub.unshift('Tender Conclude')

var BidValidity = response.map(a => a.thirdString)
BidValidity = BidValidity.slice(point1,point2+1)
BidValidity.unshift("Bid Validity")

var tenderno = response.map(a =>a.fourthString)
tenderno = tenderno.slice(point1,point2+1)

var tenderval = response.map(a => a.fifthString)
tenderval = tenderval.slice(point1,point2+1)

var valueArr = [tenderpub,BidValidity]


var chart = c3.generate({
bindto: bindval,
data: {
    columns: valueArr,
    type: 'bar',
    labels: true,
selection: {
               enabled: flag
           },
              onclick: function (d, element) {
                  if(flag){
                  vm.drill = true
                 if(!vm.tabid.includes("drill")){
                       vm.tabid = vm.tabid+"drill" 
                 }
                 var x = chart.categories()[d.index]
                 x = x.slice(0,x.indexOf("-"))
                 vm.year1 = x;
                 vm.finyear = x;
                 vm.cardloader(vm.code)
                vm.createCharts()
             }

              }

},
bar: {
    
    width: {
      
      ratio: 0.5  
   }
      
  },
  tooltip: {                           
                       
     contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
    
         var conten = ""
         
        for (i = 0; i < chart.data().length; i++) {
            conten += "<tr><td><span style='background-color:"+this.config.data_colors[d[i].id]+
            ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + d[i].id + "</td>" +
            "<td style='text-align: right;'>" + tenderno[d[i].index] + "</td>"+
            "<td style='text-align: right;'>" + tenderval[d[i].index] + "</td>"+
            "<td style='text-align: right;'>" + d[i].value + "</td></tr>"
         }

        return ("<table class='c3-tooltip'>" +
" <thead><tr><th colspan='4' style='background:#0099CC; color:black;'>" + this.config.axis_x_categories[d[0].x] + "</tr></thead>" +
  " <thead><tr><th style='background:skyblue; color:black;'>Category</th>"+
  "<th style='background:skyblue;color:black'>No. of Tender</th><th style='background:skyblue;color:black'>Value of Tender<br>(Rs. in Crores)</th>"+
  "<th style='background:skyblue;color:black'>Avg. Days</th></tr></thead>" +
        "<tbody>" + conten +
        "</tbody></table>")
     }


 },
    padding: {
      left:90
    },
legend: {
    show: true
},
axis: {
    x: {
        type: 'category',
        categories: finyears,
        label: {
            text: 'Fin.Year',
            position: 'outer-end'

        }
    },
    y: {
        padding: {
            bottom: 5
        },
        min: 0,
        label: {

            text: 'No.of Bids',
            position: 'outer-middle',
        }
    }
}

});

 },
    createkpiavebid1:function(response,res,bindval,type,choice){
    
     var years=new Array();
     var finyears=new Array();
      var tendernoarr=new Array(); 
      var tendervalarr=new Array(); 
      var catearray=new Array(); 
    


        for(var i in response){
          //  var res = str.substring(1, 4);
            if(response[i]['firstString']!=null)
            {
                //alert(response[i]['firstString'].substring(2,3))
                years.push(response[i]['firstString']/1) ;
                finyears.push(response[i]['firstString']/1+'-'+((response[i]['firstString'].substring(2,4)/1)+1)) ;
             } 
         //keyarray.push(response[i]['firstString']);
         catearray.push(response[i]['secondString']);
        //tendernoarr.push(res[i]['secondString']);  //For Number of Tender
     //    tendervalarr.push(res[i]['thirdString']);  //For Value of Tender
         }

        years=years.unique();
        finyears=finyears.unique();
        catearray=catearray.unique();
     
 
          var point1 = finyears.indexOf(choice[0]+"-"+(+choice[0]+1).toString().slice(2))
             var point2 = finyears.indexOf(choice[1]+"-"+(+choice[1]+1).toString().slice(2))
            
             finyears = finyears.slice(point1,point2+1)
             
            // tendernoarr = tendernoarr.slice(point1,point2+1)  //Slice the Number of Tender
           //  tendervalarr = tendervalarr.slice(point1,point2+1)  //Slice the Value of Tender
        

         for( var l =0; l<=res.length; l++){
             
         }
         var catvaluearr=new Array();
         var initarray = new Array();
     for(var k in catearray){  
         catvaluearr[k]=new Array();
         catvaluearr[k].push(catearray[k]);
         tendernoarr[k]=new Array(); //Number of Tender
         tendervalarr[k]=new Array(); // Value of Tender
         initarray[k]=new Array();
         initarray[k].push(catearray[k]);
     }
     
          
            for(var k in catearray){  
               for(var i in years){
                var  len=catvaluearr[k].length;
                
               
            for(var j in response){
              
                if(response[j]['firstString']==years[i] && response[j]['secondString']==catearray[k] && response[j]['firstString']!=null)
                
                    {
                       catvaluearr[k].push(response[j]['thirdString']/1);  
                       initarray[k].push(0)
                    }
              
            }
          
            var  len1=catvaluearr[k].length;
           
            if(len1==len && len<years.length ){
                catvaluearr[k].push(0);
            }
            
            }
            
        }

     
    var catvaluearr1 = []
 catvaluearr.map(i => {j = i[0];
 
                       i = i.slice(point1+1,point2+2);
                       i.unshift(j);
                     catvaluearr1.push(i)})

     //Number of Tender and Value of Tender

     var yr = new Array()
            for(var k in catearray){  
               for(var i in years){
                 var  lenno =tendernoarr[k].length;
                 var  lenval =tendervalarr[k].length;
            for(var j in res){
               
                if(res[j]['firstString']==years[i] && res[j]['fifthString']==catearray[k] && res[j]['firstString']!=null)
                    {
                        
                     tendernoarr[k].push(res[j]['secondString']);  //For Number of Tender
                     tendervalarr[k].push(res[j]['thirdString']);  //For Value of Tender
                    
                  }

               
     }
     var  len1=tendernoarr[k].length;
     var  len2=tendervalarr[k].length;
           
     if(len1==lenno && lenno<years.length ){
         tendernoarr[k].push(0);
     }
     if(len2==lenval && lenval<years.length ){
         tendervalarr[k].push(0);
     }
            }
            
        }
 //Number of Tenders
 var tendernoarr1 = []
 tendernoarr.map(i => {
              i = i.slice(point1,point2+1);
               tendernoarr1.push(i)})
                 
 //Value of Tenders
 var tendervalarr1 = []
 tendervalarr.map(i => {
             i = i.slice(point1,point2+1);
             tendervalarr1.push(i)})

            var chart = c3.generate({
                  bindto: bindval,
                 data: {
                     columns: catvaluearr1
                     ,type: type, 
                     colors:
                     {
                       'Open' :'#82589F',
                       'Limited' : '#B33771',
                       'Others' : '#3B3B98',
                        'Single': '#ED4C67'
                     },
                     labels: {
                         format: function (d) {
                             return vm.commaSeparateNumber(d)
                         }
                     },
                selection: {
                         enabled: false 
                     },
                     /*onclick: function (d, element) {
                    
                         vm.drill = true
                              if(!vm.tabid.includes("drill")){
                                    vm.tabid = vm.tabid+"drill" 
                              }
                              var x = chart.categories()[d.index]
                              x = x.slice(0,x.indexOf("-"))
                              vm.year1 = x;
                              vm.finyear = x;
                              vm.cardloader(vm.code)
                              vm.createCharts()
                      }, */
                     labels: true,  bar: {
                         width: {
                             ratio: 0.4 // this makes bar width 50% of length between ticks
                         }
                         // or
                         //width: 100 // this makes bar width 100px
                     },
                     
                     
                 },
                 
                 bar: {
                     width: {
                         ratio: 0.3 
                     }
                     
                 },
             
              /* legend: {
                     position: 'inset',
                     inset: {
                          anchor: 'top-right',
                          x: 50,
                          y: -5
                         
                      }
                  },*/
                  tooltip: {                           
                       
                      contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
                     
                          var conten = ""
                          
                         for (i = 0; i < chart.data().length; i++) {
                             conten += "<tr><td><span style='background-color:"+this.config.data_colors[d[i].id]+
                             ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + d[i].id + "</td>" +
                             "<td style='text-align: right;'>" + tendernoarr1[i][d[i].index] + "</td>"+
                             "<td style='text-align: right;'>" + tendervalarr1[i][d[i].index] + "</td>"+
                             "<td style='text-align: right;'>" + d[i].value + "</td></tr>"
                          }
         
                         return ("<table class='c3-tooltip'>" +
                 " <thead><tr><th colspan='4' style='background:#0099CC; color:black;'>" + this.config.axis_x_categories[d[0].x] + "</tr></thead>" +
                   " <thead><tr><th style='background:skyblue; color:black;'>Type</th>"+
                   "<th style='background:skyblue;color:black'>No. of Tender</th><th style='background:skyblue;color:black'>Value of Tender<br>(Rs. in Crores)</th>"+
                   "<th style='background:skyblue;color:black'>Avg. Days</th></tr></thead>" +
                         "<tbody>" + conten +
                         "</tbody></table>")
                      }
         
         
                  },
                 
                 axis: {
                     x: { 
                         type: 'category',
                         categories: finyears,
                         label: {
                                 text: 'Fin.Year',
                                     position: 'outer-end'
                                 
                                 
                               }
                     },y: {
                             label: {
                                 text: 'No of Days',
                                 position: 'outer-middle',
                                 
                                 
                               }
                             }
                 }
     
             });
             d3.select(".c3-axis-x-label").attr("dx","-40").attr("dy","2.6em")
     }, 
createkpiavebidsub:function(response,bindval,type,choice){

// if(category == 'without'){
//       var catvaluearr1 =[]
// response.sort(function(a,b){return (+a.firstString) - (+b.firstString)}) 
// var finyears = response.map(a => a.firstString+"-"+((+a.firstString)+1).toString().substring(2,4))
// var point1 = finyears.indexOf(choice[0]+"-"+(+choice[0]+1).toString().slice(2))
// var point2 = finyears.indexOf(choice[1]+"-"+(+choice[1]+1).toString().slice(2))
//          finyears = finyears.slice(point1,point2+1)

// var valueArr = response.map(a => parseInt(a.secondString))
// valueArr = valueArr.slice(point1,point2+1)            
// valueArr.unshift("No of KPI")
// catvaluearr1.push(valueArr)
// }
// else{
    var years=new Array();
    var finyears=new Array();
     var keyarray=new Array(); 
     var catearray=new Array(); 
     //var valarray=new Array();
       for(var i in response){
         //  var res = str.substring(1, 4);
           if(response[i]['firstString']!=null)
           {
               //alert(response[i]['firstString'].substring(2,3))
               years.push(response[i]['firstString']/1) ;
               finyears.push(response[i]['firstString']/1+'-'+((response[i]['firstString'].substring(2,4)/1)+1)) ;
            } 
        //keyarray.push(response[i]['firstString']);
        catearray.push(response[i]['secondString']);
        
        }
       years=years.unique();
       finyears=finyears.unique();
       catearray=catearray.unique();
    

         var point1 = finyears.indexOf(choice[0]+"-"+(+choice[0]+1).toString().slice(2))
            var point2 = finyears.indexOf(choice[1]+"-"+(+choice[1]+1).toString().slice(2))
           
            finyears = finyears.slice(point1,point2+1)
            
        
         
    
        var catvaluearr=new Array();
        var initarray = new Array();
    for(var k in catearray){  
        catvaluearr[k]=new Array();
        catvaluearr[k].push(catearray[k]);
        initarray[k]=new Array();
        initarray[k].push(catearray[k]);
    }
           for(var k in catearray){  
              for(var i in years){
               var  len=catvaluearr[k].length;
               
              
           for(var j in response){
               
               if(response[j]['firstString']==years[i] && response[j]['secondString']==catearray[k] && response[j]['firstString']!=null)
               
                   {
                      catvaluearr[k].push(response[j]['thirdString']/1);  
                      initarray[k].push(0)
                   }
             
           }
         
           var  len1=catvaluearr[k].length;
          
           if(len1==len && len<years.length ){
               catvaluearr[k].push(0);
           }
           
           }
           
       }
   var catvaluearr1 = []
catvaluearr.map(i => {j = i[0];

                      i = i.slice(point1+1,point2+2);
                      i.unshift(j);
                    catvaluearr1.push(i)})
//}
           var chart = c3.generate({
                 bindto: bindval,
                data: {
                    columns: catvaluearr1
                    ,type: type, 
                    colors:
                    {
                      'Open' :'#82589F',
                      'Limited' : '#B33771',
                      'Others' : '#3B3B98',
                       'Single': '#ED4C67'
                    },
                    labels: {
                        format: function (d) {
                            return vm.commaSeparateNumber(d)
                        }
                    },
               selection: {
                        enabled: false 
                    },
                   /* onclick: function (d, element) {
                   
                        vm.drill = true
                             if(!vm.tabid.includes("drill")){
                                   vm.tabid = vm.tabid+"drill" 
                             }
                             var x = chart.categories()[d.index]
                             x = x.slice(0,x.indexOf("-"))
                             vm.year1 = x;
                             vm.finyear = x;
                             vm.cardloader(vm.code)
                             vm.createCharts()
                     }, */
                    labels: true,  bar: {
                        width: {
                            ratio: 0.4 // this makes bar width 50% of length between ticks
                        }
                        // or
                        //width: 100 // this makes bar width 100px
                    },
                    
                    
                },
                
                bar: {
                    width: {
                        ratio: 0.3 
                    }
                    
                },
            
             /* legend: {
                    position: 'inset',
                    inset: {
                         anchor: 'top-right',
                         x: 50,
                         y: -5
                        
                     }
                 },*/
                
                
                axis: {
                    x: { 
                        type: 'category',
                        categories: finyears,
                        label: {
                                text: 'Fin.Year',
                                    position: 'outer-end'
                                
                                
                              }
                    },y: {
                            label: {
                                text: 'No of Days',
                                position: 'outer-middle',
                                
                                
                              }
                            }
                }
    
            });
            d3.select(".c3-axis-x-label").attr("dx","-40").attr("dy","2.6em")
    },
    creavgbidvaliditydaysontendervalue:function(response,bindval,type,choice,enable){
    
        //response=response['eProc']
        var years=new Array();
        
         var keyarray=new Array(); 
         var catearray=new Array(); 
         var finyears=new Array();
           for(var i in response){
               if(response[i]['firstString']!=null)
               {
                   years.push(response[i]['firstString']/1);
                   finyears.push(response[i]['firstString']/1+'-'+((response[i]['firstString'].substring(2,4)/1)+1)) ;
               } 
            //keyarray.push(response[i]['firstString']);
            catearray.push(response[i]['secondString']);
            
          }
           years=years.unique();
           finyears=finyears.unique();
           catearray=catearray.unique();


         var point1 = finyears.indexOf(choice[0]+"-"+(+choice[0]+1).toString().slice(2))
         var point2 = finyears.indexOf(choice[1]+"-"+(+choice[1]+1).toString().slice(2))
         finyears = finyears.slice(point1,point2+1)
           
           
           var catvaluearr=new Array();
        for(var k in catearray){  
            catvaluearr[k]=new Array();
            catvaluearr[k].push(catearray[k]);
        }
    
               
               for(var k in catearray){  
                  for(var i in years){
                   var  len=catvaluearr[k].length;
                   
                  
               for(var j in response){
                   
                   if(response[j]['firstString']==years[i] && response[j]['secondString']==catearray[k] && response[j]['firstString']!=null)
                   
                       {
                          catvaluearr[k].push(response[j]['thirdString']/1);
                       }
               }
             
               var  len1=catvaluearr[k].length;
              
               if(len1==len && len<years.length ){
                   catvaluearr[k].push(0);
               }
               
               }
               
           }
       
           var catvaluearr1 = []
catvaluearr.map(i => {j = i[0];
i = i.slice(point1+1,point2+2);
i.unshift(j);
catvaluearr1.push(i)})

         var chart = c3.generate({
             bindto: bindval,
            data: {
                columns: 
                    catvaluearr1
                ,type: type,
                labels: {
                    format: function (d) {
                        return vm.commaSeparateNumber(d)
                    }
                },
                selection: {
                 enabled: enable
             },
  
             onclick: function (d) {
             if(enable){
              vm.drill = true
                   if(!vm.tabid.includes("drill")){
                         vm.tabid = vm.tabid+"drill" 
                        
                   }
                   var x = chart.categories()[d.index]
                   x = x.slice(0,x.indexOf("-"))
                   vm.year1 = x;
                   vm.finyear = x;
                   vm.cardloader(vm.code)
                  vm.createCharts()
               }
              }
            },
            
            bar: {
                width: {
                    ratio: 0.3 
                }
                
            },
         
           /* legend: {
                position: 'inset',
               inset: {
                    anchor: 'top-right',
                    x: 20,
                    y: -7
                   
                }
            },*/
            axis: {
                x: {
                    type: 'category',
                    categories: finyears,
                    label: {
                           text: 'Fin.Year',
                           position: 'outer-end',
                           
                           
                         }
                },y: { padding:{ bottom:5},
                    
                       label: {
                           text: 'No of Days',
                           position: 'outer-middle',
                           
                           
                         }
                       }
            }
            
            
           
        });
      d3.select(".c3-axis-x-label").attr("dx","-45").attr("dy","2.6em")    
    },
    createfornew:function(response,bindval,type,choice){
    
     //response=response['eProc']
     var years=new Array();
     
      var keyarray=new Array(); 
      var catearray=new Array(); 
      var finyears=new Array();
        for(var i in response){
            if(response[i]['firstString']!=null)
            {
                years.push(response[i]['firstString']/1);
                finyears.push(response[i]['firstString']/1+'-'+((response[i]['firstString'].substring(2,4)/1)+1)) ;
            } 
         //keyarray.push(response[i]['firstString']);
         catearray.push(response[i]['thirdString']);
         
       }
        years=years.unique();
        finyears=finyears.unique();
        catearray=catearray.unique();

      var point1 = finyears.indexOf(choice[0]+"-"+(+choice[0]+1).toString().slice(2))
         var point2 = finyears.indexOf(choice[1]+"-"+(+choice[1]+1).toString().slice(2))
        
         finyears = finyears.slice(point1,point2+1)
         
    
        var catvaluearr=new Array();
     for(var k in catearray){  
         catvaluearr[k]=new Array();
         catvaluearr[k].push(catearray[k]);
     }
 
            
            for(var k in catearray){  
               for(var i in years){
                var  len=catvaluearr[k].length;
                
               
            for(var j in response){
                
                if(response[j]['firstString']==years[i] && response[j]['thirdString']==catearray[k] && response[j]['firstString']!=null)
                
                    {
                       catvaluearr[k].push(response[j]['secondString']/1);
                    }
            }
          
            var  len1=catvaluearr[k].length;
           
            if(len1==len && len<years.length ){
                catvaluearr[k].push(0);
            }
            
            }
            
        }
     
        var catvaluearr1 = []
catvaluearr.map(i => {j = i[0];
i = i.slice(point1+1,point2+2);
i.unshift(j);
catvaluearr1.push(i)})

      var chart = c3.generate({
          bindto: bindval,
         data: {
             columns: 
                 catvaluearr1
             ,type: type,
             colors:
             {
               'Open' :'#82589F',
               'Limited' : '#B33771',
               'Others' : '#3B3B98',
                'Single': '#ED4C67'
             },
             labels: {
                 format: function (d) {
                     return vm.commaSeparateNumber(d)
                 }
             },
         },
         
         bar: {
             width: {
                 ratio: 0.3 
             }
             
         },
      
        /* legend: {
             position: 'inset',
            inset: {
                 anchor: 'top-right',
                 x: 20,
                 y: -7
                
             }
         },*/
         axis: {
             x: {
                 type: 'category',
                 categories: finyears,
                 label: {
                        text: 'Fin.Year',
                        position: 'outer-end',
                        
                        
                      }
             },y: { padding:{ bottom:5},
                 
                    label: {
                        text: 'No of Days',
                        position: 'outer-middle',
                        
                        
                      }
                    }
         }
         
         
        
     });
   d3.select(".c3-axis-x-label").attr("dx","-45").attr("dy","2.6em")    
 },


    creavgdaysbetwnpublishandaoc: function(response,res,bindval,type,category,enable,str1,str2,choice,labeltxt='No. of Days')
    {
/*   if(category == 'without'){
     var catvaluearr1 =[]
response.sort(function(a,b){return (+a.firstString) - (+b.firstString)}) 
var finyears = response.map(a => a.firstString+"-"+((+a.firstString)+1).toString().substring(2,4))
var point1 = finyears.indexOf(choice[0]+"-"+(+choice[0]+1).toString().slice(2))
var point2 = finyears.indexOf(choice[1]+"-"+(+choice[1]+1).toString().slice(2))
         finyears = finyears.slice(point1,point2+1)

var valueArr = response.map(a => parseInt(a.secondString))
valueArr = valueArr.slice(point1,point2+1)            
valueArr.unshift("No of KPI")
catvaluearr1.push(valueArr)
}
else{ */
    var years=new Array();
    var finyears=new Array();
     var catearr=new Array();
     var tendernoarr=new Array(); 
     var tendervalarr=new Array(); 
    
     for(var i in response){
        
    
         if(response[i]['firstString']!=null)
           {
            
        years.push(response[i]['firstString']/1) ;
     finyears.push(response[i]['firstString']/1+'-'+((response[i]['firstString'].substring(2,4)/1)+1)) ;
    

           }
         catearr.push(response[i][str2]);
    }
      
           
       years=years.unique();
           finyears=finyears.unique();
       catearr=catearr.unique();  
   
         var point1 = finyears.indexOf(choice[0]+"-"+(+choice[0]+1).toString().slice(2))
            var point2 = finyears.indexOf(choice[1]+"-"+(+choice[1]+1).toString().slice(2))
           
            finyears = finyears.slice(point1,point2+1)

    var valuearr=new Array();
    var initarr = new Array();

for(var k in catearr){  
    valuearr[k]=new Array();
    valuearr[k].push(catearr[k]);
    initarr[k]=new Array();
    initarr[k].push(catearr[k]);
    tendernoarr[k]=new Array(); //Number of Tender
    tendervalarr[k]=new Array(); // Value of Tender
    }
       
       for(var k in catearr){  
          for(var i in years){
           var  len=valuearr[k].length;
           
          
       for(var j in response){
           
           if(response[j]['firstString']==years[i] && response[j][str2]==catearr[k] && response[j]['firstString']!=null)
           
               {
                  valuearr[k].push(response[j][str1]/1);  
                  initarr[k].push(0)
               }
         
       }
     
       var  len1=valuearr[k].length;
      
       if(len1==len && len<years.length ){
           valuearr[k].push(0);
       }
       
       }
       
   }
   var catvaluearr1 = []
   valuearr.map(i => {j = i[0];
   i = i.slice(point1+1,point2+2);
   i.unshift(j);
   catvaluearr1.push(i)})

     //Number of Tender and Value of Tender

            for(var k in catearr){  
               for(var i in years){
                 var  lenno =tendernoarr[k].length;
                 var  lenval =tendervalarr[k].length;
            for(var j in res){
               
                if(res[j]['firstString']==years[i] && res[j]['fifthString']==catearr[k] && res[j]['firstString']!=null)
                    {
                        
                     tendernoarr[k].push(res[j]['secondString']/1);  //For Number of Tender
                     tendervalarr[k].push(res[j]['thirdString']/1);  //For Value of Tender
                    
                  }

               
     }
     var  len1=tendernoarr[k].length;
     var  len2=tendervalarr[k].length;
           
     if(len1==lenno && lenno<years.length ){
         tendernoarr[k].push(0);
     }
     if(len2==lenval && lenval<years.length ){
         tendervalarr[k].push(0);
     }
            }
            
        }
 //Number of Tenders
 var tendernoarr1 = []
 tendernoarr.map(i => {
              i = i.slice(point1,point2+1);
               tendernoarr1.push(i)})
                 
 //Value of Tenders
 var tendervalarr1 = []
 tendervalarr.map(i => {
             i = i.slice(point1,point2+1);
             tendervalarr1.push(i)})

//}

     var chart = c3.generate({
     bindto: bindval,
    data: {
        columns: catvaluearr1
        ,type: type, 
        colors:
        {
          'Open' :'#82589F',
          'Limited' : '#B33771',
          'Others' : '#3B3B98',
           'Single': '#ED4C67'
        },
        labels: {
            format: function (d) {
                return vm.commaSeparateNumber(d)
            }
        }, 
       selection: {
            enabled: enable
        },

        onclick: function (d) {
        if(enable){
         vm.drill = true
              if(!vm.tabid.includes("drill")){
                    vm.tabid = vm.tabid+"drill" 
                   
              }
              var x = chart.categories()[d.index]
              x = x.slice(0,x.indexOf("-"))
              vm.year1 = x;
              vm.finyear = x;
              vm.cardloader(vm.code)
             vm.createCharts()
          }
         }
        //  colors: color,
    },
    bar: {
        width: {
            ratio: 0.3 
        }
        
    },

    /*color: {	
         pattern: ['#80bdab','#0a97b0','#ff9595']
       },*/
    bar: {
        width: {
            ratio: 0.3
        }
    },
    
 tooltip: {                           
                       
     contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
    
         var conten = ""
         
        for (i = 0; i < chart.data().length; i++) {
            conten += "<tr><td><span style='background-color:"+this.config.data_colors[d[i].id]+
            ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + d[i].id + "</td>" +
            "<td style='text-align: right;'>" + tendernoarr1[i][d[i].index] + "</td>"+
            "<td style='text-align: right;'>" + tendervalarr1[i][d[i].index] + "</td>"+
            "<td style='text-align: right;'>" + d[i].value + "</td></tr>"
         }

        return ("<table class='c3-tooltip'>" +
" <thead><tr><th colspan='4' style='background:#0099CC; color:black;'>" + this.config.axis_x_categories[d[0].x] + "</tr></thead>" +
  " <thead><tr><th style='background:skyblue; color:black;'>Type</th>"+
  "<th style='background:skyblue;color:black'>No. of Tender</th><th style='background:skyblue;color:black'>Value of Tender<br>(Rs. in Crores)</th>"+
  "<th style='background:skyblue;color:black'>Avg. Days</th></tr></thead>" +
        "<tbody>" + conten +
        "</tbody></table>")
     }


 },
    /*tooltip: {
        grouped: false // Default true
    },legend: {
        position: 'inset',
        inset: {
             anchor: 'top-right',
             x: 20,
             y: -30
            
         }
     },*/
    padding: {
         top: 30
     },
    axis: {
        x: { 
            type: 'category',
            categories: finyears,
            label: {
                    text: 'Fin.Year',
                        position: 'outer-end'
                    
                    
                  }
        },y: {
                label: {
                    text: labeltxt,
                    position: 'outer-middle',
                    
                    
                  }
                }
    }
   
});
d3.select(".c3-axis-x-label").attr("dx","-45").attr("dy","2.6em")
    },
    creavgdaysbetweentechevalandfinbidopening:function (response,bindval,type,category,choice,enable){
      
        if(category == 'without'){
         var catvaluearr1 =[]
   response.sort(function(a,b){return (+a.firstString) - (+b.firstString)}) 
   var finyears = response.map(a => a.firstString+"-"+((+a.firstString)+1).toString().substring(2,4))
   var point1 = finyears.indexOf(choice[0]+"-"+(+choice[0]+1).toString().slice(2))
   var point2 = finyears.indexOf(choice[1]+"-"+(+choice[1]+1).toString().slice(2))
            finyears = finyears.slice(point1,point2+1)
   
   var valueArr = response.map(a => parseInt(a.secondString))
   valueArr = valueArr.slice(point1,point2+1)            
   valueArr.unshift("No of KPI")
   catvaluearr1.push(valueArr)
   }
   else{
        var finyears=new Array();
        var years=new Array();
        var keyarray=new Array(); 
        var catearray=new Array();
    
        //test.push("data1");
         for(var i in response){
            
           if(response[i]['firstString']!=null)
               {
            years.push(response[i]['firstString']/1) ;
            finyears.push(response[i]['firstString']/1+'-'+((response[i]['firstString'].substring(2,4)/1)+1)) ;
               }
            
            catearray.push(response[i]['thirdString']);
        }
          
            years=years.unique();
            finyears=finyears.unique();
            var point1 = finyears.indexOf(choice[0]+"-"+(+choice[0]+1).toString().slice(2))
            var point2 = finyears.indexOf(choice[1]+"-"+(+choice[1]+1).toString().slice(2))
           
            finyears = finyears.slice(point1,point2+1)
            
            catearray=catearray.unique();
    
        var catvaluearr=new Array();
        var initarray = new Array();
    for(var k in catearray){  
        catvaluearr[k]=new Array();
        catvaluearr[k].push(catearray[k]);
        initarray[k]=new Array();
        initarray[k].push(catearray[k]);
    }
    
           
           for(var k in catearray){  
              for(var i in years){
               var  len=catvaluearr[k].length;
               
              
           for(var j in response){
               
               if(response[j]['firstString']==years[i] && response[j]['thirdString']==catearray[k] && response[j]['firstString']!=null)
               
                   {
                      catvaluearr[k].push(response[j]['secondString']/1);  
                      initarray[k].push(0)
                   }
             
           }
         
           var  len1=catvaluearr[k].length;
          
           if(len1==len && len<years.length ){
               catvaluearr[k].push(0);
           }
           
           }
           
       }
       var catvaluearr1 = []
       catvaluearr.map(i => {j = i[0];
       i = i.slice(point1+1,point2+2);
       i.unshift(j);
       catvaluearr1.push(i)})
   }
         var chart = c3.generate({
             bindto: bindval,
             data: {
                   columns: catvaluearr1,
                   type: type,
                   colors:
                   {
                     'Open' :'#82589F',
                     'Limited' : '#B33771',
                     'Others' : '#3B3B98',
                      'Single': '#ED4C67'
                   },
                   labels: {
                    format: function (d) {
                        return vm.commaSeparateNumber(d)
                    }
                },
         selection: {
                enabled: enable
            },
                onclick: function (d) {
                    if(enable){
                   vm.drill = true
                        if(!vm.tabid.includes("drill")){
                              vm.tabid = vm.tabid+"drill" 
                        }
                        var x = chart.categories()[d.index]
                        x = x.slice(0,x.indexOf("-"))
                        vm.year1 = x;
                        vm.finyear = x;
                        vm.cardloader(vm.code)
                       vm.createCharts()
                    }
                }
                 }, 
                 bar: {
                        width: {
                            ratio: 0.3 
                        }
                        
                    },
                
                /* color: {	
                     pattern: ['#80bdab','#0a97b0','#ff9595']
                    },
                 legend: {
                     position: 'inset',
                    inset: {
                         anchor: 'top-right',
                         x: 20,
                           y: -7
                        
                     }
                 },*/
                
                 bar: {
                     width: {
                         ratio: 0.4 // this makes bar width 50% of length between ticks
                     }
                    
                 },
                /* legend: {
                     show: false
                 },*/
            axis: {
                x: {
                    type: 'category',
                    categories: finyears,label: {
                        text: 'Fin.Year',
                        position: 'outer-end'
                    }
                }, y: {
                      label: {
                          text:'No of days',
                          position: 'outer-middle',
                          
                          
                        }
                      }
            }
        });
        d3.select(".c3-axis-x-label").attr("dx","-45").attr("dy","2.6em")
    },
    creavgdaystechevalandfinopening:function (response,bindval,type,choice){
    
        var years=new Array();
        var finyears=new Array();
         var keyarray=new Array(); 
         var catearray=new Array(); 
         //var valarray=new Array();
           for(var i in response){
               
               if(response[i]['firstString']!=null)
               {
                   years.push(response[i]['firstString']/1) ;
                   finyears.push(response[i]['firstString']/1+'-'+((response[i]['firstString'].substring(2,4)/1)+1)) ;
                } 
            //keyarray.push(response[i]['firstString']);
          //  catearray.push(response[i]['secondString']);
           catearray.push(response[i]['thirdString']);
          }
           years=years.unique();
           finyears=finyears.unique();
           catearray=catearray.unique();
           var point1 = finyears.indexOf(choice[0]+"-"+(+choice[0]+1).toString().slice(2))
           var point2 = finyears.indexOf(choice[1]+"-"+(+choice[1]+1).toString().slice(2))          
           finyears = finyears.slice(point1,point2+1)
     
           var catvaluearr=new Array();
        for(var k in catearray){  
            catvaluearr[k]=new Array();
            catvaluearr[k].push(catearray[k]);
        }
               for(var k in catearray){  
                  for(var i in years){
                   var  len=catvaluearr[k].length;
                   
                  
               for(var j in response){
                   
                   if(response[j]['firstString']==years[i] && response[j]['thirdString']==catearray[k] && response[j]['firstString']!=null)
                   
                       {
                          //catvaluearr[k].push(response[j]['thirdString']/1);
        catvaluearr[k].push(response[j]['secondString']/1);
                       }
               }
             
               var  len1=catvaluearr[k].length;
              
               if(len1==len && len<years.length ){
                   catvaluearr[k].push(0);
               }
               
               }
               
           }
           var catvaluearr1 = []
catvaluearr.map(i => {j = i[0];
i = i.slice(point1+1,point2+2);
i.unshift(j);
catvaluearr1.push(i)})
               var chart = c3.generate({
                   bindto: bindval,
                  data: {
                      columns: 
                          catvaluearr1
                      ,type: type,
                    labels: true,
                //   colors: color,
                      /*onclick: function (d, element) {
    
                            var url='dashbd5monthwise';//d.index];
                            localStorage.setItem("pValue", chart.categories()[d.index]);
                            location.href=url;
                        
                        }*/
                  },
                bar: {
                    width: {
                        ratio: 0.3 
                    }
                    
                },
            
                /*color: {	
                      pattern: ['#80bdab','#0a97b0','#ff9595']
                  },
                  
                legend: {
                  position: 'inset',
                  inset: {
                       anchor: 'top-right',
                       x: 20,
                       y: -7
                      
                   }
               },*/
              padding: {
                   top: 30
               },
                  axis: {
                      x: {
                          type: 'category',
                          categories: finyears,label: {
                            text: 'Fin.Year',
                            position: 'outer-end'
                          }
                      },
                    y: { 
                      padding: {bottom:0},
                         label: {
                             text: 'No of Days',
                             position: 'outer-middle',
                             
                             
                           }
                         }
                  }
                  
                 
              });
              d3.select(".c3-axis-x-label").attr("dx","-45").attr("dy","2.6em")   
    },
    creavgdaysbetwnbidsubmission:function(response,bindval,type,choice)
{
    //response=response['eProc']

    var years=new Array();
    var finyears=new Array();
     var keyarray=new Array(); 
     var catearray=new Array(); 

    //test.push("data1");
     for(var i in response){
        
    
     if(response[i]['firstString']!=null)
           {
   years.push(response[i]['firstString']/1) ;
    finyears.push(response[i]['firstString']/1+'-'+((response[i]['firstString'].substring(2,4)/1)+1)) ;
  lableString= response[i]['firstString'];
           }
catearray.push(response[i]['thirdString']);
    }

    years=years.unique();
    finyears=finyears.unique();
    catearray=catearray.unique();
    var point1 = finyears.indexOf(choice[0]+"-"+(+choice[0]+1).toString().slice(2))
 var point2 = finyears.indexOf(choice[1]+"-"+(+choice[1]+1).toString().slice(2))     
 finyears = finyears.slice(point1,point2+1)
    var catvaluearr=new Array();
    var initarray = new Array();
for(var k in catearray){  
    catvaluearr[k]=new Array();
    catvaluearr[k].push(catearray[k]);
    initarray[k]=new Array();
    initarray[k].push(catearray[k]);
}

       
       for(var k in catearray){  
          for(var i in years){
           var  len=catvaluearr[k].length;
           
          
       for(var j in response){
           
      if(response[j]['firstString']==years[i] && response[j]['thirdString']==catearray[k] && response[j]['firstString']!=null)
           
               {
                  catvaluearr[k].push(response[j]['secondString']/1);  
                  initarray[k].push(0)
               }
         
       }
     
       var  len1=catvaluearr[k].length;
      
       if(len1==len && len<years.length ){
           catvaluearr[k].push(0);
       }
       
       }
       
   }
   var catvaluearr1 = []
catvaluearr.map(i => {
    j = i[0];
i = i.slice(point1+1,point2+2);
i.unshift(j);
catvaluearr1.push(i)
})
       var chart = c3.generate({
             bindto: bindval,
            data: {
                columns: catvaluearr1
                ,type: type,
                colors:
                {
                  'Open' :'#82589F',
                  'Limited' : '#B33771',
                  'Others' : '#3B3B98',
                   'Single': '#ED4C67'
                }, 
                labels: {
                    format: function (d) {
                        return vm.commaSeparateNumber(d)
                    }
                },
               
              bar: {
                    width: {
                        ratio: 0.4 // this makes bar width 50% of length between ticks
                    }
                    // or
                    //width: 100 // this makes bar width 100px
                },
                
             /*   onclick: function (d, element) {
                    //alert(chart.categories()[d.index])
                     var url= ur;//d.index];	
                     var tenderPublish = d.value;   	     			         
                     localStorage.setItem("pValue", chart.categories()[d.index]);
                     localStorage.setItem("tenderPublish", tenderPublish);     			        	    
                     location.href=url;
                 },*/
                //  ,colors: color
            },
            bar: {
                width: {
                    ratio: 0.3 
                }
                
            },
        
            /*tooltip: {
                grouped: false // Default true
            },*/
            
           /* color: {	
                 pattern: ['#80bdab','#0a97b0','#ff9595']
               },
               legend: {
                position: 'inset',
                inset: {
                     anchor: 'top-right',
                     x: 20,
                     y: -10
                    
                 }
             },*/
            padding: {
                 top: 30
             },
            axis: {
                x: { 
                    type: 'category',
                    categories: finyears,
                    label: {
                            text: 'Fin.Year',
                                position: 'outer-end'
                            
                            
                          }
                },y: {
                        label: {
                            text: 'No of Days',
                            position: 'outer-middle',
                            
                            
                          }
                        }
            }
           
        });
        d3.select(".c3-axis-x-label").attr("dx","-45").attr("dy","2.6em")
    },
createbidderdrill: function(response, bindval,finYear) {

        var years=new Array();
       
       var keyarray=new Array(); 
       var catearray=new Array(); 

         for(var i in response){
             if(response[i]['firstString']!=null){ 
            years.push(response[i]['firstString'])
         } 
          catearray.push(response[i]['secondString']);	
        }
         years=years.unique();
         catearray=catearray.unique();
     
         var catvaluearr=new Array();
      for(var k in catearray){  
          catvaluearr[k]=new Array();
          catvaluearr[k].push(catearray[k]);
      }

             
             for(var k in catearray){  
                for(var i in years){
                 var  len=catvaluearr[k].length;
                 
                
             for(var j in response){
                 
                 if(response[j]['firstString']==years[i] && response[j]['secondString']==catearray[k] && response[j]['firstString']!=null)
                 
                     {
                        catvaluearr[k].push(response[j]['thirdString']/1);
                     }
             }
           
             var  len1=catvaluearr[k].length;
            
             if(len1==len && len<years.length ){
                 catvaluearr[k].push(0);
             }
             
             }
             
         }
    var chart = c3.generate({
          bindto: bindval,
        data: {
            columns: catvaluearr,
            type: 'bar',
            labels: {
                format: function (d) {
                    return vm.commaSeparateNumber(d)
                }
            },
            groups: [
                ['MSME Bidders', 'Registered Bidders']
            ]
            },
            tooltip: {


             contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
 
                 let conten = '';
                 for (i = 0; i < chart.data().length; i++) {
                     conten += "<tr><td><span style='background-color:" + this.config.data_colors[d[i].id] +
                         ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + d[i].id + "</td>" +
                         "<td style='text-align: right;'>" + d[i].value + "</td></tr>"
                 }
                 return ("<table class='c3-tooltip'>" +
                     " <thead><tr><th colspan='3'>" + this.config.axis_x_categories[d[0].x] +" "+finYear+
                      "</th></tr></thead>" +
                    "<tbody>" + conten +
                     "<tr><td><b>Total</b></td><td> " + d.reduce((s, c) => s + c.value, 0) + "</td></tr></tbody></table>"
                 )
             }
 
 
         },
        bar: {
            width: {
                ratio: 0.8
            }
        },
       axis: {
            x: {
                type: 'categorized',
                categories:years,
               label: {
                    text: 'Month',
                    position: 'outer-middle',
                    }
                  },
        y: {padding:{ bottom:0},
                label: {
                    text: 'No. of Bidders',
                    position: 'outer-middle',  
                  }
                },
            rotated: false
        }   
    });
     },

   
KPItendertypedrill: function (response,bindval,selyear)
{
  

 response.sort(function(a,b){return (+a.firstString) - (+b.firstString)}) 
 var finyears = response.map(a => a.firstString)
 finyears = finyears.unique();

var tenderpub = response.map(a => a.secondString)
tenderpub.unshift('Tender Publish')

var canceltender = response.map(a => a.thirdString)
canceltender.unshift("Cancelled Tender")

var retender = response.map(a => a.fourthString)
retender.unshift('Retenders')

var aoc = response.map(a => a.fifthString)
aoc.unshift("Bids Awarded ")

var valueArr = [tenderpub,canceltender,retender,aoc]


var chart = c3.generate({
bindto: bindval,
data: {
 columns: valueArr,
 type: 'bar',
 labels: true,

},
bar: {
 
 width: {
   
   ratio: 0.8  
}
   
},
tooltip: {


  contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
      let conten = '';

      for (i = 0; i < chart.data().length; i++) {
          
         // var ch = (d[i].id == 'No. of Tenders')?  perarrow[d[i].index]+" "+valTender[d[i].index] : perarrow1[d[i].index]+" "+pervalue[d[i].index]
         // var tooltipid = (d[i].id == 'No. of Tenders')? '# Tenders': 'No. Of Bids'

          conten += "<tr><td><span style='background-color:" + this.config.data_colors[d[i].id] +
              ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + (d[i].id + "</td>" +
              "<td style='text-align: right;'>" + d[i].value + "</td>"
              )
      }
      return ("<table class='c3-tooltip'>" +
          " <thead><tr><th colspan='3'>" + this.config.axis_x_categories[d[0].x] + "</tr></thead>" +
          "<thead><tr><th style='background:skyblue;color:black'>Categories</th>"+
          "<th style='background:skyblue;color:black'>Value</th></tr></thead>" +
          "<tbody>" + conten +"</tr></tbody></table>"
      )
  }


},
 padding: {
   left:90
 },
legend: {
 show: true
},
axis: {
 x: {
     type: 'category',
     categories: finyears,
     label: {
         text: 'Fin.Year',
         position: 'outer-end'

     }
 },
 y: {
     padding: {
         bottom: 5
     },
     min: 0,
     label: {

         text: 'No.of Bids',
         position: 'outer-middle',
     }
 }
}

});
},

KPIreTender: function (response,bindval,type,choice,flag)
     {
         response.sort(function(a,b){return (+a.firstString) - (+b.firstString)}) 
         var finyears = response.map(a => a.firstString+"-"+((+a.firstString)+1).toString().substring(2,4))
         var point1 = finyears.indexOf(choice[0]+"-"+(+choice[0]+1).toString().slice(2))
         var point2 = finyears.indexOf(choice[1]+"-"+(+choice[1]+1).toString().slice(2))
       
         finyears = finyears.slice(point1,point2+1)

 var tenderpub = response.map(a => a.secondString)
 tenderpub = tenderpub.slice(point1,point2+1)
 tenderpub.unshift('Tender Publish')

 var canceltender = new Array();
  response.map(a =>{
      if(a.thirdString != null)
      canceltender.push(a.thirdString)
  else{
     canceltender.push(0)  
  }
 })
 canceltender = canceltender.slice(point1,point2+1)
 canceltender.unshift("Cancelled Tender")

 var retender = new Array();
 response.map(a => { 
     if(a.fourthString != null)
     retender.push(a.fourthString)
     else{
         retender.push(0)  
     }
 })
 retender = retender.slice(point1,point2+1)
 retender.unshift('Retenders')

 var aoc = response.map(a => a.fifthString)
 aoc = aoc.slice(point1,point2+1)
 aoc.unshift("Bids Awarded ")

 // fiscalmonth as firstString,
 // ten_pub as secondString,
 // ten_can as thirdString,
 // ten_ret as fouthString,
 // ten_aoc as fifthString 

var valueArr = [tenderpub,canceltender,retender,aoc]

 var chart = c3.generate({
     bindto: bindval,
     data: {
         columns: valueArr,
         type: type,
         labels: true,
     selection: {
                    enabled: flag
                },
                   onclick: function (d, element) {
                       vm.drill = true
                      if(!vm.tabid.includes("drill")){
                            vm.tabid = vm.tabid+"drill" 
                      }
                      var x = chart.categories()[d.index]
                      x = x.slice(0,x.indexOf("-"))
                      vm.year1 = x;
                      vm.finyear = x;
                      vm.cardloader(vm.code)
                     vm.createCharts()


                   }

     },
     bar: {
         
         width: {
           
           ratio: 0.8  
        }
           
       },
       tooltip: {


          contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
              let conten = '';
     
              for (i = 0; i < chart.data().length; i++) {
                  
                 // var ch = (d[i].id == 'No. of Tenders')?  perarrow[d[i].index]+" "+valTender[d[i].index] : perarrow1[d[i].index]+" "+pervalue[d[i].index]
                 // var tooltipid = (d[i].id == 'No. of Tenders')? '# Tenders': 'No. Of Bids'

                  conten += "<tr><td><span style='background-color:" + this.config.data_colors[d[i].id] +
                      ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + (d[i].id + "</td>" +
                      "<td style='text-align: right;'>" + d[i].value + "</td>"
                      )
              }
              return ("<table class='c3-tooltip'>" +
                  " <thead><tr><th colspan='3'>" + this.config.axis_x_categories[d[0].x] + "</tr></thead>" +
                  "<thead><tr><th style='background:skyblue;color:black'>Categories</th>"+
                  "<th style='background:skyblue;color:black'>Value</th></tr></thead>" +
                  "<tbody>" + conten +"</tr></tbody></table>"
              )
          }


      },
         padding: {
           left:90
         },
     legend: {
         show: true
     },
     axis: {
         x: {
             type: 'category',
             categories: finyears,
             label: {
                 text: 'Fin.Year',
                 position: 'outer-end'

             }
         },
         y: {
             padding: {
                 bottom: 5
             },
             min: 0,
             label: {

                 text: 'No.of Tender',
                 position: 'outer-middle',
             }
         }
     }

 });

 
},

KPItendertype: function (response,bindval,type,flag)
 {
 var tenderpub = new Array();
 response.map(a => {
     if(a.firstString != undefined){
         tenderpub.push(a.firstString)
     } else{
         tenderpub.push(0)
     }
 })
 tenderpub.unshift('Valid Tender Processed')

 var aoc = response.map(a => a.secondString)
 aoc.unshift("Bids Awarded")
 
var valueArr = [tenderpub,aoc]

 var chart = c3.generate({
     bindto: bindval,
     data: {
         columns: valueArr,
         type: 'pie',
         labels: true,
     selection: {
                    enabled: flag
                },
            
                   onclick: function (d, element) {
                     if(flag){
                       vm.drill = true
                      if(!vm.tabid.includes("drill")){
                            vm.tabid = vm.tabid+"drill" 
                      }
                      var x = chart.categories()[d.index]
                      x = x.slice(0,x.indexOf("-"))
                      vm.year1 = x;
                      vm.finyear = x;
                      vm.cardloader(vm.code)
                     vm.createCharts()


                   }
                 }  

     },
     tooltip: {                           
            
        contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
            
            var conten = ""
                conten += "<tr><td><span style='background-color:"+this.config.data_colors[d[0].id]+ ";display: inline-block;"+
                "width: 16px;text-align: left;height: 15px;margin-top: 10px;margin-left: 11px;'></span> &nbsp;&nbsp;"
                     +d[0].id+"</span></td><td style='text-align: left;'>" +d[0].value+ "</td>"+
                     "<td style='text-align: left;'>" +((d[0].ratio)*100).toFixed(2)+ "</td></tr>"
  
            
            return ("<table class='c3-tooltip' style='background-color:lightgray;font-size:18px;width:120%'>" +
                " <thead><tr><th style='background:skyblue; color:black;'>Type</th>"+
                "<th style='background:skyblue;color:black'>Value</th>"+
                "<th style='background:skyblue;color:black'>Percentage</th></tr></thead>" +
                "<tbody>" + conten +
                "</tbody></table>"
            )
        
        }
     
     
     }, 
     bar: {
         
         width: {
           
           ratio: 0.8  
        }
           
       },
         padding: {
           left:90
         },
     legend: {
         show: true
     },
 });

 
},

createstatusbidder: function(response, bindval,type) {

    var lableString = '';
    var value = '';
    var valueArr = new Array();
    var years = new Array();
    var initarray = new Array();

var colors = ["#e61283", "#3366CC","#DC3912","#FF9900","#109618","#990099"];

    for (var i in response) {


        if (response[i]['firstString'] != null) {
            lableString = response[i]['firstString'];
            // alert("------>"+lableString);
            value = response[i]['secondString'];
            years.push(value);
            // alert("------>"+value);
            initarray.push(new Array(lableString, 0))
            bindval == "#designerChartExemp" ? valueArr.push(({label: lableString.toUpperCase(), value: value / 1,color:colors[i]})) : valueArr.push(({label: lableString, value: value / 1,color:colors[i]}));
        }

    }

    var newid = d3.select("#new");
    
    var svg = newid.append("svg")
        .attr("width",1257)
        .attr("height",310)
         .attr("class", "pie");

    svg.append("g")
         .attr("id","Donut"); 

var totalvalue= 0;

draw("#Donut",Data(), 450, 150, 130, 100, 30, 0.4);

function draw(id, data, x, y,rx, ry, h, ir){

     var _data = d3.layout.pie()
        .sort(null)
        .value(function(d) {return d.value;})(data);

            var slices = d3.select(id)
                      .append("svg")
                .append("g")
                           .attr("transform", "translate(" + x + "," + y + ")")
                           .attr("class", "slices");
        
                slices.selectAll(".innerSlice")
                      .data(_data)
                      .enter()
                      .append("path") 
                      .attr("class", "innerSlice")
                      .style("fill", function(d) { return d3.hsl(d.data.color).darker(0.7); })
                      .style("stroke", function(d) { return d.data.color; })
                      .attr("d",function(d){ return pieInner(d, rx,ry, h, ir);})
                        .on('click', clickHandler);
     
                slices.selectAll(".topSlice")
                      .data(_data)
                      .enter()
                      .append("path")
                      .attr("class", "topSlice")
                      .style("fill", function(d) { return d.data.color; })
                      .style("stroke", function(d) { return d.data.color; })
                      .attr("d",function(d){ return pieTop(d, rx, ry, ir);})
                        .on('click', clickHandler);
         
                slices.selectAll(".outerSlice")
                      .data(_data)
                      .enter()
                      .append("path")
                      .attr("class", "outerSlice")
                      .style("fill", function(d) { return d3.hsl(d.data.color).darker(0.7); })
                      .style("stroke", function(d) { return d.data.color; })
                      .attr("d",function(d){ return pieOuter(d, rx,ry, h);})
                      .on('click', clickHandler);
                
                  function clickHandler(d, i) {

                      var self = d3.select(this),          
                          jC = self.attr("transform");
                      
                      slices.selectAll('path').each(function(d) {
                        d3.select(this)
                          .attr("transform", null);
                      });
                      
                      if (jC) return;

                      var self = d3.select(this),
                        pieces = ['innerSlice', 'topSlice', 'outerSlice'],
                        c = self.attr("class").split(" ")[1],
                        a = (d.endAngle + d.startAngle) / 2,
                        x = (ir + 15) * Math.cos(a),
                        y = (ir + 15) * Math.sin(a);

                      pieces.forEach(function(d) {
                        slices.select("." + d + "." + c)
                          .attr("transform", "translate(" + [x, y] + ")");
                      });

                  }
    
}

function Data(){
    return valueArr.map(function(d){ 
            totalvalue = totalvalue+d.value;
            return {label:d.label, value:d.value, color:d.color};
});
} 

function pieTop(d, rx, ry, ir ){
    if(d.endAngle - d.startAngle == 0 ) return "M 0 0";
    var sx = rx*Math.cos(d.startAngle),
        sy = ry*Math.sin(d.startAngle),
        ex = rx*Math.cos(d.endAngle),
        ey = ry*Math.sin(d.endAngle);
        
    var ret =[];
    ret.push("M",sx,sy,"A",rx,ry,"0",(d.endAngle-d.startAngle > Math.PI? 1: 0),"1",ex,ey,"L",ir*ex,ir*ey);
    ret.push("A",ir*rx,ir*ry,"0",(d.endAngle-d.startAngle > Math.PI? 1: 0), "0",ir*sx,ir*sy,"z");
    return ret.join(" ");
}

function pieOuter(d, rx, ry, h ){
    var startAngle = (d.startAngle > Math.PI ? Math.PI : d.startAngle);
    var endAngle = (d.endAngle > Math.PI ? Math.PI : d.endAngle);
    
    var sx = rx*Math.cos(startAngle),
        sy = ry*Math.sin(startAngle),
        ex = rx*Math.cos(endAngle),
        ey = ry*Math.sin(endAngle);
        
        var ret =[];
        ret.push("M",sx,h+sy,"A",rx,ry,"0 0 1",ex,h+ey,"L",ex,ey,"A",rx,ry,"0 0 0",sx,sy,"z");
        return ret.join(" ");
}

function pieInner(d, rx, ry, h, ir ){
    var startAngle = (d.startAngle < Math.PI ? Math.PI : d.startAngle);
    var endAngle = (d.endAngle < Math.PI ? Math.PI : d.endAngle);
    
    var sx = ir*rx*Math.cos(startAngle),
        sy = ir*ry*Math.sin(startAngle),
        ex = ir*rx*Math.cos(endAngle),
        ey = ir*ry*Math.sin(endAngle);

        var ret =[];
        ret.push("M",sx, sy,"A",ir*rx,ir*ry,"0 0 1",ex,ey, "L",ex,h+ey,"A",ir*rx, ir*ry,"0 0 0",sx,h+sy,"z");
        return ret.join(" ");
}


var keys = valueArr.map(function(d){ 
        return {label:d.label, value:d.value, color:d.color};});

var size = 20
svg.selectAll("mydots")
  .data(keys)
  .enter()
  .append("rect")
    .attr("x", 800)
    .attr("y", function(d,i){ return 100 + i*(size+15)}) // 100 is where the first dot appears. 25 is the distance between dots
    .attr("width", size)
    .attr("height", size)
    .style("fill", function(d){ return d.color})

// Add one dot in the legend for each name.
svg.selectAll("mylabels")
  .data(keys)
  .enter()
  .append("text")
    .attr("x", 810 + size*1)
    .attr("y", function(d,i){ return 105 + i*(size+15) + (size/2)}) // 100 is where the first dot appears. 25 is the distance between dots
    .text(function(d){ return d.label+" -  "+d.value+"  ( "+((d.value/totalvalue) * 100).toFixed(3)+" )"})
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")
    },



createstatetbidder: function(response, bindval) {

$("#new").removeClass("c3");
  
    var lableString = "";
    var value = "";
    var finyears = new Array();
    
    var years = new Array();

    for (var i in response) {
        if (response[i]['firstString'] != null) {

            lableString = response[i]['firstString'];
            value = response[i]['secondString'];
            var x = value;
            x = x.toString();
            var lastThree = x.substring(x.length - 3);
            var otherNumbers = x.substring(0, x.length - 3);
            if (otherNumbers != '')
                lastThree = ',' + lastThree;
            var value = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
            years.push(lableString)
            finyears.push(new Array(response[i]['firstString'], value));
            
        }

    }


    const data = finyears;

const options = {
            
        chart: {
            curve: {
                enabled: true
            },
            width:700,
            height:310,
            dynamicHeight: true,
            minHeight: 20,
            
        },
        label: {
            fontSize: '16px'
        },
        tooltip: {
            enabled: true
        },
        events: {
            
        }
    };
    const chart = new D3Funnel(bindval);

    chart.draw(data, options);
  $("#new").find('svg').addClass("funnel");
},

createdeptbidder: function(response, bindval,type) {

var colors = ["#FF9900", "#990099"];

    var lableString = '';
    var value = '';
    var valueArr = new Array();
    var years = new Array();
    var initarray = new Array();
    // test.push("data1");
    for (var i in response) {


        if (response[i]['firstString'] != null) {
            lableString = response[i]['firstString'];
            // alert("------>"+lableString);
            value = response[i]['secondString'];
            years.push(value);
            initarray.push(new Array(lableString, 0))                    
            bindval == "#designerChartExemp" ? valueArr.push(({label:lableString.toUpperCase(), value:value / 1,color: colors[i]})) : valueArr.push(({label:lableString, value: value / 1,color: colors[i]}));
        }

    }

    var newid = d3.select("#new");
    var svg = newid.append("svg")
    .attr("width",1257)
    .attr("height",310)
     .attr("class", "pie");

    svg.append("g")
    .attr("id","quotesDonut"); 

var totalvalue = 0;

draw("#quotesDonut",Data(), 450, 150, 130, 100, 30, 0.4);

function draw(id, data, x, y,rx, ry, h, ir){

     var _data = d3.layout.pie()
        .sort(null)
        .value(function(d) {return d.value;})(data);

            var slices = d3.select(id)
                      .append("svg")
                       .append("g")
                       .attr("transform", "translate(" + x + "," + y + ")")
                                    .attr("class", "slices");
        
                slices.selectAll(".innerSlice")
                      .data(_data)
                      .enter()
                      .append("path") 
                      .attr("class", "innerSlice")
                      .style("fill", function(d) { return d3.hsl(d.data.color).darker(0.7); })
                      .style("stroke", function(d) { return d.data.color; })
                      .attr("d",function(d){ return pieInner(d, rx,ry, h, ir);})
                    //    .on('mouseover', clickHandler)
                      //  .on('mouseleave', leaveHandler);
     
                slices.selectAll(".topSlice")
                      .data(_data)
                      .enter()
                      .append("path")
                      .attr("class", "topSlice")
                      .style("fill", function(d) { return d.data.color; })
                      .style("stroke", function(d) { return d.data.color; })
                      .attr("d",function(d){  return pieTop(d, rx, ry, ir);})
                      //  .on('mouseover', clickHandler)
                        // .on('mouseleave', leaveHandler);
         
                slices.selectAll(".outerSlice")
                      .data(_data)
                      .enter()
                      .append("path")
                      .attr("class", "outerSlice")
                      .style("fill", function(d) { return d3.hsl(d.data.color).darker(0.7); })
                      .style("stroke", function(d) { return d.data.color; })
                      .attr("d",function(d){ return pieOuter(d, rx,ry, h);})
                    // .on('mouseover', clickHandler)
                      //   .on('mouseleave', leaveHandler);

var keys = valueArr.map(function(d){ 
        return {label:d.label, value:d.value, color:d.color};});

var size = 20
svg.selectAll("mydots")
  .data(keys)
  .enter()
  .append("rect")
    .attr("x", 800)
    .attr("y", function(d,i){ return 100 + i*(size+15)}) // 100 is where the first dot appears. 25 is the distance between dots
    .attr("width", size)
    .attr("height", size)
    .style("fill", function(d){ return d.color})

// Add one dot in the legend for each name.
svg.selectAll("mylabels")
  .data(keys)
  .enter()
  .append("text")
    .attr("x", 810 + size*1)
    .attr("y", function(d,i){ return 105 + i*(size+15) + (size/2)}) // 100 is where the first dot appears. 25 is the distance between dots
    .text(function(d){ return d.label+" -  "+d.value+"  ( "+((d.value/totalvalue) * 100).toFixed(3)+" )"})
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")
    }

function Data(){
    return valueArr.map(function(d){ 
            totalvalue = parseInt(totalvalue )+ d.value;
            return {label:d.label, value:d.value, color:d.color};
                                                   
});
} 

function pieTop(d, rx, ry, ir ){
    if(d.endAngle - d.startAngle == 0 ) return "M 0 0";
    var sx = rx*Math.cos(d.startAngle),
        sy = ry*Math.sin(d.startAngle),
        ex = rx*Math.cos(d.endAngle),
        ey = ry*Math.sin(d.endAngle);
        
    var ret =[];
    ret.push("M",sx,sy,"A",rx,ry,"0",(d.endAngle-d.startAngle > Math.PI? 1: 0),"1",ex,ey,"L",ir*ex,ir*ey);
    ret.push("A",ir*rx,ir*ry,"0",(d.endAngle-d.startAngle > Math.PI? 1: 0), "0",ir*sx,ir*sy,"z");
    return ret.join(" ");
}

function pieOuter(d, rx, ry, h ){
    var startAngle = (d.startAngle > Math.PI ? Math.PI : d.startAngle);
    var endAngle = (d.endAngle > Math.PI ? Math.PI : d.endAngle);
    
    var sx = rx*Math.cos(startAngle),
        sy = ry*Math.sin(startAngle),
        ex = rx*Math.cos(endAngle),
        ey = ry*Math.sin(endAngle);
        
        var ret =[];
        ret.push("M",sx,h+sy,"A",rx,ry,"0 0 1",ex,h+ey,"L",ex,ey,"A",rx,ry,"0 0 0",sx,sy,"z");
        return ret.join(" ");
}

function pieInner(d, rx, ry, h, ir ){
    var startAngle = (d.startAngle < Math.PI ? Math.PI : d.startAngle);
    var endAngle = (d.endAngle < Math.PI ? Math.PI : d.endAngle);
    
    var sx = ir*rx*Math.cos(startAngle),
        sy = ir*ry*Math.sin(startAngle),
        ex = ir*rx*Math.cos(endAngle),
        ey = ir*ry*Math.sin(endAngle);

        var ret =[];
        ret.push("M",sx, sy,"A",ir*rx,ir*ry,"0 0 1",ex,ey, "L",ex,h+ey,"A",ir*rx, ir*ry,"0 0 0",sx,h+sy,"z");
        return ret.join(" ");
}



},

createorgnum: function(response, bindval,text,leftpad,pos,dypoint,categ) {


    var lableString = "";
    var value = "";
    response = response.sort((i, j) =>  parseInt(j.secondString) - parseInt(i.secondString))


    var finyears = new Array();
    var valueArr = new Array(text);
    var initarray = new Array("No. of Tenders")
    var label = new Array();
    for (var i in response) {
        if (response[i]['firstString'] != null) {
            lableString =  (response[i]['firstString']);
          
            value = response[i]['secondString'];
            valueArr.push(parseInt(value));

            //years.push(lableString)
            
            label.push(lableString)
            //finyears.push(response[i]['firstString'] / 1 + '-' + ((response[i]['firstString'].substring(2, 4) / 1) + 1));
        }
    }
    
    var chart = c3.generate({
        bindto: bindval,
        size: {

            height: 520
        },
        bar: {
            width: 30,
        },
        padding: {
            left: leftpad,
            right: 30,
            top: 0,
            bottom: 20
        },
        
        data: {
            columns: [valueArr],
            type: 'bar',
            colors: {
             'No. of Tenders': '#e67e22',
             "Value of Tenders(Rs. in Crores)" : 'green'
         },  
            labels: {
                format: function (d) {
                    return vm.commaSeparateNumber(d)
                }
            },
            
            
        },
        legend: {
            show: false
        },
        
        tooltip: {


         contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
             let conten = '';
    
             for (i = 0; i < chart.data().length; i++) {

                 var indexid = (d[i].id == 'No. of Tenders') ? "# Tenders":"&#8377; Tenders (Rs. in Crores)"
                 var colorid = ( [d[i].id] == 'No. of Tenders') ? "#e67e22" : "green"

                 conten += "<tr><td><span style='background-color:"+colorid+
                     ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>"+ indexid +"</td>" +
                     "<td style='text-align: right;'>" + vm.commaSeparateNumber(d[i].value) + "</td></tr>"
             }
             return ("<table class='c3-tooltip'>" +
                 " <thead><tr><th colspan='2'>" + this.config.axis_x_categories[d[0].x] + "</tr></thead>" +
                 "<tbody>" + conten +
                 "</tbody></table>"
             )
         }


     },
     onrendered: function () {
         d3.select(this.config.bindto).select(".c3-axis-x-label").attr("dy", "-235");
 },
        axis: {
            rotated: true,
            x: {
                type: 'category',
              
                height: 150,
                categories: label,
                tick: {
                 //rotate: -35,
                 format: function (d) {
                    return(vm.SeparateWords(label[d]))
                  },
               multiline: false
             },
                label: {
                    text: categ,
                    position: 'outer-top'
                }
            },
            y: {
             tick: {
                 outer: false
             },
                label: {
                    text: text,
                    position: 'outer-bottom',
                }
            }
        }
    });
   d3.select(".c3-axis-x-label").attr("dx","-5em")
 
   d3.select(".c3-axis-x-label").attr("transform","rotate(-90)")
   d3.selectAll("text")
 //  .style("font-weight","bold")
   .style("font-size","12px");
  
},

createtn: function(response,bindval,type,text,flag,ur,string,other,last,choice,both = false){
       
    response.sort(function(a,b){return (+a.firstString) - (+b.firstString)}) 
    var finyears = response.map(a => a.firstString+"-"+((+a.firstString)+1).toString().substring(2,4))

    var point1 = finyears.indexOf(choice[0]+"-"+(+choice[0]+1).toString().slice(2))
    var point2 = finyears.indexOf(choice[1]+"-"+(+choice[1]+1).toString().slice(2))
    var point2check = point2
    
             finyears = finyears.slice(point1,point2+1)

             if(both){
                 var valueArr1 = response.map(a => parseInt(a[other]))
                 valueArr1 = valueArr1.slice(point1,point2+1)
                 valueArr1.unshift(last)
                 yvalues.push(valueArr1)
         
             }
           
   var prevfinyear = (parseInt(choice[0]))-1

   var prevfinyearno = []

      response.map(function(a){ 
        if(parseInt(a.firstString) == prevfinyear){
          prevfinyearno = parseInt(a[string])
         }
     }) 

    var yvalues = []
    var tooltipvalueArr1 =[]
    var pervalue = []
    var valTender =[]
    var perarrow1 =[]
    var perarrow =[]
    var perno =[]
    var valueArr =[]

    var valueArr = response.map(a =>parseInt(a[string]))

    var noTender = valueArr
    valueArr = valueArr.slice(point1,point2+1)            
    valueArr.unshift(text)
    yvalues.push(valueArr)

    valTender = response.map(a => parseInt(a[other]))  
    tooltipvalueArr1 = valTender.slice(point1,point2+1)

     //Value of Tender

for(var i=0;i<(valTender.length)-1;i++){
    if( valTender[i] == valTender[i+1] ){
     perarrow1.push("")
    }
     else if( valTender[i] < valTender[i+1] )
      {
         a = valTender[i+1]
         b = valTender[i] 
         if(b == 0){
             perarrow1.push("<i class='fas fa-arrow-alt-circle-up' style='font-size:20px;color:green;'></i>")
         }
         else{
             perarrow1.push(Math.abs( ( a - b ) / b  ) === Infinity ? " ":"<i class='fas fa-arrow-alt-circle-up' style='font-size:20px;color:green;'></i>")
         }
      }
      else{
         a = valTender[i]
         b = valTender[i+1] 
         if(b == 0){
             perarrow1.push("<i class='fas fa-arrow-alt-circle-down' style='font-size:20px;color:red;'></i>")
         }
         else{
         perarrow1.push(Math.abs( ( a - b ) / b  ) === Infinity ? " ":"<i class='fas fa-arrow-alt-circle-down' style='font-size:20px;color:red;'></i>")
         }
      }
      var resval = 0
      if( valTender[i] == valTender[i+1] ){
         resval = 0
      }
      else if(b == 0)
      {
         resval = 100
      }
      else{
         resval = (a-b === 0 ? 0 : 100 * Math.abs( ( a - b ) / b  ) ).toFixed(2)
      }
  
if(resval == Infinity)
{
 resval = '-'
}
 pervalue.push(resval)
    }

  // Number of Tender

for(var i=0;i<(noTender.length)-1;i++){
 if( noTender[i] == noTender[i+1] ){
     perarrow.push("")
    }
 if( noTender[i] < noTender[i+1] )
 {
    a1 = noTender[i+1]
    b1 = noTender[i]
    if(b == 0){
     perarrow.push("<i class='fas fa-arrow-alt-circle-up' style='font-size:20px;color:green;'></i>")
 }
 else{
    perarrow.push(Math.abs( ( a1 - b1 ) / b1 ) === Infinity ? " ":"<i class='fas fa-arrow-alt-circle-up' style='font-size:20px;color:green;'></i>")
 }
 }
 else{ 
    a1 = noTender[i]
    b1 = noTender[i+1] 
    if(b == 0){
     perarrow.push("<i class='fas fa-arrow-alt-circle-down' style='font-size:20px;color:red;'></i>")
 }
 else{
    perarrow.push(Math.abs( ( a1 - b1 ) / b1 ) === Infinity ? " ":"<i class='fas fa-arrow-alt-circle-down' style='font-size:20px;color:red;'></i>")
 }
 }
 var resno = 0
      if( noTender[i] == noTender[i+1] ){
         resno = 0
      }
      else if(b == 0)
      {
         resno = 100
      }
      else{
     var resno = (a1-b1 === 0 ? 0 : 100 * Math.abs( ( a1 - b1 ) / b1  ) ).toFixed(2)
      }
     if(resno == Infinity)
     {
         resno = '-'
     }
     perno.push(resno)
}

point = ( (point1-1) == -1)? 0: (point1-1)

pervalue = pervalue.slice(point,point2)
perno = perno.slice(point,point2)
perarrow = perarrow.slice(point,point2)
perarrow1 = perarrow1.slice(point,point2)

if(point1 == 0)
{
  perno.unshift("-")
  pervalue.unshift("-")
  perarrow.unshift("")
  perarrow1.unshift("")
}
if(point2 == point2check)
{
  perno[(perno.length)-1] = "-"
  pervalue[(pervalue.length)-1] = "-"
  perarrow[(perarrow.length)-1] = ""
  perarrow1[(perarrow1.length)-1] = ""
}

     var chart = c3.generate({
       bindto: bindval,
      
       data: {
           columns: yvalues,
           labels:{ 
            format: function(d){
              return vm.commaSeparateNumber(d)
           }  
                },  
            types:{
               [yvalues[0][0]]: type,
               [yvalues[1] == undefined?'':yvalues[1][0]]: type
            }, 
            colors: {
             'No. Of Tenders': '#e67e22',
             "Value of Tenders (Rs. in Crores)" : 'green'
         },
           selection: {
               enabled: !both
           },
              onclick: function (d, element) {
                  if(!both){
                  vm.drill = true
                 if(!vm.tabid.includes("drill")){
                       vm.tabid = vm.tabid+"drill" 
                 }
                 var x = chart.categories()[d.index]
                 x = x.slice(0,x.indexOf("-"))
                 vm.year1 = x;
                 vm.finyear = x;
                 vm.cardloader(vm.code)
                vm.createCharts()
                  }

              }
           },
           
transition: {
duration: 700
},
           legend: {
               show: false
           },
          tooltip: {                           
                      
             contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
                 
      if(!both){
          
                 var conten = ""
                     
                 for (i = 0; i < chart.data().length; i++) {
                  console.log(d[i].id)
  var indexid = (d[i].id.split(" ").splice(0)[0] == 'No') ? "# "+d[i].id.split(" ").splice(-1):"&#8377; "+d[i].id.split(" ").splice(0)[0]+" (Rs. in Crores)"
 var colorid = ( [d[i].id] == 'No. Of Tenders') ? "green":"#e67e22"

if(response.findIndex(function(k){return k[string] == d[i].value}) == -1){

                          
                     conten += "<tr><td><span style='background-color:#1f77b4"+
                     ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + indexid + "</td>" +
                     "<td style='text-align: right;'>" + d[i].value + "</td></tr><tr><td><span style='background-color:#1f77b4"+
                     ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>"+last+"</td>" +
                     "<td style='text-align: right;'>" +0 + "</td></tr>"
}
else{
                     conten += "<tr><td><span style='background-color:"+this.config.data_colors[d[i].id]+
                         ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + indexid + "</td>" +
                         "<td style='text-align: right;'>" + vm.commaSeparateNumber(d[i].value) + "</td>"+
                         "<td style='text-align: right;'>"+perarrow[d[i].index]+" "+perno[d[i].index]+"</td></tr>"+
                         "<tr><td><span style='background-color:"+colorid+";display: inline-block;width: 10px;margin-right: 6px'></span>"+last+"</td>"+
                         "<td style='text-align: right;'>" +vm.commaSeparateNumber(parseInt(tooltipvalueArr1[d[i].index])) + "</td>"+
                         "<td style='text-align: right;'>"+perarrow1[d[i].index]+" "+pervalue
                         [d[i].index]+"</td></tr>"
                         
}		
                 }
                 
                 return ("<table class='c3-tooltip'>" +
                 " <thead><tr><th colspan='3'>Click on it for further drill down </tr></thead>" +
                    // " <thead><tr><th colspan='3' style='background:#0099CC; color:black;'>" + this.config.axis_x_categories[d[0].x] + "</tr></thead>" +
                    " <thead><tr><th colspan='3' style='background:#0099CC; color:black;'>Tenders Published during " + this.config.axis_x_categories[d[0].x] + "</tr></thead>" +
                     " <thead><tr><th style='background:skyblue; color:black;'>Categories</th>"+
                     "<th style='background:skyblue;color:black'></th><th style='background:skyblue;color:black'>Diff. over prev year</th></tr></thead>" +
                     "<tbody>" + conten +
                     "</tbody></table>"
                 )
                }
                else{
                for (i = 0; i < chart.data().length; i++) {
                    conten += "<tr><td><span style='background-color:#1f77b4"+
                    ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + indexid + "</td>" +
                    "<td style='text-align: right;'>" + d[i].value + "</td></tr>"
                 }

                }

                return ("<table class='c3-tooltip'>" +
                " <thead><tr><th colspan='2'>Click on it for further drill down </tr></thead>" +
                // " <thead><tr><th colspan='2'>" + this.config.axis_x_categories[d[0].x] + "</tr></thead>" +
                " <thead><tr><th colspan='3' style='background:#0099CC; color:black;'>Tenders Published during  " + this.config.axis_x_categories[d[0].x] + "</tr></thead>" +
                 " <thead><tr><th style='background:skyblue; color:black;'>Categories</th>"+
                     "<th style='background:skyblue;color:black'></th><th style='background:skyblue;color:black'>Diff. over prev year</th></tr></thead>" +
                "<tbody>" + conten +
                "</tbody></table>")
             }


         },
         onrendered: function () {
             d3.select(this.config.bindto).select(".c3-axis-y-label").attr("dy", "-78");
         },
         padding: {
            top: 15,
            bottom: 10,
            left:100
            },
      axis: {
          x: {
              type: 'category',
              categories: finyears,
              label: {
                     text: 'Financial Year',
                     position: 'outer-center' 
               }
          },y: {
              min: 0,
             padding:{bottom:0},
             tick: {
                  //  count:7,
                format: function(d){
                 
                     return parseInt(d)
                }

              },
              label: {
                  text: text,
                  position: 'outer-middle',
                }
              },
              y2:{
                  show: both,                          
             tick: {
                count: 7,
                format: function(d){
                     return parseInt(d)
                }

              },
              label: {
                  text: last,
                  position: 'outer-center',
                }
              }
      }
  });

if(both){

    chart.data.axes({
        [yvalues[0][0]]: 'y',
        [yvalues[1][0]]: 'y2'
      }); 
  }

//  d3.select(".c3-axis-y-label").attr("dy","-70")
},

createtnm: function(response,valarr,bindval,ur,text,select,finYear,type,str,str1,newt){

var valueArr=new Array(valarr);
var years=new Array();
var montharr
var Tooltip_title=new Array();
response=response['eProc'];
var testers = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan","Feb","Mar"]

var monthlistcrt = ['April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December','January', 'February', 'March'];
var yearfirst = finYear.substring(0, 4);
var yearsecond = parseInt(yearfirst) + 1
// var valueArr=new Array("Nos" +'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+" Year : " + pyear);

for(var i in response){
   if(response[i]['firstString']!=null)
  {
          lableString= response[i]['firstString'];
          var value=response[i][str];
          valueArr.push(parseInt(value));
  }
}
years.length = 0

var tester = new Array();
response.map(function(i,j){ 
 tester.push(i.secondString)
 })
 years = years.unique();

//years.length = 0
valueArr.length = 0
valueArr.push(valarr)

//years = this.montharr
montharr = this.montharr

//montharr = montharr.slice(0, currentDate);

montharr.forEach(function(i,j){
    if(tester.includes(i)){
        var t = response[tester.indexOf(i)][str]
        var t1 = response[tester.indexOf(i)]['secondString']
         valueArr.push(t == null?0:t)	 
         if(i == 'Jan' || i == 'Feb' ||i == 'Mar'){
             years.push(i+" "+yearsecond)
             Tooltip_title .push(monthlistcrt[j]+" "+yearsecond)
          }
         else{
             years.push(i+" "+yearfirst)
             Tooltip_title .push(monthlistcrt[j]+" "+yearfirst)
             }
    }
    
    else  {
     if( parseInt(new Date().getFullYear())-1 != yearfirst){
     if(i == 'Jan' || i == 'Feb' ||i == 'Mar'){
         years.push(i+" "+yearsecond)
         Tooltip_title .push(monthlistcrt[j]+" "+yearsecond)
      }
     else{
         years.push(i+" "+yearfirst)
         Tooltip_title .push(monthlistcrt[j]+" "+yearfirst)
         }
        valueArr.push(0)
     }
    }
})
var initarray = new Array(valueArr.length-1);
initarray.fill(0)
initarray.unshift(valarr)


var chart = c3.generate({
 size: {
     height: 450
     },
   bindto: bindval,
   data: {
      columns: [valueArr],
            type: type,
            labels: {
                format: function (d) {
                    return vm.commaSeparateNumber(d)
                }
            },
         
         },
         transition: {
             duration: 700
         }, 	        
    tooltip: {

       contents: function (d, defaultTitleFormat, defaultValueFormat) {
         
           var conten = ""
           for (i = 0; i < chart.data().length; i++) {
             var ind = (finYear).indexOf("-")
             var ind1 = finYear.substring(ind+2,finYear.length)
               if(response.findIndex(function(k){							
                   return ((k[str] == d[i].value) && (testers[d[i].x] == k.secondString))}) == -1){
                   conten += "<tr><td><span style='background-color:#007bff"+
                   ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + d[i].id + "</td>" +
                   "<td style='text-align: right;'>" + d[i].value + "</td></tr><tr><td><span style='background-color:#007bff"+
                   ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>"+newt+"</td>" +
                   "<td style='text-align: right;'>" +0+ "</td></tr>"		
                   
                   
               }
               
               else{
               
               conten += "<tr><td><span style='background-color:#007bff"+
                   ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + d[i].id + "</td>" +
                   "<td style='text-align: right;'>" + d[i].value + "</td></tr><tr><td><span style='background-color:#007bff"+
                   ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>"+newt+"</td>" +
                   "<td style='text-align: right;'>" +response.find(function(k){return ((k[str] == d[i].value) && (testers[d[i].x] == k.secondString))})[str1] + "</td></tr>"
               }
           }
           
           return ("<table class='c3-tooltip'>" +   
             // " <thead><tr><th colspan='2' style='color:black;'>In the month of " + this.config.axis_x_categories[d[0].x] + 
           " <thead><tr><th colspan='2' style='color:black;'>In the month of " +Tooltip_title[d[0].x]+
               "</tr></thead>" +
               "<tbody>" + conten +
               "</tbody></table>"
           )
       }


   },
   padding: {
    bottom: 35,
    right:35,
    left:100
},
bar: {
 space: 0.50,
 width: {
     ratio: 1.3 // this makes bar width 50% of length between ticks
 }
},
         legend: {
          show: false
      },
  axis: {
      x: {
          
          type: 'categorized',
          categories:years,
          label: {

           text: 'Month',
           position: 'outer-middle',
         }
      },  y:{
      
             rotate: -40,
             tick: {
                count: 7,
                format: function(d){
                     return parseInt(d)
                }

              },
        label: {
              text: text,
              position: 'outer-center',
              
              
            }
    },
      rotated: true
  },
});

d3.select(".c3-axis-y-label").attr("dy","3em")
d3.select(".c3-axis-x-label").attr("dy","-81")

},



createyoy: function(response,res,bindval,type,str,from,to){
    to = to.toString()
var frmyr2 = +(from.substring(2,4)) + 1
var toyr2 = +(to.substring(2,4)) + 1

    var valueArr=new Array(from+"-"+frmyr2);
    var valueArr2 =new Array(to+"-"+toyr2);
    var perval =new Array("% of Growth over Year");
    var years=new Array();
    var tester = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan","Feb","Mar"]
    var montharr = this.montharr


     montharr.forEach(function(i,j){
        if(tester.includes(i)){
            var t = response[tester.indexOf(i)] == undefined
            var t1 = res[tester.indexOf(i)] == undefined
            var val1 = t ?0:response[tester.indexOf(i)][str]
             var val2 = t1 ?0:res[tester.indexOf(i)][str]
            var a = parseInt(val1)
             var b = parseInt(val2)
             valueArr.push(a)	 
             valueArr2.push(b)
             var result = (( a - b ) / b)  == "Infinity"? 100:( a - b ) / b
              perval.push(( a-b === 0 ? 0 : 100 * result).toFixed(2))
              years.push(i)
            //   if(i == 'Jan' || i == 'Feb' ||i == 'Mar'){
            //      years.push(i+' '+to)
            //   }
            //   else{
            //     years.push(i+' '+from)
            //   }
        }
        
        else  {
            valueArr.push(0)
            valueArr2.push(0)
        }
    })

   var valueArr1 = [valueArr,valueArr2,perval]

var chart = c3.generate({
    size :{
        height:500
    },
    bindto: bindval,
    data: {
        columns: valueArr1,
        type: type,
        colors: {
            '% of Growth over Year': function(d) { return d.value < 0 ? 'red' : 'green'; },
        },
        types: {
            "% of Growth over Year": 'spline',
        },
        axes: {
            "% of Growth over Year": 'y2',
        },
        labels: {
            format: function (d) {
                return vm.commaSeparateNumber(d)
            }
        },
    },
    padding: {
        bottom: 10,
        top:15,
        right:50
    },
    
    bar: {
     width: {
         ratio: 0.8
     }
    },
    axis: {
        x: {
            
            type: 'categorized',
            categories:years,
            label: {
             text: 'Month',
             position: 'outer-middle',
           }
        },  y:{
        
               rotate: -40,
               tick: {
                  count: 10,
                  format: function(d){
                       return parseInt(d)
                  }
  
                },
          label: {
                text: "Number of Tenders",
                position: 'outer-center',
                
                
              }
      },
      y2:{
        show: true,                          
   tick: {
    count: 25,
      format: function(d){
           return parseInt(d)+"%"
      }

    },
    label: {
        text: 'Growth',
        position: 'outer-center',
      }
    }
    },
});

d3.select(".c3-axis-y-label").attr("dy","-60").attr("dx","-150")
d3.select(".c3-axis-y2-label").attr("dy","51").attr("dx","-160")
d3.select(".c3-axis-x-label").attr("dy","4em")
   },
    
   

createlast: function(response,bindval,type){

    var finyear =new Array();
    var valueArr = [];
    var tester = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan","Feb","Mar"]
 
    response.forEach( i => {
        finyear.push(i.firstString)
        })
        finyear = finyear.unique()

        finyear.forEach( (j,d) => {
            var frmyr = +(j.substring(2,4)) + 1
         let valueArr1 = new Array(j+'-'+frmyr);
         response.forEach( i => {
        if(i.firstString == j)
        valueArr1.push(i.fifthString)
    })
    valueArr[d]=valueArr1
})

var chart = c3.generate({
    // size:{
    //     height:700
    // },
    bindto: bindval,
    data: {
        columns: valueArr,
        type: type,
        // labels: {
        //     format: function (d) {
        //         return vm.commaSeparateNumber(d)
        //     }
        // },
    },
    padding: {
        bottom: 10,
        top:15,
        right:50
    },
    
    bar: {
     width: {
         ratio: 0.8
     }
    },
    axis: {
        x: {
            
            type: 'categorized',
            categories:tester,
            label: {
             text: 'Month',
             position: 'outer-middle',
           }
        },  y:{
        
               rotate: -40,
               tick: {
                //    count:20,
                  format: function(d){
                       return parseInt(d)
                  }
  
                },
          label: {
                text: "Number of Tenders",
                position: 'outer-center',
                
                
              }
      },
    },
});

d3.select(".c3-axis-y-label").attr("dy","-60").attr("dx","-50")

   },

createcnm: function(response,bindval,type,text,text1,str,str1,tex,tex1,countno,finYear){
    response=response['eProc']

    var yearfirst = finYear.substring(0, 4);
    var yearsecond = parseInt(yearfirst) + 1
    let groups = new Array();
    let xval = new Array();	
    let xAxis = new Array();
    var Tooltip_title=new Array();
    var monthlistcrt = ['April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December','January', 'February', 'March'];

    response.forEach((i,id,arr) => {
    groups.push(i.sixthString)
     xval.push(i.secondString);
    })
     
    groups = groups.unique();
    xval = xval.unique();
    //xAxis = xval
 
    let valarray = new Array();
    groups.forEach(i => {
    valarray.push(new Array(i))
    })
    
    xval.forEach((item,j) => {
    let r = response.filter(i => i.secondString == item)
    let temp = new Array();
    r.forEach((k) => {
     temp.push(k.sixthString)
     var i = k.secondString
     if(i == 'Jan' || i == 'Feb' ||i == 'Mar'){
         xAxis.push(i+" "+yearsecond)
         Tooltip_title.push(monthlistcrt[j]+" "+yearsecond)
      }
     else{
         xAxis.push(i+" "+yearfirst)
         Tooltip_title.push(monthlistcrt[j]+" "+yearfirst)
         }
       
    })
    valarray.forEach(l => {if(temp.includes(l[0])){
          l.push(r.find(it => it.sixthString == l[0])[str])
    }
    
    else{
      l.push("0")
    }	         })
    
    
    })
    xAxis = xAxis.unique();
    Tooltip_title =  Tooltip_title.unique();
    let $types = new Array(groups);

    var chart = c3.generate({
    bindto: bindval,
    size: {
        height: 680
        },
    data: {
     columns: valarray,
     type: type,
     labels: {
        format: function (d) {
            return vm.commaSeparateNumber(d)
        }
    },
     //groups: $types
    },
    bar: {
     //    space: 0.1,
        width: {
           ratio: 0.8
       }
         },
    transition: {
     duration: 700
    },legend: {
     position: 'bottom',
     /*inset: {
          anchor: 'top-right',
          x: 20,
          y: -30
         
      }*/
    },	     
    tooltip:{
      
     
    contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
        let sum = 0
        let conten = '';
    
        for(i=0;i<chart.data().length;i++){
         var ind = (finYear).indexOf("-")
         var ind1 = finYear.substring(ind+2,finYear.length)
              if(response.findIndex(function(l){return ((l[str] == d[i].value) && (l.secondString == xval[d[i].x]))}) == -1){
                  
                  conten += "<tr><td><span style='background-color:"+this.config.data_colors[d[i].id]+
                     ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>"+d[i].id+"</td>" +
                             "<td style='text-align: right;'>"+d[i].value+"</td>"+
                             "<td style='text-align: right;'>"+0+"</td></tr>"
              }
              else{
                  sum += +response.find(function(k){return ((k[str] == d[i].value) && (k.secondString == xval[d[i].x]))})[str1]
                 conten += "<tr><td><span style='background-color:"+this.config.data_colors[d[i].id]+
                         ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>"+d[i].id+"</td>" +
                                 "<td style='text-align: right;'>"+d[i].value+"</td>"+
                                 "<td style='text-align: right;'>"+response.find(function(k){return ((k[str] == d[i].value) && (k.secondString == xval[d[i].x]))})[str1]+"</td></tr>"
              }
             }
                   return  ("<table class='c3-tooltip'>" +
                            //" <thead><tr><th colspan='3' style='color:black;'>"+ this.config.axis_x_categories[d[0].x] + 
                            " <thead><tr><th colspan='3' style='color:black;'>In the month of "+ Tooltip_title[d[0].x] + 
                            "</th></tr></thead>" +
                            " <thead><tr><th style='background:skyblue; color:black;'>Tender Category</th>"+
                            "<th style='background:skyblue; color:black;'>"+tex+"</th>"+
                            "<th style='background:skyblue; color:black;'>"+tex1+"</th></tr></thead>" +
                                    "<tbody>" +conten+
                                    "<tr><td><b>Total</b></td><td style='text-align: right;'>"+d.reduce((s,c) => s+c.value,0)+"</td><td style='text-align: right;'> "+sum+"</td></tr></tbody></table>"
                                )	
    
    }
    
    
    },
    padding: {
        bottom: 10,
        top:10,
        right:30
    },
    grid: {
     y: {
         lines: [{value:0}]
     }
    }, 
    axis: {
     x: {
         type: 'category',
         categories: xAxis,label: {
             text: text1,
             position: 'outer-middle',
             
             
           }
     },
     y:{		        	
         min: 0,
           padding:{bottom:0},
           tick: {
              count: countno,
              format: function(d){
                   return parseInt(d)
              }
    
            },
         label: {
             text: text,
             position: 'outer-bottom',
             
             
           }
     },
     
     rotated: true
    }
    });
    d3.select(".c3-axis-x-label").attr("dy","-81")
    },
    
createbidtypedrill: function(response,bindval,type,text,text1,str,str1,tex,tex1,countno){
 response=response['eProc']
    
    
 let groups = new Array();
 let xval = new Array();	
 response.forEach((i,id,arr) => {
 groups.push(i.sixthString)
  xval.push(i.secondString);
 })
 groups = groups.unique();
 xval = xval.unique();
 xAxis = xval 
 let valarray = new Array();
 groups.forEach(i => {
 valarray.push(new Array(i))
 })
 
 xval.forEach(item => {
 let r = response.filter(i => i.secondString == item)
 let temp = new Array();
 r.forEach(k => temp.push(k.sixthString))
 valarray.forEach(l => {if(temp.includes(l[0])){
       l.push(r.find(it => it.sixthString == l[0])[str])
 }
 
 else{
   l.push("0")
 }	         })
 
 
 })
 
 let $types = new Array(groups);
 
 var chart = c3.generate({
 bindto: bindval,
 size: {
     height: 680
     },
 data: {
  columns: valarray,
  type: type,
  labels: {
     format: function (d) {
         return vm.commaSeparateNumber(d)
     }
 },
  //groups: $types
 },
 bar: {
  //    space: 0.1,
     width: {
        ratio: 0.8
    }
      },
 transition: {
  duration: 700
 },legend: {
  position: 'bottom',
  /*inset: {
       anchor: 'top-right',
       x: 20,
       y: -30
      
   }*/
 },	     
 tooltip:{
   
  
 contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
     let sum = 0
     let conten = '';
 
     for(i=0;i<chart.data().length;i++){
           if(response.findIndex(function(l){return ((l[str] == d[i].value) && (l.secondString == xval[d[i].x]))}) == -1){
               
               conten += "<tr><td><span style='background-color:"+this.config.data_colors[d[i].id]+
                  ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>"+d[i].id+"</td>" +
                          "<td style='text-align: right;'>"+d[i].value+"</td>"+
                          "<td style='text-align: right;'>"+0+"</td></tr>"
           }
           else{
               sum += +response.find(function(k){return ((k[str] == d[i].value) && (k.secondString == xval[d[i].x]))})[str1]
              conten += "<tr><td><span style='background-color:"+this.config.data_colors[d[i].id]+
                      ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>"+d[i].id+"</td>" +
                              "<td style='text-align: right;'>"+d[i].value+"</td></tr>"
           }
          }
                return  ("<table class='c3-tooltip'>" +
                         " <thead><tr><th colspan='3'>"+this.config.axis_x_categories[d[0].x]+"</th></tr></thead>" +
                         " <thead><tr><th>Tender Category</th><th>"+tex+"</th></tr></thead>" +
                                 "<tbody>" +conten+
                                 "<tr><td><b>Total</b></td><td style='text-align: right;'>"+d.reduce((s,c) => s+c.value,0)+"</td></tr></tbody></table>"
                             )	
 
 }
 
 
 },
 padding: {
     bottom: 10,
     top:10,
     right:35
 },
 grid: {
  y: {
      lines: [{value:0}]
  }
 }, 
 axis: {
  x: {
      type: 'category',
      categories: xAxis,label: {
          text: text1,
          position: 'outer-middle',
          
          
        }
  },
  y:{		        	
      min: 0,
        padding:{bottom:0},
        tick: {
           count: countno,
           format: function(d){
                return parseInt(d)
           }
 
         },
      label: {
          text: text,
          position: 'outer-bottom',
          
          
        }
  },
  
  rotated: true
 }
 });
 },
 

    createbidcat: function(response, bindval, type, text, textyrs,String1,String2,choice){
      
        let groups = new Array();
        let xval = new Array();
        response.forEach((i, id, arr) => {
            groups.push(i.secondString)
            xval.push(i.firstString);
        })
        groups = groups.unique();
        xval = xval.unique();

        if (xval[0].indexOf("2") == -1) {
            xAxis = xval;
        } else {
            xAxis = xval.map(i => i + "-" + String(parseInt(i) + 1).substr(2))
        }

        let valarray = new Array();
        groups.forEach(i => {
            valarray.push(new Array(i))
        })

      var j1 = xAxis.indexOf(choice[0]+"-"+(+choice[0]+1).toString().slice(2))
       var j2 = xAxis.indexOf(choice[1]+"-"+(+choice[1]+1).toString().slice(2))

        /*   if(j1 == -1)
        {
            for (i=0;i<=j2;i++)
            {
              xAxis.push( choice[0]+"-"+(+choice[0]+1).toString().slice(2) )
                                 choice[0] = choice[0]+1
        }	
        }*/
         xAxis = xAxis.slice(j1,j2+1)

        xval.forEach(item => {
            let r = response.filter(i => i.firstString == item)
            let temp = new Array();
            r.forEach(k => temp.push(k.secondString))
            valarray.forEach(l => {
                if (temp.includes(l[0])) {
                    l.push(r.find(it => it.secondString == l[0]).thirdString)
                } else {
                    l.push("0")
                }
            })


        })

var valarray1 = []
valarray.map(i => {j = i[0];

                      i = i.slice(j1+1,j2+2);
                      i.unshift(j);
                    valarray1.push(i)})


        let $types = new Array(groups);
   
        var chart = c3.generate({
            bindto: bindval,
            data: {
                columns: valarray1,
                type: type,
                labels: {
                    format: function (d) {
                        return vm.commaSeparateNumber(d)
                    }
                },
                //groups: $types
            },
            bar: {
                
                width: {
                  
                  ratio: 0.7  
               }
                  
              },
            legend: {
                show: true,
                
                inset: {
                    anchor: 'top-left',
                    x: 20,
                    y: 10,
                    step: 2
                }
            },
            tooltip: {

                contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
                      
                    let conten = '';
                    for (i = 0; i < chart.data().length; i++) {
                        conten += "<tr><td><span style='background-color:" + this.config.data_colors[d[i].id] +
                            ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + d[i].id + "</td>" +
                            "<td style='text-align: right;'>" + d[i].value + "</td></tr>"
                    }
                    return ("<table class='c3-tooltip'>" +
                        " <thead><tr><th colspan='2'>" + this.config.axis_x_categories[d[0].x] + "</tr></thead>" +
                        "<tbody>" + conten +
                        "<tr><td><b>Total</b></td><td> " + d.reduce((s, c) => s + c.value, 0) + "</td></tr></tbody></table>"
                    )
                }


            },
            padding: {
                left:90
              },
            grid: {
                y: {
                    lines: [{
                        value: 0
                    }]
                }
            },
            axis: {
                x: {
                    type: 'category',
                    categories: xAxis,
                /*	tick: {
                        fit: true,
                        rotate: -35,
                        multiline: false
                    },*/
                    //height: 100,

                    label: {
                        text: 'Year',
                        position: "outer-end",


                    },

                },
                y: {
                    label: {
                        text: 'No.of Bids',
                        position: 'outer-middle',


                    }
                },
                rotated: false
            }
        });
        d3.select(".c3-axis-y-label").attr("dx","-45").attr("dy","-68")
},

createbidsdrill: function(response,bindval,finYear,text,type){

        var valueArr=new Array(" No. of Bids");
    var years=new Array();
    var lableString=new Array();
    var yearfirst = finYear.substring(0, 4);
    var yearsecond = parseInt(yearfirst) + 1

     for(var i in response){	
        value=response[i]['secondString'];
        valueArr.push(parseInt(value));
    }

    
    if(text == "Month"){
      var tester = response.map(function(i,j){ return i.firstString})
      years.length = 0
      valueArr.length = 0
      valueArr.push("No. of Bids")
      years = this.montharr	  

         this.montharr.forEach(function(i,j){
             if(tester.includes(i)){
               valueArr.push(response[tester.indexOf(i)]['secondString'])
               if(i == 'Jan' || i == 'Feb' ||i == 'Mar'){
                 lableString.push(i+" "+yearsecond)
              }
             else{
                 lableString.push(i+" "+yearfirst)
                 }
             }
             else{
                 if( parseInt(new Date().getFullYear())-1 != yearfirst)
                 {
                 if(i == 'Jan' || i == 'Feb' ||i == 'Mar'){
                     lableString.push(i+" "+yearsecond)
                  }
                 else{
                     lableString.push(i+" "+yearfirst)
                     }
                     valueArr.push(0)
                 }
                
             }
         })
    }
    
     var chart = c3.generate({
         bindto: bindval,
        data: {
            columns: [valueArr],
        type: type,
        colors:
            {
              'No. of Bids' : '#535c68',
            },
        labels: {
            format: function (d) {
                return vm.commaSeparateNumber(d)
                 }
                },
           },
           tooltip: {


             contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
 
                 let conten = '';
                 for (i = 0; i < chart.data().length; i++) {
                     conten += "<tr><td><span style='background-color:" + this.config.data_colors[d[i].id] +
                         ";display: inline-block;width: 10px;width: 10px;margin-right: 6px'></span>" + d[i].id + "</td>" +
                         "<td style='text-align: right;'>" + d[i].value + "</td></tr>"
                 }
                 return ("<table class='c3-tooltip'>" +
                     " <thead><tr><th colspan='2' style='color:black;'>In the month of " + lableString[d[0].x] +
                      "</th></tr></thead>" +
                    "<tbody>" + conten +"</tbody></table>"
                 )
             }
 
 
         },
           padding:{
                bottom:20
           },
         legend: {
            show: false
        },
        axis: {
            x: {
                type: 'category',
              //  height: height,
                categories: lableString,label: {

                    text: text,
                    position: 'outer-center',
                  }
            },
            y:{
          rotate: -40,
                label: {

                    text: 'No.of Bids',
                    position: 'outer-middle',
                  }
            },
        rotated: true
          }
    });
     
    d3.select(".c3-axis-y-label").attr("dx","-450").attr("dy","3.3em")
    d3.select(".c3-axis-x-label").attr("dx","-100").attr("dy","-80")
},

createcpporgbyno: function(k,valueto,type,valueString,updateflag)
{
 $("#spin").empty();	 

 var name;
if(type == "central"){
var d2 = k.eProc.sort(function(a,b){
    return (+b[valueto]) - (+a[valueto])
}).filter((d,i) => i<=19
)

var nested = d3.nest().key(function(d){
    return d.thirdString
}).rollup(function(v){		
    return +v[0][valueto]		
}).entries(d2)

    var codes = d2.map(k => k.thirdString)
    name = "Central Organisations"
}

else if(type == "state" || type == "psu"){
//    / $("#spin2").hide();
var nested = d3.nest().key(function(d){return d.secondString}).rollup(function(v){
    return   d3.sum(v,function(d){ 
         
        return d[valueto]})/v.length
}).entries(k.eProc)

nested  = nested.sort(function(a,b){

    return a.value - b.value
});

var codes = (k.eProc.sort((a,b) => +a.fourthString - +b.fourthString)).map(k => k.eighthString);
   name = "States"
}

else if(type == "regbidder"){
var d2 = k.eProc.sort(function(a,b){
   return (+b[valueto]) - (+a[valueto])
}).filter((d,i) => i<=19
)

var nested = d3.nest().key(function(d){
   return d.firstString
}).rollup(function(v){		
   return +v[0][valueto]		
}).entries(d2)

   var codes = d2.map(k => k.firstString)
   name = "Organisations"
}

 codes = new Set(codes)
 codes = Array.from(codes)
var rootData = {
name: name,
children:""
}

var colors = generateColors(40);

nested.forEach(function(o,i){
o.color =  colors[i];
o.code = codes[i]
delete Object.assign(o, {["name"]: o["key"] })["key"];
delete Object.assign(o, {["tender"]: o["value"] })["value"];

});
rootData.children = nested

function generateColors(number){
if(typeof(arguments[1])!='undefined'&&arguments[1].constructor==Array&&arguments[1][0]&&arguments[1][0].constructor!=Array){
    for(var i=0;i<arguments[1].length;i++){ //for all the passed colors
        var vals = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(arguments[1][i]); //get RGB values
        arguments[1][i]=[parseInt(vals[1], 16),parseInt(vals[2], 16),parseInt(vals[3], 16)]; //and convert them to base 10
    }
}
var loadedColors=typeof(arguments[1])=='undefined'?[]:arguments[1],//predefine colors in the set
        number=number+loadedColors.length,//reset number to include the colors already passed
        lastLoadedReduction=Math.floor(Math.random()*3),//set a random value to be the first to decrease
        rgbToHSL=function(rgb){//converts [r,g,b] into [h,s,l]
    var r=rgb[0],g=rgb[1],b=rgb[2],cMax=Math.max(r,g,b),cMin=Math.min(r,g,b),delta=cMax-cMin,l=(cMax+cMin)/2,h=0,s=0;if(delta==0)h=0;else if(cMax==r)h=60*((g-b)/delta%6);else if(cMax==g)h=60*((b-r)/delta+2);else h=60*((r-g)/delta+4);if(delta==0)s=0;else s=delta/(1-Math.abs(2*l-1));return[h,s,l]
},hslToRGB=function(hsl){//converts [h,s,l] into [r,g,b]
    var h=hsl[0],s=hsl[1],l=hsl[2],c=(1-Math.abs(2*l-1))*s,x=c*(1-Math.abs(h/60%2-1)),m=l-c/2,r,g,b;if(h<60){r=c;g=x;b=0}else if(h<120){r=x;g=c;b=0}else if(h<180){r=0;g=c;b=x}else if(h<240){r=0;g=x;b=c}else if(h<300){r=x;g=0;b=c}else{r=c;g=0;b=x}return[r,g,b]
},shiftHue=function(rgb,degree){//shifts [r,g,b] by a number of degrees
    var hsl=rgbToHSL(rgb); //convert to hue/saturation/luminosity to modify hue
    hsl[0]+=degree; //increment the hue
    if(hsl[0]>360){ //if it's too high
        hsl[0]-=360 //decrease it mod 360
    }else if(hsl[0]<0){ //if it's too low
        hsl[0]+=360 //increase it mod 360
    }
    return hslToRGB(hsl); //convert back to rgb
},differenceRecursions={//stores recursion data, so if all else fails we can use one of the hues already generated
        differences:[],//used to calculate the most distant hue
        values:[]//used to store the actual colors
},fixDifference=function(color){//recursively asserts that the current color is distinctive
    if(differenceRecursions.values.length>23){//first, check if this is the 25th recursion or higher. (can we try any more unique hues?)
        //if so, get the biggest value in differences that we have and its corresponding value
        var ret=differenceRecursions.values[differenceRecursions.differences.indexOf(Math.max.apply(null,differenceRecursions.differences))];
        differenceRecursions={differences:[],values:[]}; //then reset the recursions array, because we're done now
        return ret; //and then return up the recursion chain
    } //okay, so we still have some hues to try.
    var differences=[]; //an array of the "difference" numbers we're going to generate.
    for(var i=0;i<loadedColors.length;i++){ //for all the colors we've generated so far
        var difference=loadedColors[i].map(function(value,index){ //for each value (red,green,blue)
            return Math.abs(value-color[index]) //replace it with the difference in that value between the two colors
        }),sumFunction=function(sum,value){ //function for adding up arrays
            return sum+value
        },sumDifference=difference.reduce(sumFunction), //add up the difference array
        loadedColorLuminosity=loadedColors[i].reduce(sumFunction), //get the total luminosity of the already generated color
        currentColorLuminosity=color.reduce(sumFunction), //get the total luminosity of the current color
        lumDifference=Math.abs(loadedColorLuminosity-currentColorLuminosity), //get the difference in luminosity between the two
        //how close are these two colors to being the same luminosity and saturation?
        differenceRange=Math.max.apply(null,difference)-Math.min.apply(null,difference),
        luminosityFactor=50, //how much difference in luminosity the human eye should be able to detect easily
        rangeFactor=75; //how much difference in luminosity and saturation the human eye should be able to dect easily
        if(luminosityFactor/(lumDifference+1)*rangeFactor/(differenceRange+1)>1){ //if there's a problem with range or luminosity
            //set the biggest difference for these colors to be whatever is most significant
            differences.push(Math.min(differenceRange+lumDifference,sumDifference));
        }
        differences.push(sumDifference); //otherwise output the raw difference in RGB values
    }
    var breakdownAt=64, //if you're generating this many colors or more, don't try so hard to make unique hues, because you might fail.
    breakdownFactor=25, //how much should additional colors decrease the acceptable difference
    shiftByDegrees=15, //how many degrees of hue should we iterate through if this fails
    acceptableDifference=250, //how much difference is unacceptable between colors
    breakVal=loadedColors.length/number*(number-breakdownAt), //break down progressively (if it's the second color, you can still make it a unique hue)
    totalDifference=Math.min.apply(null,differences); //get the color closest to the current color
    if(totalDifference>acceptableDifference-(breakVal<0?0:breakVal)*breakdownFactor){ //if the current color is acceptable
        differenceRecursions={differences:[],values:[]} //reset the recursions object, because we're done
        return color; //and return that color
    } //otherwise the current color is too much like another
    //start by adding this recursion's data into the recursions object
    differenceRecursions.differences.push(totalDifference);
    differenceRecursions.values.push(color);
    color=shiftHue(color,shiftByDegrees); //then increment the color's hue
    return fixDifference(color); //and try again
},color=function(){ //generate a random color
    var scale=function(x){ //maps [0,1] to [300,510]
        return x*210+300 //(No.brighter than #ff0 or #0ff or #f0f, but still pretty bright)
    },randVal=function(){ //random value between 300 and 510
        return Math.floor(scale(Math.random()))
    },luminosity=randVal(), //random luminosity
    red=randVal(), //random color values
    green=randVal(), //these could be any random integer but we'll use the same function as for luminosity
    blue=randVal(),
    rescale, //we'll define this later
    thisColor=[red,green,blue], //an array of the random values
    valueToReduce=Math.floor(lastLoadedReduction+1+Math.random()*2.3)%3, //which value to reduce
    valueToIncrease=Math.floor(valueToIncrease+1+Math.random()*2)%3, //which value to increase (not the one we reduced)
    increaseBy=Math.random()+1; //how much to increase it by
    lastLoadedReduction=valueToReduce; //next time we make a color, try not to reduce the same one
    thisColor[valueToReduce]=Math.floor(thisColor[valueToReduce]/16); //reduce one of the values
    thisColor[valueToIncrease]=Math.ceil(thisColor[valueToIncrease]*increaseBy) //increase one of the values
    rescale=function(x){ //now, rescale the random numbers so that our output color has the luminosity we want
        return x*luminosity/thisColor.reduce(function(a,b){return a+b}) //sum red, green, and blue to get the total luminosity
    };
    thisColor=fixDifference(thisColor.map(function(a){return rescale(a)})); //fix the hue so that our color is recognizable
    if(Math.max.apply(null,thisColor)>255){ //if any values are too large
        rescale=function(x){ //rescale the numbers to legitimate hex values
            return x*255/Math.max.apply(null,thisColor)
        }
        thisColor=thisColor.map(function(a){return rescale(a)});
    }
    return thisColor;
};
for(var i=loadedColors.length;i<number;i++){ //Start with our predefined colors or 0, and generate the correct number of colors.
    loadedColors.push(color().map(function(value){ //for each new color
        return Math.round(value) //round RGB values to integers
    }));
}

return loadedColors.map(function(color){
    var hx=function(c){ //for each value
        var h=c.toString(16);//then convert it to a hex code
        return h.length<2?'0'+h:h//and assert that it's two digits
    }
    return "#"+hx(color[0])+hx(color[1])+hx(color[2]); //then return the hex code
});
}


//begin: constants
var _2PI = 2*Math.PI;
//end: constants

//begin: layout conf.
var svgWidth = document.documentElement.clientWidth + 2000,
svgHeight = document.documentElement.clientHeight + 1000,
margin = {top: 50, right: 10, bottom: 1, left: 300},
height = svgHeight - margin.top - margin.bottom,
//height = svgHeight
width = svgWidth - margin.left - margin.right,
halfWidth = width/1.5,
halfHeight = height/2.5,
quarterWidth = width/4,
quarterHeight = height/4,
titleY = 20,
legendsMinY = type == "state"?height/1.15:height/1.2,

legendsMinX = 0,
//treemapRadius = svgHeight/2.5,
treemapRadius = type == "state"?svgHeight/2:svgHeight/2.3,
treemapCenter = [halfWidth, halfHeight+50];
//end: layout conf.

//begin: treemap conf.

var _voronoiTreemap = d3.voronoiTreemap();

var hierarchy, circlingPolygon;
//end: treemap conf.

//begin: drawing conf.
//var fontScale = d3.scaleLinear();
//end: drawing conf.

//begin: reusable d3Selection
var svg, drawingArea, treemapContainer;
//end: reusable d3Selection
initData();

if(!updateflag){

 initLayout(rootData);
 }
 else{
 updateLayout(rootData)
 }
 
 hierarchy = d3.hierarchy(rootData).sum(function(d){ return d.values; });
 
 _voronoiTreemap
 .clip(circlingPolygon)
 (hierarchy);
 
 
 drawTreemap(hierarchy);
 
 
 function initData(rootData) {
     
    circlingPolygon = computeCirclingPolygon(treemapRadius);
    
    //fontScale.domain([3, 20]).range([100, 200]).clamp(true);
 }
 
 function computeCirclingPolygon(radius) {
    var points 
    if(type == "state"){
        points = 6
    }
    else if(type == "central"){
        points = 30
    }
    else if(type == "regbidder"){
     points = 30
 }
 else if (type == "psu"){
     treemapRadius = svgHeight/2,
     points = 3
 }
   
    increment = _2PI/points,
    circlingPolygon = [];
 
    for (var a=0, i=0; i<points; i++, a+=increment) {
        circlingPolygon.push(
                [radius + radius*Math.cos(a), radius + radius*Math.sin(a)]
        )
    }
 
    return circlingPolygon;
 };
 
 function initLayout(rootData) {
    d3.select("#spin").append("svg").classed("chart",true)	
    svg = d3.select(".chart")
             .attr("viewBox","0 0 "+svgWidth+" "+svgHeight)
    
    drawingArea = svg.append("g")
         
    .classed("drawingArea", true)
    .attr("transform", "translate("+[margin.left,margin.top]+")");
 
    treemapContainer = drawingArea.append("g")
    .classed("treemap-container", true)
    
    .attr("transform", "translate("+treemapCenter+")");
 
    treemapContainer.append("path")
    .classed("world", true)
    
    .attr("transform", "translate("+[-treemapRadius,-treemapRadius]+")")
    
    .attr("d", "M"+circlingPolygon.join(",")+"Z");
    //drawTitle()
    drawLegends(rootData)
 }
 
 function updateLayout(rootData){
   
    svg = d3.select(".chart")
          
    var drawingArea = svg.select('.drawingArea')
       
         drawingArea.remove();
        svg.remove()
        initData();
        initLayout(rootData)	
    
    
 }
 
 function drawLegends(rootData) {
     var legendHeight = 25
 if(type == 'state'){
    interLegend = 25
     sortorder = "name"
 }
 else if(type == 'psu'){
     legendsMinY = height/3
     interLegend = 30
     sortorder = "wise"
  }
 else{
    interLegend = 30
    sortorder = "code"
 }

    colorWidth = legendHeight*8,
    states = rootData.children.reverse();

    //Comparer Function    
function GetSortOrder(prop) {    

 return function(a, b) {    
     if (a[prop] > b[prop]) {    
         return 1;    
     } else if (a[prop] < b[prop]) {    
         return -1;    
     }    
     return 0;    
 }    
}    
 
states.sort(GetSortOrder(sortorder));
states.reverse();
 
    var legendContainer = drawingArea.append("g")
    .classed("legend", true)
    .attr("transform", "translate("+[legendsMinX, legendsMinY]+")");
 
    var legends = legendContainer.selectAll(".legend")
    .data(states)
    .enter();
 
    var legend = legends.append("g")
    .classed("legend", true)
    .attr("transform", function(d,i){
        return "translate("+[-200, -i*(legendHeight+interLegend)]+")";
    })
 
    legend.append("rect")		
    .attr("class",function(d){
        return d.code.replace(/ /g,'')
    })
    .attr("y", -legendHeight)
    .attr("width", colorWidth)
    .attr("height", legendHeight)
    .style("fill", function(d){ return d.color; })
    
    legend.append("text")
    .classed("tiny", true)
    .attr("transform", "translate("+[colorWidth+5, -2]+")")
    .text(function(d){ return d.name; })
    .style("font-size","40px");
    var text;
    if(type == "central"){
    text = "Central Organisations"
    }
     else if(type == "state"){
         text = "States"
     }
     else if(type == "psu"){
         text = "States/PSUs"
     }
     else if(type == "regbidder"){
         text = "States"
     }

    legendContainer.append("text")
    .attr("transform", "translate("+[-200, -states.length*(legendHeight+interLegend)-5]+")")
    .text(text)
    .style("font-size","35px");
    
    d3.selectAll(".legend rect").each(function(){
          d3.select(this).node().classList.add("legend-color")
      })
 }
 
 
 
 
 function drawTreemap(hierarchy) {
    var leaves=hierarchy.leaves();
 
    leaves.sort(function(a,b){			
        return a.polygon.site.y - b.polygon.site.y
    })
    
    var cells = treemapContainer.append("g")
    .classed('cells', true)
    .attr("transform", "translate("+[-treemapRadius,-treemapRadius]+")")
    .selectAll(".cell")
    .data(leaves)		
    .enter()
    .append("path")
    .classed("cell", true)		
    .attr("d", function(d){ return "M"+d.polygon.join(",")+"z"; })
    .style("fill", function(d){
        return d.data.color;
    })
 
 
    var labels = treemapContainer.append("g")
    .classed('labels', true)
    .attr("transform", "translate("+[-treemapRadius,-treemapRadius]+")")
    .selectAll(".label")
    .data(leaves)
    .enter()
    .append("g")
    .classed("label", true)
    .attr("transform", function(d){
        return "translate("+[d.polygon.site.x , d.polygon.site.y]+")";
 
    })
    .style("font-size", "40px")
  
    
    

//Making the annotations
/*
var dist;
     // Note use of x, y, color scales. +d converts strings to numerics.
     const annotations = leaves.map(function(d, i){
         
         //if(((d.data.tender/d.parent.value)*100).toFixed(2) < 2){
         if(d.polygon.site.x < treemapRadius/2){
             dist = -treemapRadius-10;
         }
         else if(d.polygon.site.x >=  treemapRadius/2  && d.polygon.site.x < treemapRadius){
             dist = -treemapRadius-i/10
         }
         else if(d.polygon.site.x >= 3*(treemapRadius/2)){
             dist = treemapRadius/2;
         }
         else if(d.polygon.site.x >= treemapRadius && d.polygon.site.x < 3*(treemapRadius/2)){
             dist = treemapRadius + i/10
         }
         
             return {
                 note: {
                        //label: ((d.data.tender/d.parent.value)*100).toFixed(2) + "%",
                        bgPadding: 50,
                      title: d.data.code+" "+ ((d.data.tender/d.parent.value)*100).toFixed(2) + "%",
                       wrap: 214, // text wrap threshold
                       align: 'left', //cf. right, middle, dynamic
                 },
                 //connector: {end: 'dot'},
                 subject: { radius: 20 },// cf. arrow
                 x: d.polygon.site.x,
                 y: d.polygon.site.y,
                 dy: i,
                 dx: dist,// horizontal offset
                         color: "black"
             }
             
     })
*/
    labels.append("text")
    .classed("value", true)
    .text(function(d){
        if(((d.data.values/d.parent.value)*100).toFixed(2) > 1.5){
            return ((d.data.values/d.parent.value)*100).toFixed(2) + "%"; 
        }
        else{
            return "";
        }
    })
    .attr("transform","translate(-50,30)")
   .style('fill', 'black')

 
  var hoverers = treemapContainer.append("g")
  .classed('hoverers', true)			
 .attr("transform",  "translate("+[-treemapRadius,-treemapRadius]+")")
  .selectAll(".hoverer")
 .data(leaves)
 .enter()
  .append("path")
  .attr("class",function(d){
     return d.data.code.replace(/ /g,'')
 })
 .attr("d", function(d){ return ("M"+d.polygon.join(",")+"z"); })
 
  hoverers.append("title")
  .text(function(d) {return d.data.name + "\n" +valueString+": " +vm.commaSeparateNumber(d.value)+"\nPercentage Value : "+((d.data.values/d.parent.value)*100).toFixed(2) + "%" })
  
  hoverers.each(function(){
      d3.select(this).node().classList.add("hoverer")
  }) 

      //Actions on annotations
/*
     const makeAnnotations = d3.annotation()
 //	.type(d3.annotationCalloutCircle) //cf. annotationLabel etc.
 .type(d3.annotationLabel)
     .annotations(annotations)
     .on('subjectover', function (annotation) {
         
         annotation.type.a.selectAll("g.annotation-connector, g.annotation-note").classed("hidden", false).style("font-size","35px")
     }).on('subjectout', function (annotation) {
         annotation.type.a.selectAll("g.annotation-connector, g.annotation-note").classed("hidden", true);
     })
     .notePadding(15)
     //.editMode(true)
     .textWrap(10)
     //.style("font-size", "40px");



// Adding the annotations to the chart
     var annotationdesign = 	treemapContainer.append("g")
     .classed('annotations-group', true)
     .attr("transform", "translate("+[-treemapRadius,-treemapRadius]+")")
     .call(makeAnnotations)


     treemapContainer.selectAll("g.annotation-connector, g.annotation-note").classed("hidden", true);*/
     
     d3.selectAll("g.callout").each(function(d,i){
         if(d3.select(this).attr("transform") == "translate(0, 0)"){
             d3.select(this).attr("visibility","hidden")
         }
     })
     
    d3.selectAll(".legend-color").on('mouseover',function(){
        var t = this
         d3.selectAll(".hoverer").each(function(){
             if(d3.select(t).node().classList[0] == d3.select(this).node().classList[0]){
                 d3.select(this).node().classList.add("hovered")
             }
         })
    })
 
 
   d3.selectAll(".legend-color").on('mouseout',function(){
       var t = this
        d3.selectAll(".hoverer").each(function(){
            if(d3.select(t).node().classList[0] == d3.select(this).node().classList[0]){
                d3.select(this).node().classList.remove("hovered")
            }
        })
   })
 
 
 }
},


         
     oneyearreturn: function(){
        code = this.code;
     if(code=='ALL' || code == null){
         code = ""
    }
    var choiceString1 = this.finyeartop

     var resp1 = this.ajaxCall(this.basicURL+"KPI/PanelChartStatistics?financeYear=&siteCode="+code+"&org=")
     resp1.then(function(t){
         t = t.eProc
         var selchoice2 = document.getElementById("yrsingle")
          
         $("#yrsingle").empty();
    
if(+t[6].secondString == 2020)
{
   // alert(+t[6].secondString)
   
   var option = document.createElement("OPTION");
   option.value = "2020";
   option.innerHTML = "2020-21";
   selchoice2.appendChild(option);

   this.finyeartop = "2020"
}
else{
   
    for(var yrchoice2 = 2020; yrchoice2 >= +t[6].secondString; yrchoice2--){
        var option2 = document.createElement("OPTION");
        option2.value = +yrchoice2;
        option2.innerHTML = +yrchoice2+"-"+(parseInt(yrchoice2)+1).toString().slice(2);
        selchoice2.appendChild(option2);
       }
   
  // selchoice.selectedIndex =this.indexvalyr1;
  var y = document.getElementById("yrsingle").options;
    for(var i = 0; i < y.length; i++) {
        if(y[i].value === choiceString1) {
            y[i].selected = true;
            break;
        }
    }
}
 })
     },
   
     changeback: function(){
       this.twoyearreturn()
      
              if(this.tabid.includes("drill")){
               this.tabid = this.tabid.replace("drill","")                   
              }
              this.drill = false           
              this.cardloader(this.code)
              this.createCharts()

            var regExpr = /[^a-zA-Z0-9]/g
            this.tabliid = this.tabid
            this.tabliid = this.tabliid.replace(regExpr, "")
             $(".tabs").find('ul').find('li').removeClass("is-active")
             $("#"+this.tabliid).addClass("is-active")

            //$('input[type="radio"]').prop('checked', false);
             //$("#"+this.id).prop('checked',true);
         
          // $('input[type=radio]').removeAttr('checked');
        //  $("#"+this.id).attr("checked", "checked")
            
    },

     
    changeseconddrop: function () {
        
        var selchoice1 = document.getElementById("yearsel2")
        var selchoiceval = document.getElementById("yearsel1").value
        var selchoiceval1 = document.getElementById("yearsel2").value
    
        $("#yearsel2").empty();
       
    for(var yrchoice1 =parseInt((selchoiceval))+1; yrchoice1 <= 2020; yrchoice1++){
        var option1 = document.createElement("OPTION");
        option1.value = +yrchoice1;
        option1.innerHTML = +yrchoice1+"-"+(parseInt(yrchoice1)+1).toString().slice(2);
        selchoice1.appendChild(option1);
      }
  // selchoice1.selectedIndex = selchoice1.length-3;

  var x = document.getElementById("yearsel2").options;
  for(var i = 0; i < x.length; i++) {
      if(x[i].value === selchoiceval1) {
          x[i].selected = true;
          break;
      }
  }
    },

	singlechange: function () {
    $("#new").empty();
      //  this.tabid = a.id.replace(/\s/g, "") 
        this.finyeartop = $("#yrsingle option:selected").val()
      
    //     if(this.tabid == 'StatusOfBidders'){
    //     this.biddryr = $("#yrsingle option:selected").val()
    // }

    if(this.checker == 'Percentage Distribution' || this.checker == 'All GePNIC Instances'){
        this.finyeartop = $("#combodrop option:selected").val()
    }
    if(this.tabid == 'StateWiseBidder'){
        this.biddryr1 = $("#yrsingle option:selected").val()
    }
        this.createCharts()
    },
   
categorywise: function(){
   var checkBox = document.getElementById("catewise");
   
   if(checkBox.checked == true)
   {this.categdropdown = 'without'}
   else
   {this.categdropdown = ' '}
    this.createCharts()
},
	changeChart: function () {
        console.log("change")
        $("#new").empty();
        $("#new1").empty();
        $("#new2").empty();
        $("#new3").empty();
        $("#new4").empty();

        if(this.tabid == 'DSCRegisteredvs.MSMEBidders'){

        this.dscbox1 = $("#yearsel1 option:selected").val()
        this.checkselectdsc = $("#yearsel2 option:selected").val()
     
     if(this.dscbox1 > this.checkselectdsc)
     {
       this.dscbox2 =  (parseInt(this.dscbox1)+1).toString()
     }
     else{
       this.dscbox2 = $("#yearsel2 option:selected").val()
     }
    
   this.choice = [this.dscbox1 , this.dscbox2]
        }//if dsc condition

        this.selectbox1 = $("#yearsel1 option:selected").val()
        this.checkselect = $("#yearsel2 option:selected").val()

      if(this.selectbox1 > this.checkselect)
      {
        this.selectbox2 =  (parseInt(this.selectbox1)+1).toString()
      }
      else{
        this.selectbox2 = $("#yearsel2 option:selected").val()
      }
      
    this.choice = [this.selectbox1 , this.selectbox2]

    var x = document.getElementById("yearsel1").selectedIndex;
    var y = document.getElementById("yearsel1").options;
    this.indexvalyr1 = y[x].index;

    var x1 = document.getElementById("yearsel2").selectedIndex;
    var y1 = document.getElementById("yearsel2").options;
    this.indexvalyr2 = y1[x1].index
    
        this.createCharts()
    },

        singleslideit: function(a){ 
	$("#new").empty();
	$("#new1").empty();
	$("#new2").empty();
	$("#new3").empty();
	$("#new4").empty();

    this.finyeartop = a
        this.createCharts()       
           },

        slideit: function(a){
      //   $("#new").empty();
	$("#new1").empty();
	$("#new2").empty();
	$("#new3").empty();
	$("#new4").empty();

            this.choice = a
            this.createCharts()
                  
           },
           commaSeparateNumber:function (val){
            if(val != null){
            var x=val;
            var y = '';
            var n1=0;
           x=x.toString();
           if(x.includes("."))
          {
             y = x.toString();
              n1 = x.indexOf(".");
              x = x.substring(0,n1)
          }
           var lastThree = x.substring(x.length-3);
           var otherNumbers = x.substring(0,x.length-3);
           
           if(otherNumbers != '' )
               lastThree = ',' + lastThree;
           var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
           if(y.includes(".")){
             var n2 = y.substring(n1,y.length)
             n2=n2.toString();
             return res+n2; 
           }
           else{
               return res;
             }
         }   
             },
             SeparateWords:function (a){
                 if(a !=undefined)
                {
                //var res = a.split(/((?:\w+ ){4})/g).filter(Boolean).join("\n");
               var value =  a.replace(/,|\.|-/g, ' ');   // a.replace(/-/g, ' ')
                var res = value.split(/((?:\w+ ){4})/g).filter(Boolean);
                if( (res[1] !=undefined) )
                {
              if( (res[1].split(" ").length) < 5)
              {
                 res = value.split(/((?:\w+ ){4})/g).filter(Boolean);
              }
             }
         return res;
             }
               
                  },

        //IT IS USED TO CHECK THE TOP MENU CHANGES AND ACT ACCORDINGLY
        call: function(event){
            this.checker = event.target.textContent.replace(/\s+/g, '')
          
           setTimeout(function(){
             vm.onChange($("input:checked")[0])
           },200)
            
            
         },
 
         // Download the chart in png format
 
         exportChartToPng: function(chartID){
           //fix weird back fill
        d3.select('#'+chartID).selectAll("path").attr("fill", "none");
        //fix no axes
        d3.select('#'+chartID).selectAll("path.domain").attr("stroke", "black");
        //fix no tick
        d3.select('#'+chartID).selectAll(".tick line").attr("stroke", "black");
        var svgElement = $('#'+chartID).find('svg')[0];
        saveSvgAsPng(svgElement, this.title+'.png');
         },
        
         //changing of combobox
         combochange: function(e){  
   //command line for setting tenders default
 
             //this.checker = 'Tender Analysis'
           //  this.tabid = 'Tenders-byNo.'
            // this.id =  "num1"
           //  this.drill = false
          //   $('input[type="radio"]').prop('checked', false);
      //   $('input[type="radio"]:first').prop('checked', true);
      //$(".tabs").find('ul').find('li').removeClass("is-active")
      //$(".tabs").find('ul').find('li:first-child').addClass("is-active")
       
             this.slide = false
                    let turg = e.value.split("|")
                    this.head = turg[1]
                    this.code = turg[0]
                    this.cardloader(turg[0])

                     this.finyeartop = '2020'
                     vm.finyeartop = '2020'
                     vm.choice[0] = '2015'
                     vm.choice[1] = '2020'
                    // if(document.getElementById("type") != null)
                   //  this.corrigentype = type.options[0].value
 
              if( (this.checker == 'Tender Analysis' || this.checker == 'Bids Analysis' 
                     || this.checker == 'Key Performance Indicators'  || this.id == 'groupkpi6' || this.tabid == "LastFiveYears")
                                && this.tabid != 'ValidTendersvsBidsAwarded' )
                    this.twoyeardrop()
              if(this.checker == 'Top 10 Analysis' || this.checker == 'Corrigendums Analysis' 
                          || (this.checker == 'Key Performance Indicators ' && this.tabid == 'ValidTendersvsBidsAwarded' ) 
                                 || this.tabid =="NumberofTenderYOY")
                    this.topwisesingle()
            //   if(this.tabid == 'NoofCorrigendumsforSpecifictype' && this.id == 'Specified')
            //   this.corrtype();
                   
              this.cardloader(this.code)
               this.createCharts()
         },
 
           //card details to be loaded for unified
           /*conreportPanel: function(){
 
         var resp3 = this.ajaxCall(this.basicURL+"Top10/consolidatedpanel.json?financeYear="+this.finyeartop+"&siteCode=ALL")
         
                                   
             resp3.then(function(t){
                 
                    t = t.eProc
                    vm.num = parseInt(t[0].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                  //  vm.year = parseInt(t[5].secondString) == 0?"Since Inception":parseInt(t[5].secondString)+"-Till Date"
                    vm.val = parseInt(t[1].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                    vm.bids = parseInt(t[2].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                    vm.pe = parseInt(t[3].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                    vm.reg = parseInt(t[4].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                 vm.slide = true
             })
         }, */
     
 
         //card details to be loaded 
         cardloader: function(code,drill = ""){
             
             drill = this.drill
             if(code=='ALL' || code == null){
                  code = ""
             }
             if(drill){
                
                 var resp2 = this.ajaxCall(this.basicURL+"KPI/PanelChartStatistics.json?financeYear="+this.finyear+"&siteCode="+code+"&org=")
                                   
                 resp2.then(function(t){
                 
                     t = t.eProc
                     
                     vm.num = parseInt(t[0].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                     var i = vm.finyear
                     vm.year = "For "+i+"-"+(+i+1).toString().slice(2)
                     vm.val = parseInt(t[1].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                     vm.bids = parseInt(t[2].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                     vm.pe = parseInt(t[3].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                     vm.reg = parseInt(t[4].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                     vm.dep = parseInt(t[5].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                     vm.slide = true
                   
                  
  
              })
 
 
             }
             else{
               if(this.checker == 'MSR Report'){
             var resp3 = this.ajaxCall(this.basicURL+"KPI/PanelChartStatistics?financeYear=&siteCode=&org=")
           
             resp3.then(function(t){
                    t = t.eProc
                    console.log(t)
                    vm.num = parseInt(t[0].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                    vm.year = parseInt(t[6].secondString) == 0?"Since Inception":parseInt(t[6].secondString)+"-Till Date"
                    vm.val = parseInt(t[1].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                    //vm.bids = parseInt(t[2].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                    vm.bids = (((parseInt(t[2].secondString))/100000)).toFixed(2).toString()
                    vm.pe = parseInt(t[3].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                    vm.reg = parseInt(t[4].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                    vm.dep = parseInt(t[5].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                   vm.minyear =  +t[6].secondString
                  
                          vm.slide = true
                 
 
             })
         }
         else{
             var resp1 = this.ajaxCall(this.basicURL+"KPI/PanelChartStatistics?financeYear=&siteCode="+code+"&org=")

             resp1.then(function(t){
                 
                    t = t.eProc
                    console.log(t)
                    vm.num = parseInt(t[0].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                    vm.year = parseInt(t[6].secondString) == 0?"Since Inception":parseInt(t[6].secondString)+"-Till Date"
                    vm.val = parseInt(t[1].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                    vm.bids = parseInt(t[2].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                    vm.pe = parseInt(t[3].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                    vm.reg = parseInt(t[4].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                    vm.dep = parseInt(t[5].secondString).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
                   vm.minyear =  +t[6].secondString
                  
                          vm.slide = true
                 
 
             })
         }
         }
         },
         ajaxCall1: function(url){
            return new Promise(function(resolve,reject){
           var xmlhttp = new XMLHttpRequest();
           xmlhttp.open('GET',(url),true);           
          // xmlhttp.setRequestHeader('Authorization',checkvalues(url));    
               //  alert(url)    
               //      alert(encryptquery(url))
             // console.log(checkvalues(url)) 
           xmlhttp.onreadystatechange = function () {
           if (xmlhttp.readyState == 4) {
              // console.log(xmlhttp.status)
               if (xmlhttp.status == 200) {
                 //  var res = decrypt(xmlhttp.responseText,"SecurekeyAlgrmen")                
                 var res=xmlhttp.responseText;
                   var response = JSON.parse(res);               
                   resolve(response)
                  }
                  else{
                      window.location.href = "404_error.html";
                  }
           }
       }
       xmlhttp.send()
   })

       } ,

         //common for all ajaxCalls
          ajaxCall: function(url){
              return new Promise(function(resolve,reject){
             var xmlhttp = new XMLHttpRequest();
             xmlhttp.open('GET',encryptquery(url),true);           
             xmlhttp.setRequestHeader('Authorization',checkvalues(url));    
                 //  alert(url)    
                 //      alert(encryptquery(url))
               // console.log(checkvalues(url)) 
             xmlhttp.onreadystatechange = function () {
             if (xmlhttp.readyState == 4) {
                // console.log(xmlhttp.status)
                 if (xmlhttp.status == 200) {
                     var res = decrypt(xmlhttp.responseText,"SecurekeyAlgrmen")                
                     var response = JSON.parse(res);               
                     resolve(response)
                    }
                    else{
                        window.location.href = "404_error.html";
                    }
             }
         }
         xmlhttp.send()
     })
 
         }  

},

computed:{
    years: function(){
       // var d = 2020
       var d = parseInt(new Date().getFullYear())-1
        var x = new Array()
        for(var a = d;a>=vm.minyear;a--){
            x.push(a)
        }
        return x

    },

},

    //to be done at the beginning
      created(){
        var resp =  this.ajaxCall(this.basicURL+"Tenders/GettingStateCode")
       resp.then(function(t){
            var opts = [];
            t.eProc.forEach(element => {
                  var o = {}
                  o.text = element.secondString
                  o.value = element.firstString
                  opts.push(o)
                  
            });
            vm.options = opts

            })

            this.statecode()
            this.twoyeardrop() 
            this.createmonth()
            this.currentyear()
            this.cardloader(this.code)//card details to be loaded at the beginning
        //  this.setOptions()  
           this.createCharts()

}

})


(function(r, t, l) {
    var u = {
        required: "The %s field is required.",
        matches: "The %s field does not match the %s field.",
        "default": "The %s field is still set to default, please change.",
        valid_email: "The %s field must contain a valid email address.",
        valid_emails: "The %s field must contain all valid email addresses.",
        min_length: "The %s field must be at least %s characters in length.",
        max_length: "The %s field must not exceed %s characters in length.",
        exact_length: "The %s field must be exactly %s characters in length.",
        greater_than: "The %s field must contain a number greater than %s.",
        less_than: "The %s field must contain a number less than %s.",
        alpha: "The %s field must only contain alphabetical characters.",
        alpha_numeric: "The %s field must only contain alpha-numeric characters.",
        alpha_dash: "The %s field must only contain alpha-numeric characters, underscores, and dashes.",
        numeric: "The %s field must contain only numbers.",
        integer: "The %s field must contain an integer.",
        decimal: "The %s field must contain a decimal number.",
        is_natural: "The %s field must contain only positive numbers.",
        is_natural_no_zero: "The %s field must contain a number greater than zero.",
        valid_ip: "The %s field must contain a valid IP.",
        valid_base64: "The %s field must contain a base64 string.",
        valid_credit_card: "The %s field must contain a valid credit card number.",
        is_file_type: "The %s field must contain only %s files.",
        valid_url: "The %s field must contain a valid URL.",
        greater_than_date: "The %s field must contain a more recent date than %s.",
        less_than_date: "The %s field must contain an older date than %s.",
        greater_than_or_equal_date: "The %s field must contain a date that's at least as recent as %s.",
        less_than_or_equal_date: "The %s field must contain a date that's %s or older."
    }
      , v = function(a) {}
      , w = /^(.+?)\[(.+)\]$/
      , g = /^[0-9]+$/
      , x = /^\-?[0-9]+$/
      , m = /^\-?[0-9]*\.?[0-9]+$/
      , q = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      , y = /^[a-z]+$/i
      , z = /^[a-z0-9]+$/i
      , A = /^[a-z0-9_\-]+$/i
      , B = /^[0-9]+$/i
      , C = /^[1-9][0-9]*$/i
      , D = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i
      , E = /[^a-zA-Z0-9\/\+=]/i
      , F = /^[\d\-\s]+$/
      , G = /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/
      , H = /\d{4}-\d{1,2}-\d{1,2}/
      , f = function(a, c, b) {
        this.callback = b || v;
        this.errors = [];
        this.fields = {};
        this.form = this._formByNameOrNode(a) || {};
        this.messages = {};
        this.handlers = {};
        this.conditionals = {};
        a = 0;
        for (b = c.length; a < b; a++) {
            var d = c[a];
            if ((d.name || d.names) && d.rules)
                if (d.names)
                    for (var n = 0, f = d.names.length; n < f; n++)
                        this._addField(d, d.names[n]);
                else
                    this._addField(d, d.name);
            else
                console.warn("validate.js: The following field is being skipped due to a misconfiguration:"),
                console.warn(d),
                console.warn("Check to ensure you have properly configured a name and rules for this field")
        }
        var e = this.form.onsubmit;
        this.form.onsubmit = function(a) {
            return function(b) {
                try {
                    return a._validateForm(b) && (e === l || e())
                } catch (c) {}
            }
        }(this)
    }
      , p = function(a, c) {
        var b;
        if (0 < a.length && ("radio" === a[0].type || "checkbox" === a[0].type))
            for (b = 0,
            elementLength = a.length; b < elementLength; b++) {
                if (a[b].checked)
                    return a[b][c]
            }
        else
            return a[c]
    };
    f.prototype.setMessage = function(a, c) {
        this.messages[a] = c;
        return this
    }
    ;
    f.prototype.registerCallback = function(a, c) {
        a && "string" === typeof a && c && "function" === typeof c && (this.handlers[a] = c);
        return this
    }
    ;
    f.prototype.registerConditional = function(a, c) {
        a && "string" === typeof a && c && "function" === typeof c && (this.conditionals[a] = c);
        return this
    }
    ;
    f.prototype._formByNameOrNode = function(a) {
        return "object" === typeof a ? a : t.forms[a]
    }
    ;
    f.prototype._addField = function(a, c) {
        this.fields[c] = {
            name: c,
            display: a.display || c,
            rules: a.rules,
            depends: a.depends,
            id: null,
            element: null,
            type: null,
            value: null,
            checked: null
        }
    }
    ;
    f.prototype._validateForm = function(a) {
        this.errors = [];
        for (var c in this.fields)
            if (this.fields.hasOwnProperty(c)) {
                var b = this.fields[c] || {}
                  , d = this.form[b.name];
                d && d !== l && (b.id = p(d, "id"),
                b.element = d,
                b.type = 0 < d.length ? d[0].type : d.type,
                b.value = p(d, "value"),
                b.checked = p(d, "checked"),
                b.depends && "function" === typeof b.depends ? b.depends.call(this, b) && this._validateField(b) : b.depends && "string" === typeof b.depends && this.conditionals[b.depends] ? this.conditionals[b.depends].call(this, b) && this._validateField(b) : this._validateField(b))
            }
        "function" === typeof this.callback && this.callback(this.errors, a);
        0 < this.errors.length && (a && a.preventDefault ? a.preventDefault() : event && (event.returnValue = !1));
        return !0
    }
    ;
    f.prototype._validateField = function(a) {
        var c, b, d = a.rules.split("|"), f = a.rules.indexOf("required"), I = !a.value || "" === a.value || a.value === l;
        c = 0;
        for (ruleLength = d.length; c < ruleLength; c++) {
            var e = d[c];
            b = null;
            var h = !1
              , k = w.exec(e);
            if (-1 !== f || -1 !== e.indexOf("!callback_") || !I)
                if (k && (e = k[1],
                b = k[2]),
                "!" === e.charAt(0) && (e = e.substring(1, e.length)),
                "function" === typeof this._hooks[e] ? this._hooks[e].apply(this, [a, b]) || (h = !0) : "callback_" === e.substring(0, 9) && (e = e.substring(9, e.length),
                "function" === typeof this.handlers[e] && !1 === this.handlers[e].apply(this, [a.value, b, a]) && (h = !0)),
                h) {
                    k = this.messages[a.name + "." + e] || this.messages[e] || u[e];
                    h = "An error has occurred with the " + a.display + " field.";
                    k && (h = k.replace("%s", a.display),
                    b && (h = h.replace("%s", this.fields[b] ? this.fields[b].display : b)));
                    var g;
                    for (b = 0; b < this.errors.length; b += 1)
                        a.id === this.errors[b].id && (g = this.errors[b]);
                    e = g || {
                        id: a.id,
                        display: a.display,
                        element: a.element,
                        name: a.name,
                        message: h,
                        messages: [],
                        rule: e
                    };
                    e.messages.push(h);
                    g || this.errors.push(e)
                }
        }
    }
    ;
    f.prototype._getValidDate = function(a) {
        if (!a.match("today") && !a.match(H))
            return !1;
        var c = new Date;
        a.match("today") || (a = a.split("-"),
        c.setFullYear(a[0]),
        c.setMonth(a[1] - 1),
        c.setDate(a[2]));
        return c
    }
    ;
    f.prototype._hooks = {
        required: function(a) {
            var c = a.value;
            return "checkbox" === a.type || "radio" === a.type ? !0 === a.checked : null !== c && "" !== c
        },
        "default": function(a, c) {
            return a.value !== c
        },
        matches: function(a, c) {
            var b = this.form[c];
            return b ? a.value === b.value : !1
        },
        valid_email: function(a) {
            return q.test(a.value)
        },
        valid_emails: function(a) {
            a = a.value.split(/\s*,\s*/g);
            for (var c = 0, b = a.length; c < b; c++)
                if (!q.test(a[c]))
                    return !1;
            return !0
        },
        min_length: function(a, c) {
            return g.test(c) ? a.value.length >= parseInt(c, 10) : !1
        },
        max_length: function(a, c) {
            return g.test(c) ? a.value.length <= parseInt(c, 10) : !1
        },
        exact_length: function(a, c) {
            return g.test(c) ? a.value.length === parseInt(c, 10) : !1
        },
        greater_than: function(a, c) {
            return m.test(a.value) ? parseFloat(a.value) > parseFloat(c) : !1
        },
        less_than: function(a, c) {
            return m.test(a.value) ? parseFloat(a.value) < parseFloat(c) : !1
        },
        alpha: function(a) {
            return y.test(a.value)
        },
        alpha_numeric: function(a) {
            return z.test(a.value)
        },
        alpha_dash: function(a) {
            return A.test(a.value)
        },
        numeric: function(a) {
            return g.test(a.value)
        },
        integer: function(a) {
            return x.test(a.value)
        },
        decimal: function(a) {
            return m.test(a.value)
        },
        is_natural: function(a) {
            return B.test(a.value)
        },
        is_natural_no_zero: function(a) {
            return C.test(a.value)
        },
        valid_ip: function(a) {
            return D.test(a.value)
        },
        valid_base64: function(a) {
            return E.test(a.value)
        },
        valid_url: function(a) {
            return G.test(a.value)
        },
        valid_credit_card: function(a) {
            if (!F.test(a.value))
                return !1;
            var c = 0
              , b = 0
              , d = !1;
            a = a.value.replace(/\D/g, "");
            for (var f = a.length - 1; 0 <= f; f--)
                b = a.charAt(f),
                b = parseInt(b, 10),
                d && 9 < (b *= 2) && (b -= 9),
                c += b,
                d = !d;
            return 0 === c % 10
        },
        is_file_type: function(a, c) {
            if ("file" !== a.type)
                return !0;
            var b = a.value.substr(a.value.lastIndexOf(".") + 1)
              , d = c.split(",")
              , f = !1
              , g = 0
              , e = d.length;
            for (g; g < e; g++)
                b.toUpperCase() == d[g].toUpperCase() && (f = !0);
            return f
        },
        greater_than_date: function(a, c) {
            var b = this._getValidDate(a.value)
              , d = this._getValidDate(c);
            return d && b ? b > d : !1
        },
        less_than_date: function(a, c) {
            var b = this._getValidDate(a.value)
              , d = this._getValidDate(c);
            return d && b ? b < d : !1
        },
        greater_than_or_equal_date: function(a, c) {
            var b = this._getValidDate(a.value)
              , d = this._getValidDate(c);
            return d && b ? b >= d : !1
        },
        less_than_or_equal_date: function(a, c) {
            var b = this._getValidDate(a.value)
              , d = this._getValidDate(c);
            return d && b ? b <= d : !1
        }
    };
    r.FormValidator = f
}
)(window, document);
"undefined" !== typeof module && module.exports && (module.exports = FormValidator);

  const pagesList = extractPages([0 + "-" + (numPages - 1)]);
    setPagesList(pagesList);
    setPageIndex(0);
	
	  // const range = (start, stop, step) =>
  //   Array.from(
  //     { length: (stop - start) / step + 1 },
  //     (_, i) => start + i * step
  //   );
  
    disabled={
            (
              questionPapersIndex === questionPapersList.length - 1 && 
              pageIndex === pagesList.length - 1
            )
          }
		  		  
		  {pageIndex} {pagesList.length} {questionPapersIndex} {questionPapersList.length}

7904043710

b
https://maps.princeton.edu/catalog/nyu-2451-42207
https://dilrmp.gov.in/nlrmpmap/nlrmpmap.html
https://www.oldmapsonline.org/en/Cuddalore_district#bbox=79.53580937121913,11.581202023440824,79.60014232687989,11.666305959064957&q=&date_from=0&date_to=9999&scale_from=&scale_to=
https://censusindia.gov.in/2011census/dchb/DCHB_A/33/3318_PART_A_DCHB_THIRUVARUR.pdf
http://localitydetails.com/alwin-nagar-vegakollai-guideline-value-173893

https://tnreginet.gov.in/portal/webHP?requestType=ApplicationRH&actionVal=dwnLoadPdf&screenId=700787&attachId=321089072&attachIds=null&digiSignAllowed=false&digiSignPgNum=1&digiSignPosition=bottom%20right&digiSignOffsetX=0&digiSignOffsetY=0&citiCharter=N&isECValid=N



/////// Reverse strings in a sentence
const inputStr = "Welome to Altimetrik!";

const log = console.log

const reverseWord = (word) => {
  let returnWord = [];
  for(index = word.length - 1; index > -1;index--) {
    returnWord.push(word[index]);
  }
  return returnWord.join("");
}

const reverseStrings = (inputString) => 
   inputString.split(" ")
     .map(word => word.split('').reverse().join('')
	.join(" ");


log(reverseStrings(inputStr));


var string = "Welcome to Altimetrik!"; 
//OutPut : emoclew ot !kritemitlA

function reverseStrings = (inputString) =>  {
  let outputString = "";
  
  inputString.split(" ")
     .map(word =>  word.reverse())
	 .reduce( (acc, value) => acc + " " + value, outputString );
  
  return outputString;
}

//////Swap two variables

a=a+b;//a=30 (10+20)    
b=a-b;//b=10 (30-20)    
a=a-b

let firstVariable = 256;
let secondVariable = 1024;

let firstVariable = firstVariable + secondVariable

secondVariable = firstVariable - secondVariable
firstVariable = firstVariable - secondVariable


////// Symbols in objects
var person = {
  [Symbol('name')]: 'John Doe',
  [Symbol('age')]: 33,
  "occupation": "Programmer"
};

const propOwn = Object.getOwnPropertyNames(person);
console.log(propOwn.length); // 1

let propSymb = Object.getOwnPropertySymbols(person);
console.log(propSymb.length); // 2

Reflect.ownKeys(targetObject).length



/// Merge N number of objects


function extend() {
    for (var o = {}, i = 0; i < arguments.length; i++) {
        // Uncomment to skip arguments that are not objects (to prevent errors)
        // if (arguments[i].constructor !== Object) continue;
        for (var k in arguments[i]) {
            if (arguments[i].hasOwnProperty(k)) {
                o[k] = arguments[i][k].constructor === Object
                    ? extend(o[k] || {}, arguments[i][k])
                    : arguments[i][k];
            }
        }
    }
    return o;
}



/// Check an element in an array

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

Object.defineProperty(Array.prototype, '_includes', { value: function (v) { return this.indexOf(v) !== -1 }})


/// 
https://stackoverflow.com/questions/1950878/c-for-loop-indexing-is-forward-indexing-faster-in-new-cpus

// Object.entries
for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}


//  Clone a javascript object1
https://stackoverflow.com/questions/728360/how-do-i-correctly-clone-a-javascript-object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#deep_clone
https://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname?rq=1


function triggerEvent(el, type, keyCode) {
    if ('createEvent' in document) {
        // modern browsers, IE9+
        var e = document.createEvent('HTMLEvents');
        e.keyCode = keyCode;
        e.initEvent(type, false, true);
        el.dispatchEvent(e);
    } else {
        // IE 8
        var e = document.createEventObject();
        e.keyCode = keyCode;
        e.eventType = type;
        el.fireEvent('on'+e.eventType, e);
    }
}

function provideDetails(documentNum) {
	document.getElementById('cmb_SroName').value = '20177:1'
	document.getElementById('txt_DocumentNo').value = documentNum;
	document.getElementById('cmb_Year').value = '2021'
	document.getElementById('cmb_doc_type').value = '1'
	document.getElementById('txt_Captcha').focus();
	document.getElementById('txt_Captcha').focus();
}

const config = {
  childList: true,
  subtree: true
};

function pollVisibility(item, resolveIfVisible) {

	if(item) {
		return new Promise(resolve => {
		
			const observer = new MutationObserver((mutations, obs) => {
		
				let visible = window.getComputedStyle(item).display === 'block';
				
				if (resolveIfVisible && visible) {
					console.log(item);
					resolve(item);
				} else if(!resolveIfVisible && !visible) {
					console.log(item);
					resolve(item);
				} else {
					console.log('loading');
				}
			  }
			);
		
			//target, config
			observer.observe(item.parentElement, config);
		});
	
	} else {
		reject('Item doesnot exist');
	}
	
}

async function inputPage() {

	var docWise = document.getElementById("DOC_WISE")
	docWise.click();
	triggerEvent(docWise, 'keyup', 9); // simulate mouse/enter key press

	const fadeBackground = document.getElementById('fadeBackground').parentElement;
	let loadingStarted = await pollVisibility(fadeBackground, false);
	provideDetails(1890);
	//let loadingComplete = await pollVisibility(fadeBackground, true);
	
	provideDetails(1890);
	
}

inputPage();


//////https://medium.com/analytics-vidhya/predicting-captchas-by-using-machine-learning-and-segmentation-make-an-optical-character-53fae2bbf747


setTimeout(() => {
	document.getElementById('btn_SearchDoc').click()
}, 10000);

setTimeout(() => {
	generatePdf();
}, 5000);

setTimeout(() => {
	document.querySelector('#emailMsg ~ h2 > a').click()
}, 3000);

setTimeout(() => {
	document.getElementById('okBtn').click()
}, 3000);
