(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7105)}])},7105:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return T},default:function(){return L}});var s=a(5893),o=a(7294),n=a(6954),l=a(5663),i=a(7781),r=a(8267),c=a(7911),d=a(7989),x=a(2500);let p=e=>{let t,a;let o="single";return"S"===e.selectedContent?(t=null!==e.selectedSession&&e.selectedSession in e.data?e.data[e.selectedSession].map(e=>e.Joueuses):[],a=t=>{"all"!==t&&1===t.size&&e.setSelectedPlayer(t.values().next().value)},o="single"):(t=null!==e.selectedJoueuse&&e.selectedJoueuse in e.data?e.data[e.selectedJoueuse].map(e=>e.Session):[],a=t=>{"all"!==t&&e.setSelectedTest(Array.from(t))},o="multiple"),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:"S\xe9lectionner session(s) : "}),(0,s.jsx)(x.B,{items:t,selectionMode:o,onSelectionChange:a,maxWidth:"size-4600",height:"auto","aria-label":"Dynamic ListView items example",children:t.map(e=>(0,s.jsx)(c.ck,{children:e},e))})]})};var h=a(2473);let u=e=>(0,s.jsx)(l.kC,{direction:"row",gap:"10em",children:e.selector}),S=e=>{let[t,a]=(0,o.useState)(!1),n=()=>{a(!t)};return(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsx)(u,{isOpen:t,selector:e.content}),(0,s.jsx)(l.kC,{marginStart:"auto",children:(0,s.jsx)(h.zx,{variant:"primary",onPress:n,children:t?"Cacher filtre(s)":"Afficher filtre(s)"})})]})};var g=a(6680);let m=e=>{let t={height:"50vh",width:"45vw"},a=e.testSelectionne?e.testSelectionne.flatMap(t=>{var a;return e.data[null!==(a=e.joueuseSelectionnee)&&void 0!==a?a:""].filter(e=>e.Session===t)}):[],o=a.map(e=>parseFloat(e.SB_10M)),n=a.map(e=>parseFloat(e.SB_30M)),l=a.map(e=>parseFloat(e.AB_10M)),i=a.map(e=>parseFloat(e.AB_30M)),r={responsive:!0,tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0},dataZoom:{yAxisIndex:"none"}}},legend:{left:"center",top:"50",orient:"horizontal",align:"left",textStyle:{color:"#afafaf"}},title:{text:"Temps (s) course avec et sans ballon",left:"center",textStyle:{color:"#afafaf"}},grid:{top:"25%",left:"10%",right:"10%",bottom:"10%"},xAxis:{type:"category",name:"Session",data:a.map(e=>e.Session),axisLabel:{color:"#afafaf"}},yAxis:{type:"value",name:"Temps (s)",axisLabel:{color:"#afafaf"}},series:[{name:"SB_10m",type:"bar",stack:"sansBallon",label:{show:!0},data:o,color:["#ff8d8d"]},{name:"SB_30m",type:"bar",stack:"sansBallon",label:{show:!0},data:n,color:["#e64545"]},{name:"AB_10m",type:"bar",stack:"avecBallon",label:{show:!0},data:l,color:["#8dafff"]},{name:"AB_30m",type:"bar",stack:"avecBallon",label:{show:!0},data:i,color:["#472ce8"]}]},c={width:t.width,height:t.height};return(0,s.jsx)("div",{className:"p-2",children:(0,s.jsx)(g.Z,{option:r,style:c,notMerge:!0})})},f=e=>{let t={height:"50vh",width:"45vw"},a=e.testSelectionne?e.testSelectionne.flatMap(t=>{var a;return e.data[null!==(a=e.joueuseSelectionnee)&&void 0!==a?a:""].filter(e=>e.Session===t)}):[],o={responsive:!0,tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0},dataZoom:{yAxisIndex:"none"}}},legend:{data:a.map(e=>e.Session),left:"center",top:"50",orient:"horizontal",align:"left",textStyle:{color:"#afafaf"}},title:{text:"Temps et vitesse sur les sprints (RSA)",left:"center",textStyle:{color:"#afafaf"}},grid:{top:"25%",left:"10%",right:"10%",bottom:"10%",splitLine:{lineStyle:{color:"#428bca"}}},xAxis:[{type:"category",name:"S\xe9ries",data:["S1","S2","S3","S4","S5","S6"],axisPointer:{type:"shadow"},axisLabel:{interval:0,color:"#afafaf"},nameTextStyle:{fontSize:16},nameGap:25,nameLocation:"middle"}],yAxis:[{type:"value",min:10,interval:1,axisLabel:{formatter:"{value} s",color:"#afafaf"},name:"Temps (s)",nameGap:45,nameLocation:"middle",nameRotate:90,nameTextStyle:{fontSize:16}}],series:a.map(e=>({name:e.Session,data:[e.VS1_RSA,e.VS2_RSA,e.VS3_RSA,e.VS4_RSA,e.VS5_RSA,e.VS6_RSA],type:"line"}))},n={width:t.width,height:t.height};return(0,s.jsx)("div",{className:"p-2",children:(0,s.jsx)(g.Z,{option:o,style:n,notMerge:!0})})};var j=a(2347),_=a(1119);let y=e=>{var t;let a=RegExp("".concat(e.joueuseSelectionnee)),o=Object.keys(e.data).map(t=>e.data[parseInt(t)].Joueuses).findIndex(e=>a.test(e)),n="joueuse";return e.joueuseSelectionnee&&e.joueuseSelectionnee.length>3&&(n=e.data[o].Joueuses),console.log("nom"),console.log(e.joueuseSelectionnee),console.log(a),console.log(o),console.log(n),(0,s.jsxs)(j.hg,{type:"popover",children:[(0,s.jsx)(h.Kk,{children:"Profil"}),(0,s.jsxs)(j.Vq,{children:[(0,s.jsx)(d.X6,{children:(0,s.jsx)(d.xv,{children:n})}),(0,s.jsx)(_.i,{}),(0,s.jsx)(i.VY,{children:(0,s.jsxs)(l.kC,{direction:"row",gap:"2.5em",children:[(0,s.jsx)(l.kC,{height:"50%",width:"50%",children:"M.Bance"===(t=n)?(0,s.jsx)(r.E,{src:"Photo_Manon_Bance.png",alt:""}):"C.Berthelot"===t?(0,s.jsx)(r.E,{src:"Photo_Charlotte_Berthelot.png/",alt:""}):"G.Cheminant"===t?(0,s.jsx)(r.E,{src:"Photo_Gwenn_Cheminant.png/",alt:""}):"M.Cousin"===t?(0,s.jsx)(r.E,{src:"Photo_Margot_Cousin.png/",alt:""}):"M.Henault"===t?(0,s.jsx)(r.E,{src:"Photo_Manon_Henault.png/",alt:""}):"S.Labonne"===t?(0,s.jsx)(r.E,{src:"Photo_Sarah_Labonne.png/",alt:""}):"L.Poli"===t?(0,s.jsx)(r.E,{src:"Photo_Lisa_Poli.png/",alt:""}):"A.Souillard"===t?(0,s.jsx)(r.E,{src:"Photo_Anaelle_Souillard.png/",alt:""}):"Joueuse non s\xe9lectionn\xe9e"}),(0,s.jsxs)(l.kC,{direction:"column",children:[(0,s.jsxs)(d.xv,{children:["Exercice pr\xe9f\xe9rentielle : ",e.data[o].Exo_pref]}),(0,s.jsxs)(d.xv,{children:["Taille debout : ",e.data[o].TailleD," cm"]}),(0,s.jsxs)(d.xv,{children:["Taille assise : ",e.data[o].TailleA," cm"]}),(0,s.jsxs)(d.xv,{children:["Envergure : ",e.data[o].Envergure," cm"]}),(0,s.jsxs)(d.xv,{children:["Empan : ",e.data[o].Empan," cm"]})]})]})})]})]})},v=e=>{let t={height:"20vh",width:"16.9vw"},a=e.testSelectionne?e.testSelectionne.flatMap(t=>{var a;return e.data[null!==(a=e.joueuseSelectionnee)&&void 0!==a?a:""].filter(e=>e.Session===t)}):[],o=a.map(e=>e.Poids),n={responsive:!0,tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{textStyle:{color:"#afafaf"}},grid:{left:"3%",right:"20%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:a.map(e=>e.Session),axisLabel:{interval:0,color:"#afafaf"}},yAxis:{type:"value",min:"50",interval:5},series:[{name:"Poids",type:"line",stack:"total",data:o}]},l={width:t.width,height:t.height};return(0,s.jsx)("div",{className:"p-2",children:(0,s.jsx)(g.Z,{option:n,style:l,notMerge:!0})})};var w=a(2254),b=a.n(w);let P=e=>{let t,a;let o={height:"82.5vh",width:"90vw"},n=e.testSelectionne?e.testSelectionne.flatMap(t=>{var a;return e.data[null!==(a=e.joueuseSelectionnee)&&void 0!==a?a:""].filter(e=>e.Session===t)}):[];t="Exercice"!==e.exerciceSelectionne.toString()?e.exerciceSelectionne.toString():"Exercice",console.log(e.exerciceSelectionne),console.log(typeof e.exerciceSelectionne),console.log("auinsetanursieta"),console.log(t),a=n.length>0&&"Squat"===t?n.flatMap(e=>[[parseFloat(e.Csquat_S1),parseFloat(e.Vsquat_S1),parseFloat(e.Psquat_S1)],[parseFloat(e.Csquat_S2),parseFloat(e.Vsquat_S2),parseFloat(e.Psquat_S2)],[parseFloat(e.Csquat_S3),parseFloat(e.Vsquat_S3),parseFloat(e.Psquat_S3)],[parseFloat(e.Csquat_S4),parseFloat(e.Vsquat_S4),parseFloat(e.Psquat_S4)]]):n.length>0&&"Bench"===t?n.flatMap(e=>[[parseFloat(e.Cbench_S1),parseFloat(e.Vbench_S1),parseFloat(e.Pbench_S1)],[parseFloat(e.Cbench_S2),parseFloat(e.Vbench_S2),parseFloat(e.Pbench_S2)],[parseFloat(e.Cbench_S3),parseFloat(e.Vbench_S3),parseFloat(e.Pbench_S3)],[parseFloat(e.Cbench_S4),parseFloat(e.Vbench_S4),parseFloat(e.Pbench_S4)]]):n.length>0&&"Deadlift"===t?n.flatMap(e=>[[parseFloat(e.Cdeadlift_S1),parseFloat(e.Vdeadlift_S1),parseFloat(e.Pdeadlift_S1)],[parseFloat(e.Cdeadlift_S2),parseFloat(e.Vdeadlift_S2),parseFloat(e.Pdeadlift_S2)],[parseFloat(e.Cdeadlift_S3),parseFloat(e.Vdeadlift_S3),parseFloat(e.Pdeadlift_S3)],[parseFloat(e.Cdeadlift_S4),parseFloat(e.Vdeadlift_S4),parseFloat(e.Pdeadlift_S4)]]):n.length>0&&"Rowing"===t?n.flatMap(e=>[[parseFloat(e.Crowing_S1),parseFloat(e.Vrowing_S1),parseFloat(e.Prowing_S1)],[parseFloat(e.Crowing_S2),parseFloat(e.Vrowing_S2),parseFloat(e.Prowing_S2)],[parseFloat(e.Crowing_S3),parseFloat(e.Vrowing_S3),parseFloat(e.Prowing_S3)],[parseFloat(e.Crowing_S4),parseFloat(e.Vrowing_S4),parseFloat(e.Prowing_S4)]]):[[40,0,0],[50,0,0],[60,0,0],[70,0,0]];let l=a.map(e=>[e[0],e[2]]);a.map(e=>[e[0],e[2]]);let i=b().polynomial(a.map(e=>[e[0],e[2]]),{order:2,precision:2}),r=b().linear(a.map(e=>[e[0],e[1]]),{precision:2}),c=[];for(let e=l[0][0];e<=l[3][0];e++){let t=i.predict(e)[1];c.push([e,t])}let d=a.map(e=>[e[0],e[2]]),x=a.map(e=>[e[0],e[1]]),p={responsive:!0,tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0},dataZoom:{yAxisIndex:"none"}}},title:{text:"Profil puissance vitesse",left:"center",textStyle:{color:"#afafaf"}},grid:{top:"10%",left:"10%",right:"5%",bottom:"10%"},xAxis:[{type:"value",name:"Poids (kg)",min:l[0][0]-5,max:l[3][0]+5,axisLabel:{color:"#afafaf"}}],yAxis:[{type:"value",name:"Puissance (W)",splitLine:{lineStyle:{type:"dashed"}},axisLabel:{color:"#afafaf"}},{type:"value",name:"Vitesse (m/s)",axisLabel:{formatter:"{value} m/s"}}],series:[{name:"Puissance initiale",type:"scatter",data:d},{name:"Vitesse initiale",type:"scatter",data:x,xAxisIndex:0,yAxisIndex:1},{name:"Courbe de tendance",type:"line",data:c,xAxisIndex:0,yAxisIndex:0},{name:"Vitesse (r\xe9gression lin\xe9aire)",type:"line",data:r.points,xAxisIndex:0,yAxisIndex:1}]},h={width:o.width,height:o.height};return(0,s.jsx)("div",{className:"p-2",children:(0,s.jsx)(g.Z,{option:p,style:h,notMerge:!0})})};var C=a(9750);let F=e=>{let t=Object.keys(e.data);return console.log("sessionList"),console.log(t),(0,s.jsx)(C.Ct,{items:t,onSelectionChange:t=>e.setSelectedList(t),maxWidth:"size-6000","aria-label":"Selected player",children:t.map(e=>(0,s.jsx)(c.ck,{children:e},e))})};var V=a(7246);let A=e=>{let[t,a]=(0,o.useState)([]),n=(t,s)=>{a([]),s?(a([t]),e.setSelectedExo(t)):e.setSelectedExo("")};return(0,s.jsxs)(l.kC,{direction:"column",children:[(0,s.jsx)("p",{children:"S\xe9lectionner un exercice :"}),["Rowing","Deadlift","Squat","Bench"].map(e=>(0,s.jsx)(V.X,{isSelected:t.includes(e),onChange:t=>n(e,t),children:e},e))]})},k=e=>{let t={height:"80vh",width:"90vw"},a=e.testSelectionne?e.testSelectionne.flatMap(t=>{var a;return e.data[null!==(a=e.joueuseSelectionnee)&&void 0!==a?a:""].filter(e=>e.Session===t)}):[],o={responsive:!0,tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0},dataZoom:{yAxisIndex:"none"}}},legend:{data:a.map(e=>e.Session).concat(["Moyenne au poste"]),left:"center",top:"50",orient:"horizontal",align:"left",textStyle:{color:"#afafaf"}},grid:{top:"25%",left:"8%",right:"8%",bottom:"5%"},title:{text:"Distances (+ totale) par zone de vitesse / moyenne au poste",left:"center",textStyle:{color:"#afafaf"}},xAxis:{type:"category",data:["Distance totale","DPZV_0_6","DPZV_6_12","DPZV_12_14","DPZV_19_24","DPZV_24_40"],axisLabel:{color:"#afafaf"}},yAxis:{type:"value",name:"Distance parcourue (m)",axisLabel:{color:"#afafaf"}},series:a.map(e=>({name:e.Session,data:[e.Distance,e.DPZV_0_6,e.DPZV_6_12,e.DPZV_12_14,e.DPZV_19_24,e.DPZV_24_40],type:"bar"})).concat(a.map(e=>({name:"Moyenne au poste",data:[e.Ar_Distance,e.Ar_DPZV_0_6,e.Ar_DPZV_6_12,e.Ar_DPZV_12_14,e.Ar_DPZV_19_24,e.Ar_DPZV_24_40],type:"bar"})))},n={width:t.width,height:t.height};return(0,s.jsx)("div",{className:"p-2",children:(0,s.jsx)(g.Z,{option:o,style:n,notMerge:!0})})},E=e=>(0,s.jsxs)(j.hg,{type:"popover",children:[(0,s.jsx)(h.Kk,{children:"Evolution du poids"}),(0,s.jsxs)(j.Vq,{children:[(0,s.jsx)(d.X6,{children:(0,s.jsx)(d.xv,{children:"\xc9volution du poids"})}),(0,s.jsx)(_.i,{}),(0,s.jsx)(i.VY,{children:(0,s.jsxs)(l.kC,{direction:"row",gap:"2.5em",children:[(0,s.jsx)(l.kC,{direction:"column",children:e.content}),(0,s.jsx)(l.kC,{})]})})]})]}),M=e=>{let[t,a]=(0,o.useState)("");console.log("selectedJoueuse"),console.log(t),console.log(typeof t);let[x,h]=(0,o.useState)([]);console.log("selectedTest"),console.log(x),console.log(typeof x);let[u,g]=(0,o.useState)("Exercice");return console.log("selectedExercice"),console.log(u),console.log(typeof u),(0,s.jsx)(n.mQ,{"aria-label":"History of Ancient Rome",children:(0,s.jsxs)(l.rj,{areas:["header  header","content content"],columns:["1fr","3fr"],rows:["size-1000","auto"],height:"100vh",gap:"size-100",children:[(0,s.jsx)(i.G7,{backgroundColor:"gray-50",gridArea:"header",children:(0,s.jsxs)(l.kC,{direction:"row",height:"size-800",gap:"size-2400",margin:"0.5em",alignItems:"center",children:[(0,s.jsx)(i.G7,{marginStart:"5px",marginY:"2px",height:"5em",width:"4.1em",children:(0,s.jsx)(r.E,{src:"Logo_Valkyries.png/",alt:""})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(c.ck,{children:"Musculation"},"vueMuscu"),(0,s.jsx)(c.ck,{children:"Sprint"},"vueSprint"),(0,s.jsx)(c.ck,{children:"Jeux r\xe9duits"},"vueJR")]}),(0,s.jsxs)(l.kC,{marginStart:"auto",gap:"2.5em",marginEnd:"1em",children:[(0,s.jsxs)(l.kC,{gap:"2em",alignItems:"center",children:[(0,s.jsx)(d.xv,{children:"S\xe9lectionner une joueuse :"}),(0,s.jsx)(F,{data:e.joueuses,selectedList:t,setSelectedList:a})]}),(0,s.jsxs)(l.kC,{children:[" ",(0,s.jsx)(y,{data:e.anthropometrie,joueuseSelectionnee:t,testSelectionne:x})]}),(0,s.jsx)(l.kC,{children:(0,s.jsx)(E,{content:(0,s.jsx)(v,{data:e.joueuses,joueuseSelectionnee:t,testSelectionne:x})})})]})]})}),(0,s.jsxs)(n.nP,{gridArea:"content",children:[(0,s.jsx)(c.ck,{children:(0,s.jsxs)(l.kC,{direction:"column",gap:"size-100",marginEnd:"1.5em",children:[(0,s.jsx)(S,{content:(0,s.jsx)(i.G7,{children:(0,s.jsx)(p,{data:e.joueuses,selectedContent:"J",selectedJoueuse:t,selectedTest:x,setSelectedTest:h})})}),(0,s.jsx)(i.G7,{marginTop:"1em",children:(0,s.jsxs)(l.kC,{direction:"row",gap:"10em",children:[(0,s.jsx)(m,{data:e.joueuses,joueuseSelectionnee:t,testSelectionne:x}),(0,s.jsx)(f,{data:e.joueuses,joueuseSelectionnee:t,testSelectionne:x})]})})]})},"vueSprint"),(0,s.jsx)(c.ck,{children:(0,s.jsxs)(l.kC,{direction:"column",marginEnd:"1.5em",children:[(0,s.jsx)(S,{content:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.G7,{children:(0,s.jsx)(p,{data:e.joueuses,selectedContent:"J",selectedJoueuse:t,selectedTest:x,setSelectedTest:h})}),(0,s.jsx)(i.G7,{children:(0,s.jsx)(A,{selectedExo:u,setSelectedExo:g})})]})}),(0,s.jsx)(i.G7,{marginTop:"1em",children:(0,s.jsx)(l.kC,{direction:"row",children:(0,s.jsx)(P,{data:e.joueuses,joueuseSelectionnee:t,testSelectionne:x,exerciceSelectionne:u})})})]})},"vueMuscu"),(0,s.jsx)(c.ck,{children:(0,s.jsxs)(l.kC,{direction:"column",gap:"size-100",marginEnd:"1.5em",children:[(0,s.jsx)(S,{content:(0,s.jsx)(i.G7,{children:(0,s.jsx)(p,{data:e.joueuses,selectedContent:"J",selectedJoueuse:t,selectedTest:x,setSelectedTest:h})})}),(0,s.jsx)(i.G7,{marginTop:"1em",children:(0,s.jsx)(l.kC,{direction:"row",children:(0,s.jsx)(k,{data:e.joueuses,joueuseSelectionnee:t,testSelectionne:x})})})]})},"vueJR")]})]})})};var T=!0,L=M}},function(e){e.O(0,[700,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);