import{j as a,Y as d}from"./app-CB5HbaU3.js";import{A as i}from"./AuthenticatedLayout-Ce3GBJ1E.js";import"./ApplicationLogo-BXGrDkmQ.js";import"./transition-DDlyKlYJ.js";function o({auth:s}){const t=[{name:"Pelayanan di posyandu",date:"2024-05-10"},{name:"Sosialisasi",date:"2024-05-15"},{name:"Pelaksanaan Bulan Imunisasi Nasional (BIAN)",date:"2024-05-20"},{name:"Pelaksanaan BIAN dan Vitamin A",date:"2024-05-25"}];return a.jsxs(i,{user:s.user,header:a.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Agenda Kegiatan"}),children:[a.jsx(d,{title:"Agenda Kegiatan"}),a.jsx("div",{className:"py-12",children:a.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:a.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[" ",t.map((e,n)=>a.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:a.jsxs("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:[a.jsx("h3",{className:"text-2xl font-semibold",children:e.name}),a.jsx("p",{className:"text-xl mt-4",children:e.date})]})},n))]})})})]})}export{o as default};