(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{3792:(e,s,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1122)}])},1122:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var l=t(4848),n=t(3368),r=t.n(n),a=t(6540);function i(){let[e,s]=(0,a.useState)(!1),[t,n]=(0,a.useState)(3),[i,o]=(0,a.useState)(!1),[d,c]=(0,a.useState)(!1),x=async e=>{e.preventDefault();let t=e.target.text.value;if(!t){s(!0),n(3);return}s(!1),c(!0),setTimeout(async()=>{let e=await fetch("http://localhost:8000/predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:t})}),s=await e.json();o(s.label),n(s.label)},5e3)};return(0,l.jsxs)("div",{children:[(0,l.jsxs)(r(),{children:[(0,l.jsx)("title",{children:"Analizador de Estado de \xc1nimo"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsx)("main",{className:"flex items-center justify-center h-[100vh]",children:(0,l.jsx)("div",{className:"bg-white",children:(0,l.jsxs)("div",{className:"text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20",children:[(0,l.jsxs)("h2",{className:"text-3xl font-extrabold text-black sm:text-4xl",children:[(0,l.jsx)("span",{className:"block",children:"Hola, Bienvenido"}),(0,l.jsx)("span",{className:"block text-indigo-400",children:"Comprueba tu estado de animo"}),(0,l.jsx)("span",{className:"block text-indigo-500",children:"Escribe lo que est\xe1s pensando"})]}),(0,l.jsxs)("form",{onSubmit:x,children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"relative py-4",children:[(0,l.jsx)("input",{type:"text",id:"text",className:"rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",name:"text",placeholder:"Escribe lo que piensas"}),e&&(0,l.jsx)("p",{className:"absolute text-sm text-red-500 -bottom-6",children:"No puedes predecir con el input vac\xedo"})]}),d?(0,l.jsx)(()=>{let[e,s]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=setInterval(()=>{s(s=>s>=100?(clearInterval(e),c(!1),100):s+1)},50);return()=>clearInterval(e)},[]),(0,l.jsx)("div",{className:"m-5 my-6",children:(0,l.jsxs)("div",{className:"block p-4 m-auto bg-white rounded-lg shadow w-72",children:[(0,l.jsx)("div",{children:(0,l.jsx)("span",{className:"text-xs font-light inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-green-300",children:"Procesando tu Texto"})}),(0,l.jsx)("div",{className:"w-full h-4 bg-gray-400 rounded-full mt-3",children:(0,l.jsxs)("div",{className:"h-full text-center text-xs text-gray-500 bg-green-300 rounded-full",style:{width:"".concat(e,"%"),transition:"width 0.05s linear"},children:[e,"%"]})})]})})},{}):3===t?(0,l.jsx)(l.Fragment,{}):i?(0,l.jsxs)("div",{className:"flex flex-col items-center",children:[(0,l.jsx)("img",{src:"https://neetwork.com/wp-content/uploads/2019/10/como-ser-feliz-lo-que-implica.jpeg",alt:"imagen feliz",className:"w-[30vw] my-3"}),(0,l.jsxs)("div",{className:"bg-green-200 border-green-600 text-green-600 border-l-4 p-4 w-full",role:"alert",children:[(0,l.jsx)("p",{className:"font-bold",children:"\xa1Felicidades! \uD83D\uDE0A"}),(0,l.jsx)("p",{children:"\xa1Est\xe1s de buen \xe1nimo!"})]})]}):(0,l.jsxs)("div",{className:"flex flex-col items-center",children:[(0,l.jsx)("img",{src:"https://files.mormonsud.org/wp-content/uploads/2019/10/enojo-3.jpg",alt:"imagen triste",className:"w-[30vw] my-3"}),(0,l.jsxs)("div",{className:"bg-red-200 border-red-600 text-red-600 border-l-4 p-4 w-full",role:"alert",children:[(0,l.jsx)("p",{className:"font-bold",children:"\xa1Una l\xe1stima! \uD83D\uDE2D"}),(0,l.jsx)("p",{children:"No est\xe1s de buen humor."})]})]})]}),(0,l.jsx)("div",{className:"lg:mt-0 lg:flex-shrink-0",children:(0,l.jsx)("div",{className:"mt-12 inline-flex rounded-md shadow",children:(0,l.jsx)("button",{type:"submit",className:"py-4 px-6 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg",children:"Predecir"})})})]})]})})})]})}},3368:(e,s,t)=>{e.exports=t(6085)}},e=>{var s=s=>e(e.s=s);e.O(0,[636,593,792],()=>s(3792)),_N_E=e.O()}]);